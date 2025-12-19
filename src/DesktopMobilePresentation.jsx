/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import { useState, useRef, useEffect } from 'react';

// Mock useNavigate since we don't use react-router in the unified portal
const useNavigate = () => () => {};


const COLORS = {
  primary: '#C41E3A',
  navy: '#0A1628',
  gold: '#D4AF37',
  white: '#FFFFFF',
  black: '#000000'
};

const TOTAL_SLIDES = 37;
const PIN_CODE = 'STOPAUTISMNOW';

const MARIA = {
  questions: [
    "What is your full legal name?",
    "What is your phone number and email?",
    "Where do you live?",
    "When did this accident happen?",
    "What time did it occur?",
    "Where exactly did this happen?",
    "What were the road and weather conditions?",
    "Tell me what happened in your own words.",
    "Who do you believe was at fault?",
    "Describe your vehicle.",
    "Describe the other vehicle.",
    "Were there any passengers?",
    "Tell me about the other driver.",
    "Were there any witnesses?",
    "Did police respond to the scene?",
    "Describe your injuries.",
    "What medical treatment have you received?",
    "What insurance coverage do you have?",
    "How has this affected your life?"
  ],
  responses: [
    "Maria Elena Gonzales. G-O-N-Z-A-L-E-S.",
    "My cell is nine four one, five five five, three eight four seven. Email is maria dot gonzales at gmail dot com.",
    "I live in Sarasota, Florida. On Proctor Road, near the mall.",
    "Yesterday. December fifteenth. Sunday morning.",
    "It was about eight forty-five... maybe eight forty-seven in the morning. I had just dropped my kids off at school.",
    "The intersection of Bee Ridge Road and Beneva Road. Right there at that big intersection... by the Publix and the Walgreens.",
    "It was clear. Sunny morning. The roads were dry. Perfect visibility. There was no reason... no reason this should have happened.",
    "I had just dropped off my two kids at Tuttle Elementary. They're seven and nine. I was driving to work at Walmart. I had the green light. I KNOW I had the green light because I watched it turn green and I waited a second before going. Then this huge truck just came out of nowhere from my left. A big beer truck. I saw the Budweiser logo right before it hit me. It slammed right into my door. I spun around... everything was spinning... When I stopped, I couldn't move. I couldn't breathe. I thought I was going to die. I kept thinking about my kids... who was going to pick them up from school?",
    "The truck driver. One hundred percent. He ran a red light. I had green. A woman from the gas station came over and told me she saw the whole thing. She told the police he ran the red light.",
    "It's a twenty nineteen Toyota Corolla. Silver. It's completely destroyed. The whole driver's side is caved in. They towed it away. I'm pretty sure it's totaled.",
    "A huge box truck. Beer delivery truck. It had Budweiser and Miller Lite logos all over it. The company name on the side said Gulf Distributing.",
    "No... no, thank God. I was alone. My kids were already at school. Thank God they weren't in the car with me.",
    "I didn't get to talk to him much. He was a younger guy, maybe in his thirties. He was wearing a work uniform. He was on his phone when he got out. The police got all his information. I heard he was cited.",
    "Yes! A woman from the Shell gas station on the corner. She ran over right after it happened. She told me she saw everything and that he definitely ran the red light. She gave her information to the police.",
    "Yes, Sarasota Police came. Officer Williams took the report. The report number is twenty twenty-five SPD one two eight eight four seven. She told me the truck driver was cited for running the red light.",
    "Everything hurts. My neck is the worst. They put me in this collar and it's so uncomfortable. I have cuts on my face and my left arm from the glass. My ribs hurt every time I breathe. My left knee is all swollen and I can barely walk. I'm using crutches. And I have this constant headache that won't go away. I feel dizzy sometimes.",
    "The ambulance took me to Sarasota Memorial Hospital. They did X-rays and a CT scan of my head and neck. They gave me this neck brace and some pain medication. Norco and Flexeril. They said I need to follow up with my doctor and I probably need an MRI for my neck.",
    "I have Progressive insurance on my car. The truck... I don't know yet what insurance they have. The police said it's a commercial vehicle so it should have big coverage. I hope so.",
    "I don't know what I'm going to do. I can't work like this. I can't even drive. I make fifteen dollars an hour at Walmart. If I don't work, I don't get paid. I'm a single mom. I have two kids who need me. My car is gone. My rent is due next week. I have eight hundred and forty-seven dollars in my checking account. That's everything I have. Please help me. I don't know what else to do. I need help."
  ]
};

