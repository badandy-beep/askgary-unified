/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */

import React, { useState } from 'react';
import AskGaryCompleteDemo from './AskGaryCompleteDemo';
import FeatureShowcase from './FeatureShowcase';
import AudioFirstDemo from './AudioFirstDemo';
import PinGate from './PinGate';

// ═══════════════════════════════════════════════════════════════════════════════
// 1-800-ASK-GARY CASE MANAGEMENT PORTAL™
// Proprietary Platform by Noetic Dharma Group
// Version 1.0 | December 2025
// ═══════════════════════════════════════════════════════════════════════════════

const COLORS = {
  primary: '#C41E3A',
  primaryDark: '#991B1B',
  gold: '#D4A853',
  cosmic: '#0A1628',
  cosmicLight: '#132442',
  charcoal: '#1C1C1E',
  gray: '#8E8E93',
  lightGray: '#F2F2F7',
  white: '#FFFFFF',
  success: '#30D158',
};

const DEMOS = [
  {
    id: 'audio-faux',
    title: 'Audio-First Interview',
    subtitle: 'Presentation Demo',
    description: 'Voice-to-text intake simulation with presenter mode. Shows how clients record their story immediately after an incident.',
    icon: '🎙️',
    status: 'live',
    component: AudioFirstDemo,
    category: 'audio',
  },
  {
    id: 'complete-faux',
    title: 'Complete Intake Flow',
    subtitle: 'Presentation Demo',
    description: 'Full 7-phase questionnaire demonstration: Audio Interview → Transcript Review → Detailed Form Completion.',
    icon: '📋',
    status: 'live',
    recommended: true,
    component: AskGaryCompleteDemo,
    category: 'form',
  },
  {
    id: 'features',
    title: 'Feature Showcase',
    subtitle: '18-Screen Visual Walkthrough',
    description: 'Security, AI matching, evidence gathering, and platform capabilities overview.',
    icon: '📱',
    status: 'live',
    component: FeatureShowcase,
    category: 'overview',
  },
  {
    id: 'audio-live',
    title: 'Working Audio Demo',
    subtitle: 'Live Voice Recording',
    description: 'Actual working voice-to-text with real speech recognition and transcription.',
    icon: '🔴',
    status: 'coming',
    component: null,
    category: 'audio',
  },
  {
    id: 'form-live',
    title: 'Working Intake Form',
    subtitle: 'Live Data Capture',
    description: 'Functional intake form with image uploads, document capture, and audio recording.',
    icon: '✍️',
    status: 'coming',
    component: null,
    category: 'form',
  },
  {
    id: 'investor-deck',
    title: 'Investment Materials',
    subtitle: 'Financial Projections & Analysis',
    description: 'Business case, market opportunity, competitive analysis, and ROI projections.',
    icon: '📊',
    status: 'coming',
    component: null,
    category: 'business',
  },
];

