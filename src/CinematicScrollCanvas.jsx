import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 150;

export default function CinematicScrollCanvas({ scrollContainerRef }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES));
  const loadedCountRef = useRef(0);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastRenderedIndexRef = useRef(-1);
  const rafIdRef = useRef(null);

  // Frame URL helpers
  const getFrameUrl = (index) => {
    const pad = index.toString().padStart(3, '0');
    return `/extracted_frames/frame-${pad}.png`;
  };

  const getFallbackUrl = (index) => {
    const pad = index.toString().padStart(3, '0');
    return `/extracted_frames/frame_${pad}.jpg`;
  };

  // Find nearest loaded frame to guarantee zero flicker or blank frames
  const getNearestLoadedImage = (index) => {
    if (imagesRef.current[index]?.complete && imagesRef.current[index]?.naturalWidth > 0) {
      return imagesRef.current[index];
    }
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const left = index - offset;
      if (left >= 0 && imagesRef.current[left]?.complete && imagesRef.current[left]?.naturalWidth > 0) {
        return imagesRef.current[left];
      }
      const right = index + offset;
      if (right < TOTAL_FRAMES && imagesRef.current[right]?.complete && imagesRef.current[right]?.naturalWidth > 0) {
        return imagesRef.current[right];
      }
    }
    return null;
  };

  // High-performance canvas drawing with DPR and object-fit: cover
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = getNearestLoadedImage(frameIndex);
    if (!img) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    const targetBufferWidth = Math.round(displayWidth * dpr);
    const targetBufferHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetBufferWidth || canvas.height !== targetBufferHeight) {
      canvas.width = targetBufferWidth;
      canvas.height = targetBufferHeight;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Deep dark background
    ctx.fillStyle = '#060a12';
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    // Cover calculation: keeps supermarket animation sharp and perfectly centered
    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;
    const imgRatio = imgW / imgH;
    const canvasRatio = displayWidth / displayHeight;

    let renderW, renderH, offsetX, offsetY;
    if (canvasRatio > imgRatio) {
      renderW = displayWidth;
      renderH = displayWidth / imgRatio;
      offsetX = 0;
      offsetY = (displayHeight - renderH) / 2;
    } else {
      renderW = displayHeight * imgRatio;
      renderH = displayHeight;
      offsetX = (displayWidth - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    ctx.restore();

    lastRenderedIndexRef.current = frameIndex;
  };

  useEffect(() => {
    let isCancelled = false;

    // Load a single frame with fallback
    const loadSingleImage = (index) => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]?.complete && imagesRef.current[index]?.naturalWidth > 0) {
          resolve(imagesRef.current[index]);
          return;
        }

        const img = new Image();
        img.src = getFrameUrl(index);

        img.onload = () => {
          if (isCancelled) return;
          imagesRef.current[index] = img;
          loadedCountRef.current += 1;

          const targetIndex = Math.round(currentFrameRef.current);
          if (index === targetIndex || index === 0) {
            drawFrame(targetIndex);
          }
          resolve(img);
        };

        img.onerror = () => {
          const fallback = new Image();
          fallback.src = getFallbackUrl(index);
          fallback.onload = () => {
            if (isCancelled) return;
            imagesRef.current[index] = fallback;
            loadedCountRef.current += 1;
            drawFrame(Math.round(currentFrameRef.current));
            resolve(fallback);
          };
          fallback.onerror = () => {
            resolve(null);
          };
        };
      });
    };

    // Progressive Preload Pipeline: Critical 0 -> Keyframe Strides -> Background Fill
    const startProgressivePreload = async () => {
      // Step 1: Frame 0 immediately
      await loadSingleImage(0);
      drawFrame(0);

      if (isCancelled) return;

      // Step 2: Keyframe stride (every 5th frame)
      const keyframeIndices = [];
      for (let i = 5; i < TOTAL_FRAMES; i += 5) {
        keyframeIndices.push(i);
      }
      keyframeIndices.push(TOTAL_FRAMES - 1);

      await Promise.all(keyframeIndices.map((idx) => loadSingleImage(idx)));

      if (isCancelled) return;

      // Step 3: Progressive fill for remaining frames
      const remainingIndices = [];
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (!imagesRef.current[i]) {
          remainingIndices.push(i);
        }
      }

      const chunkSize = 8;
      for (let i = 0; i < remainingIndices.length; i += chunkSize) {
        if (isCancelled) break;
        const chunk = remainingIndices.slice(i, i + chunkSize);
        await Promise.all(chunk.map((idx) => loadSingleImage(idx)));
      }
    };

    startProgressivePreload();

    // Scroll calculation: maps 0% scroll -> frame 0, 100% scroll -> frame 149
    const onScroll = () => {
      if (!scrollContainerRef?.current) return;
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const currentScroll = -rect.top;

      const progress = Math.max(0, Math.min(1, currentScroll / (totalScrollable || 1)));
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    // Persistent RequestAnimationFrame Loop with Smooth LERP
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lerpFactor = prefersReducedMotion ? 1 : 0.1;

    const animateLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.0005) {
        currentFrameRef.current += diff * lerpFactor;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrameRef.current)));

      if (frameIndex !== lastRenderedIndexRef.current) {
        drawFrame(frameIndex);
      }

      rafIdRef.current = requestAnimationFrame(animateLoop);
    };

    rafIdRef.current = requestAnimationFrame(animateLoop);
    drawFrame(0);

    return () => {
      isCancelled = true;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [scrollContainerRef]);

  return (
    <div className="cinematic-canvas-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="cinematic-canvas" />
      {/* Subtle readability gradient: keeps building sharp while giving headline contrast */}
      <div className="cinematic-canvas-overlay" />
    </div>
  );
}