// ============================================================================
// LANDING PAGE
// ============================================================================

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{
      minHeight: '100dvh',
      background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.black} 100%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      {/* Logo */}
      <img 
        src="/logo.jpg" 
        alt="1-800-ASK-GARY" 
        style={{ height: 'clamp(80px, 15vw, 140px)', width: 'auto', marginBottom: '15px' }} 
      />
      
      {/* Tagline */}
      <div style={{
        fontSize: 'clamp(16px, 3vw, 28px)',
        color: COLORS.gold,
        letterSpacing: '4px',
        fontWeight: '600',
        marginBottom: '40px'
      }}>
        CASE MANAGEMENT PORTAL™
      </div>
      
      {/* Main Card */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '24px',
        padding: 'clamp(30px, 5vw, 60px)',
        maxWidth: '700px',
        width: '100%',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{
          color: COLORS.white,
          fontSize: 'clamp(24px, 5vw, 42px)',
          fontWeight: '700',
          marginBottom: '15px',
          lineHeight: '1.2'
        }}>
          Voice-First Accident<br />Onboarding Platform™
        </h1>
        
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(14px, 2.5vw, 20px)',
          marginBottom: '40px',
          lineHeight: '1.5'
        }}>
          Select your viewing experience to continue
        </p>
        
        {/* Device Selection Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Desktop Button */}
          <button
            onClick={() => navigate('/desktop')}
            style={{
              width: '100%',
              padding: 'clamp(20px, 4vw, 35px)',
              background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`,
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(196, 30, 58, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontSize: 'clamp(35px, 6vw, 55px)' }}>🖥️</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: COLORS.white, fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: '700' }}>
                Desktop / Laptop
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(12px, 2vw, 16px)', marginTop: '5px' }}>
                Investor Presentations • Boardroom Demos
              </div>
            </div>
            <span style={{ color: COLORS.gold, fontSize: 'clamp(24px, 4vw, 36px)', marginLeft: 'auto' }}>→</span>
          </button>
          
          {/* Mobile Button */}
          <button
            onClick={() => navigate('/mobile')}
            style={{
              width: '100%',
              padding: 'clamp(20px, 4vw, 35px)',
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(212, 175, 55, 0.5)',
              borderRadius: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 175, 55, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontSize: 'clamp(35px, 6vw, 55px)' }}>📱</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: COLORS.white, fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: '700' }}>
                Mobile / Phone
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(12px, 2vw, 16px)', marginTop: '5px' }}>
                Consumer Intake Experience • iPhone / Android
              </div>
            </div>
            <span style={{ color: COLORS.gold, fontSize: 'clamp(24px, 4vw, 36px)', marginLeft: 'auto' }}>→</span>
          </button>
        </div>
      </div>
      
      {/* NDG Branding */}
      <div style={{
        marginTop: '50px',
        textAlign: 'center'
      }}>
        <div style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: 'clamp(11px, 1.5vw, 14px)',
          marginBottom: '8px'
        }}>
          DEVELOPED & PRESENTED BY
        </div>
        <div style={{
          color: COLORS.gold,
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          fontWeight: '600',
          letterSpacing: '2px'
        }}>
          NOETIC DHARMA GROUP™
        </div>
        <div style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 'clamp(10px, 1.5vw, 13px)',
          marginTop: '5px'
        }}>
          Private Equity & Merchant Banking | Digital Transformation
        </div>
        <div style={{
          color: 'rgba(255,255,255,0.3)',
          fontSize: 'clamp(9px, 1.2vw, 11px)',
          marginTop: '15px'
        }}>
          CONFIDENTIAL & PROPRIETARY | www.noeticdharma.com
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

const Logo = ({ size = 'medium' }) => {
  const sizes = {
    small: { height: '40px' },
    medium: { height: '60px' },
    large: { height: '90px' }
  };
  return <img src="/logo.jpg" alt="1-800-ASK-GARY" style={{ ...sizes[size], width: 'auto', objectFit: 'contain' }} />;
};

const PinGate = ({ onSuccess, isMobile }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (pin.toUpperCase() === PIN_CODE) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{
      height: '100dvh',
      background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.black} 100%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '20px' : '40px'
    }}>
      <Logo size={isMobile ? 'medium' : 'large'} />
      <div style={{
        marginTop: '10px',
        fontSize: isMobile ? '14px' : '24px',
        fontWeight: '600',
        color: COLORS.gold,
        letterSpacing: isMobile ? '2px' : '4px'
      }}>
        CASE MANAGEMENT PORTAL™
      </div>
      
      <div style={{
        marginTop: isMobile ? '30px' : '50px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '20px',
        padding: isMobile ? '30px 25px' : '50px 60px',
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.1)',
        width: '100%',
        maxWidth: isMobile ? '320px' : '450px'
      }}>
        <div style={{ fontSize: isMobile ? '40px' : '60px', marginBottom: '15px' }}>🔒</div>
        <h2 style={{ color: COLORS.white, fontSize: isMobile ? '20px' : '28px', marginBottom: '8px' }}>
          Secure Access Required
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '25px', fontSize: isMobile ? '14px' : '18px' }}>
          Enter access code to continue
        </p>
        
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="ACCESS CODE"
          style={{
            width: '100%',
            padding: isMobile ? '14px 16px' : '20px 24px',
            fontSize: isMobile ? '18px' : '24px',
            textAlign: 'center',
            letterSpacing: isMobile ? '4px' : '8px',
            background: 'rgba(255,255,255,0.1)',
            border: error ? '2px solid #ff4444' : '2px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            color: COLORS.white,
            outline: 'none'
          }}
        />
        
        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            marginTop: '15px',
            padding: isMobile ? '14px' : '18px',
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: '600',
            background: COLORS.primary,
            color: COLORS.white,
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            letterSpacing: '2px'
          }}
        >
          ENTER →
        </button>
        
        {error && <p style={{ color: '#ff4444', marginTop: '12px', fontSize: '14px' }}>Invalid access code</p>}
      </div>
      
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '30px',
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '14px',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}
      >
        ← Back to Device Selection
      </button>
      
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
        CONFIDENTIAL & PROPRIETARY<br />
        <span style={{ color: COLORS.gold }}>NOETIC DHARMA GROUP™</span>
      </div>
    </div>
  );
};

// ============================================================================
// DESKTOP VERSION
// ============================================================================

const DesktopSlideContainer = ({ children, currentSlide, onPrev, onNext }) => {
  const navigate = useNavigate();
  return (
    <div style={{
      height: '100vh',
      background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.black} 100%)`,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <div style={{
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Logo size="small" />
          </button>
        </div>
        <div style={{ color: COLORS.gold, fontSize: '18px', fontWeight: '600' }}>
          {currentSlide + 1} / {TOTAL_SLIDES}
        </div>
      </div>
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '25px 60px',
        overflow: 'hidden',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        {children}
      </div>
      
      <div style={{
        padding: '15px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        flexShrink: 0
      }}>
        <button onClick={onPrev} disabled={currentSlide === 0} style={{
          padding: '14px 35px', fontSize: '16px', fontWeight: '600',
          background: currentSlide === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)',
          color: currentSlide === 0 ? 'rgba(255,255,255,0.3)' : COLORS.white,
          border: 'none', borderRadius: '10px', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer'
        }}>← BACK</button>
        
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textAlign: 'center' }}>
          CONFIDENTIAL & PROPRIETARY | <span style={{ color: COLORS.gold }}>NOETIC DHARMA GROUP™</span>
        </div>
        
        <button onClick={onNext} disabled={currentSlide === TOTAL_SLIDES - 1} style={{
          padding: '14px 35px', fontSize: '16px', fontWeight: '600',
          background: currentSlide === TOTAL_SLIDES - 1 ? 'rgba(255,255,255,0.1)' : COLORS.primary,
          color: COLORS.white, border: 'none', borderRadius: '10px',
          cursor: currentSlide === TOTAL_SLIDES - 1 ? 'not-allowed' : 'pointer'
        }}>NEXT →</button>
      </div>
    </div>
  );
};

