import React, { useEffect, useRef, useState } from 'react';
import './ProductShowcase.css';

export default function ProductShowcase() {
  const stageRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    function fit() {
      const w = stage.clientWidth;
      let s;
      if (w <= 640) {
        // Optimize mockup scaling for mobile screen widths
        s = (w - 24) / 1280;
        s = Math.max(0.24, Math.min(0.38, Math.round(s * 1000) / 1000));
      } else {
        s = Math.min(1, Math.max(w * 0.68, Math.min(w * 0.92, 1040)) / 1360);
        s = Math.max(0.22, Math.round(s * 1000) / 1000);
      }
      stage.style.setProperty('--s', s.toString());
    }

    window.addEventListener('resize', fit);
    fit();
    const timer = setTimeout(fit, 250);

    return () => {
      window.removeEventListener('resize', fit);
      clearTimeout(timer);
    };
  }, []);

  // Trigger animation ONLY when scrolled down to this section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Start when user scrolls down to this section (section top enters viewport)
      if (rect.top <= windowHeight - 60 && rect.bottom >= 60) {
        setIsPlaying(true);
      } else if (rect.top > windowHeight) {
        // Scrolled back up to hero section
        setIsPlaying(false);
      }
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility(); // initial check

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="pg">
      {/* ============ PINNED PRODUCT SHOWCASE (paste right after your hero) ============ */}
      <section
        id="product"
        ref={sectionRef}
        className={`track ${isPlaying ? 'is-playing' : ''}`}
        style={{ position: 'relative', zIndex: 2, background: '#FBFAF8' }}
      >
        <div
          className="stage"
          id="lg-stage"
          ref={stageRef}
          style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', paddingTop: '36px', paddingBottom: '36px' }}
        >
          <div
            aria-hidden="true"
            className="sa a-haze"
            style={{
              position: 'absolute',
              inset: '-10% -15%',
              background: 'radial-gradient(38% 46% at 30% 42%, rgba(14,124,102,.10), rgba(14,124,102,0) 70%), radial-gradient(30% 40% at 74% 58%, rgba(14,124,102,.07), rgba(14,124,102,0) 70%)',
              pointerEvents: 'none'
            }}
          />
          <div
            aria-hidden="true"
            className="sa a-haze2"
            style={{
              position: 'absolute',
              inset: '-10% -15%',
              background: 'radial-gradient(34% 44% at 70% 40%, rgba(232,163,61,.10), rgba(232,163,61,0) 70%)',
              pointerEvents: 'none',
              opacity: 0
            }}
          />

          {/* 1. TOP: CAPTIONS + CHAPTER PROGRESS BAR */}
          <div className="wrap showcase-header-wrap" style={{ flex: 'none', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', position: 'relative', zIndex: 10, marginBottom: '20px' }}>
            <div className="showcase-caption-box" style={{ position: 'relative', flex: 1, height: '64px', maxWidth: '620px' }}>
              <div className="sa a-scr-d cap" style={{ opacity: 1 }}>
                <span className="capn">01 · Dashboard</span>
                <span className="capt">Sales, bills and every branch — the whole day at a glance.</span>
              </div>
              <div className="sa a-scr-b cap">
                <span className="capn">02 · Billing</span>
                <span className="capt">Scan, add, collect. A bill is done in seconds.</span>
              </div>
              <div className="sa a-scr-p cap">
                <span className="capn">03 · Products</span>
                <span className="capt">Prices, tax and barcodes, managed in one list.</span>
              </div>
              <div className="sa a-scr-i cap">
                <span className="capn">04 · Inventory</span>
                <span className="capt">Live stock, movements and low-stock alerts across every branch.</span>
              </div>
              <div className="sa a-scr-r cap">
                <span className="capn">05 · Reports</span>
                <span className="capt">Sales and product analysis — emailed to admins automatically.</span>
              </div>
              <div className="sa a-scr-br cap">
                <span className="capn">06 · Branches</span>
                <span className="capt">Every store, counter and team, run from one head office.</span>
              </div>
            </div>
            <div className="hide-sm" style={{ width: '260px', flex: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }} className="mono">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
              </div>
              <div style={{ height: '2px', background: '#E6E3DC', borderRadius: '2px', marginTop: '10px', overflow: 'hidden' }}>
                <span className="sa a-prog" style={{ display: 'block', height: '100%', background: '#111214', transformOrigin: '0 50%' }} />
              </div>
            </div>
            {/* Mobile-only Progress Indicator */}
            <div className="showcase-progress-mobile show-sm" aria-hidden="true">
              <span className="sa a-prog" />
            </div>
          </div>

          {/* 2. APP WINDOW MOCKUP */}
          <div className="fitarea" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="fitbox" style={{ width: '1280px', height: '800px', flex: 'none', transform: 'scale(var(--s, 1))', transformOrigin: '50% 50%', position: 'relative' }}>
              <div className="si a-intro" style={{ position: 'absolute', inset: 0, transformOrigin: '50% 0%' }}>

                {/* desktop app frame */}
                <div
                  className="sa a-cam win ui"
                  style={{ position: 'absolute', inset: 0, transformOrigin: '60% 45%', display: 'flex', flexDirection: 'column' }}
                  role="img"
                  aria-label="Ledgerly desktop app moving through Dashboard, Billing, Products, Inventory, Reports and Branches"
                >
                  <div className="winbar" style={{ flex: 'none', position: 'relative' }}>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="url" style={{ position: 'relative', minWidth: '260px', justifyContent: 'center' }}>
                      <span>app.ledgerly.com /&nbsp;</span>
                      <span style={{ position: 'relative', display: 'inline-block', width: '90px', height: '14px' }}>
                        <span className="sa a-scr-d" style={{ position: 'absolute', left: 0, top: 0 }}>dashboard</span>
                        <span className="sa a-scr-b" style={{ position: 'absolute', left: 0, top: 0, opacity: 0 }}>billing</span>
                        <span className="sa a-scr-p" style={{ position: 'absolute', left: 0, top: 0, opacity: 0 }}>products</span>
                        <span className="sa a-scr-i" style={{ position: 'absolute', left: 0, top: 0, opacity: 0 }}>inventory</span>
                        <span className="sa a-scr-r" style={{ position: 'absolute', left: 0, top: 0, opacity: 0 }}>reports</span>
                        <span className="sa a-scr-br" style={{ position: 'absolute', left: 0, top: 0, opacity: 0 }}>branches</span>
                      </span>
                    </span>
                    <span className="chip c-n" style={{ position: 'absolute', right: '16px', top: '9px' }}>Sample data</span>
                  </div>

                  <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
                    {/* sidebar */}
                    <div className="side" style={{ width: '210px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '2px 10px 16px', fontWeight: 700, fontSize: '13px', color: '#111214' }}>
                        <svg width="20" height="20" viewBox="0 0 30 30" aria-hidden="true">
                          <rect width="30" height="30" rx="8" fill="#111214" />
                          <path d="M11 8v14h9" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Ledgerly
                      </div>
                      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span className="sa a-pill" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '36px', borderRadius: '8px', background: '#111214' }} />
                        <div className="ni2 sa a-lab-d on">
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <rect x="2" y="2" width="5" height="5" rx="1.2" />
                            <rect x="9" y="2" width="5" height="5" rx="1.2" />
                            <rect x="2" y="9" width="5" height="5" rx="1.2" />
                            <rect x="9" y="9" width="5" height="5" rx="1.2" />
                          </svg>
                          <span>Dashboard</span>
                        </div>
                        <div className="ni2 sa a-lab-b">
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M4 2h8v12l-2-1.2L8 14l-2-1.2L4 14z" />
                            <path d="M6 6h4M6 9h4" />
                          </svg>
                          <span>Billing</span>
                        </div>
                        <div className="ni2 sa a-lab-p">
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M2.5 5 8 2l5.5 3v6L8 14l-5.5-3z" />
                            <path d="M2.5 5 8 8l5.5-3M8 8v6" />
                          </svg>
                          <span>Products</span>
                        </div>
                        <div className="ni2 sa a-lab-i">
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M2 13h12M4 13V7M8 13V4M12 13V9" />
                          </svg>
                          <span>Inventory</span>
                        </div>
                        <div className="ni2 sa a-lab-r">
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M2 12 6 8l3 3 5-6" />
                          </svg>
                          <span>Reports</span>
                        </div>
                        <div className="ni2 sa a-lab-br">
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M2 6.5 8 2.5l6 4V14H2z" />
                            <path d="M6 14v-4h4v4" />
                          </svg>
                          <span>Branches</span>
                        </div>
                      </div>
                      <div className="sl">More</div>
                      <div className="ni">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <circle cx="8" cy="5.5" r="2.5" />
                          <path d="M3 14c.6-2.6 2.6-4 5-4s4.4 1.4 5 4" />
                        </svg>
                        Customers
                      </div>
                      <div className="ni">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M8.6 2H14v5.4L7.4 14 2 8.6z" />
                          <circle cx="11" cy="5" r="1" />
                        </svg>
                        Promotions
                      </div>
                      <div className="ni">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <circle cx="8" cy="8" r="2" />
                          <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2" />
                        </svg>
                        Settings
                      </div>
                    </div>

                    {/* content layers */}
                    <div style={{ flex: 1, minWidth: 0, position: 'relative', overflow: 'hidden', background: '#FDFCFB' }}>

                      {/* 1 DASHBOARD */}
                      <div className="sa a-scr-d scr" style={{ opacity: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <div className="sh">Good evening</div>
                            <div className="sub" style={{ marginTop: '2px' }}>Here's how the business is doing today</div>
                          </div>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>All branches ▾</span>
                            <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>Today ▾</span>
                            <span className="chip" style={{ height: '30px', padding: '0 14px', background: '#111214', color: '#fff' }}>+ New bill</span>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '14px' }}>
                          <div className="card sa a-k1">
                            <div className="kl">Today's sales</div>
                            <div className="kv">₹4,82,390</div>
                            <div className="kd">↑ vs. last Wednesday</div>
                          </div>
                          <div className="card sa a-k2">
                            <div className="kl">Bills created</div>
                            <div className="kv">1,284</div>
                            <div className="kd">Across 4 branches</div>
                          </div>
                          <div className="card sa a-k3">
                            <div className="kl">Average bill value</div>
                            <div className="kv">₹375.70</div>
                            <div className="kd" style={{ color: '#6B6E76' }}>Steady this week</div>
                          </div>
                          <div className="card sa a-k4">
                            <div className="kl">Low-stock items</div>
                            <div className="kv">18</div>
                            <div className="kd" style={{ color: '#9B2C1C' }}>Needs reorder</div>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.7fr) minmax(0, 1fr)', gap: '14px' }}>
                          <div className="card" style={{ padding: '18px 18px 10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div>
                                <div className="ttl">Sales overview</div>
                                <div className="sub">Hourly, all branches</div>
                              </div>
                              <div style={{ display: 'flex', gap: '14px' }} className="sub">
                                <span><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: '#0E7C66', marginRight: '6px' }} />Today</span>
                                <span><span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: '#C9C5BC', marginRight: '6px' }} />Last week</span>
                              </div>
                            </div>
                            <svg viewBox="0 0 600 200" width="100%" height="190" preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block', marginTop: '10px' }}>
                              <g stroke="#F1EFEA" strokeWidth="1">
                                <line x1="0" y1="40" x2="600" y2="40" />
                                <line x1="0" y1="90" x2="600" y2="90" />
                                <line x1="0" y1="140" x2="600" y2="140" />
                                <line x1="0" y1="190" x2="600" y2="190" />
                              </g>
                              <path d="M0 170 L50 160 L100 150 L150 132 L200 140 L250 118 L300 124 L350 104 L400 112 L450 92 L500 100 L550 86 L600 90" fill="none" stroke="#C9C5BC" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                              <path className="sa a-fade" fillOpacity=".08" d="M0 160 L50 142 L100 148 L150 112 L200 120 L250 92 L300 100 L350 70 L400 80 L450 56 L500 64 L550 40 L600 46 L600 190 L0 190 Z" fill="#0E7C66" />
                              <path className="sa a-draw" pathLength="1000" d="M0 160 L50 142 L100 148 L150 112 L200 120 L250 92 L300 100 L350 70 L400 80 L450 56 L500 64 L550 40 L600 46" fill="none" stroke="#0E7C66" strokeWidth="2.5" strokeDasharray="1000" vectorEffect="non-scaling-stroke" />
                            </svg>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} className="sub">
                              <span>9 AM</span>
                              <span>11 AM</span>
                              <span>1 PM</span>
                              <span>3 PM</span>
                              <span>5 PM</span>
                              <span>7 PM</span>
                              <span>9 PM</span>
                            </div>
                          </div>
                          <div className="card">
                            <div className="ttl">Branch performance</div>
                            <div className="sub">Today's sales by branch</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '18px' }}>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Main Street</span>
                                  <b style={{ fontWeight: 600 }}>₹1,92,400</b>
                                </div>
                                <div className="bar"><span className="sa a-grow" style={{ width: '100%' }} /></div>
                              </div>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Market Road</span>
                                  <b style={{ fontWeight: 600 }}>₹1,31,050</b>
                                </div>
                                <div className="bar"><span className="sa a-grow" style={{ width: '68%' }} /></div>
                              </div>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Lake View</span>
                                  <b style={{ fontWeight: 600 }}>₹97,820</b>
                                </div>
                                <div className="bar"><span className="sa a-grow" style={{ width: '51%' }} /></div>
                              </div>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Station Road</span>
                                  <b style={{ fontWeight: 600 }}>₹61,120</b>
                                </div>
                                <div className="bar"><span className="sa a-grow" style={{ width: '32%' }} /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.7fr) minmax(0, 1fr)', gap: '14px' }}>
                          <div className="card" style={{ padding: '12px 18px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div className="ttl">Recent bills</div>
                              <span className="sub">View all →</span>
                            </div>
                            <div className="tr th" style={{ gridTemplateColumns: '1.2fr 1fr 1fr .9fr .8fr' }}>
                              <span>Invoice</span>
                              <span>Branch · Counter</span>
                              <span>Payment</span>
                              <span>Amount</span>
                              <span>Status</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.2fr 1fr 1fr .9fr .8fr' }}>
                              <span className="mono">INV-20481</span>
                              <span>Main St · C2</span>
                              <span>UPI</span>
                              <b style={{ fontWeight: 600 }}>₹1,240.00</b>
                              <span><span className="chip c-ok">Paid</span></span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.2fr 1fr 1fr .9fr .8fr', borderBottom: 0 }}>
                              <span className="mono">INV-20480</span>
                              <span>Market Rd · C1</span>
                              <span>Card</span>
                              <b style={{ fontWeight: 600 }}>₹3,615.50</b>
                              <span><span className="chip c-ok">Paid</span></span>
                            </div>
                          </div>
                          <div className="card" style={{ padding: '12px 18px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div className="ttl">Low stock</div>
                              <span className="chip c-low">18 items</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1fr auto' }}>
                              <span>Basmati Rice 5 kg</span>
                              <span className="sub">6 left</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1fr auto', borderBottom: 0 }}>
                              <span>Sunflower Oil 1 L</span>
                              <span className="sub">9 left</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2 BILLING */}
                      <div className="sa a-scr-b scr">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <div className="sh">New bill</div>
                            <div className="sub" style={{ marginTop: '2px' }}>Counter 2 · Main Street · Cashier: [Staff name]</div>
                          </div>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>Held bills (2)</span>
                            <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>+ Customer</span>
                          </div>
                        </div>
                        <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)', gap: '16px' }}>
                          <div className="card" style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '44px', borderRadius: '10px', border: '1.5px solid #0E7C66', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px', color: '#6B6E76', background: '#fff' }}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                                <path d="M2 3v10M4.5 3v10M7 3v10M9 3v10M11.5 3v10M14 3v10" />
                              </svg>
                              Scan barcode or type item name
                              <span style={{ marginLeft: 'auto' }} className="mono">F2</span>
                            </div>
                            <div className="tr th" style={{ gridTemplateColumns: '1fr 60px 80px 90px', marginTop: '10px' }}>
                              <span>Item</span>
                              <span>Qty</span>
                              <span>Rate</span>
                              <span style={{ textAlign: 'right' }}>Amount</span>
                            </div>
                            <div className="tr sa a-b1" style={{ gridTemplateColumns: '1fr 60px 80px 90px', padding: '14px 0' }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Basmati Rice 5 kg</span>
                              <span>1</span>
                              <span>₹649</span>
                              <b style={{ fontWeight: 600, textAlign: 'right' }}>₹649.00</b>
                            </div>
                            <div className="tr sa a-b2" style={{ gridTemplateColumns: '1fr 60px 80px 90px', padding: '14px 0' }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Assam Tea 500 g</span>
                              <span>2</span>
                              <span>₹265</span>
                              <b style={{ fontWeight: 600, textAlign: 'right' }}>₹530.00</b>
                            </div>
                            <div className="tr sa a-b3" style={{ gridTemplateColumns: '1fr 60px 80px 90px', padding: '14px 0' }}>
                              <span>
                                <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Groundnut Oil 1 L</span>
                                <span className="sub" style={{ color: '#0E7C66', fontWeight: 600 }}>Offer −₹15 applied</span>
                              </span>
                              <span>1</span>
                              <span>₹285</span>
                              <b style={{ fontWeight: 600, textAlign: 'right' }}>₹270.00</b>
                            </div>
                            <div className="tr sa a-b4" style={{ gridTemplateColumns: '1fr 60px 80px 90px', padding: '14px 0', borderBottom: 0 }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Detergent Powder 2 kg</span>
                              <span>1</span>
                              <span>₹310</span>
                              <b style={{ fontWeight: 600, textAlign: 'right' }}>₹310.00</b>
                            </div>
                            <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                              <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>% Discount</span>
                              <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>Hold bill</span>
                              <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>Clear</span>
                            </div>
                          </div>
                          <div className="card" style={{ padding: '20px', background: '#FCFBFA', display: 'flex', flexDirection: 'column', gap: '11px', position: 'relative' }}>
                            <div className="sa a-t4" style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="sub" style={{ fontSize: '12px' }}>Subtotal</span>
                                <span>₹1,774.00</span>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="sub" style={{ fontSize: '12px' }}>Bill discount (5%)</span>
                                <span style={{ color: '#0E7C66' }}>−₹88.70</span>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="sub" style={{ fontSize: '12px' }}>CGST</span>
                                <span>₹42.13</span>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="sub" style={{ fontSize: '12px' }}>SGST</span>
                                <span>₹42.13</span>
                              </div>
                            </div>
                            <div style={{ borderTop: '1px dashed #DDD9D0', height: '1px' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span className="ttl">Total</span>
                              <span style={{ position: 'relative', width: '170px', height: '36px', fontFamily: "'Inter Tight', sans-serif", fontSize: '30px', fontWeight: 600, letterSpacing: '-.02em', color: '#111214', textAlign: 'right' }}>
                                <span className="sa a-t0" style={{ position: 'absolute', right: 0, top: 0, opacity: 0 }}>₹0.00</span>
                                <span className="sa a-t1" style={{ position: 'absolute', right: 0, top: 0, opacity: 0 }}>₹649.00</span>
                                <span className="sa a-t2" style={{ position: 'absolute', right: 0, top: 0, opacity: 0 }}>₹1,179.00</span>
                                <span className="sa a-t3" style={{ position: 'absolute', right: 0, top: 0, opacity: 0 }}>₹1,449.00</span>
                                <span className="sa a-t4" style={{ position: 'absolute', right: 0, top: 0 }}>₹1,769.56</span>
                              </span>
                            </div>
                            <div className="sub" style={{ marginTop: '4px' }}>Payment method</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
                              <span className="pay">Cash</span>
                              <span className="pay" style={{ position: 'relative' }}>
                                UPI
                                <span className="sa a-ring" style={{ position: 'absolute', inset: '-1px', borderRadius: '9px', border: '2px solid #0E7C66', background: 'rgba(14,124,102,.06)' }} />
                              </span>
                              <span className="pay">Card</span>
                              <span className="pay">Split</span>
                            </div>
                            <span style={{ marginTop: 'auto', height: '50px', borderRadius: '10px', background: '#0E7C66', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '14px' }}>
                              Complete bill
                            </span>
                            <div className="sa a-toast" style={{ position: 'absolute', left: '20px', right: '20px', bottom: '82px', height: '46px', borderRadius: '10px', background: '#111214', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px', fontWeight: 500 }}>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#7FD3BE" strokeWidth="2" aria-hidden="true">
                                <path d="m4 9.5 3 3 7-7" />
                              </svg>
                              Bill saved · INV-20482 · Invoice ready to print
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3 PRODUCTS */}
                      <div className="sa a-scr-p scr" style={{ flexDirection: 'row', gap: '18px' }}>
                        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                              <div className="sh">Products</div>
                              <div className="sub" style={{ marginTop: '2px' }}>2,418 items · 14 categories</div>
                            </div>
                            <span className="chip" style={{ height: '30px', padding: '0 14px', background: '#0E7C66', color: '#fff' }}>+ Add product</span>
                          </div>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <span className="chip c-n" style={{ height: '34px', padding: '0 14px', flex: 1 }}>⌕ &nbsp;Search name, SKU or barcode</span>
                            <span className="chip c-n" style={{ height: '34px', padding: '0 12px' }}>All categories ▾</span>
                            <span className="chip c-n" style={{ height: '34px', padding: '0 12px' }}>Print labels</span>
                          </div>
                          <div className="card" style={{ padding: '6px 18px', position: 'relative' }}>
                            <div className="tr th" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr' }}>
                              <span>Product</span>
                              <span>Barcode</span>
                              <span>Category</span>
                              <span>Price</span>
                              <span>GST</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr', padding: '14px 0' }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Basmati Rice 5 kg</span>
                              <span className="mono">8901234500127</span>
                              <span>Staples</span>
                              <span>₹649</span>
                              <span>5%</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr', padding: '14px 0', position: 'relative' }}>
                              <span className="sa a-prow" style={{ position: 'absolute', inset: '0 -10px', borderRadius: '8px', background: '#EEF5F3', zIndex: 0 }} />
                              <span style={{ fontWeight: 600, color: '#111214', position: 'relative' }}>Groundnut Oil 1 L</span>
                              <span className="mono" style={{ position: 'relative' }}>8901234500219</span>
                              <span style={{ position: 'relative' }}>Oils</span>
                              <span style={{ position: 'relative' }}>₹285</span>
                              <span style={{ position: 'relative' }}>5%</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr', padding: '14px 0' }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Whole Wheat Atta 10 kg</span>
                              <span className="mono">8901234500356</span>
                              <span>Staples</span>
                              <span>₹520</span>
                              <span>0%</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr', padding: '14px 0' }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Assam Tea 500 g</span>
                              <span className="mono">8901234500448</span>
                              <span>Beverages</span>
                              <span>₹265</span>
                              <span>5%</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr', padding: '14px 0' }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Steel Water Bottle 1 L</span>
                              <span className="mono">8901234500561</span>
                              <span>Home</span>
                              <span>₹399</span>
                              <span>18%</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr', padding: '14px 0' }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Detergent Powder 2 kg</span>
                              <span className="mono">8901234500684</span>
                              <span>Household</span>
                              <span>₹310</span>
                              <span>18%</span>
                            </div>
                            <div className="tr" style={{ gridTemplateColumns: '1.9fr 1.2fr 1fr .7fr .6fr', padding: '14px 0', borderBottom: 0 }}>
                              <span style={{ fontWeight: 600, color: '#111214' }}>Rock Salt 1 kg</span>
                              <span className="mono">8901234500471</span>
                              <span>Staples</span>
                              <span>₹28</span>
                              <span>0%</span>
                            </div>
                          </div>
                        </div>
                        <div className="sa a-pdet card" style={{ width: '300px', flex: 'none', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 20px 40px -20px rgba(17,18,20,.25)' }}>
                          <div>
                            <div className="sub">Product details</div>
                            <div style={{ fontSize: '17px', fontWeight: 600, color: '#111214', marginTop: '4px' }}>Groundnut Oil 1 L</div>
                            <div className="mono" style={{ marginTop: '4px' }}>SKU OIL-GN-1L · HSN 1508</div>
                          </div>
                          <div style={{ position: 'relative', padding: '16px', borderRadius: '12px', background: '#FBFAF8', border: '1px solid #EEECE7', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                            <svg width="200" height="64" viewBox="0 0 180 64" aria-hidden="true">
                              <g fill="#111214">
                                <rect x="0" width="4" height="64" />
                                <rect x="7" width="2" height="64" />
                                <rect x="12" width="6" height="64" />
                                <rect x="21" width="2" height="64" />
                                <rect x="26" width="4" height="64" />
                                <rect x="33" width="2" height="64" />
                                <rect x="38" width="6" height="64" />
                                <rect x="47" width="2" height="64" />
                                <rect x="52" width="4" height="64" />
                                <rect x="60" width="2" height="64" />
                                <rect x="65" width="6" height="64" />
                                <rect x="74" width="2" height="64" />
                                <rect x="79" width="4" height="64" />
                                <rect x="87" width="2" height="64" />
                                <rect x="92" width="6" height="64" />
                                <rect x="101" width="2" height="64" />
                                <rect x="106" width="4" height="64" />
                                <rect x="113" width="2" height="64" />
                                <rect x="118" width="6" height="64" />
                                <rect x="127" width="2" height="64" />
                                <rect x="132" width="4" height="64" />
                                <rect x="140" width="2" height="64" />
                                <rect x="145" width="6" height="64" />
                                <rect x="154" width="2" height="64" />
                                <rect x="159" width="4" height="64" />
                                <rect x="166" width="2" height="64" />
                                <rect x="171" width="4" height="64" />
                                <rect x="177" width="3" height="64" />
                              </g>
                            </svg>
                            <span className="mono">8 901234 500219</span>
                            <span className="sa a-pbar" style={{ position: 'absolute', inset: '-4px', borderRadius: '15px', border: '2px solid #0E7C66' }} />
                          </div>
                          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '10px', padding: '14px', borderRadius: '12px', border: '1px solid #EEECE7' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span className="sub" style={{ fontSize: '12px' }}>MRP</span>
                              <span>₹310.00</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span className="sub" style={{ fontSize: '12px' }}>Selling price</span>
                              <b style={{ fontWeight: 600 }}>₹285.00</b>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span className="sub" style={{ fontSize: '12px' }}>Wholesale price</span>
                              <span>₹262.00</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span className="sub" style={{ fontSize: '12px' }}>Purchase cost</span>
                              <span>₹238.00</span>
                            </div>
                            <span className="sa a-ppr" style={{ position: 'absolute', inset: '-4px', borderRadius: '15px', border: '2px solid #0E7C66' }} />
                          </div>
                          <span className="chip" style={{ height: '38px', justifyContent: 'center', background: '#111214', color: '#fff', marginTop: 'auto' }}>Save changes</span>
                        </div>
                      </div>

                      {/* 4 INVENTORY */}
                      <div className="sa a-scr-i scr">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <div className="sh">Inventory</div>
                            <div className="sub" style={{ marginTop: '2px' }}>Market Road branch · updated with every bill</div>
                          </div>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <span className="chip c-n" style={{ height: '30px', padding: '0 12px' }}>Market Road ▾</span>
                            <span className="chip" style={{ height: '30px', padding: '0 14px', background: '#111214', color: '#fff' }}>New transfer</span>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
                          <div className="card">
                            <div className="kl">Items tracked</div>
                            <div className="kv">2,418</div>
                          </div>
                          <div className="card">
                            <div className="kl">Below reorder level</div>
                            <div className="kv" style={{ color: '#9B2C1C' }}>18</div>
                          </div>
                          <div className="card">
                            <div className="kl">Transfers in transit</div>
                            <div className="kv">2</div>
                          </div>
                        </div>
                        <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)', gap: '14px' }}>
                          <div className="card" style={{ padding: '6px 18px', overflow: 'hidden' }}>
                            <div className="sa a-pan">
                              <div className="tr th" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr' }}>
                                <span>Item</span>
                                <span>On hand / Reorder at</span>
                                <span>Status</span>
                                <span style={{ textAlign: 'right' }}>Value</span>
                              </div>
                              <div className="tr" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr', padding: '14px 0', position: 'relative' }}>
                                <span className="sa a-lw1" style={{ position: 'absolute', inset: '0 -10px', borderRadius: '8px', background: '#FDF1EE' }} />
                                <span style={{ fontWeight: 600, color: '#111214', position: 'relative' }}>Basmati Rice 5 kg</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
                                  <span className="bar" style={{ flex: 1 }}><span style={{ width: '15%', background: '#C2412D' }} /></span>
                                  6 / 40
                                </span>
                                <span style={{ position: 'relative' }}><span className="chip c-low">Low</span></span>
                                <span style={{ textAlign: 'right', position: 'relative' }}>₹3,894</span>
                              </div>
                              <div className="tr" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr', padding: '14px 0', position: 'relative' }}>
                                <span className="sa a-lw2" style={{ position: 'absolute', inset: '0 -10px', borderRadius: '8px', background: '#FDF6EA' }} />
                                <span style={{ fontWeight: 600, color: '#111214', position: 'relative' }}>Toor Dal 1 kg</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
                                  <span className="bar" style={{ flex: 1 }}><span style={{ width: '28%', background: '#D99A2B' }} /></span>
                                  11 / 40
                                </span>
                                <span style={{ position: 'relative' }}><span className="chip c-warn">Reorder</span></span>
                                <span style={{ textAlign: 'right', position: 'relative' }}>₹1,738</span>
                              </div>
                              <div className="tr" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr', padding: '14px 0' }}>
                                <span style={{ fontWeight: 600, color: '#111214' }}>Whole Wheat Atta 10 kg</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <span className="bar" style={{ flex: 1 }}><span style={{ width: '72%' }} /></span>
                                  48 / 30
                                </span>
                                <span><span className="chip c-ok">Healthy</span></span>
                                <span style={{ textAlign: 'right' }}>₹24,960</span>
                              </div>
                              <div className="tr" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr', padding: '14px 0' }}>
                                <span style={{ fontWeight: 600, color: '#111214' }}>Assam Tea 500 g</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <span className="bar" style={{ flex: 1 }}><span style={{ width: '82%' }} /></span>
                                  210 / 60
                                </span>
                                <span><span className="chip c-ok">Healthy</span></span>
                                <span style={{ textAlign: 'right' }}>₹55,650</span>
                              </div>
                              <div className="tr" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr', padding: '14px 0' }}>
                                <span style={{ fontWeight: 600, color: '#111214' }}>Rock Salt 1 kg</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <span className="bar" style={{ flex: 1 }}><span style={{ width: '88%' }} /></span>
                                  96 / 25
                                </span>
                                <span><span className="chip c-ok">Healthy</span></span>
                                <span style={{ textAlign: 'right' }}>₹2,688</span>
                              </div>
                              <div className="tr" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr', padding: '14px 0' }}>
                                <span style={{ fontWeight: 600, color: '#111214' }}>Jaggery 1 kg</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <span className="bar" style={{ flex: 1 }}><span style={{ width: '60%' }} /></span>
                                  34 / 20
                                </span>
                                <span><span className="chip c-ok">Healthy</span></span>
                                <span style={{ textAlign: 'right' }}>₹2,380</span>
                              </div>
                              <div className="tr" style={{ gridTemplateColumns: '1.6fr 1.6fr .8fr .8fr', padding: '14px 0', borderBottom: 0 }}>
                                <span style={{ fontWeight: 600, color: '#111214' }}>Detergent Powder 2 kg</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <span className="bar" style={{ flex: 1 }}><span style={{ width: '70%' }} /></span>
                                  118 / 40
                                </span>
                                <span><span className="chip c-ok">Healthy</span></span>
                                <span style={{ textAlign: 'right' }}>₹36,580</span>
                              </div>
                            </div>
                          </div>
                          <div className="card" style={{ padding: '16px 18px', position: 'relative', overflow: 'hidden' }}>
                            <div className="ttl">Stock movements</div>
                            <div className="sub">Today</div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
                              <div className="tr sa a-mv1" style={{ gridTemplateColumns: '26px 1fr auto' }}>
                                <span className="mv" style={{ background: '#E7F3EF', color: '#0B5E4E' }}>+</span>
                                <span>
                                  <span style={{ display: 'block', color: '#111214', fontWeight: 500 }}>Received · PO-1182</span>
                                  <span className="sub">Atta 10 kg</span>
                                </span>
                                <b style={{ fontWeight: 600, color: '#0B5E4E' }}>+40</b>
                              </div>
                              <div className="tr sa a-mv2" style={{ gridTemplateColumns: '26px 1fr auto' }}>
                                <span className="mv" style={{ background: '#F0EEE9', color: '#4A4D55' }}>−</span>
                                <span>
                                  <span style={{ display: 'block', color: '#111214', fontWeight: 500 }}>Sold · 3 counters</span>
                                  <span className="sub">Basmati Rice 5 kg</span>
                                </span>
                                <b style={{ fontWeight: 600 }}>−34</b>
                              </div>
                              <div className="tr sa a-mv3" style={{ gridTemplateColumns: '26px 1fr auto', borderBottom: 0 }}>
                                <span className="mv" style={{ background: '#FCEFD9', color: '#8A5300' }}>→</span>
                                <span>
                                  <span style={{ display: 'block', color: '#111214', fontWeight: 500 }}>Transfer out · Lake View</span>
                                  <span className="sub">Assam Tea 500 g</span>
                                </span>
                                <b style={{ fontWeight: 600 }}>−20</b>
                              </div>
                            </div>
                            <div className="sa a-xfer" style={{ position: 'absolute', left: '14px', right: '14px', bottom: '14px', padding: '14px', borderRadius: '12px', background: '#fff', border: '1px solid #E6E3DC', boxShadow: '0 18px 36px -18px rgba(17,18,20,.35)' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="ttl" style={{ fontSize: '12px' }}>Transfer TR-0312</span>
                                <span className="chip c-warn">In transit</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', fontWeight: 600, color: '#111214' }}>
                                Warehouse
                                <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="#0E7C66" strokeWidth="2" aria-hidden="true">
                                  <path d="M4 11h14M13 6l5 5-5 5" />
                                </svg>
                                Market Road
                              </div>
                              <div className="sub" style={{ marginTop: '4px' }}>Basmati Rice 5 kg × 30 · Toor Dal 1 kg × 25</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 5 REPORTS */}
                      <div className="sa a-scr-r scr">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <div className="sh">Reports</div>
                            <div className="sub" style={{ marginTop: '2px' }}>Sales analytics · all branches</div>
                          </div>
                          <div style={{ display: 'flex', gap: '4px', background: '#F3F1EC', padding: '4px', borderRadius: '9px' }}>
                            <span style={{ padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>Daily</span>
                            <span style={{ padding: '6px 12px', borderRadius: '6px', background: '#fff', fontWeight: 600, boxShadow: '0 1px 2px rgba(0,0,0,.06)' }}>Weekly</span>
                            <span style={{ padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>Monthly</span>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
                          <div className="card sa a-rk">
                            <div className="kl">Revenue · 12 weeks</div>
                            <div className="kv">₹2,84,61,900</div>
                          </div>
                          <div className="card sa a-rk">
                            <div className="kl">Gross margin</div>
                            <div className="kv">18.4%</div>
                          </div>
                          <div className="card sa a-rk">
                            <div className="kl">Bills · 12 weeks</div>
                            <div className="kv">74,920</div>
                          </div>
                        </div>
                        <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'minmax(0, 1.7fr) minmax(0, 1fr)', gap: '14px' }}>
                          <div className="card" style={{ padding: '18px', display: 'flex', flexDirection: 'column' }}>
                            <div className="ttl">Weekly revenue</div>
                            <div className="sub">Week 34 – Week 45</div>
                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '10px', alignItems: 'end', marginTop: '16px', borderBottom: '1px solid #EEECE7' }}>
                              <span className="sa a-rg1 rb" style={{ height: '46%' }} />
                              <span className="sa a-rg1 rb" style={{ height: '52%' }} />
                              <span className="sa a-rg1 rb" style={{ height: '49%' }} />
                              <span className="sa a-rg1 rb" style={{ height: '58%' }} />
                              <span className="sa a-rg2 rb" style={{ height: '55%' }} />
                              <span className="sa a-rg2 rb" style={{ height: '63%' }} />
                              <span className="sa a-rg2 rb" style={{ height: '70%' }} />
                              <span className="sa a-rg2 rb" style={{ height: '66%' }} />
                              <span className="sa a-rg3 rb" style={{ height: '74%' }} />
                              <span className="sa a-rg3 rb" style={{ height: '81%' }} />
                              <span className="sa a-rg3 rb" style={{ height: '78%' }} />
                              <span className="sa a-rg3 rb" style={{ height: '92%', background: '#0E7C66' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }} className="sub">
                              <span>Wk 34</span>
                              <span>Wk 40</span>
                              <span>Wk 45</span>
                            </div>
                          </div>
                          <div className="card" style={{ padding: '18px' }}>
                            <div className="ttl">Top categories</div>
                            <div className="sub">Share of revenue</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Staples</span>
                                  <b style={{ fontWeight: 600 }}>34%</b>
                                </div>
                                <div className="bar"><span className="sa a-rc" style={{ width: '92%' }} /></div>
                              </div>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Beverages</span>
                                  <b style={{ fontWeight: 600 }}>22%</b>
                                </div>
                                <div className="bar"><span className="sa a-rc" style={{ width: '64%' }} /></div>
                              </div>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Household</span>
                                  <b style={{ fontWeight: 600 }}>17%</b>
                                </div>
                                <div className="bar"><span className="sa a-rc" style={{ width: '48%' }} /></div>
                              </div>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Snacks</span>
                                  <b style={{ fontWeight: 600 }}>12%</b>
                                </div>
                                <div className="bar"><span className="sa a-rc" style={{ width: '35%' }} /></div>
                              </div>
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                  <span>Personal care</span>
                                  <b style={{ fontWeight: 600 }}>9%</b>
                                </div>
                                <div className="bar"><span className="sa a-rc" style={{ width: '26%' }} /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 6 BRANCHES */}
                      <div className="sa a-scr-br scr">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <div className="sh">Branches</div>
                            <div className="sub" style={{ marginTop: '2px' }}>4 branches · 11 counters · 32 staff</div>
                          </div>
                          <span className="chip" style={{ height: '30px', padding: '0 14px', background: '#111214', color: '#fff' }}>+ Add branch</span>
                        </div>
                        <div className="card sa a-bhq" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 20px' }}>
                          <span style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#111214', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
                              <path d="M2 6.5 8 2.5l6 4V14H2z" />
                              <path d="M6 14v-4h4v4" />
                            </svg>
                          </span>
                          <div>
                            <div className="ttl" style={{ fontSize: '15px' }}>Head office</div>
                            <div className="sub">Central catalogue, pricing and roles apply to every branch</div>
                          </div>
                          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <div className="kl">Today, all branches</div>
                            <div className="kv" style={{ marginTop: '2px' }}>₹4,82,390</div>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '14px' }}>
                          <div className="card sa a-bc1">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div className="ttl">Main Street</div>
                              <span className="chip c-ok">Open</span>
                            </div>
                            <div className="sub" style={{ marginTop: '4px' }}>4 counters · 12 staff</div>
                            <div className="kv" style={{ marginTop: '16px' }}>₹1,92,400</div>
                            <div className="bar" style={{ marginTop: '12px' }}><span style={{ width: '100%' }} /></div>
                          </div>
                          <div className="card sa a-bc2">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div className="ttl">Market Road</div>
                              <span className="chip c-ok">Open</span>
                            </div>
                            <div className="sub" style={{ marginTop: '4px' }}>3 counters · 9 staff</div>
                            <div className="kv" style={{ marginTop: '16px' }}>₹1,31,050</div>
                            <div className="bar" style={{ marginTop: '12px' }}><span style={{ width: '68%' }} /></div>
                          </div>
                          <div className="card sa a-bc3">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div className="ttl">Lake View</div>
                              <span className="chip c-ok">Open</span>
                            </div>
                            <div className="sub" style={{ marginTop: '4px' }}>2 counters · 6 staff</div>
                            <div className="kv" style={{ marginTop: '16px' }}>₹97,820</div>
                            <div className="bar" style={{ marginTop: '12px' }}><span style={{ width: '51%' }} /></div>
                          </div>
                          <div className="card sa a-bc4">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div className="ttl">Station Road</div>
                              <span className="chip c-ok">Open</span>
                            </div>
                            <div className="sub" style={{ marginTop: '4px' }}>2 counters · 5 staff</div>
                            <div className="kv" style={{ marginTop: '16px' }}>₹61,120</div>
                            <div className="bar" style={{ marginTop: '12px' }}><span style={{ width: '32%' }} /></div>
                          </div>
                        </div>
                        <div className="card sa a-bhq" style={{ padding: '8px 18px', flex: 1 }}>
                          <div className="tr th" style={{ gridTemplateColumns: '1.2fr 1fr 1.2fr 1fr .8fr' }}>
                            <span>Counter</span>
                            <span>Branch</span>
                            <span>Cashier</span>
                            <span>Bills today</span>
                            <span>Status</span>
                          </div>
                          <div className="tr" style={{ gridTemplateColumns: '1.2fr 1fr 1.2fr 1fr .8fr' }}>
                            <span style={{ fontWeight: 600, color: '#111214' }}>Counter 1</span>
                            <span>Main Street</span>
                            <span>[Staff name]</span>
                            <span>214</span>
                            <span><span className="chip c-ok">Active</span></span>
                          </div>
                          <div className="tr" style={{ gridTemplateColumns: '1.2fr 1fr 1.2fr 1fr .8fr' }}>
                            <span style={{ fontWeight: 600, color: '#111214' }}>Counter 2</span>
                            <span>Main Street</span>
                            <span>[Staff name]</span>
                            <span>198</span>
                            <span><span className="chip c-ok">Active</span></span>
                          </div>
                          <div className="tr" style={{ gridTemplateColumns: '1.2fr 1fr 1.2fr 1fr .8fr', borderBottom: 0 }}>
                            <span style={{ fontWeight: 600, color: '#111214' }}>Counter 1</span>
                            <span>Market Road</span>
                            <span>[Staff name]</span>
                            <span>176</span>
                            <span><span className="chip c-n">On break</span></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* phone */}
                <div
                  className="sa a-phone"
                  style={{
                    position: 'absolute',
                    right: '-64px',
                    bottom: '-34px',
                    width: '292px',
                    height: '600px',
                    borderRadius: '46px',
                    background: '#111214',
                    padding: '10px',
                    boxShadow: '0 0 0 1px rgba(17,18,20,.2), 0 50px 90px -30px rgba(17,18,20,.5)',
                    opacity: 0
                  }}
                  role="img"
                  aria-label="Admin's phone inbox receiving Ledgerly sales and product report emails, then the daily sales report opened"
                >
                  <div className="ui" style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '37px', background: '#FDFCFB', overflow: 'hidden' }}>
                    <span style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '92px', height: '26px', borderRadius: '99px', background: '#111214', zIndex: 3 }} />
                    {/* phone screen 1: admin inbox */}
                    <div className="sa a-ph1" style={{ position: 'absolute', inset: 0, padding: '50px 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px', background: '#FDFCFB' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div className="sh" style={{ fontSize: '24px' }}>Inbox</div>
                        <span className="sub">Admin</span>
                      </div>
                      <div className="chip c-n" style={{ height: '32px', padding: '0 12px', fontWeight: 500, color: '#8A8D94' }}>⌕ &nbsp;Search mail</div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="mail sa a-mail1" style={{ background: '#F2F8F6', borderRadius: '12px', padding: '12px 10px', borderBottomColor: 'transparent' }}>
                          <span className="mav">
                            <svg width="14" height="14" viewBox="0 0 30 30" aria-hidden="true">
                              <path d="M11 8v14h9" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span style={{ minWidth: 0 }}>
                            <span className="mrow">
                              <b>Ledgerly Reports</b>
                              <span className="sub">9:00 PM</span>
                            </span>
                            <span className="msub">Daily sales report · 11 Nov</span>
                            <span className="mpre">₹4,82,390 across 4 branches · 1,284 bills</span>
                            <span className="matt">PDF · Sales report</span>
                          </span>
                          <span className="mdot" />
                        </div>
                        <div className="mail sa a-mail2">
                          <span className="mav">
                            <svg width="14" height="14" viewBox="0 0 30 30" aria-hidden="true">
                              <path d="M11 8v14h9" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span style={{ minWidth: 0 }}>
                            <span className="mrow">
                              <b>Ledgerly Reports</b>
                              <span className="sub">9:00 PM</span>
                            </span>
                            <span className="msub">Product analysis · this week</span>
                            <span className="mpre">Top seller: Basmati Rice 5 kg · 3 slow movers</span>
                            <span className="matt">XLSX · Product report</span>
                          </span>
                          <span className="mdot" />
                        </div>
                        <div className="mail">
                          <span className="mav" style={{ background: '#8A8D94' }}>
                            <svg width="14" height="14" viewBox="0 0 30 30" aria-hidden="true">
                              <path d="M11 8v14h9" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span style={{ minWidth: 0 }}>
                            <span className="mrow">
                              <span style={{ fontWeight: 500 }}>Ledgerly Reports</span>
                              <span className="sub">Mon</span>
                            </span>
                            <span className="msub" style={{ fontWeight: 500 }}>Weekly sales analysis · Wk 45</span>
                            <span className="mpre">Revenue by branch, category and counter</span>
                          </span>
                          <span />
                        </div>
                        <div className="mail" style={{ borderBottom: 0 }}>
                          <span className="mav" style={{ background: '#8A8D94' }}>
                            <svg width="14" height="14" viewBox="0 0 30 30" aria-hidden="true">
                              <path d="M11 8v14h9" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span style={{ minWidth: 0 }}>
                            <span className="mrow">
                              <span style={{ fontWeight: 500 }}>Ledgerly Reports</span>
                              <span className="sub">Sun</span>
                            </span>
                            <span className="msub" style={{ fontWeight: 500 }}>Monthly GST summary · Oct</span>
                            <span className="mpre">CGST, SGST and IGST totals for filing</span>
                          </span>
                          <span />
                        </div>
                      </div>
                    </div>
                    {/* phone screen 2: opened report email */}
                    <div className="sa a-ph2" style={{ position: 'absolute', inset: 0, padding: '48px 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px', background: '#FDFCFB', opacity: 0 }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#0E7C66' }}>‹ Inbox</span>
                      <div className="sh" style={{ fontSize: '17px', lineHeight: 1.25 }}>Daily sales report · 11 Nov</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="mav" style={{ width: '26px', height: '26px' }}>
                          <svg width="12" height="12" viewBox="0 0 30 30" aria-hidden="true">
                            <path d="M11 8v14h9" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span style={{ fontSize: '11px', lineHeight: 1.3 }}>
                          <b style={{ fontWeight: 600, color: '#111214' }}>Ledgerly Reports</b>
                          <br />
                          <span className="sub">to Admin · 9:00 PM</span>
                        </span>
                      </div>
                      <div className="card" style={{ padding: '12px' }}>
                        <div className="kl" style={{ textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '9.5px', fontWeight: 700, color: '#0E7C66' }}>Sales analysis</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '6px' }}>
                          <div>
                            <div className="kv" style={{ fontSize: '20px', marginTop: 0 }}>₹4,82,390</div>
                            <div className="sub">1,284 bills · avg ₹375.70</div>
                          </div>
                          <div aria-hidden="true" style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '34px' }}>
                            <span className="mb" style={{ height: '40%' }} />
                            <span className="mb" style={{ height: '55%' }} />
                            <span className="mb" style={{ height: '48%' }} />
                            <span className="mb" style={{ height: '66%' }} />
                            <span className="mb" style={{ height: '60%' }} />
                            <span className="mb" style={{ height: '78%' }} />
                            <span className="mb" style={{ height: '100%', background: '#0E7C66' }} />
                          </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '11px' }}>
                          <span className="sub" style={{ fontSize: '11px' }}>Best branch</span>
                          <b style={{ fontWeight: 600 }}>Main Street · ₹1.92L</b>
                        </div>
                      </div>
                      <div className="card" style={{ padding: '12px' }}>
                        <div className="kl" style={{ textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '9.5px', fontWeight: 700, color: '#0E7C66' }}>Product analysis</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px', fontSize: '11px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Basmati Rice 5 kg</span>
                            <b style={{ fontWeight: 600 }}>412 units</b>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Assam Tea 500 g</span>
                            <b style={{ fontWeight: 600 }}>386 units</b>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Groundnut Oil 1 L</span>
                            <b style={{ fontWeight: 600 }}>301 units</b>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '6px', borderTop: '1px solid #F1EFEA' }}>
                            <span className="sub" style={{ fontSize: '11px' }}>Slow movers</span>
                            <b style={{ fontWeight: 600, color: '#8A5300' }}>3 items</b>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span className="matt" style={{ marginTop: 0 }}>PDF · Sales report</span>
                        <span className="matt" style={{ marginTop: 0 }}>XLSX · Products</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



        </div>
      </section>
      {/* ============ /PRODUCT SHOWCASE ============ */}
    </div>
  );
}
