/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */

import React, { useState } from 'react';

// ============================================================
// PIN GATE - BRANDED LANDING PAGE
// Passcode: DHARMA
// ============================================================

const PinGate = ({ onSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const CORRECT_PIN = 'DHARMA';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.toUpperCase() === CORRECT_PIN) {
      setError(false);
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .shake-animation {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .pin-input::placeholder {
          color: rgba(212, 168, 83, 0.4);
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        backgroundImage: 'url(/cosmos-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        padding: '20px 16px',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Overlay for better text contrast */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.4) 0%, rgba(10, 22, 40, 0.7) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Main Content */}
        <div style={{
          textAlign: 'center',
          zIndex: 1,
          animation: 'fadeIn 1s ease-out',
          maxWidth: 440,
          width: '100%'
        }}>
          
          {/* Socrates Image */}
          <div style={{
            marginBottom: 20,
            animation: 'float 6s ease-in-out infinite'
          }}>
            <img 
              src="/socrates.png" 
              alt="Socrates" 
              style={{
                width: 140,
                height: 'auto',
                filter: 'drop-shadow(0 8px 32px rgba(212, 168, 83, 0.3))',
              }}
            />
          </div>

          {/* NOETIC DHARMA Text Branding */}
          <div style={{ marginBottom: 6 }}>
            <div style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#D4A853',
              letterSpacing: 4,
              textShadow: '0 2px 20px rgba(212, 168, 83, 0.5)',
              lineHeight: 1.1,
            }}>NOETIC</div>
            <div style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#D4A853',
              letterSpacing: 4,
              textShadow: '0 2px 20px rgba(212, 168, 83, 0.5)',
              lineHeight: 1.1,
            }}>DHARMA</div>
            <div style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(212, 168, 83, 0.7)',
              letterSpacing: 3,
              marginTop: 4,
            }}>GROUP</div>
          </div>

          {/* Presents */}
          <div style={{
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.6)',
            letterSpacing: 3,
            textTransform: 'uppercase',
            margin: '24px 0 16px 0',
          }}>— presents the working model of —</div>

          {/* 1-800-ASK-GARY Logo */}
          <div style={{
            marginBottom: 16,
            padding: '0 20px',
          }}>
            <img 
              src="/askgary-logo.jpg" 
              alt="1-800-ASK-GARY" 
              style={{
                width: '100%',
                maxWidth: 340,
                height: 'auto',
                borderRadius: 8,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* Case Management Portal */}
          <div style={{
            fontSize: 18,
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>Case Management Portal</div>
          <div style={{
            fontSize: 11,
            color: 'rgba(255, 255, 255, 0.5)',
            letterSpacing: 1,
            marginBottom: 32,
          }}>™ Proprietary Technology</div>

          {/* PIN Entry Form */}
          <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
            <div style={{
              background: 'rgba(10, 22, 40, 0.8)',
              border: '1px solid rgba(212, 168, 83, 0.3)',
              borderRadius: 16,
              padding: 24,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}>
              <div style={{
                fontSize: 12,
                color: 'rgba(212, 168, 83, 0.8)',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>Authorized Access Only</div>
              
              <input
                type="text"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.toUpperCase());
                  setError(false);
                }}
                placeholder="Enter Access Code"
                className={`pin-input ${shake ? 'shake-animation' : ''}`}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  fontSize: 20,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                  letterSpacing: 4,
                  textAlign: 'center',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: error ? '2px solid #C41E3A' : '2px solid rgba(212, 168, 83, 0.4)',
                  borderRadius: 10,
                  color: '#D4A853',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease',
                }}
              />
              
              {error && (
                <div style={{
                  color: '#C41E3A',
                  fontSize: 13,
                  marginTop: 10,
                  fontWeight: 500,
                }}>Invalid access code</div>
              )}
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  marginTop: 16,
                  padding: '14px 24px',
                  fontSize: 15,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)',
                  border: 'none',
                  borderRadius: 10,
                  color: '#0A1628',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(212, 168, 83, 0.3)',
                }}
              >
                Enter Portal
              </button>
            </div>
          </form>

          {/* Footer */}
          <div style={{
            fontSize: 10,
            color: 'rgba(255, 255, 255, 0.3)',
            letterSpacing: 1,
            lineHeight: 1.6,
          }}>
            <div>© 2025 Noetic Dharma Group, LLC</div>
            <div style={{ marginTop: 4 }}>Private Equity • Merchant Banking</div>
            <div style={{ marginTop: 2 }}>www.noeticdharma.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinGate;