// Desktop Slides
const DSlide0 = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ fontSize: '20px', color: COLORS.gold, letterSpacing: '5px', fontWeight: '600', marginBottom: '25px' }}>CASE MANAGEMENT PORTAL™</div>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '24px', padding: '50px 70px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: COLORS.white, fontSize: '48px', fontWeight: '700', lineHeight: '1.2', margin: 0 }}>
        The First & Only<br /><span style={{ color: COLORS.gold }}>Voice-First</span> Accident<br />Onboarding Platform™
      </h1>
    </div>
    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '35px' }}>
      {[{ val: '5 min', label: 'Complete Intake' }, { val: '100%', label: 'Accuracy Rate' }, { val: '24/7', label: 'Availability' }].map((s, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '25px 45px', borderRadius: '16px', textAlign: 'center' }}>
          <div style={{ color: COLORS.gold, fontSize: '38px', fontWeight: '700' }}>{s.val}</div>
          <div style={{ color: COLORS.white, fontSize: '15px', marginTop: '6px' }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const DSlide1 = () => (
  <div>
    <h2 style={{ color: COLORS.primary, fontSize: '42px', textAlign: 'center', margin: '0 0 30px' }}>THE PROBLEM</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      {[
        { icon: '📞', title: 'Missed Calls', desc: 'Your call center closes. Accidents don\'t.' },
        { icon: '⏰', title: 'Delayed Intake', desc: 'Every hour delay drops conversion 15%.' },
        { icon: '📝', title: 'Incomplete Info', desc: 'Staff rush through, miss key details.' },
        { icon: '💸', title: 'High Costs', desc: '$45/hour staff × 24/7 = $$$' }
      ].map((item, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '35px 25px', textAlign: 'center' }}>
          <div style={{ fontSize: '45px', marginBottom: '15px' }}>{item.icon}</div>
          <h3 style={{ color: COLORS.gold, fontSize: '18px', margin: '0 0 10px' }}>{item.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', margin: 0, lineHeight: '1.4' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const DSlide2 = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 style={{ color: COLORS.gold, fontSize: '42px', margin: '0 0 30px' }}>THE SOLUTION</h2>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '24px', padding: '40px 50px', maxWidth: '950px', margin: '0 auto' }}>
      <h3 style={{ color: COLORS.white, fontSize: '32px', margin: '0 0 30px', lineHeight: '1.3' }}>
        AI-Powered Voice Intake That<br /><span style={{ color: COLORS.gold }}>Never Sleeps, Never Forgets</span>
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
        {[{ icon: '🎙️', text: 'Natural Voice' }, { icon: '📋', text: 'Complete Details' }, { icon: '⚡', text: 'Instant Transcript' }, { icon: '🔒', text: 'HIPAA Compliant' }].map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '14px', padding: '25px 15px' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{item.icon}</div>
            <div style={{ color: COLORS.white, fontSize: '16px' }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DSlide3 = () => (
  <div>
    <h2 style={{ color: COLORS.white, fontSize: '42px', textAlign: 'center', margin: '0 0 30px' }}>HOW IT WORKS</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '850px', margin: '0 auto' }}>
      {[
        { num: '1', title: 'Client Calls Your Number', desc: 'After hours, weekends, holidays' },
        { num: '2', title: 'AI Conducts Full Intake', desc: 'Natural conversation, complete details' },
        { num: '3', title: 'Audio + Transcript Saved', desc: 'Every word recorded' },
        { num: '4', title: 'Case Ready for Review', desc: 'Complete file in your dashboard' }
      ].map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '25px', background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px 30px' }}>
          <div style={{ width: '60px', height: '60px', background: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '700', color: COLORS.white, flexShrink: 0 }}>{step.num}</div>
          <div>
            <h3 style={{ color: COLORS.gold, fontSize: '22px', margin: 0 }}>{step.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', margin: '5px 0 0' }}>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DSlide4 = () => (
  <div>
    <h2 style={{ color: COLORS.gold, fontSize: '42px', textAlign: 'center', margin: '0 0 30px' }}>YOUR COMPETITIVE MOAT</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      {[
        { icon: '🏆', title: 'First Mover', desc: 'Only firm with 24/7 voice intake' },
        { icon: '📈', title: 'Higher Conversion', desc: 'Capture leads competitors miss' },
        { icon: '⚡', title: 'Speed to Sign', desc: 'Complete intake while fresh' },
        { icon: '💰', title: 'Lower CPL', desc: 'AI pennies vs $45/hr staff' }
      ].map((item, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '35px 20px', border: '2px solid rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.icon}</div>
          <h3 style={{ color: COLORS.gold, fontSize: '20px', margin: '0 0 10px' }}>{item.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', margin: 0, lineHeight: '1.4' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const DSlide5 = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 style={{ color: COLORS.primary, fontSize: '42px', margin: '0 0 40px' }}>THE ROI IS UNDENIABLE</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
      {[
        { value: '35%', label: 'More Leads', sub: 'After-hours captured' },
        { value: '60%', label: 'Cost Reduction', sub: 'Vs. 24/7 staff' },
        { value: '3x', label: 'Faster Intake', sub: '5 min vs 15 min' },
        { value: '$0', label: 'Missed Calls', sub: 'Every call answered' }
      ].map((stat, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '40px 25px' }}>
          <div style={{ color: COLORS.gold, fontSize: '50px', fontWeight: '700' }}>{stat.value}</div>
          <div style={{ color: COLORS.white, fontSize: '18px', fontWeight: '600', marginTop: '12px' }}>{stat.label}</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginTop: '6px' }}>{stat.sub}</div>
        </div>
      ))}
    </div>
  </div>
);

const DSlide6 = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 style={{ color: COLORS.white, fontSize: '42px', margin: '0 0 30px' }}>NOW, SEE IT IN ACTION</h2>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '24px', padding: '50px 70px', maxWidth: '850px', margin: '0 auto' }}>
      <div style={{ fontSize: '70px', marginBottom: '20px' }}>🎧</div>
      <h3 style={{ color: COLORS.gold, fontSize: '32px', margin: '0 0 15px' }}>Meet Maria Gonzales</h3>
      <p style={{ color: COLORS.white, fontSize: '20px', lineHeight: '1.5', margin: '0 0 25px' }}>
        A single mother hit by a beer truck.<br />She called at 9:47 PM on a Sunday.
      </p>
      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '14px', padding: '20px 35px', border: '2px solid rgba(212, 175, 55, 0.5)' }}>
        <p style={{ color: COLORS.gold, fontSize: '18px', fontStyle: 'italic', margin: 0 }}>
          "You'll hear her ACTUAL voice — captured by the ASK-GARY AI system."
        </p>
      </div>
    </div>
  </div>
);

const DSlide7 = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ background: 'rgba(212, 175, 55, 0.15)', borderRadius: '24px', padding: '50px 70px', maxWidth: '850px', margin: '0 auto', border: '2px solid rgba(212, 175, 55, 0.4)' }}>
      <div style={{ fontSize: '70px', marginBottom: '20px' }}>🎙️</div>
      <h2 style={{ color: COLORS.gold, fontSize: '38px', margin: '0 0 25px' }}>ALL CALLS ARE RECORDED</h2>
      <div style={{ background: COLORS.navy, borderRadius: '14px', padding: '25px 35px', marginBottom: '25px' }}>
        <p style={{ color: COLORS.white, fontSize: '22px', lineHeight: '1.5', margin: 0 }}>
          Every word is <strong style={{ color: COLORS.gold }}>automatically recorded</strong> and 
          <strong style={{ color: COLORS.gold }}> transcribed in real-time</strong> to the case file.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '35px' }}>
        {[{ icon: '📁', text: 'Saved' }, { icon: '✍️', text: 'Transcribed' }, { icon: '🔒', text: 'HIPAA' }].map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '20px 30px' }}>
            <div style={{ fontSize: '35px', marginBottom: '8px' }}>{item.icon}</div>
            <div style={{ color: COLORS.white, fontSize: '14px' }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DSlide8 = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 style={{ color: COLORS.white, fontSize: '38px', margin: '0 0 30px' }}>IN THE NEXT 19 SLIDES...</h2>
    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '24px', padding: '45px 55px', maxWidth: '800px', margin: '0 auto' }}>
      <p style={{ color: COLORS.white, fontSize: '24px', lineHeight: '1.5', margin: '0 0 35px' }}>
        Hear <strong style={{ color: COLORS.gold }}>Maria's actual voice</strong> responding to each intake question.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '25px' }}>
        {[{ icon: '🎧', label: 'Real Audio' }, { icon: '📝', label: 'Real Transcript' }, { icon: '📋', label: 'Real Data' }].map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '45px' }}>{item.icon}</div>
            <div style={{ color: COLORS.gold, fontSize: '16px', marginTop: '8px' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ marginTop: '25px', background: COLORS.primary, borderRadius: '12px', padding: '18px 35px', display: 'inline-block' }}>
      <p style={{ color: COLORS.white, fontSize: '18px', margin: 0 }}>🔊 <strong>Audio auto-plays. Volume ready!</strong></p>
    </div>
  </div>
);

