import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import CinematicScrollCanvas from './CinematicScrollCanvas';
import ProductShowcase from './ProductShowcase';
import FeaturesSection from './FeaturesSection';

export default function App() {
  const scrollContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrolled = window.scrollY > 15;
      if (scrollContainerRef.current) {
        const rect = scrollContainerRef.current.getBoundingClientRect();
        if (-rect.top > 15) {
          scrolled = true;
        }
      }
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page-wrapper">
      {/* 1. Cinematic 150-Frame Supermarket Hero Section */}
      <div className={`hero-scroll-container ${isScrolled ? 'is-scrolled' : ''}`} ref={scrollContainerRef}>

        {/* Full-Screen Sticky 150-Frame Scroll Animation Canvas */}
        <CinematicScrollCanvas scrollContainerRef={scrollContainerRef} />

        {/* Pinned UI Overlay Layer */}
        <div className="hero-sticky-layer">

          {/* Transparent Header */}
          <header className="hero-header">
            {/* Ledgerly Logo on Extreme Left */}
            <a href="/" className="ledgerly-brand" aria-label="Ledgerly Home">
              <div className="brand-icon">
                <svg viewBox="0 0 28 28" fill="none" className="brand-svg" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="7" fill="url(#brand-grad)" />
                  <path d="M7 8.5C7 7.67157 7.67157 7 8.5 7H19.5C20.3284 7 21 7.67157 21 8.5V9.5C21 10.3284 20.3284 11 19.5 11H8.5C7.67157 11 7 10.3284 7 9.5V8.5Z" fill="white" />
                  <path d="M7 13.5C7 12.6716 7.67157 12 8.5 12H16.5C17.3284 12 18 12.6716 18 13.5V14.5C18 15.3284 17.3284 16 16.5 16H8.5C7.67157 16 7 15.3284 7 14.5V13.5Z" fill="white" fillOpacity="0.85" />
                  <path d="M7 18.5C7 17.6716 7.67157 17 8.5 17H13.5C14.3284 17 15 17.6716 15 18.5V19.5C15 20.3284 14.3284 21 13.5 21H8.5C7.67157 21 7 20.3284 7 19.5V18.5Z" fill="white" fillOpacity="0.65" />
                  <defs>
                    <linearGradient id="brand-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0E7C66" />
                      <stop offset="1" stopColor="#0E7C66" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="brand-text">LEDGERLY</span>
            </a>

            {/* Register and Login Buttons on Extreme Right */}
            <div className="header-auth-buttons">
              <a href="#register" className="auth-btn btn-register">
                Register
              </a>
              <a href="#login" className="auth-btn btn-login">
                Login
              </a>
            </div>
          </header>

          {/* Main Headline positioned on Left matching Image 1 */}
          <main className="hero-top-content">
            <h1 className="hero-headline">
              One platform.<br />
              Every billing tool.<br />
              Zero complexity.
            </h1>
          </main>

        </div>

      </div>

      {/* 2. Auto-Playing Product Showcase (Sits directly below the hero) */}
      <ProductShowcase />

      {/* 3. Features (01–06), Highlights Bento, Solutions, and Final CTA */}
      <FeaturesSection />
    </div>
  );
}
