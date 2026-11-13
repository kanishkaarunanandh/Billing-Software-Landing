import React from 'react';
import './FeaturesSection.css';

export default function FeaturesSection() {
  return (
    <div className="features-pg">

      {/* ============ FEATURES (01–06 on the checkout photo) ============ */}
      <div id="features" className="featwrap">
        <div className="featbg" aria-hidden="true">
          <img src="/ledgerly-checkout-bg.jpg" alt="" />
        </div>

        {/* 01 Smart Billing : text left / POS right */}
        <section className="sec t-white glass" style={{ borderTop: '1px solid #EEECE7' }}>
          <div className="wrap g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)', gap: '80px', alignItems: 'center' }}>
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <p className="eyebrow">01 · Smart Billing</p>
              <h2 className="d h2" style={{ fontSize: '60px' }}>Checkout that keeps the queue moving.</h2>
              <p className="lede">Scan, adjust and collect in seconds. Ledgerly is built for the rush hour — every action at the counter is one tap or one keystroke away.</p>
              <ul className="pts">
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 9.5 3 3 7-7" />
                  </svg>
                  Scan or search items without leaving the keyboard
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 9.5 3 3 7-7" />
                  </svg>
                  Cash, UPI, cards and split payments on one bill
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 9.5 3 3 7-7" />
                  </svg>
                  Item-level and bill-level discounts
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 9.5 3 3 7-7" />
                  </svg>
                  Print or share the invoice the moment it's paid
                </li>
              </ul>
            </div>

            <div className="win ui lift" role="img" aria-label="Billing screen with cart items, discount, GST breakdown, payment method selection and complete bill button">
              <div className="winbar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="url">Counter 2 · Main Street</span>
              </div>
              <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)' }}>
                <div style={{ padding: '20px 22px', borderRight: '1px solid #EEECE7' }}>
                  <div className="chip c-n" style={{ height: '38px', width: '100%', padding: '0 14px', fontSize: '12px', fontWeight: 500, color: '#6B6E76' }}>
                    ⌕ &nbsp;Scan barcode or type item name
                  </div>
                  <div style={{ marginTop: '14px' }}>
                    <div className="tr" style={{ gridTemplateColumns: '1fr auto auto' }}>
                      <span>
                        <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Basmati Rice 5 kg</span>
                        <span className="sub">₹649 × 1</span>
                      </span>
                      <span className="chip c-n">1</span>
                      <b style={{ fontWeight: 600, minWidth: '64px', textAlign: 'right' }}>₹649.00</b>
                    </div>
                    <div className="tr" style={{ gridTemplateColumns: '1fr auto auto' }}>
                      <span>
                        <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Assam Tea 500 g</span>
                        <span className="sub">₹265 × 2</span>
                      </span>
                      <span className="chip c-n">2</span>
                      <b style={{ fontWeight: 600, minWidth: '64px', textAlign: 'right' }}>₹530.00</b>
                    </div>
                    <div className="tr" style={{ gridTemplateColumns: '1fr auto auto' }}>
                      <span>
                        <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Groundnut Oil 1 L</span>
                        <span className="sub">₹285 × 1 · <span style={{ color: '#0E7C66', fontWeight: 600 }}>−₹15 offer</span></span>
                      </span>
                      <span className="chip c-n">1</span>
                      <b style={{ fontWeight: 600, minWidth: '64px', textAlign: 'right' }}>₹270.00</b>
                    </div>
                    <div className="tr" style={{ gridTemplateColumns: '1fr auto auto', borderBottom: 0 }}>
                      <span>
                        <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Detergent Powder 2 kg</span>
                        <span className="sub">₹310 × 1</span>
                      </span>
                      <span className="chip c-n">1</span>
                      <b style={{ fontWeight: 600, minWidth: '64px', textAlign: 'right' }}>₹310.00</b>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                    <span className="chip c-n" style={{ height: '28px' }}>+ Customer</span>
                    <span className="chip c-n" style={{ height: '28px' }}>% Discount</span>
                    <span className="chip c-n" style={{ height: '28px' }}>Hold bill</span>
                  </div>
                </div>

                <div style={{ padding: '20px 22px', background: '#FCFBFA', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                  <div style={{ borderTop: '1px dashed #DDD9D0', margin: '4px 0', height: '1px' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span className="ttl">Total</span>
                    <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '28px', fontWeight: 600, letterSpacing: '-.02em', color: '#111214' }}>
                      ₹1,769.56
                    </span>
                  </div>
                  <div className="sub" style={{ marginTop: '6px' }}>Payment method</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
                    <span style={{ height: '40px', borderRadius: '9px', border: '1px solid #E0DDD5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, background: '#fff' }}>
                      Cash
                    </span>
                    <span style={{ height: '40px', borderRadius: '9px', border: '1.5px solid #0E7C66', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, background: '#F2F8F6', color: '#0B5E4E' }}>
                      UPI
                    </span>
                    <span style={{ height: '40px', borderRadius: '9px', border: '1px solid #E0DDD5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, background: '#fff' }}>
                      Card
                    </span>
                    <span style={{ height: '40px', borderRadius: '9px', border: '1px solid #E0DDD5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, background: '#fff' }}>
                      Split
                    </span>
                  </div>
                  <span style={{ marginTop: '8px', height: '48px', borderRadius: '10px', background: '#0E7C66', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '13.5px' }}>
                    Complete bill · ₹1,769.56
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Inventory : centered head / wide composition */}
        <section className="sec t-sand glass">
          <div className="wrap">
            <div className="rv" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <p className="eyebrow">02 · Inventory Management</p>
              <h2 className="d h2" style={{ fontSize: '64px', maxWidth: '900px' }}>Know what's on every shelf — before it runs out.</h2>

            </div>

            <div className="g2 lift" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '20px', marginTop: '80px' }}>
              <div className="win ui" style={{ padding: '22px 24px' }} role="img" aria-label="Stock levels table with barcodes and status">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="ttl" style={{ fontSize: '15px' }}>Stock levels</div>
                    <div className="sub">Market Road branch</div>
                  </div>
                  <span className="chip c-n" style={{ height: '28px' }}>Category: Staples ▾</span>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <div className="tr th" style={{ gridTemplateColumns: '1.8fr 1.4fr 1.6fr .7fr' }}>
                    <span>Item</span>
                    <span>Barcode</span>
                    <span>On hand / Reorder at</span>
                    <span>Status</span>
                  </div>
                  <div className="tr" style={{ gridTemplateColumns: '1.8fr 1.4fr 1.6fr .7fr' }}>
                    <span style={{ fontWeight: 600, color: '#111214' }}>Basmati Rice 5 kg</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="34" height="16" viewBox="0 0 34 16" aria-hidden="true">
                        <g fill="#111214">
                          <rect x="0" width="2" height="16" />
                          <rect x="3" width="1" height="16" />
                          <rect x="6" width="3" height="16" />
                          <rect x="10" width="1" height="16" />
                          <rect x="13" width="2" height="16" />
                          <rect x="17" width="1" height="16" />
                          <rect x="20" width="3" height="16" />
                          <rect x="24" width="1" height="16" />
                          <rect x="27" width="2" height="16" />
                          <rect x="31" width="3" height="16" />
                        </g>
                      </svg>
                      <span className="mono">…0127</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="bar" style={{ flex: 1 }}>
                        <span style={{ width: '15%', background: '#C2412D' }} />
                      </span>
                      6 / 40
                    </span>
                    <span><span className="chip c-low">Low</span></span>
                  </div>

                  <div className="tr" style={{ gridTemplateColumns: '1.8fr 1.4fr 1.6fr .7fr' }}>
                    <span style={{ fontWeight: 600, color: '#111214' }}>Toor Dal 1 kg</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="34" height="16" viewBox="0 0 34 16" aria-hidden="true">
                        <g fill="#111214">
                          <rect x="0" width="1" height="16" />
                          <rect x="3" width="3" height="16" />
                          <rect x="7" width="1" height="16" />
                          <rect x="10" width="2" height="16" />
                          <rect x="14" width="1" height="16" />
                          <rect x="16" width="3" height="16" />
                          <rect x="21" width="2" height="16" />
                          <rect x="25" width="1" height="16" />
                          <rect x="28" width="3" height="16" />
                          <rect x="32" width="2" height="16" />
                        </g>
                      </svg>
                      <span className="mono">…0392</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="bar" style={{ flex: 1 }}>
                        <span style={{ width: '28%', background: '#D99A2B' }} />
                      </span>
                      11 / 40
                    </span>
                    <span><span className="chip c-warn">Reorder</span></span>
                  </div>

                  <div className="tr" style={{ gridTemplateColumns: '1.8fr 1.4fr 1.6fr .7fr' }}>
                    <span style={{ fontWeight: 600, color: '#111214' }}>Whole Wheat Atta 10 kg</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="34" height="16" viewBox="0 0 34 16" aria-hidden="true">
                        <g fill="#111214">
                          <rect x="0" width="3" height="16" />
                          <rect x="4" width="1" height="16" />
                          <rect x="7" width="2" height="16" />
                          <rect x="11" width="1" height="16" />
                          <rect x="13" width="3" height="16" />
                          <rect x="18" width="1" height="16" />
                          <rect x="21" width="2" height="16" />
                          <rect x="25" width="3" height="16" />
                          <rect x="29" width="1" height="16" />
                          <rect x="32" width="2" height="16" />
                        </g>
                      </svg>
                      <span className="mono">…0356</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="bar" style={{ flex: 1 }}>
                        <span style={{ width: '72%' }} />
                      </span>
                      48 / 30
                    </span>
                    <span><span className="chip c-ok">Healthy</span></span>
                  </div>

                  <div className="tr" style={{ gridTemplateColumns: '1.8fr 1.4fr 1.6fr .7fr' }}>
                    <span style={{ fontWeight: 600, color: '#111214' }}>Rock Salt 1 kg</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="34" height="16" viewBox="0 0 34 16" aria-hidden="true">
                        <g fill="#111214">
                          <rect x="0" width="2" height="16" />
                          <rect x="4" width="2" height="16" />
                          <rect x="8" width="1" height="16" />
                          <rect x="11" width="3" height="16" />
                          <rect x="15" width="1" height="16" />
                          <rect x="18" width="2" height="16" />
                          <rect x="22" width="1" height="16" />
                          <rect x="24" width="3" height="16" />
                          <rect x="29" width="1" height="16" />
                          <rect x="31" width="3" height="16" />
                        </g>
                      </svg>
                      <span className="mono">…0471</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="bar" style={{ flex: 1 }}>
                        <span style={{ width: '88%' }} />
                      </span>
                      96 / 25
                    </span>
                    <span><span className="chip c-ok">Healthy</span></span>
                  </div>

                  <div className="tr" style={{ gridTemplateColumns: '1.8fr 1.4fr 1.6fr .7fr', borderBottom: 0 }}>
                    <span style={{ fontWeight: 600, color: '#111214' }}>Jaggery 1 kg</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="34" height="16" viewBox="0 0 34 16" aria-hidden="true">
                        <g fill="#111214">
                          <rect x="0" width="1" height="16" />
                          <rect x="2" width="3" height="16" />
                          <rect x="7" width="2" height="16" />
                          <rect x="10" width="1" height="16" />
                          <rect x="13" width="2" height="16" />
                          <rect x="17" width="3" height="16" />
                          <rect x="21" width="1" height="16" />
                          <rect x="24" width="2" height="16" />
                          <rect x="28" width="1" height="16" />
                          <rect x="30" width="3" height="16" />
                        </g>
                      </svg>
                      <span className="mono">…0518</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="bar" style={{ flex: 1 }}>
                        <span style={{ width: '60%' }} />
                      </span>
                      34 / 20
                    </span>
                    <span><span className="chip c-ok">Healthy</span></span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="win ui" style={{ padding: '22px 24px' }} role="img" aria-label="Stock transfer from warehouse to Market Road, in transit">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="ttl" style={{ fontSize: '15px' }}>Stock transfer</div>
                    <span className="chip c-warn">In transit</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
                    <div style={{ flex: 1, border: '1px solid #EEECE7', borderRadius: '10px', padding: '12px' }}>
                      <div className="sub">From</div>
                      <div style={{ fontWeight: 600, color: '#111214', marginTop: '2px' }}>Warehouse</div>
                    </div>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#0E7C66" strokeWidth="2" aria-hidden="true">
                      <path d="M4 11h14M13 6l5 5-5 5" />
                    </svg>
                    <div style={{ flex: 1, border: '1px solid #EEECE7', borderRadius: '10px', padding: '12px' }}>
                      <div className="sub">To</div>
                      <div style={{ fontWeight: 600, color: '#111214', marginTop: '2px' }}>Market Road</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Basmati Rice 5 kg</span>
                      <b style={{ fontWeight: 600 }}>30</b>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Toor Dal 1 kg</span>
                      <b style={{ fontWeight: 600 }}>25</b>
                    </div>
                  </div>
                </div>

                <div className="win ui" style={{ padding: '22px 24px', flex: 1 }} role="img" aria-label="Low-stock alert">
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FBE5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#9B2C1C" strokeWidth="1.8" aria-hidden="true">
                        <path d="M9 2.5 16 15H2z" />
                        <path d="M9 7.5v3.5M9 13v.01" />
                      </svg>
                    </span>
                    <div>
                      <div className="ttl">2 items below reorder level</div>
                      <div className="sub" style={{ marginTop: '3px', fontSize: '12px' }}>Create a purchase order or request a transfer.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '18px' }}>
                    <span className="chip" style={{ height: '32px', padding: '0 14px', background: '#111214', color: '#fff' }}>
                      Create PO
                    </span>
                    <span className="chip c-n" style={{ height: '32px', padding: '0 14px' }}>
                      Transfer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Analytics : visual left large / text right */}
        <section className="sec t-white glass">
          <div className="wrap g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 4fr)', gap: '88px', alignItems: 'center' }}>
            <div className="win ui lift" style={{ padding: '28px' }} role="img" aria-label="Revenue chart for the last 12 weeks and top categories by revenue">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div className="sub">Revenue · last 12 weeks</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '36px', fontWeight: 600, letterSpacing: '-.03em', color: '#111214', marginTop: '6px' }}>
                    ₹2,84,61,900
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '4px', background: '#F3F1EC', padding: '4px', borderRadius: '9px' }}>
                  <span style={{ padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>Daily</span>
                  <span style={{ padding: '6px 12px', borderRadius: '6px', background: '#fff', fontWeight: 600, boxShadow: '0 1px 2px rgba(0,0,0,.06)' }}>Weekly</span>
                  <span style={{ padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>Monthly</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '10px', alignItems: 'end', height: '220px', marginTop: '28px', borderBottom: '1px solid #EEECE7' }}>
                <span style={{ height: '46%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '52%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '49%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '58%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '55%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '63%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '70%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '66%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '74%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '81%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '78%', background: '#E4EFEC', borderRadius: '6px 6px 0 0' }} />
                <span style={{ height: '92%', background: '#0E7C66', borderRadius: '6px 6px 0 0' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }} className="sub">
                <span>Wk 34</span>
                <span>Wk 40</span>
                <span>Wk 45</span>
              </div>

              <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '28px', marginTop: '28px', paddingTop: '24px', borderTop: '1px solid #F1EFEA' }}>
                <div>
                  <div className="ttl" style={{ fontSize: '12px', marginBottom: '14px' }}>Top categories</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '10px', alignItems: 'center' }}>
                      <span>Staples</span>
                      <span className="bar"><span style={{ width: '92%' }} /></span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '10px', alignItems: 'center' }}>
                      <span>Beverages</span>
                      <span className="bar"><span style={{ width: '64%' }} /></span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '10px', alignItems: 'center' }}>
                      <span>Household</span>
                      <span className="bar"><span style={{ width: '48%' }} /></span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '10px', alignItems: 'center' }}>
                      <span>Snacks</span>
                      <span className="bar"><span style={{ width: '35%' }} /></span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="ttl" style={{ fontSize: '12px', marginBottom: '6px' }}>Best sellers this week</div>
                  <div className="tr" style={{ gridTemplateColumns: '1fr auto' }}>
                    <span>Basmati Rice 5 kg</span>
                    <b style={{ fontWeight: 600 }}>412 units</b>
                  </div>
                  <div className="tr" style={{ gridTemplateColumns: '1fr auto' }}>
                    <span>Assam Tea 500 g</span>
                    <b style={{ fontWeight: 600 }}>386 units</b>
                  </div>
                  <div className="tr" style={{ gridTemplateColumns: '1fr auto', borderBottom: 0 }}>
                    <span>Groundnut Oil 1 L</span>
                    <b style={{ fontWeight: 600 }}>301 units</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <p className="eyebrow">03 · Business Analytics</p>
              <h2 className="d h2" style={{ fontSize: '56px' }}>See the whole business, not just today's total.</h2>
              <p className="lede">Sales reports, revenue trends and product performance, ready the moment you open the app — no spreadsheets, no waiting for month-end.</p>
              <ul className="pts">
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 9.5 3 3 7-7" />
                  </svg>
                  Daily, weekly and monthly sales reports
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 9.5 3 3 7-7" />
                  </svg>
                  Revenue insights by branch and category
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 9.5 3 3 7-7" />
                  </svg>
                  Product performance and slow movers
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 04 Multi-branch : centered / hub diagram */}
        <section className="sec t-mint glass">
          <div className="wrap">
            <div className="rv" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', justifyItems: 'center', textAlign: 'center', gap: '24px' }}>
              <p className="eyebrow">04 · Multi-Branch Management</p>
              <h2 className="d h2" style={{ fontSize: '64px', maxWidth: '880px' }}>Every store, counter and team. One head office.</h2>

            </div>

            <div className="lift" style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="win ui" style={{ padding: '20px 26px', display: 'flex', alignItems: 'center', gap: '16px', minWidth: '300px' }}>
                <span style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#111214', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
                    <path d="M2 6.5 8 2.5l6 4V14H2z" />
                    <path d="M6 14v-4h4v4" />
                  </svg>
                </span>
                <div>
                  <div className="ttl" style={{ fontSize: '15px' }}>Head office</div>
                  <div className="sub" style={{ fontSize: '12px' }}>4 branches · 11 counters · 32 staff</div>
                </div>
                <span className="chip c-ok" style={{ marginLeft: 'auto' }}>All live</span>
              </div>

              <svg className="hide-sm" viewBox="0 0 1000 80" width="100%" height="80" preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block' }}>
                <g fill="none" stroke="#B9CFC8" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
                  <path d="M500 0 V40 H125 V80" vectorEffect="non-scaling-stroke" />
                  <path d="M500 40 H875 V80" vectorEffect="non-scaling-stroke" />
                  <path d="M375 40 V80" vectorEffect="non-scaling-stroke" />
                  <path d="M625 40 V80" vectorEffect="non-scaling-stroke" />
                </g>
              </svg>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', width: '100%', marginTop: 0 }}>
                <div className="win ui" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="ttl">Main Street</div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0E7C66' }} />
                  </div>
                  <div className="sub" style={{ marginTop: '4px' }}>4 counters · 12 staff</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '22px', fontWeight: 600, color: '#111214', marginTop: '16px' }}>₹1,92,400</div>
                  <div className="sub">today</div>
                </div>

                <div className="win ui" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="ttl">Market Road</div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0E7C66' }} />
                  </div>
                  <div className="sub" style={{ marginTop: '4px' }}>3 counters · 9 staff</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '22px', fontWeight: 600, color: '#111214', marginTop: '16px' }}>₹1,31,050</div>
                  <div className="sub">today</div>
                </div>

                <div className="win ui" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="ttl">Lake View</div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0E7C66' }} />
                  </div>
                  <div className="sub" style={{ marginTop: '4px' }}>2 counters · 6 staff</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '22px', fontWeight: 600, color: '#111214', marginTop: '16px' }}>₹97,820</div>
                  <div className="sub">today</div>
                </div>

                <div className="win ui" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="ttl">Station Road</div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0E7C66' }} />
                  </div>
                  <div className="sub" style={{ marginTop: '4px' }}>2 counters · 5 staff</div>
                  <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '22px', fontWeight: 600, color: '#111214', marginTop: '16px' }}>₹61,120</div>
                  <div className="sub">today</div>
                </div>
              </div>
            </div>

            {/* <div className="rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginTop: '88px' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '17px' }}>Central catalogue and pricing</div>
                <p className="muted" style={{ margin: '8px 0 0', fontSize: '15px' }}>Update a product once; every branch sees it.</p>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '17px' }}>Counters and employees</div>
                <p className="muted" style={{ margin: '8px 0 0', fontSize: '15px' }}>Track sales by counter and by cashier, per shift.</p>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '17px' }}>Combined or per-branch reports</div>
                <p className="muted" style={{ margin: '8px 0 0', fontSize: '15px' }}>Zoom out to the whole business or in to one store.</p>
              </div>
            </div> */}
          </div>
        </section>

        {/* 05 Promotions : visual left / text bottom-right */}
        <section className="sec t-white glass">
          <div className="wrap g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: '80px', alignItems: 'end' }}>
            <div className="lift" style={{ position: 'relative', padding: '48px', borderRadius: '28px', background: 'linear-gradient(160deg, #FFF6E8 0%, #FBEFDF 100%)' }}>
              <div className="win ui" style={{ padding: '24px' }} role="img" aria-label="Promotions list with live, scheduled and ended campaigns">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="ttl" style={{ fontSize: '15px' }}>Promotions</div>
                  <span className="chip" style={{ height: '30px', padding: '0 12px', background: '#111214', color: '#fff' }}>+ New campaign</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: '14px', alignItems: 'center', padding: '14px', border: '1px solid #EEECE7', borderRadius: '12px' }}>
                    <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E7F3EF', color: '#0B5E4E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px' }}>
                      10%
                    </span>
                    <span>
                      <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Weekend dairy offer</span>
                      <span className="sub">10% off dairy · Sat–Sun · All branches</span>
                    </span>
                    <span className="chip c-ok">Live</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: '14px', alignItems: 'center', padding: '14px', border: '1px solid #EEECE7', borderRadius: '12px' }}>
                    <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FCEFD9', color: '#8A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '11px' }}>
                      2+1
                    </span>
                    <span>
                      <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Snacks — buy 2, get 1</span>
                      <span className="sub">Selected brands · Main Street, Lake View</span>
                    </span>
                    <span className="chip c-warn">Scheduled</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: '14px', alignItems: 'center', padding: '14px', border: '1px solid #EEECE7', borderRadius: '12px' }}>
                    <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F0EEE9', color: '#4A4D55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px' }}>
                      ₹
                    </span>
                    <span>
                      <span style={{ display: 'block', fontWeight: 600, color: '#111214' }}>Festive price list</span>
                      <span className="sub">Special pricing on 120 items</span>
                    </span>
                    <span className="chip c-n">Ended</span>
                  </div>
                </div>
              </div>

              <div className="win ui hide-sm" style={{ position: 'absolute', right: '-28px', bottom: '-36px', width: '260px', padding: '18px' }} role="img" aria-label="Special pricing tiers for one product">
                <div className="ttl" style={{ fontSize: '12px' }}>Special pricing · Groundnut Oil 1 L</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Regular</span>
                    <span>₹285</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Members</span>
                    <b style={{ fontWeight: 600, color: '#0E7C66' }}>₹270</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Wholesale</span>
                    <b style={{ fontWeight: 600 }}>₹262</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingBottom: '8px' }}>
              <p className="eyebrow">05 · Promotions and Discounts</p>
              <h2 className="d h2" style={{ fontSize: '56px' }}>Run offers without rewriting price tags.</h2>
              <p className="lede">Schedule campaigns, set offers by branch or category, and keep special prices for members and wholesale buyers — the counter applies them automatically.</p>
            </div>
          </div>
        </section>

        {/* 06 Users and access : split header / matrix */}
        <section className="sec t-ivory glass" style={{ borderTop: '1px solid #EEECE7' }}>
          <div className="wrap">
            <div className="g2 rv" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '64px', alignItems: 'end' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p className="eyebrow">06 · User and Access Management</p>
                <h2 className="d h2" style={{ fontSize: '60px' }}>The right access for every role.</h2>
              </div>
              <p className="lede">Give administrators full control, managers what they need to run a branch, and cashiers a focused screen for billing. Change a role once and it applies everywhere.</p>
            </div>

            <div className="win ui lift" style={{ marginTop: '72px', overflowX: 'auto' }} role="img" aria-label="Permissions matrix for Administrator, Manager and Cashier roles">
              <div style={{ minWidth: '640px', padding: '8px 32px 16px' }}>
                <div className="tr th" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '20px 0 14px' }}>
                  <span>Permission</span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', color: '#111214', textTransform: 'none', letterSpacing: 0 }}>Administrator</span>
                    <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 500 }}>Owners</span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', color: '#111214', textTransform: 'none', letterSpacing: 0 }}>Manager</span>
                    <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 500 }}>Per branch</span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', color: '#111214', textTransform: 'none', letterSpacing: 0 }}>Cashier</span>
                    <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 500 }}>Per counter</span>
                  </span>
                </div>

                <div className="tr" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', fontSize: '13.5px', padding: '16px 0' }}>
                  <span>Create and print bills</span>
                  <span className="tog on" />
                  <span className="tog on" />
                  <span className="tog on" />
                </div>
                <div className="tr" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', fontSize: '13.5px', padding: '16px 0' }}>
                  <span>Apply discounts</span>
                  <span className="tog on" />
                  <span className="tog on" />
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="tog on" />
                    <span className="sub">up to 5%</span>
                  </span>
                </div>
                <div className="tr" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', fontSize: '13.5px', padding: '16px 0' }}>
                  <span>Edit product prices</span>
                  <span className="tog on" />
                  <span className="tog on" />
                  <span className="tog" />
                </div>
                <div className="tr" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', fontSize: '13.5px', padding: '16px 0' }}>
                  <span>Approve stock transfers</span>
                  <span className="tog on" />
                  <span className="tog on" />
                  <span className="tog" />
                </div>
                <div className="tr" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', fontSize: '13.5px', padding: '16px 0' }}>
                  <span>View reports</span>
                  <span className="tog on" />
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="tog on" />
                    <span className="sub">own branch</span>
                  </span>
                  <span className="tog" />
                </div>
                <div className="tr" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', fontSize: '13.5px', padding: '16px 0' }}>
                  <span>Manage staff and roles</span>
                  <span className="tog on" />
                  <span className="tog" />
                  <span className="tog" />
                </div>
                <div className="tr" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', fontSize: '13.5px', padding: '16px 0', borderBottom: 0 }}>
                  <span>Business settings</span>
                  <span className="tog on" />
                  <span className="tog" />
                  <span className="tog" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* ============ /FEATURES ============ */}

      {/* ============ FEATURE HIGHLIGHTS (bento) ============ */}
      <section className="sec bento-section" style={{ background: '#F3F1EC', position: 'relative', zIndex: 2 }}>
        <div className="wrap">
          <div className="rv" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '32px', flexWrap: 'wrap' }}>
            <h2 className="d h2" style={{ fontSize: '56px', maxWidth: '640px' }}>And everything else a busy counter needs.</h2>
            <p className="lede" style={{ maxWidth: '380px', fontSize: '17px' }}>The everyday tools that make billing software work in the real world — included, not add-ons.</p>
          </div>

          <div className="bento rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '16px', marginTop: '64px' }}>
            <div style={{ gridColumn: 'span 7', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '320px' }}>
                <h3 className="bt">Barcode Scanning</h3>
                <p className="bp">Scan to bill, scan to receive stock, or print your own barcode labels for loose items.</p>
              </div>
              <div aria-hidden="true" style={{ padding: '20px 24px', borderRadius: '14px', background: '#FBFAF8', border: '1px solid #EEECE7', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <svg width="180" height="70" viewBox="0 0 180 70">
                  <g fill="#111214">
                    <rect x="0" width="4" height="70" />
                    <rect x="7" width="2" height="70" />
                    <rect x="12" width="6" height="70" />
                    <rect x="21" width="2" height="70" />
                    <rect x="26" width="4" height="70" />
                    <rect x="33" width="2" height="70" />
                    <rect x="38" width="6" height="70" />
                    <rect x="47" width="2" height="70" />
                    <rect x="52" width="4" height="70" />
                    <rect x="60" width="2" height="70" />
                    <rect x="65" width="6" height="70" />
                    <rect x="74" width="2" height="70" />
                    <rect x="79" width="4" height="70" />
                    <rect x="87" width="2" height="70" />
                    <rect x="92" width="6" height="70" />
                    <rect x="101" width="2" height="70" />
                    <rect x="106" width="4" height="70" />
                    <rect x="113" width="2" height="70" />
                    <rect x="118" width="6" height="70" />
                    <rect x="127" width="2" height="70" />
                    <rect x="132" width="4" height="70" />
                    <rect x="140" width="2" height="70" />
                    <rect x="145" width="6" height="70" />
                    <rect x="154" width="2" height="70" />
                    <rect x="159" width="4" height="70" />
                    <rect x="166" width="2" height="70" />
                    <rect x="171" width="4" height="70" />
                    <rect x="177" width="3" height="70" />
                  </g>
                  <rect x="0" y="33" width="180" height="2" fill="#0E7C66" />
                </svg>
                <span className="mono">8 901234 500127</span>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5' }}>
              <h3 className="bt">GST Billing</h3>
              <p className="bp">Tax-ready invoices with HSN codes and CGST, SGST and IGST worked out for you.</p>
              <div aria-hidden="true" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', padding: '16px', borderRadius: '12px', background: '#FBFAF8', border: '1px solid #EEECE7' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="muted">Taxable value</span>
                  <span>₹1,685.30</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="muted">CGST 2.5%</span>
                  <span>₹42.13</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="muted">SGST 2.5%</span>
                  <span>₹42.13</span>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none" stroke="#0E7C66" strokeWidth="1.6" aria-hidden="true">
                <circle cx="11" cy="7.5" r="3.5" />
                <path d="M4 19c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6" />
              </svg>
              <h3 className="bt">Customer Management</h3>
              <p className="bp">Profiles, purchase history and credit balances for your regulars.</p>
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none" stroke="#0E7C66" strokeWidth="1.6" aria-hidden="true">
                <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" />
                <circle cx="6" cy="17" r="1.8" />
                <circle cx="16" cy="17" r="1.8" />
              </svg>
              <h3 className="bt">Supplier Management</h3>
              <p className="bp">Keep supplier details, dues and order history in one place.</p>
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none" stroke="#0E7C66" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 3h12v16H5z" />
                <path d="M8 8h6M8 11h6M8 14h3" />
              </svg>
              <h3 className="bt">Purchase Management</h3>
              <p className="bp">Raise purchase orders, receive goods and update stock in one step.</p>
            </div>

            <div style={{ gridColumn: 'span 3', background: '#111214', borderColor: '#111214', color: '#fff' }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none" stroke="#fff" strokeWidth="1.6" aria-hidden="true">
                <path d="M3 8h14M13 4l4 4-4 4M19 14H5M9 10l-4 4 4 4" />
              </svg>
              <h3 className="bt" style={{ color: '#fff' }}>Stock Transfers</h3>
              <p className="bp" style={{ color: '#B4B7BE' }}>Move stock between branches and warehouses with a full record.</p>
            </div>

            <div style={{ gridColumn: 'span 5' }}>
              <h3 className="bt">Sales Tracking</h3>
              <p className="bp">Follow sales by hour, counter, cashier or product as they happen.</p>
              <svg viewBox="0 0 300 70" width="100%" height="70" preserveAspectRatio="none" aria-hidden="true" style={{ marginTop: 'auto' }}>
                <path d="M0 60 L30 52 L60 56 L90 40 L120 44 L150 30 L180 36 L210 22 L240 26 L270 12 L300 16" fill="none" stroke="#0E7C66" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <h3 className="bt">Automated Reports</h3>
              <p className="bp">Daily, weekly and monthly summaries prepared on schedule, ready to share.</p>
              <div aria-hidden="true" style={{ marginTop: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="chip c-n" style={{ height: '28px' }}>Daily close</span>
                <span className="chip c-n" style={{ height: '28px' }}>Weekly sales</span>
                <span className="chip c-n" style={{ height: '28px' }}>Monthly GST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTIONS ============ */}
      <section id="solutions" className="sec solutions-section" style={{ background: '#fff', position: 'relative', zIndex: 2 }}>
        <div className="wrap g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 4fr) minmax(0, 7fr)', gap: '80px', alignItems: 'start' }}>
          <div className="rv" style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p className="eyebrow">Solutions</p>
            <h2 className="d h2" style={{ fontSize: '56px' }}>One platform. Every kind of counter.</h2>
            <p className="lede" style={{ fontSize: '17px' }}>Ledgerly isn't built for one shop — it's a common billing platform that adapts to how your business sells, from a single store to a network of branches.</p>
            <div>
              <a className="btn btn-line" href="#start">Talk to us about your business</a>
            </div>
          </div>

          <div className="rv" style={{ borderBottom: '1px solid #E6E3DC' }}>
            <div className="solrow">
              <span className="mono">01</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Supermarkets</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>High-volume billing across many counters, with thousands of SKUs kept in check.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Multi-counter</span>
                  <span className="tag">Barcode</span>
                  <span className="tag">Offers</span>
                </div>
              </div>
            </div>

            <div className="solrow">
              <span className="mono">02</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Retail Stores</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>Fast checkout, customer profiles and clean GST invoices for everyday retail.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Customers</span>
                  <span className="tag">GST billing</span>
                </div>
              </div>
            </div>

            <div className="solrow">
              <span className="mono">03</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Grocery Stores</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>Loose and packaged items, weighed goods and low-stock alerts on staples.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Stock alerts</span>
                  <span className="tag">Labels</span>
                </div>
              </div>
            </div>

            <div className="solrow">
              <span className="mono">04</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Wholesale Businesses</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>Bulk orders, tiered pricing and supplier and purchase management.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Price tiers</span>
                  <span className="tag">Purchases</span>
                </div>
              </div>
            </div>

            <div className="solrow">
              <span className="mono">05</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Multi-Branch Businesses</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>Central control of products, staff and reports across every location.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Branches</span>
                  <span className="tag">Transfers</span>
                  <span className="tag">Roles</span>
                </div>
              </div>
            </div>

            <div className="solrow">
              <span className="mono">06</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Inventory Management</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>Live stock across every branch and warehouse, updated with each bill, purchase and transfer.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Stock tracking</span>
                  <span className="tag">Reorder alerts</span>
                  <span className="tag">Barcodes</span>
                </div>
              </div>
            </div>

            <div className="solrow">
              <span className="mono">07</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Business Analytics</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>Sales, revenue and product performance by branch, category and counter, ready when you open the app.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Sales reports</span>
                  <span className="tag">Revenue trends</span>
                  <span className="tag">Top products</span>
                </div>
              </div>
            </div>

            <div className="solrow">
              <span className="mono">08</span>
              <h3 className="d solname" style={{ fontSize: '40px', letterSpacing: '-.03em' }}>Supplier Management</h3>
              <div className="soldesc">
                <p className="muted" style={{ margin: '0 0 14px', fontSize: '15px' }}>Supplier details, purchase orders, dues and payment history kept in one place.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">Purchase orders</span>
                  <span className="tag">Dues</span>
                  <span className="tag">Order history</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="start" className="cta-section" style={{ background: '#111214', color: '#fff', position: 'relative', zIndex: 2, overflow: 'hidden', padding: '180px 0' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '-260px',
            width: '1100px',
            height: '700px',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(closest-side, rgba(14,124,102,.38), rgba(14,124,102,0))',
            pointerEvents: 'none'
          }}
        />
        <div className="wrap rv" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="d hcta" style={{ fontSize: '112px', maxWidth: '1080px', color: '#fff' }}>Simplify how your business runs.</h2>
          <p className="lede" style={{ color: '#A9ACB4', maxWidth: '560px', marginTop: '32px' }}>Set up your products, branches and team, and start billing — we'll help you every step of the way.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="btn btn-acc" href="#start" style={{ minHeight: '56px', padding: '0 32px', fontSize: '16px' }}>Get started</a>
            <a className="btn btn-ghost" href="#contact" style={{ minHeight: '56px', padding: '0 32px', fontSize: '16px' }}>Book a demo</a>
          </div>
        </div>
      </section>

    </div>
  );
}