const DSlide9 = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '24px', padding: '50px 70px', maxWidth: '750px', margin: '0 auto' }}>
      <h2 style={{ color: COLORS.gold, fontSize: '38px', margin: '0 0 25px' }}>THE INTERVIEW BEGINS</h2>
      <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px', border: '3px solid rgba(212, 175, 55, 0.5)' }}>👩</div>
      <h3 style={{ color: COLORS.white, fontSize: '28px', margin: '0 0 10px' }}>Maria Gonzales</h3>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', margin: '0 0 25px' }}>Motor Vehicle Accident<br />December 15, 2025 • 9:47 PM</p>
      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '18px 25px' }}>
        <p style={{ color: COLORS.gold, fontSize: '18px', margin: 0 }}>▶ Click NEXT for Question 1</p>
      </div>
    </div>
  </div>
);

const DAudioSlide = ({ questionIndex, isPlaying, onPlay }) => {
  const question = MARIA.questions[questionIndex];
  const response = MARIA.responses[questionIndex];
  
  return (
    <div style={{ display: 'flex', gap: '25px', height: '100%' }}>
      <div style={{ flex: '0 0 38%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ background: 'rgba(196, 30, 58, 0.2)', borderRadius: '14px', padding: '25px', border: '2px solid rgba(196, 30, 58, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ background: COLORS.primary, color: COLORS.white, padding: '6px 14px', borderRadius: '8px', fontSize: '14px', fontWeight: '700' }}>Q{questionIndex + 1}</span>
            <span style={{ background: 'rgba(212, 175, 55, 0.2)', color: COLORS.gold, padding: '6px 10px', borderRadius: '8px', fontSize: '12px' }}>🎙️ RECORDED</span>
          </div>
          <h2 style={{ color: COLORS.white, fontSize: '24px', fontWeight: '600', margin: 0, lineHeight: '1.4' }}>"{question}"</h2>
        </div>
        
        <button onClick={onPlay} style={{
          width: '100%', padding: '25px',
          background: isPlaying ? 'linear-gradient(135deg, #1a5a1a 0%, #0d3d0d 100%)' : 'linear-gradient(135deg, #2a7a2a 0%, #1a5a1a 100%)',
          border: 'none', borderRadius: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
        }}>
          <span style={{ fontSize: '40px' }}>{isPlaying ? '🔊' : '▶️'}</span>
          <span style={{ color: COLORS.white, fontSize: '20px', fontWeight: '600' }}>{isPlaying ? 'PLAYING...' : 'HEAR MARIA'}</span>
        </button>
      </div>
      
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.95)', borderRadius: '14px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
          <span style={{ background: COLORS.navy, color: COLORS.white, padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>TRANSCRIPT</span>
          <span style={{ color: '#666', fontSize: '12px' }}>Auto-saved to case file</span>
        </div>
        <p style={{ color: COLORS.navy, fontSize: '22px', lineHeight: '1.7', margin: 0, fontStyle: 'italic', flex: 1, overflow: 'auto' }}>"{response}"</p>
      </div>
    </div>
  );
};

const DSlide29 = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ background: 'linear-gradient(135deg, #1a5a1a 0%, #0d3d0d 100%)', borderRadius: '24px', padding: '50px 70px', maxWidth: '850px', margin: '0 auto' }}>
      <div style={{ fontSize: '70px', marginBottom: '15px' }}>✅</div>
      <h2 style={{ color: COLORS.white, fontSize: '42px', margin: '0 0 15px' }}>INTERVIEW COMPLETE</h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '22px', margin: '0 0 35px' }}>Maria's complete case file is ready for review.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {[{ icon: '🎙️', label: '19 Recordings' }, { icon: '📝', label: 'Transcripts' }, { icon: '📋', label: 'Case Summary' }, { icon: '⏱️', label: '5 Minutes' }].map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '14px', padding: '25px 15px' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{item.icon}</div>
            <div style={{ color: COLORS.white, fontSize: '14px' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DSlide30 = () => (
  <div>
    <h2 style={{ color: COLORS.gold, fontSize: '38px', textAlign: 'center', margin: '0 0 30px' }}>WHAT HAPPENS NEXT</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '950px', margin: '0 auto' }}>
      {[
        { num: '1', title: 'Case File Created', desc: 'All audio, transcripts compiled', icon: '📁' },
        { num: '2', title: 'Attorney Notified', desc: 'Instant alert with summary', icon: '📱' },
        { num: '3', title: 'Client Follow-Up', desc: 'Automated confirmation text', icon: '💬' },
        { num: '4', title: 'Retainer Ready', desc: 'Pre-filled documents ready', icon: '✍️' }
      ].map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '25px' }}>
          <div style={{ width: '50px', height: '50px', background: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '700', color: COLORS.white, flexShrink: 0 }}>{step.num}</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: COLORS.gold, fontSize: '20px', margin: 0 }}>{step.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: '5px 0 0' }}>{step.desc}</p>
          </div>
          <div style={{ fontSize: '35px' }}>{step.icon}</div>
        </div>
      ))}
    </div>
  </div>
);

