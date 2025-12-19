/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import React, { useState } from 'react';
import PinGate from './PinGate';

// FAUX DEMOS (Presentation/Pre-filled)
import AudioFirstDemo from './AudioFirstPresenter';
import FeatureShowcaseDemo from './FeatureShowcase';
import FullQuestionnaire from './FullQuestionnaire';
import AskGaryCompleteDemo from './CompleteDemoIntegrated';

// WORKING DEMOS
import WorkingVoiceDemo from './WorkingVoiceDemo';
import { DesktopApp, MobileApp } from './DesktopMobilePresentation';

const COLORS = {
  primary: '#C41E3A',
  gold: '#D4A853',
  cosmic: '#0A1628',
  white: '#FFFFFF',
  gray: '#8E8E93',
  success: '#30D158',
};

// ═══════════════════════════════════════════════════════════════════════════════
// DEMO CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════

const DEMO_COLUMNS = [
  {
    id: 'faux',
    title: 'Presentation Demos',
    subtitle: 'Pre-filled walkthroughs',
    icon: '🎭',
    items: [
      {
        id: 'audio-faux',
        title: 'Audio-Only Demo',
        desc: 'Voice interview with presenter mode',
        icon: '🎙️',
        status: 'live',
        component: AudioFirstDemo,
      },
      {
        id: 'longform-faux',
        title: 'Long-Form Questionnaire',
        desc: 'All 7 phases with faux data',
        icon: '📋',
        status: 'live',
        component: FullQuestionnaire,
      },
      {
        id: 'endtoend-faux',
        title: 'End-to-End Demo',
        desc: 'Audio → Review → Full intake',
        icon: '🎯',
        status: 'live',
        component: AskGaryCompleteDemo,
      },
      {
        id: 'features',
        title: 'Feature Showcase',
        desc: '18-screen platform overview',
        icon: '📱',
        status: 'live',
        component: FeatureShowcaseDemo,
      },
    ],
  },
  {
    id: 'working',
    title: 'Working Demos',
    subtitle: 'Live functional systems',
    icon: '⚡',
    items: [
      {
        id: 'audio-working',
        title: 'Live Voice Recording',
        desc: 'Real Web Speech API',
        icon: '🔴',
        status: 'live',
        component: WorkingVoiceDemo,
      },
      {
        id: 'desktop-working',
        title: 'Desktop Presentation',
        desc: 'With MP3 audio playback',
        icon: '🖥️',
        status: 'live',
        component: DesktopApp,
      },
      {
        id: 'mobile-working',
        title: 'Mobile Presentation',
        desc: 'Phone-optimized with audio',
        icon: '📱',
        status: 'live',
        component: MobileApp,
      },
    ],
  },
  {
    id: 'sales',
    title: 'Sales Materials',
    subtitle: 'Investment docs & decks',
    icon: '💼',
    items: [
      {
        id: 'investor-deck',
        title: 'Investor Deck',
        desc: 'Financial projections',
        icon: '📊',
        status: 'coming',
        component: null,
      },
      {
        id: 'competitive',
        title: 'Competitive Analysis',
        desc: 'Market positioning',
        icon: '📈',
        status: 'coming',
        component: null,
      },
      {
        id: 'features-pdf',
        title: 'Features & Benefits',
        desc: 'Product overview',
        icon: '✨',
        status: 'coming',
        component: null,
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// DEMO SELECTOR
// ═══════════════════════════════════════════════════════════════════════════════

function DemoSelector({ onSelect, onLogout }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(180deg, ${COLORS.cosmic} 0%, #132442 100%)`,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      padding: '16px',
      boxSizing: 'border-box',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 20, paddingTop: 8 }}>
        <div style={{ fontSize: 11, color: COLORS.gold, letterSpacing: 3, marginBottom: 4 }}>
          1-800-ASK-GARY × NOETIC DHARMA
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.white }}>
          Justice Case Management AI Portal™
        </div>
      </div>

      {/* Three Column Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        {DEMO_COLUMNS.map((column) => (
          <div key={column.id} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: 16,
          }}>
            {/* Column Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
              paddingBottom: 12,
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              <span style={{ fontSize: 22 }}>{column.icon}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.white }}>{column.title}</div>
                <div style={{ fontSize: 11, color: COLORS.gray }}>{column.subtitle}</div>
              </div>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {column.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.status === 'live' && onSelect(item.id)}
                  disabled={item.status !== 'live'}
                  style={{
                    width: '100%',
                    background: item.status === 'live' ? 'rgba(212,168,83,0.1)' : 'rgba(255,255,255,0.02)',
                    border: item.status === 'live' ? '1px solid rgba(212,168,83,0.3)' : '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 10,
                    padding: '12px 14px',
                    cursor: item.status === 'live' ? 'pointer' : 'not-allowed',
                    opacity: item.status === 'live' ? 1 : 0.5,
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 14, fontWeight: 600,
                      color: item.status === 'live' ? COLORS.white : 'rgba(255,255,255,0.5)',
                      marginBottom: 2,
                    }}>{item.title}</div>
                    <div style={{
                      fontSize: 11,
                      color: item.status === 'live' ? COLORS.gold : 'rgba(255,255,255,0.3)',
                    }}>{item.desc}</div>
                  </div>
                  {item.status === 'live' ? (
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16 }}>→</span>
                  ) : (
                    <span style={{
                      fontSize: 8, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)',
                      padding: '3px 6px', borderRadius: 4, textTransform: 'uppercase', fontWeight: 600,
                    }}>Soon</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Presenter Mode Tip */}
      <div style={{
        maxWidth: 600,
        margin: '24px auto 0',
        background: 'rgba(48, 209, 88, 0.1)',
        border: '1px solid rgba(48, 209, 88, 0.25)',
        borderRadius: 10,
        padding: 12,
        textAlign: 'center',
      }}>
        <span style={{ fontSize: 14 }}>💡</span>
        <span style={{ color: COLORS.success, fontSize: 13, fontWeight: 600, marginLeft: 8 }}>Presenter Mode:</span>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginLeft: 6 }}>
          Double-tap or use arrow keys to advance demos quickly
        </span>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: 24, paddingBottom: 16 }}>
        <button onClick={onLogout} style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.4)',
          padding: '10px 24px',
          fontSize: 12,
          borderRadius: 8,
          cursor: 'pointer',
          marginBottom: 16,
        }}>← Exit Portal</button>
        
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
          © 2025 Noetic Dharma Group • Confidential
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DEMO WRAPPER
// ═══════════════════════════════════════════════════════════════════════════════

function DemoWrapper({ demoId, onBack }) {
  // Find the demo across all columns
  let demo = null;
  for (const column of DEMO_COLUMNS) {
    const found = column.items.find(d => d.id === demoId);
    if (found) { demo = found; break; }
  }

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
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
        <div style={{ color: COLORS.white, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Coming Soon</div>
        <div style={{ color: COLORS.gray, fontSize: 14, marginBottom: 24 }}>{demo?.title || 'This feature'} is under development</div>
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
      {/* Floating Exit Button */}
      <button
        onClick={onBack}
        style={{
          position: 'fixed',
          top: 12,
          left: 12,
          zIndex: 9999,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
        }}
      >← Exit</button>
      <DemoComponent />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════════

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
