/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import React, { useState } from 'react';

const PinGate = ({ onSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const CORRECT_PIN = 'DHARMA';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.toUpperCase() === CORRECT_PIN) {
      if (onSuccess) onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-4px); }
          40%, 80% { transform: translateX(4px); }
        }
        .shake { animation: shake 0.4s ease-in-out; }
        
        .pin-input::placeholder { color: rgba(212, 168, 83, 0.4); }
        .pin-input:focus { border-color: #D4A853 !important; }
      `}</style>

      <div style={{
        minHeight: '100vh',
        height: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url(/cosmos-bg-sm.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        padding: 20,
        boxSizing: 'border-box',
        position: 'relative',
      }}>
        
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 22, 40, 0.6)',
          pointerEvents: 'none'
        }} />

        {/* Main horizontal container */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          maxWidth: 900,
          width: '100%',
          flexWrap: 'wrap',
        }}>
          
          {/* LEFT SIDE - Noetic Dharma + Ask Gary Logo */}
          <div style={{
            flex: '1 1 300px',
            maxWidth: 380,
            textAlign: 'center',
          }}>
            {/* Socrates + Noetic Dharma */}
            <div style={{ marginBottom: 24 }}>
              <img 
                src="/socrates-sm.png" 
                alt="Socrates" 
                style={{
                  width: 100,
                  height: 'auto',
                  marginBottom: 12,
                  filter: 'drop-shadow(0 4px 16px rgba(212, 168, 83, 0.3))',
                }}
              />
              <div style={{
                fontSize: 26,
                fontWeight: 700,
                color: '#D4A853',
                letterSpacing: 3,
                lineHeight: 1.1,
                textShadow: '0 2px 12px rgba(212, 168, 83, 0.4)',
              }}>
                NOETIC DHARMA
              </div>
              <div style={{
                fontSize: 12,
                color: 'rgba(212, 168, 83, 0.7)',
                letterSpacing: 4,
                marginTop: 2,
              }}>GROUP</div>
            </div>

            {/* Presents */}
            <div style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>presents</div>

            {/* Ask Gary Logo */}
            <img 
              src="/askgary-logo.jpg" 
              alt="1-800-ASK-GARY" 
              style={{
                width: '100%',
                maxWidth: 280,
                borderRadius: 6,
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
            />
          </div>

          {/* Vertical divider */}
          <div style={{
            width: 1,
            height: 280,
            background: 'linear-gradient(180deg, transparent, rgba(212,168,83,0.4), transparent)',
            display: window.innerWidth < 700 ? 'none' : 'block',
          }} />

          {/* RIGHT SIDE - Portal Title + Password */}
          <div style={{
            flex: '1 1 300px',
            maxWidth: 380,
            textAlign: 'center',
          }}>
            {/* Portal Title */}
            <div style={{ marginBottom: 32 }}>
              <div style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>The</div>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: 1,
                lineHeight: 1.2,
                marginBottom: 4,
              }}>JUSTICE CASE</div>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: 1,
                lineHeight: 1.2,
                marginBottom: 4,
              }}>MANAGEMENT</div>
              <div style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#D4A853',
                letterSpacing: 3,
              }}>AI PORTAL</div>
              <div style={{
                fontSize: 10,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: 1,
                marginTop: 6,
              }}>™ Proprietary Technology</div>
            </div>

            {/* Password Entry */}
            <form onSubmit={handleSubmit}>
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(212,168,83,0.2)',
                borderRadius: 12,
                padding: '16px 20px',
              }}>
                <div style={{
                  fontSize: 10,
                  color: 'rgba(212,168,83,0.6)',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}>Authorized Access</div>
                
                <input
                  type="text"
                  value={pin}
                  onChange={(e) => { setPin(e.target.value.toUpperCase()); setError(false); }}
                  placeholder="Access Code"
                  className={`pin-input ${shake ? 'shake' : ''}`}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: 16,
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    letterSpacing: 3,
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.4)',
                    border: error ? '1px solid #C41E3A' : '1px solid rgba(212,168,83,0.3)',
                    borderRadius: 8,
                    color: '#D4A853',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                
                {error && (
                  <div style={{ color: '#C41E3A', fontSize: 11, marginTop: 6 }}>Invalid code</div>
                )}
                
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    marginTop: 12,
                    padding: '10px 20px',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    background: 'linear-gradient(135deg, #D4A853, #B8923F)',
                    border: 'none',
                    borderRadius: 8,
                    color: '#0A1628',
                    cursor: 'pointer',
                  }}
                >
                  Enter
                </button>
              </div>
            </form>

            {/* Footer */}
            <div style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.25)',
              marginTop: 20,
              lineHeight: 1.5,
            }}>
              © 2025 Noetic Dharma Group, LLC<br/>
              Private Equity • Merchant Banking
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinGate;