const DSlide31 = () => (
  <div>
    <h2 style={{ color: COLORS.primary, fontSize: '38px', textAlign: 'center', margin: '0 0 30px' }}>CLIENT RETENTION ADVANTAGE</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', maxWidth: '1050px', margin: '0 auto' }}>
      {[
        { icon: '❤️', title: 'Emotional Bond', desc: 'Maria shared her story. She feels heard.' },
        { icon: '⚡', title: 'Immediate Help', desc: '9:47 PM Sunday — she got help instantly.' },
        { icon: '📋', title: 'Complete Info', desc: 'Every detail captured while fresh.' }
      ].map((item, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '40px 30px', border: '2px solid rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
          <div style={{ fontSize: '55px', marginBottom: '15px' }}>{item.icon}</div>
          <h3 style={{ color: COLORS.gold, fontSize: '22px', margin: '0 0 12px' }}>{item.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const DSlide32 = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 style={{ color: COLORS.white, fontSize: '38px', margin: '0 0 35px' }}>THE NUMBERS DON'T LIE</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
      {[
        { value: '73%', label: 'Calls after hours' },
        { value: '47%', label: 'Lost to voicemail' },
        { value: '3.2x', label: 'Higher conversion' },
        { value: '$4,700', label: 'Per lead value' }
      ].map((stat, i) => (
        <div key={i} style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '16px', padding: '40px 20px' }}>
          <div style={{ color: COLORS.gold, fontSize: '48px', fontWeight: '700' }}>{stat.value}</div>
          <div style={{ color: COLORS.white, fontSize: '15px', marginTop: '12px' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const DSlide33 = () => (
  <div>
    <h2 style={{ color: COLORS.gold, fontSize: '38px', textAlign: 'center', margin: '0 0 30px' }}>SIMPLE IMPLEMENTATION</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', maxWidth: '1050px', margin: '0 auto' }}>
      {[
        { week: 'WEEK 1', title: 'Setup & Config' },
        { week: 'WEEK 2', title: 'Integration & Test' },
        { week: 'WEEK 3', title: 'Staff Training' },
        { week: 'WEEK 4', title: 'Go Live!' }
      ].map((step, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '28px 20px', textAlign: 'center' }}>
          <div style={{ background: COLORS.primary, color: COLORS.white, padding: '10px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', marginBottom: '15px', display: 'inline-block' }}>{step.week}</div>
          <h3 style={{ color: COLORS.gold, fontSize: '18px', margin: 0 }}>{step.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

const DSlide34 = () => (
  <div>
    <h2 style={{ color: COLORS.white, fontSize: '38px', textAlign: 'center', margin: '0 0 30px' }}>WHAT YOU GET</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', maxWidth: '1050px', margin: '0 auto' }}>
      {[
        { icon: '🎙️', title: 'Voice AI Platform', items: ['24/7 intake', 'Natural voice', 'Multi-language'] },
        { icon: '📊', title: 'Case Management', items: ['Dashboard', 'Audio + transcripts', 'Notifications'] },
        { icon: '🔧', title: 'Full Support', items: ['Success manager', 'Training', 'Optimization'] }
      ].map((section, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '35px 30px' }}>
          <div style={{ fontSize: '50px', marginBottom: '15px', textAlign: 'center' }}>{section.icon}</div>
          <h3 style={{ color: COLORS.gold, fontSize: '22px', margin: '0 0 20px', textAlign: 'center' }}>{section.title}</h3>
          {section.items.map((item, j) => (
            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ color: '#4CAF50', fontSize: '20px' }}>✓</span>
              <span style={{ color: COLORS.white, fontSize: '16px' }}>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const DSlide35 = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ background: 'rgba(212, 175, 55, 0.15)', borderRadius: '24px', padding: '50px 70px', maxWidth: '850px', margin: '0 auto', border: '3px solid rgba(212, 175, 55, 0.5)' }}>
      <div style={{ fontSize: '65px', marginBottom: '20px' }}>🏆</div>
      <h2 style={{ color: COLORS.gold, fontSize: '38px', margin: '0 0 20px' }}>EXCLUSIVE OPPORTUNITY</h2>
      <p style={{ color: COLORS.white, fontSize: '20px', lineHeight: '1.5', margin: '0 0 30px' }}>
        We offer <strong style={{ color: COLORS.gold }}>market exclusivity</strong> to the first PI firm in each metro. Once you're in, competitors are locked out.
      </p>
      <div style={{ background: COLORS.primary, borderRadius: '14px', padding: '25px 35px' }}>
        <p style={{ color: COLORS.white, fontSize: '22px', fontWeight: '600', margin: 0 }}>🔒 FL Gulf Coast: <span style={{ color: COLORS.gold }}>AVAILABLE NOW</span></p>
      </div>
    </div>
  </div>
);

const DSlide36 = () => (
  <div>
    <h2 style={{ color: COLORS.gold, fontSize: '38px', textAlign: 'center', margin: '0 0 30px' }}>NEXT STEPS</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px', maxWidth: '850px', margin: '0 auto' }}>
      {[
        { num: '1', title: 'Schedule Deep Dive', time: '60 min' },
        { num: '2', title: 'Custom Proposal', time: '48 hrs' },
        { num: '3', title: 'Pilot Program', time: '30 days' },
        { num: '4', title: 'Full Deployment', time: '4 weeks' }
      ].map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px 25px' }}>
          <div style={{ width: '48px', height: '48px', background: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', color: COLORS.white, flexShrink: 0 }}>{step.num}</div>
          <div style={{ flex: 1, color: COLORS.gold, fontSize: '18px' }}>{step.title}</div>
          <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '8px 15px', borderRadius: '8px', color: COLORS.gold, fontSize: '13px', fontWeight: '600' }}>{step.time}</div>
        </div>
      ))}
    </div>
  </div>
);

const DSlide37 = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ fontSize: '20px', color: COLORS.gold, letterSpacing: '4px', marginBottom: '15px' }}>CASE MANAGEMENT PORTAL™</div>
    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '24px', padding: '45px 55px', maxWidth: '650px', margin: '0 auto 25px' }}>
      <h2 style={{ color: COLORS.white, fontSize: '48px', margin: '0 0 15px' }}>THANK YOU</h2>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', margin: '0 0 25px' }}>Ready to capture every lead, every time?</p>
      <div style={{ background: COLORS.primary, borderRadius: '12px', padding: '20px 35px', display: 'inline-block' }}>
        <p style={{ color: COLORS.white, fontSize: '22px', margin: 0, fontWeight: '600' }}>📞 <span style={{ color: COLORS.gold }}>Schedule Your Demo</span></p>
      </div>
    </div>
    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
      Presented by<br /><span style={{ color: COLORS.gold, fontSize: '17px', fontWeight: '600' }}>NOETIC DHARMA GROUP™</span><br />
      <span style={{ fontSize: '12px' }}>Private Equity & Merchant Banking</span>
    </div>
  </div>
);

// Desktop App
const DesktopApp = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (authenticated && currentSlide >= 10 && currentSlide <= 28) {
      const audioIndex = currentSlide - 10;
      const audioNum = String(audioIndex + 1).padStart(2, '0');
      if (audioRef.current) audioRef.current.pause();
      audioRef.current = new Audio(`/audio/q${audioNum}.mp3`);
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onerror = () => setIsPlaying(false);
      setTimeout(() => { audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false)); }, 300);
    } else {
      if (audioRef.current) { audioRef.current.pause(); setIsPlaying(false); }
    }
    return () => { if (audioRef.current) audioRef.current.pause(); };
  }, [currentSlide, authenticated]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
      else { audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false)); }
    }
  };

  const goNext = () => { if (currentSlide < TOTAL_SLIDES - 1) setCurrentSlide(currentSlide + 1); };
  const goPrev = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  if (!authenticated) return <PinGate onSuccess={() => setAuthenticated(true)} isMobile={false} />;

  const renderSlide = () => {
    if (currentSlide >= 10 && currentSlide <= 28) return <DAudioSlide questionIndex={currentSlide - 10} isPlaying={isPlaying} onPlay={handlePlayAudio} />;
    const slides = [DSlide0, DSlide1, DSlide2, DSlide3, DSlide4, DSlide5, DSlide6, DSlide7, DSlide8, DSlide9];
    const endSlides = { 29: DSlide29, 30: DSlide30, 31: DSlide31, 32: DSlide32, 33: DSlide33, 34: DSlide34, 35: DSlide35, 36: DSlide36, 37: DSlide37 };
    if (currentSlide < 10) { const Slide = slides[currentSlide]; return <Slide />; }
    const Slide = endSlides[currentSlide] || DSlide0;
    return <Slide />;
  };

  return <DesktopSlideContainer currentSlide={currentSlide} onPrev={goPrev} onNext={goNext}>{renderSlide()}</DesktopSlideContainer>;
};

// ============================================================================
// MOBILE VERSION
// ============================================================================