function DemoSelector({ onSelect, onLogout }) {
  const liveCount = DEMOS.filter(d => d.status === 'live').length;
  const comingCount = DEMOS.filter(d => d.status === 'coming').length;

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(180deg, ${COLORS.cosmic} 0%, ${COLORS.cosmicLight} 50%, ${COLORS.cosmic} 100%)`,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      padding: '20px 16px',
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 24, paddingTop: 12 }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            color: COLORS.gold,
            fontSize: 11,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 8,
            opacity: 0.9,
          }}>Noetic Dharma Group Presents</div>
          
          <h1 style={{
            color: COLORS.white,
            fontSize: 28,
            fontWeight: 800,
            margin: '0 0 6px 0',
            letterSpacing: '-0.5px',
            lineHeight: 1.1,
          }}>
            1-800-ASK-<span style={{ color: COLORS.primary }}>GARY</span>
          </h1>
          <div style={{
            color: COLORS.gold,
            fontSize: 13,
            letterSpacing: 1,
            marginBottom: 16,
          }}>Case Management Portal™</div>
        </div>

        {/* Value Proposition Box */}
        <div style={{
          background: 'rgba(212, 168, 83, 0.08)',
          border: '1px solid rgba(212, 168, 83, 0.25)',
          borderRadius: 16,
          padding: '20px 18px',
          marginBottom: 24,
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 15,
            margin: 0,
            lineHeight: 1.6,
            textAlign: 'center',
          }}>
            This <strong style={{ color: COLORS.gold }}>proprietary platform</strong> developed by Noetic Dharma 
            integrates personal injury case intake into <strong style={{ color: COLORS.white }}>two seamless components</strong> that 
            work together in real-time.
          </p>
          
          <div style={{
            display: 'flex',
            gap: 12,
            marginTop: 16,
          }}>
            <div style={{
              flex: 1,
              background: 'rgba(196, 30, 58, 0.15)',
              borderRadius: 12,
              padding: 14,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>🎙️</div>
              <div style={{ color: COLORS.white, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>Audio-First</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, lineHeight: 1.4 }}>
                Voice-based app for immediate recording at incident scene
              </div>
            </div>
            <div style={{
              flex: 1,
              background: 'rgba(0, 122, 255, 0.15)',
              borderRadius: 12,
              padding: 14,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>📋</div>
              <div style={{ color: COLORS.white, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>Complete Intake</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, lineHeight: 1.4 }}>
                Comprehensive questionnaire with evidence capture
              </div>
            </div>
          </div>
        </div>

        {/* Demo Selection Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
          padding: '0 4px',
        }}>
          <div style={{
            color: COLORS.white,
            fontSize: 14,
            fontWeight: 600,
          }}>Platform Demonstrations</div>
          <div style={{
            color: COLORS.gray,
            fontSize: 12,
          }}>{liveCount} Live • {comingCount} Coming</div>
        </div>
        
        {/* Demo Cards */}
        <div style={{ marginBottom: 24 }}>
          {DEMOS.map((demo) => (
            <button
              key={demo.id}
              onClick={() => demo.status === 'live' && onSelect(demo.id)}
              disabled={demo.status !== 'live'}
              style={{
                width: '100%',
                background: demo.recommended 
                  ? `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`
                  : demo.status === 'live' 
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(255,255,255,0.02)',
                border: demo.recommended 
                  ? 'none' 
                  : demo.status === 'live'
                    ? '1px solid rgba(255,255,255,0.12)'
                    : '1px solid rgba(255,255,255,0.05)',
                borderRadius: 14,
                padding: '16px 14px',
                marginBottom: 10,
                cursor: demo.status === 'live' ? 'pointer' : 'not-allowed',
                textAlign: 'left',
                opacity: demo.status === 'live' ? 1 : 0.5,
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  fontSize: 26,
                  width: 48,
                  height: 48,
                  background: demo.recommended ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>{demo.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3, flexWrap: 'wrap' }}>
                    <span style={{
                      color: COLORS.white,
                      fontSize: 16,
                      fontWeight: 700,
                    }}>{demo.title}</span>
                    {demo.recommended && (
                      <span style={{
                        background: COLORS.gold,
                        color: COLORS.cosmic,
                        fontSize: 9,
                        fontWeight: 700,
                        padding: '2px 6px',
                        borderRadius: 4,
                        textTransform: 'uppercase',
                      }}>Featured</span>
                    )}
                    {demo.status === 'coming' && (
                      <span style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: 9,
                        fontWeight: 600,
                        padding: '2px 6px',
                        borderRadius: 4,
                        textTransform: 'uppercase',
                      }}>Coming</span>
                    )}
                  </div>
                  <div style={{
                    color: demo.recommended ? 'rgba(255,255,255,0.8)' : COLORS.gold,
                    fontSize: 12,
                    marginBottom: 4,
                  }}>{demo.subtitle}</div>
                  <div style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 11,
                    lineHeight: 1.4,
                  }}>{demo.description}</div>
                </div>
                {demo.status === 'live' && (
                  <div style={{
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: 20,
                    alignSelf: 'center',
                  }}>→</div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Presenter Mode Tip */}
        <div style={{
          background: 'rgba(48, 209, 88, 0.1)',
          border: '1px solid rgba(48, 209, 88, 0.25)',
          borderRadius: 10,
          padding: 12,
          marginBottom: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16 }}>💡</span>
            <span style={{ color: COLORS.success, fontSize: 13, fontWeight: 600 }}>Presenter Mode</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, margin: '6px 0 0 0', lineHeight: 1.4 }}>
            Double-tap or use SKIP button to advance through demos quickly during presentations.
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          style={{
            width: '100%',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.4)',
            padding: 12,
            fontSize: 13,
            borderRadius: 10,
            cursor: 'pointer',
            marginBottom: 24,
          }}
        >
          ← Exit Portal
        </button>

        {/* Footer */}
        <div style={{ textAlign: 'center', paddingBottom: 20 }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            color: COLORS.gold,
            fontSize: 11,
            letterSpacing: 3,
            marginBottom: 4,
          }}>NOETIC DHARMA</div>
          <div style={{
            color: 'rgba(255,255,255,0.25)',
            fontSize: 9,
            letterSpacing: 1,
          }}>PRIVATE EQUITY • MERCHANT BANKING</div>
          <div style={{
            color: 'rgba(255,255,255,0.15)',
            fontSize: 9,
            marginTop: 8,
          }}>© 2025 Noetic Dharma Group, LLC • Confidential</div>
        </div>
      </div>
    </div>
  );
}

function DemoWrapper({ demoId, onBack }) {
  const demo = DEMOS.find(d => d.id === demoId);
  const DemoComponent = demo?.component;

  if (!DemoComponent) {
    return (
      <div style={{
        minHeight: '100vh',
        background: COLORS.cosmic,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
        <div style={{ color: COLORS.white, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Coming Soon</div>
        <div style={{ color: COLORS.gray, fontSize: 14, marginBottom: 24 }}>{demo?.title || 'This demo'} is under development</div>
        <button onClick={onBack} style={{
          background: COLORS.primary,
          color: COLORS.white,
          border: 'none',
          padding: '12px 24px',
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
        }}>← Back to Portal</button>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Floating Back Button */}
      <button
        onClick={onBack}
        style={{
          position: 'fixed',
          top: 12,
          left: 12,
          zIndex: 9999,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
        }}
      >
        ← Exit
      </button>
      <DemoComponent />
    </div>
  );
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(null);

  // PIN Gate
  if (!authenticated) {
    return <PinGate onSuccess={() => setAuthenticated(true)} />;
  }

  // Demo Selector
  if (!currentDemo) {
    return (
      <DemoSelector
        onSelect={setCurrentDemo}
        onLogout={() => setAuthenticated(false)}
      />
    );
  }

  // Active Demo
  return (
    <DemoWrapper
      demoId={currentDemo}
      onBack={() => setCurrentDemo(null)}
    />
  );
}
