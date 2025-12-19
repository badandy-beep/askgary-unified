/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */

import React, { useState } from 'react';
import AskGaryCompleteDemo from './AskGaryCompleteDemo';
import FeatureShowcase from './FeatureShowcase';
import AudioFirstDemo from './AudioFirstDemo';
import PinGate from './PinGate';

// ═══════════════════════════════════════════════════════════════════════════════
// ASKGARY UNIFIED DEMO PLATFORM
// Complete Voice-First Case Intake System
// Version 1.0 | December 2025 | Noetic Dharma Group
// ═══════════════════════════════════════════════════════════════════════════════

const COLORS = {
  primary: '#C41E3A',
  primaryDark: '#991B1B',
  gold: '#D4A853',
  cosmic: '#0A1628',
  charcoal: '#1C1C1E',
  gray: '#8E8E93',
  lightGray: '#F2F2F7',
  white: '#FFFFFF',
};

const DEMOS = [
  {
    id: 'complete',
    title: 'Complete Unified Flow',
    subtitle: 'Audio Interview → Review → Full Questionnaire',
    description: 'The complete end-to-end intake experience combining voice-first interview with comprehensive form completion.',
    icon: '🎯',
    recommended: true,
    component: AskGaryCompleteDemo,
  },
  {
    id: 'features',
    title: 'Feature Showcase',
    subtitle: '18-Screen Mobile App Demo',
    description: 'Visual walkthrough of all platform features including security, AI matching, and evidence gathering.',
    icon: '📱',
    component: FeatureShowcase,
  },
  {
    id: 'audio',
    title: 'Audio-First Interview',
    subtitle: 'Voice-to-Text Presenter Mode',
    description: 'Standalone audio interview demo with simulated speech-to-text transcription.',
    icon: '🎙️',
    component: AudioFirstDemo,
  },
];

function DemoSelector({ onSelect, onLogout }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${COLORS.cosmic} 0%, #1a0a2e 100%)`,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      padding: 20,
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40, paddingTop: 20 }}>
          <div style={{
            fontSize: 48,
            marginBottom: 16,
            textShadow: '0 4px 20px rgba(196, 30, 58, 0.5)',
          }}>⚖️</div>
          <h1 style={{
            color: COLORS.white,
            fontSize: 32,
            fontWeight: 800,
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px',
          }}>
            ASK<span style={{ color: COLORS.primary }}>GARY</span>
          </h1>
          <p style={{
            color: COLORS.gold,
            fontSize: 14,
            letterSpacing: 3,
            margin: 0,
            textTransform: 'uppercase',
          }}>Voice-First Case Intake Portal</p>
        </div>

        {/* Demo Selection */}
        <div style={{ marginBottom: 30 }}>
          <div style={{
            color: COLORS.gray,
            fontSize: 12,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 16,
            textAlign: 'center',
          }}>Select Demo Experience</div>
          
          {DEMOS.map((demo) => (
            <button
              key={demo.id}
              onClick={() => onSelect(demo.id)}
              style={{
                width: '100%',
                background: demo.recommended 
                  ? `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`
                  : 'rgba(255,255,255,0.05)',
                border: demo.recommended ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: 20,
                marginBottom: 12,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  fontSize: 32,
                  width: 56,
                  height: 56,
                  background: demo.recommended ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)',
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>{demo.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{
                      color: COLORS.white,
                      fontSize: 18,
                      fontWeight: 700,
                    }}>{demo.title}</span>
                    {demo.recommended && (
                      <span style={{
                        background: COLORS.gold,
                        color: COLORS.cosmic,
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 4,
                        textTransform: 'uppercase',
                      }}>Recommended</span>
                    )}
                  </div>
                  <div style={{
                    color: demo.recommended ? 'rgba(255,255,255,0.8)' : COLORS.gold,
                    fontSize: 13,
                    marginBottom: 6,
                  }}>{demo.subtitle}</div>
                  <div style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 12,
                    lineHeight: 1.4,
                  }}>{demo.description}</div>
                </div>
                <div style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: 24,
                  alignSelf: 'center',
                }}>→</div>
              </div>
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div style={{
          background: 'rgba(212, 168, 83, 0.1)',
          border: '1px solid rgba(212, 168, 83, 0.3)',
          borderRadius: 12,
          padding: 16,
          marginBottom: 30,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <span style={{ color: COLORS.gold, fontSize: 14, fontWeight: 600 }}>Presenter Mode</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, margin: 0, lineHeight: 1.5 }}>
            All demos include <strong style={{ color: COLORS.white }}>Presenter Mode</strong> — double-tap 
            anywhere or use the SKIP button to advance through screens quickly during presentations.
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          style={{
            width: '100%',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.5)',
            padding: 14,
            fontSize: 14,
            borderRadius: 12,
            cursor: 'pointer',
            marginBottom: 30,
          }}
        >
          ← Back to PIN Gate
        </button>

        {/* Footer */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            color: COLORS.gold,
            fontSize: 12,
            letterSpacing: 3,
            marginBottom: 4,
          }}>NOETIC DHARMA</div>
          <div style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: 9,
            letterSpacing: 1,
          }}>PRIVATE EQUITY • VENTURE CAPITAL • STRATEGIC ADVISORY</div>
          <div style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: 10,
            marginTop: 12,
          }}>© 2025 Noetic Dharma Group, LLC</div>
        </div>
      </div>
    </div>
  );
}

function DemoWrapper({ demoId, onBack }) {
  const demo = DEMOS.find(d => d.id === demoId);
  const DemoComponent = demo?.component;

  if (!DemoComponent) {
    return <div>Demo not found</div>;
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
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        ← Exit Demo
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