const MobileSlideContainer = ({ children, currentSlide, onPrev, onNext, showFooter = false }) => {
  const navigate = useNavigate();
  return (
    <div style={{ height: '100dvh', background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.black} 100%)`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}><Logo size="small" /></button>
        <div style={{ color: COLORS.gold, fontSize: '13px', fontWeight: '600' }}>{currentSlide + 1} / {TOTAL_SLIDES}</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px 15px', overflow: 'hidden', minHeight: 0 }}>{children}</div>
      <div style={{ padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
        <button onClick={onPrev} disabled={currentSlide === 0} style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', background: currentSlide === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)', color: currentSlide === 0 ? 'rgba(255,255,255,0.3)' : COLORS.white, border: 'none', borderRadius: '8px', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer' }}>← BACK</button>
        <button onClick={onNext} disabled={currentSlide === TOTAL_SLIDES - 1} style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', background: currentSlide === TOTAL_SLIDES - 1 ? 'rgba(255,255,255,0.1)' : COLORS.primary, color: COLORS.white, border: 'none', borderRadius: '8px', cursor: currentSlide === TOTAL_SLIDES - 1 ? 'not-allowed' : 'pointer' }}>NEXT →</button>
      </div>
      {showFooter && <div style={{ padding: '8px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '10px', flexShrink: 0 }}>CONFIDENTIAL | <span style={{ color: COLORS.gold }}>NOETIC DHARMA GROUP™</span></div>}
    </div>
  );
};

// Mobile Slides (compact versions)
const MSlide0 = () => (
  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
    <div style={{ fontSize: '14px', color: COLORS.gold, letterSpacing: '3px', fontWeight: '600', marginBottom: '15px' }}>CASE MANAGEMENT PORTAL™</div>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '16px', padding: '25px 20px' }}>
      <h1 style={{ color: COLORS.white, fontSize: '24px', fontWeight: '700', lineHeight: '1.3', margin: 0 }}>The First & Only<br /><span style={{ color: COLORS.gold }}>Voice-First</span> Accident<br />Onboarding Platform™</h1>
    </div>
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
      {[{ val: '5 min', label: 'Intake' }, { val: '100%', label: 'Accurate' }, { val: '24/7', label: 'Available' }].map((s, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '12px 15px', borderRadius: '10px', textAlign: 'center' }}>
          <div style={{ color: COLORS.gold, fontSize: '20px', fontWeight: '700' }}>{s.val}</div>
          <div style={{ color: COLORS.white, fontSize: '11px', marginTop: '3px' }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide1 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.primary, fontSize: '24px', textAlign: 'center', margin: '0 0 15px', flexShrink: 0 }}>THE PROBLEM</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', flex: 1 }}>
      {[{ icon: '📞', title: 'Missed Calls', desc: 'Call center closes. Accidents don\'t.' }, { icon: '⏰', title: 'Delayed Intake', desc: 'Every hour drops conversion 15%.' }, { icon: '📝', title: 'Incomplete Info', desc: 'Staff rush, miss details.' }, { icon: '💸', title: 'High Costs', desc: '$45/hr × 24/7 = $$$' }].map((item, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '15px 12px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
          <h3 style={{ color: COLORS.gold, fontSize: '14px', margin: '0 0 5px' }}>{item.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0, lineHeight: '1.3' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const MSlide2 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h2 style={{ color: COLORS.gold, fontSize: '24px', margin: '0 0 15px' }}>THE SOLUTION</h2>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '16px', padding: '20px 15px' }}>
      <h3 style={{ color: COLORS.white, fontSize: '18px', margin: '0 0 15px', lineHeight: '1.3' }}>AI Voice Intake That<br /><span style={{ color: COLORS.gold }}>Never Sleeps, Never Forgets</span></h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {[{ icon: '🎙️', text: 'Natural Voice' }, { icon: '📋', text: 'Complete Details' }, { icon: '⚡', text: 'Instant Transcript' }, { icon: '🔒', text: 'HIPAA Compliant' }].map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 10px' }}>
            <div style={{ fontSize: '24px' }}>{item.icon}</div>
            <div style={{ color: COLORS.white, fontSize: '12px', marginTop: '5px' }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MSlide3 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.white, fontSize: '22px', textAlign: 'center', margin: '0 0 15px', flexShrink: 0 }}>HOW IT WORKS</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, justifyContent: 'center' }}>
      {[{ num: '1', title: 'Client Calls', desc: 'After hours, weekends, holidays' }, { num: '2', title: 'AI Conducts Intake', desc: 'Natural conversation, full details' }, { num: '3', title: 'Audio + Transcript Saved', desc: 'Every word recorded' }, { num: '4', title: 'Case Ready', desc: 'Complete file for review' }].map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 15px' }}>
          <div style={{ width: '40px', height: '40px', background: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '700', color: COLORS.white, flexShrink: 0 }}>{step.num}</div>
          <div><h3 style={{ color: COLORS.gold, fontSize: '15px', margin: 0 }}>{step.title}</h3><p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: '3px 0 0' }}>{step.desc}</p></div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide4 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.gold, fontSize: '22px', textAlign: 'center', margin: '0 0 15px', flexShrink: 0 }}>YOUR COMPETITIVE MOAT</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', flex: 1 }}>
      {[{ icon: '🏆', title: 'First Mover', desc: 'Only firm with 24/7 voice' }, { icon: '📈', title: 'Higher Conv.', desc: 'Capture leads others miss' }, { icon: '⚡', title: 'Speed to Sign', desc: 'Intake while fresh' }, { icon: '💰', title: 'Lower CPL', desc: 'AI vs $45/hr staff' }].map((item, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '15px 12px', border: '1px solid rgba(212, 175, 55, 0.3)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '30px', marginBottom: '8px' }}>{item.icon}</div>
          <h3 style={{ color: COLORS.gold, fontSize: '14px', margin: '0 0 5px' }}>{item.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', margin: 0, lineHeight: '1.3' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const MSlide5 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h2 style={{ color: COLORS.primary, fontSize: '22px', margin: '0 0 20px' }}>THE ROI IS UNDENIABLE</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      {[{ value: '35%', label: 'More Leads', sub: 'After-hours' }, { value: '60%', label: 'Cost Cut', sub: 'Vs. 24/7 staff' }, { value: '3x', label: 'Faster', sub: '5 min vs 15' }, { value: '$0', label: 'Missed', sub: 'Every call' }].map((stat, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px 12px' }}>
          <div style={{ color: COLORS.gold, fontSize: '32px', fontWeight: '700' }}>{stat.value}</div>
          <div style={{ color: COLORS.white, fontSize: '14px', fontWeight: '600', marginTop: '5px' }}>{stat.label}</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', marginTop: '3px' }}>{stat.sub}</div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide6 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h2 style={{ color: COLORS.white, fontSize: '22px', margin: '0 0 15px' }}>SEE IT IN ACTION</h2>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '16px', padding: '25px 20px' }}>
      <div style={{ fontSize: '50px', marginBottom: '15px' }}>🎧</div>
      <h3 style={{ color: COLORS.gold, fontSize: '20px', margin: '0 0 12px' }}>Meet Maria Gonzales</h3>
      <p style={{ color: COLORS.white, fontSize: '14px', lineHeight: '1.5', margin: '0 0 15px' }}>A single mother hit by a beer truck.<br />Called at 9:47 PM on a Sunday.</p>
      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px', padding: '15px', border: '1px solid rgba(212, 175, 55, 0.5)' }}>
        <p style={{ color: COLORS.gold, fontSize: '13px', fontStyle: 'italic', margin: 0 }}>"Hear her ACTUAL voice — captured by ASK-GARY AI."</p>
      </div>
    </div>
  </div>
);

const MSlide7 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ background: 'rgba(212, 175, 55, 0.15)', borderRadius: '16px', padding: '25px 20px', border: '2px solid rgba(212, 175, 55, 0.4)' }}>
      <div style={{ fontSize: '50px', marginBottom: '12px' }}>🎙️</div>
      <h2 style={{ color: COLORS.gold, fontSize: '20px', margin: '0 0 15px' }}>ALL CALLS RECORDED</h2>
      <div style={{ background: COLORS.navy, borderRadius: '12px', padding: '15px', marginBottom: '15px' }}>
        <p style={{ color: COLORS.white, fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Every word <strong style={{ color: COLORS.gold }}>recorded</strong> and <strong style={{ color: COLORS.gold }}>transcribed in real-time</strong>.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {[{ icon: '📁', text: 'Saved' }, { icon: '✍️', text: 'Transcribed' }, { icon: '🔒', text: 'HIPAA' }].map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 15px' }}>
            <div style={{ fontSize: '24px' }}>{item.icon}</div>
            <div style={{ color: COLORS.white, fontSize: '11px', marginTop: '5px' }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MSlide8 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h2 style={{ color: COLORS.white, fontSize: '20px', margin: '0 0 15px' }}>NEXT 19 SLIDES...</h2>
    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '25px 20px' }}>
      <p style={{ color: COLORS.white, fontSize: '15px', lineHeight: '1.5', margin: '0 0 20px' }}>Hear <strong style={{ color: COLORS.gold }}>Maria's actual voice</strong> on each question.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {[{ icon: '🎧', label: 'Audio' }, { icon: '📝', label: 'Transcript' }, { icon: '📋', label: 'Data' }].map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: '32px' }}>{item.icon}</div><div style={{ color: COLORS.gold, fontSize: '11px', marginTop: '5px' }}>{item.label}</div></div>
        ))}
      </div>
    </div>
    <div style={{ marginTop: '15px', background: COLORS.primary, borderRadius: '10px', padding: '12px 15px' }}>
      <p style={{ color: COLORS.white, fontSize: '13px', margin: 0 }}>🔊 <strong>Audio auto-plays. Volume ready!</strong></p>
    </div>
  </div>
);

const MSlide9 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '16px', padding: '30px 20px' }}>
      <h2 style={{ color: COLORS.gold, fontSize: '22px', margin: '0 0 15px' }}>INTERVIEW BEGINS</h2>
      <div style={{ width: '90px', height: '90px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '45px', border: '2px solid rgba(212, 175, 55, 0.5)' }}>👩</div>
      <h3 style={{ color: COLORS.white, fontSize: '20px', margin: '0 0 8px' }}>Maria Gonzales</h3>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: '0 0 15px' }}>MVA • Dec 15, 2025 • 9:47 PM</p>
      <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px', padding: '12px' }}><p style={{ color: COLORS.gold, fontSize: '14px', margin: 0 }}>▶ NEXT for Question 1</p></div>
    </div>
  </div>
);

const MAudioSlide = ({ questionIndex, isPlaying, onPlay }) => {
  const question = MARIA.questions[questionIndex];
  const response = MARIA.responses[questionIndex];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px' }}>
      <div style={{ background: 'rgba(196, 30, 58, 0.2)', borderRadius: '12px', padding: '12px 15px', border: '1px solid rgba(196, 30, 58, 0.4)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ background: COLORS.primary, color: COLORS.white, padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '700' }}>Q{questionIndex + 1}</span>
          <span style={{ color: COLORS.gold, fontSize: '10px' }}>🎙️ RECORDED</span>
        </div>
        <h2 style={{ color: COLORS.white, fontSize: '16px', fontWeight: '600', margin: 0, lineHeight: '1.3' }}>"{question}"</h2>
      </div>
      <button onClick={onPlay} style={{ width: '100%', padding: '15px', background: isPlaying ? 'linear-gradient(135deg, #1a5a1a 0%, #0d3d0d 100%)' : 'linear-gradient(135deg, #2a7a2a 0%, #1a5a1a 100%)', border: 'none', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexShrink: 0 }}>
        <span style={{ fontSize: '28px' }}>{isPlaying ? '🔊' : '▶️'}</span>
        <span style={{ color: COLORS.white, fontSize: '15px', fontWeight: '600' }}>{isPlaying ? 'PLAYING...' : 'HEAR MARIA'}</span>
      </button>
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.95)', borderRadius: '12px', padding: '15px', overflow: 'auto', minHeight: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span style={{ background: COLORS.navy, color: COLORS.white, padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '600' }}>TRANSCRIPT</span>
          <span style={{ color: '#666', fontSize: '10px' }}>Auto-saved</span>
        </div>
        <p style={{ color: COLORS.navy, fontSize: '15px', lineHeight: '1.5', margin: 0, fontStyle: 'italic' }}>"{response}"</p>
      </div>
    </div>
  );
};

const MSlide29 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ background: 'linear-gradient(135deg, #1a5a1a 0%, #0d3d0d 100%)', borderRadius: '16px', padding: '25px 20px' }}>
      <div style={{ fontSize: '50px', marginBottom: '12px' }}>✅</div>
      <h2 style={{ color: COLORS.white, fontSize: '22px', margin: '0 0 12px' }}>INTERVIEW COMPLETE</h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', margin: '0 0 20px' }}>Maria's case file is ready.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {[{ icon: '🎙️', label: '19 Recordings' }, { icon: '📝', label: 'Transcripts' }, { icon: '📋', label: 'Summary' }, { icon: '⏱️', label: '5 Minutes' }].map((item, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 10px' }}>
            <div style={{ fontSize: '24px' }}>{item.icon}</div>
            <div style={{ color: COLORS.white, fontSize: '11px', marginTop: '5px' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MSlide30 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.gold, fontSize: '20px', textAlign: 'center', margin: '0 0 12px', flexShrink: 0 }}>WHAT HAPPENS NEXT</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'center' }}>
      {[{ num: '1', title: 'Case File Created', icon: '📁' }, { num: '2', title: 'Attorney Notified', icon: '📱' }, { num: '3', title: 'Client Follow-Up', icon: '💬' }, { num: '4', title: 'Retainer Ready', icon: '✍️' }].map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 15px' }}>
          <div style={{ width: '36px', height: '36px', background: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: COLORS.white, flexShrink: 0 }}>{step.num}</div>
          <div style={{ flex: 1, color: COLORS.gold, fontSize: '15px', fontWeight: '500' }}>{step.title}</div>
          <div style={{ fontSize: '24px' }}>{step.icon}</div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide31 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.primary, fontSize: '20px', textAlign: 'center', margin: '0 0 12px', flexShrink: 0 }}>CLIENT RETENTION</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, justifyContent: 'center' }}>
      {[{ icon: '❤️', title: 'Emotional Bond', desc: 'Maria feels heard.' }, { icon: '⚡', title: 'Immediate Help', desc: '9:47 PM Sunday — instant.' }, { icon: '📋', title: 'Complete Info', desc: 'Every detail captured.' }].map((item, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '15px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '32px' }}>{item.icon}</div>
            <div><h3 style={{ color: COLORS.gold, fontSize: '15px', margin: 0 }}>{item.title}</h3><p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', margin: '4px 0 0' }}>{item.desc}</p></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide32 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h2 style={{ color: COLORS.white, fontSize: '20px', margin: '0 0 15px' }}>THE NUMBERS</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      {[{ value: '73%', label: 'After hours' }, { value: '47%', label: 'Lost to VM' }, { value: '3.2x', label: 'Higher conv.' }, { value: '$4,700', label: 'Per lead' }].map((stat, i) => (
        <div key={i} style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #8B0000 100%)`, borderRadius: '12px', padding: '18px 12px' }}>
          <div style={{ color: COLORS.gold, fontSize: '28px', fontWeight: '700' }}>{stat.value}</div>
          <div style={{ color: COLORS.white, fontSize: '12px', marginTop: '5px' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide33 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.gold, fontSize: '20px', textAlign: 'center', margin: '0 0 12px', flexShrink: 0 }}>IMPLEMENTATION</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'center' }}>
      {[{ week: 'WK 1', title: 'Setup' }, { week: 'WK 2', title: 'Integration' }, { week: 'WK 3', title: 'Training' }, { week: 'WK 4', title: 'Go Live!' }].map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: COLORS.primary, color: COLORS.white, padding: '10px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', minWidth: '55px', textAlign: 'center' }}>{step.week}</div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '14px 15px' }}><span style={{ color: COLORS.gold, fontSize: '15px' }}>{step.title}</span></div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide34 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.white, fontSize: '20px', textAlign: 'center', margin: '0 0 12px', flexShrink: 0 }}>WHAT YOU GET</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, justifyContent: 'center' }}>
      {[{ icon: '🎙️', title: 'Voice AI', items: '24/7 • Natural • Multi-lang' }, { icon: '📊', title: 'Case Mgmt', items: 'Dashboard • Audio • Transcripts' }, { icon: '🔧', title: 'Support', items: 'Manager • Training • Optimization' }].map((section, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '32px' }}>{section.icon}</div>
          <div><h3 style={{ color: COLORS.gold, fontSize: '15px', margin: 0 }}>{section.title}</h3><p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: '4px 0 0' }}>{section.items}</p></div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide35 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ background: 'rgba(212, 175, 55, 0.15)', borderRadius: '16px', padding: '25px 20px', border: '2px solid rgba(212, 175, 55, 0.4)' }}>
      <div style={{ fontSize: '50px', marginBottom: '12px' }}>🏆</div>
      <h2 style={{ color: COLORS.gold, fontSize: '20px', margin: '0 0 15px' }}>EXCLUSIVE OPPORTUNITY</h2>
      <p style={{ color: COLORS.white, fontSize: '14px', lineHeight: '1.5', margin: '0 0 20px' }}><strong style={{ color: COLORS.gold }}>Market exclusivity</strong> — first PI firm in each metro. Competitors locked out.</p>
      <div style={{ background: COLORS.primary, borderRadius: '10px', padding: '15px' }}><p style={{ color: COLORS.white, fontSize: '14px', margin: 0 }}>🔒 FL Gulf Coast: <span style={{ color: COLORS.gold }}>AVAILABLE</span></p></div>
    </div>
  </div>
);

const MSlide36 = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ color: COLORS.gold, fontSize: '20px', textAlign: 'center', margin: '0 0 12px', flexShrink: 0 }}>NEXT STEPS</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'center' }}>
      {[{ num: '1', title: 'Deep Dive', time: '60 min' }, { num: '2', title: 'Proposal', time: '48 hrs' }, { num: '3', title: 'Pilot', time: '30 days' }, { num: '4', title: 'Deploy', time: '4 wks' }].map((step, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 15px' }}>
          <div style={{ width: '32px', height: '32px', background: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: COLORS.white, flexShrink: 0 }}>{step.num}</div>
          <div style={{ flex: 1, color: COLORS.gold, fontSize: '14px' }}>{step.title}</div>
          <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '5px 10px', borderRadius: '6px', color: COLORS.gold, fontSize: '11px' }}>{step.time}</div>
        </div>
      ))}
    </div>
  </div>
);

const MSlide37 = () => (
  <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ fontSize: '14px', color: COLORS.gold, letterSpacing: '2px', marginBottom: '12px' }}>CASE MANAGEMENT PORTAL™</div>
    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '25px 20px', marginBottom: '15px' }}>
      <h2 style={{ color: COLORS.white, fontSize: '28px', margin: '0 0 12px' }}>THANK YOU</h2>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: '0 0 15px' }}>Ready to capture every lead?</p>
      <div style={{ background: COLORS.primary, borderRadius: '10px', padding: '15px' }}><p style={{ color: COLORS.white, fontSize: '15px', margin: 0 }}>📞 <span style={{ color: COLORS.gold }}>Schedule Demo</span></p></div>
    </div>
    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Presented by<br /><span style={{ color: COLORS.gold, fontSize: '13px', fontWeight: '600' }}>NOETIC DHARMA GROUP™</span></div>
  </div>
);

// Mobile App
const MobileApp = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (authenticated && currentSlide >= 10 && currentSlide <= 28) {
      const audioIndex = currentSlide - 10;
      const audioNum = String(audioIndex + 1).padStart(2, '0');
      if (audioRef.current) audioRef.current.pause();
      audioRef.current = new Audio(`/audio/q${audioNum}.mp3`);
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onerror = () => setIsPlaying(false);
      setTimeout(() => { audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false)); }, 300);
    } else {
      if (audioRef.current) { audioRef.current.pause(); setIsPlaying(false); }
    }
    return () => { if (audioRef.current) audioRef.current.pause(); };
  }, [currentSlide, authenticated]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
      else { audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false)); }
    }
  };

  const goNext = () => { if (currentSlide < TOTAL_SLIDES - 1) setCurrentSlide(currentSlide + 1); };
  const goPrev = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  if (!authenticated) return <PinGate onSuccess={() => setAuthenticated(true)} isMobile={true} />;

  const renderSlide = () => {
    if (currentSlide >= 10 && currentSlide <= 28) return <MAudioSlide questionIndex={currentSlide - 10} isPlaying={isPlaying} onPlay={handlePlayAudio} />;
    const slides = [MSlide0, MSlide1, MSlide2, MSlide3, MSlide4, MSlide5, MSlide6, MSlide7, MSlide8, MSlide9];
    const endSlides = { 29: MSlide29, 30: MSlide30, 31: MSlide31, 32: MSlide32, 33: MSlide33, 34: MSlide34, 35: MSlide35, 36: MSlide36, 37: MSlide37 };
    if (currentSlide < 10) { const Slide = slides[currentSlide]; return <Slide />; }
    const Slide = endSlides[currentSlide] || MSlide0;
    return <Slide />;
  };

  const showFooter = currentSlide === 0 || currentSlide === 36;

  return <MobileSlideContainer currentSlide={currentSlide} onPrev={goPrev} onNext={goNext} showFooter={showFooter}>{renderSlide()}</MobileSlideContainer>;
};

// ============================================================================
// EXPORTS FOR UNIFIED PORTAL
// ============================================================================

export { DesktopApp, MobileApp };
