import React, { useState, useEffect, useCallback } from 'react';

// ============================================================================
// ASK-GARY AUDIO FIRST INTERVIEW™ - INTERACTIVE DEMO v4.4
// PRESENTER MODE: Skip buttons, double-tap, question jumper
// Apple-Style Typography | Bold Instructions | Simple Navigation
// Prepared by Noetic Dharma | December 2025
// ============================================================================

const COLORS = {
  red: '#C41E3A',
  darkRed: '#991B1B',
  black: '#000000',
  charcoal: '#1C1C1E',
  white: '#FFFFFF',
  gray: '#F2F2F7',
  lightGray: '#E5E5EA',
  green: '#30D158',
  darkGreen: '#248A3D',
  gold: '#FFD60A',
  darkGold: '#B59410',
  blue: '#007AFF',
  purple: '#AF52DE',
  orange: '#FF9500',
  lightRed: '#FFF0F0',
  lightGreen: '#E8FFF0',
  lightBlue: '#E8F4FF'
};

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

const QUESTIONS = [
  {id:1,section:'YOUR STORY',title:'What Happened?',prompt:'Tell us what happened in the accident.',guidance:'Most important question. Take your time. Tell us everything you remember.',sample:"I was driving home on US-41, stopped at a red light. Around 5:30 PM. Suddenly heard screeching, then BOOM — slammed from behind. A white truck hit me. Driver said 'I'm so sorry, I was looking at my GPS.'"},
  {id:2,section:'LOCATION',title:'Where Did It Happen?',prompt:'Tell us where the accident happened.',guidance:'Street names, intersection, city, nearby stores.',sample:"Intersection of US-41 and Fruitville Road in Sarasota, FL. By the Publix."},
  {id:3,section:'WHEN',title:'Date and Time?',prompt:'When did the accident happen?',guidance:"It's okay if you don't remember exactly.",sample:"Thursday, November 28th, 2025. Around 5:30 PM."},
  {id:4,section:'YOUR TRIP',title:'Where Were You Going?',prompt:'Where were you coming from and headed to?',guidance:'Work, home, store? Tell us about your trip.',sample:"Driving home from work. I'm a nurse at Tampa General Hospital."},
  {id:5,section:'WEATHER',title:'Weather and Roads?',prompt:'What was the weather? Were roads wet or dry?',guidance:'Sunny, rainy? Day or night?',sample:"Clear and sunny. Roads dry. Still daylight."},
  {id:6,section:'VEHICLES',title:'How Many Cars?',prompt:'How many vehicles? What kind?',guidance:'All cars, trucks, motorcycles involved.',sample:"Two vehicles. My Honda Accord and a white box truck — 'ABC Plumbing' on the side."},
  {id:7,section:'YOUR CAR',title:'Describe Your Car',prompt:'What kind of car? How damaged?',guidance:'Year, make, model. Can you drive it?',sample:"2022 white Honda Accord. Back end smashed. Towed. Probably totaled."},
  {id:8,section:'PASSENGERS',title:'Anyone Else In Your Car?',prompt:'Anyone with you? Were they hurt?',guidance:'Names and if they were injured.',sample:"I was alone. No passengers."},
  {id:9,section:'FAULT',title:'Who Caused It?',prompt:'Who caused this accident?',guidance:'What did the other driver do wrong?',sample:"Truck driver 100% at fault. I was stopped. He was looking at GPS."},
  {id:10,section:'WHAT THEY SAID',title:'Did They Apologize?',prompt:'Did they say sorry or admit fault?',guidance:'Exact words if you remember.',sample:"He said: 'I'm so sorry, I didn't see you. I was looking at my GPS.' A witness heard him."},
  {id:11,section:'TICKETS',title:'Any Tickets Given?',prompt:'Did anyone get a ticket?',guidance:'Who got a ticket and for what.',sample:"Truck driver got ticket for careless driving. I got nothing."},
  {id:12,section:'WITNESSES',title:'Did Anyone See It?',prompt:'Any witnesses? Did they give contact info?',guidance:'Witnesses are very important!',sample:"Yes! Jennifer next to me saw everything. Got her number. She'll help."},
  {id:13,section:'POLICE',title:'Did Police Come?',prompt:'Did police come? Make a report?',guidance:'Report number or officer name?',sample:"Sarasota Police came. Officer Martinez. I have the case number."},
  {id:14,section:'YOUR INSURANCE',title:'Your Insurance?',prompt:'Your car insurance company name?',guidance:'Just company name for now.',sample:"GEICO."},
  {id:15,section:'THEIR INSURANCE',title:'Their Insurance?',prompt:"Other driver's insurance?",guidance:'Did you photo their card?',sample:"Progressive. I took a photo of his card."},
  {id:16,section:'YOUR INJURIES',title:'Where Does It Hurt?',prompt:'Tell us all your injuries and pain.',guidance:"Headaches, neck, back, sleep, scared. Don't leave anything out.",sample:"Neck hurts most. Chest bruise from seatbelt. Back pain down my leg. Headache. Trouble sleeping. Scared to drive."},
  {id:17,section:'DOCTOR',title:'Seen a Doctor?',prompt:'Been to doctor or hospital?',guidance:'⚠️ FLORIDA: Must see doctor within 14 days!',sample:"Went to ER that night. X-rays, pain meds. Need MRI."},
  {id:18,section:'YOUR JOB',title:'Affected Your Work?',prompt:'Do you work? Missed any days?',guidance:'Job and missed days.',sample:"Nurse at Tampa General. Missed 3 days. Don't know when I can return."},
  {id:19,section:'ANYTHING ELSE',title:'Anything Else?',prompt:'Anything else to tell us?',guidance:'Money, family, fears — everything.',sample:"Really stressed. Single mom, two kids. Only car. Bills piling up. Please help."}
];

export default function AudioFirstDemo() {
  const [screen, setScreen] = useState('splash');
  const [qIdx, setQIdx] = useState(0);
  const [recording, setRecording] = useState(false);
  const [time, setTime] = useState(0);
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState('');
  const [answers, setAnswers] = useState({});
  const [showJumper, setShowJumper] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  useEffect(() => {
    let i;
    if (recording) i = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(i);
  }, [recording]);

  // Double-tap detection
  const handleDoubleTap = useCallback(() => {
    const now = Date.now();
    if (now - lastTap < 300) {
      // Double tap detected - skip to next
      if (screen === 'splash') setScreen('identity');
      else if (screen === 'identity') setScreen('pip');
      else if (screen === 'pip') setScreen('intro');
      else if (screen === 'intro') setScreen('questions');
      else if (screen === 'questions') {
        if (qIdx < 18) {
          setQIdx(q => q + 1);
          setShowText(false);
          setText('');
          setRecording(false);
        } else {
          setScreen('review');
        }
      }
      else if (screen === 'review') setScreen('done');
      else if (screen === 'done') { setScreen('splash'); setQIdx(0); setAnswers({}); }
    }
    setLastTap(now);
  }, [lastTap, screen, qIdx]);

  const startRec = () => {
    setRecording(true);
    setTime(0);
    setShowText(false);
    setText('');
  };

  const stopRec = () => {
    setRecording(false);
    setShowText(true);
    const full = QUESTIONS[qIdx].sample;
    let c = 0;
    const iv = setInterval(() => {
      if (c < full.length) setText(full.slice(0, ++c));
      else { clearInterval(iv); setAnswers(a => ({ ...a, [QUESTIONS[qIdx].id]: full })); }
    }, 8);
  };

  const skipToNext = () => {
    // Auto-fill answer and go next
    const q = QUESTIONS[qIdx];
    setAnswers(a => ({ ...a, [q.id]: q.sample }));
    if (qIdx < 18) {
      setQIdx(q => q + 1);
      setShowText(false);
      setText('');
      setRecording(false);
    } else {
      setScreen('review');
    }
  };

  const jumpToQuestion = (idx) => {
    setQIdx(idx);
    setShowText(false);
    setText('');
    setRecording(false);
    setShowJumper(false);
  };

  const next = () => {
    if (qIdx < 18) {
      setQIdx(q => q + 1);
      setShowText(false);
      setText('');
      setRecording(false);
    } else {
      setScreen('review');
    }
  };

  const prev = () => {
    if (qIdx > 0) {
      setQIdx(q => q - 1);
      setShowText(!!answers[QUESTIONS[qIdx - 1].id]);
      setText(answers[QUESTIONS[qIdx - 1].id] || '');
      setRecording(false);
    }
  };

  const fmt = s => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  // ============================================================================
  // QUESTION JUMPER MODAL
  // ============================================================================
  const QuestionJumper = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.9)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      fontFamily: FONT
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      }}>
        <h2 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>
          Jump to Question
        </h2>
        <button
          onClick={() => setShowJumper(false)}
          style={{
            background: COLORS.charcoal,
            color: '#fff',
            border: 'none',
            width: 44,
            height: 44,
            borderRadius: 22,
            fontSize: 24,
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      </div>
      <div style={{
        flex: 1,
        overflowY: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 10
      }}>
        {QUESTIONS.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => jumpToQuestion(idx)}
            style={{
              background: idx === qIdx ? COLORS.red : COLORS.charcoal,
              color: '#fff',
              border: answers[q.id] ? `3px solid ${COLORS.green}` : 'none',
              borderRadius: 12,
              padding: 15,
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 700 }}>{q.id}</div>
            <div style={{ fontSize: 10, marginTop: 4, opacity: 0.8 }}>{q.section}</div>
          </button>
        ))}
      </div>
      <div style={{
        marginTop: 20,
        padding: 15,
        background: COLORS.charcoal,
        borderRadius: 12,
        textAlign: 'center'
      }}>
        <span style={{ color: COLORS.green, marginRight: 10 }}>●</span>
        <span style={{ color: '#888', fontSize: 14 }}>Green border = answered</span>
      </div>
    </div>
  );

  // ============================================================================
  // PRESENTER SKIP BUTTON (appears on all screens)
  // ============================================================================
  const SkipButton = ({ onClick, label = "SKIP →" }) => (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: 100,
        right: 20,
        background: COLORS.blue,
        color: '#fff',
        border: 'none',
        padding: '12px 20px',
        fontSize: 15,
        fontWeight: 700,
        borderRadius: 25,
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,122,255,0.4)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }}
    >
      {label}
    </button>
  );

  // ============================================================================
  // SPLASH SCREEN
  // ============================================================================
  if (screen === 'splash') return (
    <div
      onClick={handleDoubleTap}
      style={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, ${COLORS.charcoal} 0%, #000 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontFamily: FONT
      }}
    >
      <div style={{
        background: 'linear-gradient(90deg, #000 0%, #000 38%, #C41E3A 38%, #C41E3A 100%)',
        padding: '14px 28px',
        borderRadius: 10,
        marginBottom: 40,
        boxShadow: '0 12px 40px rgba(196,30,58,0.4)'
      }}>
        <span style={{ color: COLORS.white, fontWeight: 800, fontSize: 26 }}>1-800 ASK-GARY</span>
      </div>

      <h1 style={{ color: COLORS.white, fontSize: 32, fontWeight: 700, textAlign: 'center', marginBottom: 12 }}>
        AUDIO FIRST INTERVIEW
      </h1>

      <p style={{ color: COLORS.gold, fontSize: 18, fontWeight: 500, textAlign: 'center', marginBottom: 50 }}>
        Tell Us Your Story While It's Fresh
      </p>

      <button
        onClick={() => setScreen('identity')}
        style={{
          background: COLORS.red,
          color: COLORS.white,
          border: 'none',
          padding: '18px 50px',
          fontSize: 20,
          fontWeight: 700,
          borderRadius: 50,
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(196,30,58,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}
      >
        START <span style={{ fontSize: 24 }}>→</span>
      </button>

      <p style={{ color: '#888', fontSize: 16, fontWeight: 500, marginTop: 40, textAlign: 'center' }}>
        Takes 10-15 minutes<br />
        <strong style={{ color: COLORS.gold }}>Speak — Don't Type</strong>
      </p>

      {/* Presenter hint */}
      <div style={{
        position: 'absolute',
        bottom: 80,
        background: 'rgba(255,255,255,0.1)',
        padding: '8px 16px',
        borderRadius: 20,
        color: '#666',
        fontSize: 12
      }}>
        💡 Double-tap anywhere to skip • Blue button to advance
      </div>

      <SkipButton onClick={() => setScreen('identity')} />

      <div style={{ position: 'absolute', bottom: 24, textAlign: 'center' }}>
        <div style={{ fontFamily: 'Georgia', color: '#666', fontSize: 12, letterSpacing: 3 }}>NOETIC DHARMA</div>
        <div style={{ color: '#555', fontSize: 8, marginTop: 4 }}>PRIVATE EQUITY | VENTURE CAPITAL | STRATEGIC PLANNING | DIGITAL MARKETING</div>
      </div>
    </div>
  );

  // ============================================================================
  // IDENTITY SCREEN
  // ============================================================================
  if (screen === 'identity') return (
    <div onClick={handleDoubleTap} style={{ minHeight: '100vh', background: COLORS.gray, padding: 20, fontFamily: FONT }}>
      <div style={{ background: '#fff', padding: 14, borderRadius: 12, marginBottom: 20 }}>
        <div style={{ background: 'linear-gradient(90deg, #000 38%, #C41E3A 38%)', padding: '8px 16px', borderRadius: 6, display: 'inline-block' }}>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>1-800 ASK-GARY</span>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 20, padding: 28 }}>
        <h1 style={{ color: '#000', fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Let's Get Started</h1>
        <p style={{ color: '#666', fontSize: 17, marginBottom: 28 }}>First, we need to verify who you are.</p>

        <label style={{ display: 'block', color: '#000', fontSize: 16, fontWeight: 600, marginBottom: 10 }}>Your Full Name</label>
        <input placeholder="Maria Elena Vasquez" style={{ width: '100%', padding: 18, fontSize: 18, border: '2px solid #E5E5EA', borderRadius: 12, marginBottom: 20, boxSizing: 'border-box', fontFamily: FONT }} />

        <label style={{ display: 'block', color: '#000', fontSize: 16, fontWeight: 600, marginBottom: 10 }}>Your Phone Number</label>
        <input placeholder="(813) 555-9247" style={{ width: '100%', padding: 18, fontSize: 18, border: '2px solid #E5E5EA', borderRadius: 12, marginBottom: 28, boxSizing: 'border-box', fontFamily: FONT }} />

        <button onClick={() => setScreen('pip')} style={{ width: '100%', background: COLORS.green, color: '#fff', border: 'none', padding: 18, fontSize: 19, fontWeight: 700, borderRadius: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          SEND CODE <span style={{ fontSize: 22 }}>→</span>
        </button>

        <p style={{ color: '#888', fontSize: 14, textAlign: 'center', marginTop: 20 }}>🔒 Your information is private and protected</p>
      </div>

      <SkipButton onClick={() => setScreen('pip')} />
    </div>
  );

  // ============================================================================
  // PIP WARNING SCREEN
  // ============================================================================
  if (screen === 'pip') return (
    <div onClick={handleDoubleTap} style={{ minHeight: '100vh', background: COLORS.lightRed, padding: 20, fontFamily: FONT }}>
      <div style={{ background: COLORS.red, color: '#fff', padding: 18, borderRadius: 14, textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>⚠️</div>
        <div style={{ fontSize: 22, fontWeight: 700 }}>FLORIDA 14-DAY RULE</div>
      </div>

      <div style={{ background: '#fff', borderRadius: 20, padding: 28, border: `4px solid ${COLORS.red}` }}>
        <h1 style={{ color: '#991B1B', fontSize: 24, fontWeight: 700, textAlign: 'center', marginBottom: 16 }}>
          You Could Lose Your Benefits!
        </h1>

        <p style={{ color: '#000', fontSize: 18, fontWeight: 500, lineHeight: 1.5, marginBottom: 24, textAlign: 'center' }}>
          Florida law says you <strong>MUST</strong> see a doctor within <strong>14 days</strong> or you may lose insurance benefits.
        </p>

        <div style={{ background: COLORS.lightRed, borderRadius: 16, padding: 24, textAlign: 'center', marginBottom: 24 }}>
          <div style={{ color: '#666', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>DAYS LEFT</div>
          <div style={{ color: COLORS.red, fontSize: 72, fontWeight: 800 }}>12</div>
          <div style={{ color: '#991B1B', fontSize: 18, fontWeight: 700, marginTop: 8 }}>Act Now!</div>
        </div>

        <div style={{ background: COLORS.lightGreen, borderRadius: 14, padding: 18, marginBottom: 24, border: `2px solid ${COLORS.green}` }}>
          <p style={{ color: '#000', fontSize: 17, fontWeight: 600, margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
            <span style={{ fontSize: 20 }}>🏥</span> <strong>Haven't seen a doctor?</strong><br /><br />
            <span style={{ color: '#248A3D' }}>Call <strong>1-800-ASK-GARY</strong> now!</span><br />
            <span style={{ fontSize: 15, color: '#666' }}>National network of medical specialists ready to see you <strong>TODAY</strong>.</span>
          </p>
        </div>

        <button onClick={() => setScreen('intro')} style={{ width: '100%', background: COLORS.gold, color: '#000', border: 'none', padding: 18, fontSize: 19, fontWeight: 700, borderRadius: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          I UNDERSTAND <span style={{ fontSize: 22 }}>→</span>
        </button>
      </div>

      <SkipButton onClick={() => setScreen('intro')} />
    </div>
  );

  // ============================================================================
  // INTRO SCREEN
  // ============================================================================
  if (screen === 'intro') return (
    <div onClick={handleDoubleTap} style={{ minHeight: '100vh', background: COLORS.gray, padding: 20, fontFamily: FONT }}>
      <div style={{ background: COLORS.blue, color: '#fff', padding: 14, borderRadius: 12, textAlign: 'center', marginBottom: 20, fontSize: 16, fontWeight: 600 }}>
        🔒 Protected by Attorney-Client Privilege
      </div>

      <div style={{ background: '#fff', borderRadius: 20, padding: 28 }}>
        <h1 style={{ color: '#000', fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Tell Us Your Story</h1>
        <h2 style={{ color: COLORS.gold, fontSize: 24, fontWeight: 700, marginBottom: 24, background: COLORS.charcoal, padding: '8px 16px', borderRadius: 8, display: 'inline-block' }}>RIGHT NOW</h2>

        <div style={{ marginBottom: 28 }}>
          <h3 style={{ color: '#000', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Why Right Now?</h3>
          {['Your memory is FRESHEST right now', 'Details fade fast — capture them today', 'Speaking is easier than typing', 'Gets you help FASTER'].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ background: COLORS.green, color: '#fff', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700 }}>✓</span>
              <span style={{ color: '#000', fontSize: 17, fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>

        <div style={{ background: COLORS.lightBlue, borderRadius: 16, padding: 20, marginBottom: 28 }}>
          <h3 style={{ color: '#000', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>How It Works:</h3>
          {[
            { n: '1', c: COLORS.charcoal, t: 'We ask 19 simple questions' },
            { n: '2', c: COLORS.red, t: 'Tap RED to start talking' },
            { n: '3', c: COLORS.green, t: 'Tap GREEN to stop' },
            { n: '4', c: COLORS.gold, t: 'We type it for you!', tc: '#000' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <span style={{ background: item.c, color: item.tc || '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700 }}>{item.n}</span>
              <span style={{ color: '#000', fontSize: 17, fontWeight: 500 }}>{item.t}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 30, marginBottom: 28 }}>
          {[{ e: '⏱️', t: '10-15 min' }, { e: '🎤', t: 'Voice Only' }, { e: '✏️', t: 'Edit Later' }].map((x, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36 }}>{x.e}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#000', marginTop: 4 }}>{x.t}</div>
            </div>
          ))}
        </div>

        <button onClick={() => setScreen('questions')} style={{ width: '100%', background: COLORS.red, color: '#fff', border: 'none', padding: 20, fontSize: 21, fontWeight: 700, borderRadius: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, boxShadow: '0 6px 25px rgba(196,30,58,0.4)' }}>
          🎤 START INTERVIEW
        </button>
      </div>

      <SkipButton onClick={() => setScreen('questions')} />
    </div>
  );

  // ============================================================================
  // QUESTION SCREEN
  // ============================================================================
  if (screen === 'questions') {
    const q = QUESTIONS[qIdx];
    const hasAns = !!answers[q.id] || showText;

    return (
      <div style={{ minHeight: '100vh', background: COLORS.gray, display: 'flex', flexDirection: 'column', fontFamily: FONT }}>
        {showJumper && <QuestionJumper />}

        {/* Progress Header */}
        <div style={{ background: '#fff', padding: 16, borderBottom: `4px solid ${COLORS.red}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            {/* Tappable question number for jumper */}
            <button
              onClick={() => setShowJumper(true)}
              style={{
                background: COLORS.red,
                color: '#fff',
                padding: '6px 14px',
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              Q{q.id}/19 <span style={{ fontSize: 10 }}>▼</span>
            </button>
            <span style={{ color: '#000', fontSize: 14, fontWeight: 600, background: COLORS.lightGray, padding: '6px 12px', borderRadius: 8 }}>
              {q.section}
            </span>
          </div>
          <div style={{ background: COLORS.lightGray, height: 8, borderRadius: 4 }}>
            <div style={{ background: COLORS.red, height: '100%', width: `${(q.id / 19) * 100}%`, borderRadius: 4 }} />
          </div>
        </div>

        {/* Question Content */}
        <div onClick={handleDoubleTap} style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <h1 style={{ color: '#000', fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{q.title}</h1>

          <div style={{ background: COLORS.lightBlue, borderRadius: 14, padding: 18, marginBottom: 20 }}>
            <p style={{ color: '#000', fontSize: 19, fontWeight: 500, margin: 0, lineHeight: 1.4 }}>"{q.prompt}"</p>
          </div>

          <div style={{ background: COLORS.gold, borderRadius: 14, padding: 16, marginBottom: 24 }}>
            <p style={{ color: '#000', fontSize: 17, fontWeight: 600, margin: 0, lineHeight: 1.4 }}>💡 {q.guidance}</p>
          </div>

          {/* Recording Area */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 28, textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            {recording ? (
              <>
                <div onClick={stopRec} style={{ width: 120, height: 120, borderRadius: '50%', background: COLORS.green, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', cursor: 'pointer', boxShadow: `0 0 0 12px rgba(48,209,88,0.25)` }}>
                  <div style={{ width: 36, height: 36, background: '#fff', borderRadius: 6 }} />
                </div>
                <div style={{ color: COLORS.green, fontSize: 22, fontWeight: 700 }}>RECORDING...</div>
                <div style={{ color: '#000', fontSize: 28, fontWeight: 700, marginTop: 8 }}>{fmt(time)}</div>
                <div style={{ color: '#666', fontSize: 16, fontWeight: 500, marginTop: 12 }}>Tap <strong style={{ color: COLORS.green }}>GREEN</strong> to stop</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 20, height: 40 }}>
                  {[...Array(12)].map((_, i) => <div key={i} style={{ width: 6, background: COLORS.green, borderRadius: 3, height: `${30 + Math.random() * 70}%` }} />)}
                </div>
              </>
            ) : showText ? (
              <>
                <div style={{ color: COLORS.green, fontSize: 20, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span style={{ background: COLORS.green, color: '#fff', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span> SAVED!
                </div>
                <div style={{ background: COLORS.gray, borderRadius: 12, padding: 16, textAlign: 'left', maxHeight: 160, overflowY: 'auto' }}>
                  <p style={{ color: '#000', fontSize: 16, lineHeight: 1.5, margin: 0 }}>{text}</p>
                </div>
                <button onClick={startRec} style={{ marginTop: 16, background: 'transparent', border: `3px solid ${COLORS.red}`, color: COLORS.red, padding: '12px 24px', borderRadius: 25, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
                  🎤 RECORD AGAIN
                </button>
              </>
            ) : (
              <>
                <div onClick={startRec} style={{ width: 120, height: 120, borderRadius: '50%', background: COLORS.red, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', cursor: 'pointer', boxShadow: '0 8px 35px rgba(196,30,58,0.4)' }}>
                  <span style={{ fontSize: 50 }}>🎤</span>
                </div>
                <div style={{ color: COLORS.red, fontSize: 22, fontWeight: 700 }}>TAP TO RECORD</div>
                <div style={{ color: '#666', fontSize: 16, fontWeight: 500, marginTop: 8 }}>Speak your answer clearly</div>
              </>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        <div style={{ background: '#fff', padding: 16, borderTop: `2px solid ${COLORS.lightGray}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={prev} disabled={qIdx === 0} style={{ background: qIdx === 0 ? COLORS.lightGray : COLORS.charcoal, color: qIdx === 0 ? '#999' : '#fff', border: 'none', padding: '14px 24px', fontSize: 17, fontWeight: 700, borderRadius: 12, cursor: qIdx === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>←</span> BACK
          </button>

          {/* SKIP button for presenter - always enabled */}
          <button
            onClick={skipToNext}
            style={{
              background: COLORS.blue,
              color: '#fff',
              border: 'none',
              padding: '14px 20px',
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 12,
              cursor: 'pointer'
            }}
          >
            SKIP →
          </button>

          <button onClick={next} disabled={!hasAns} style={{ background: hasAns ? COLORS.gold : COLORS.lightGray, color: hasAns ? '#000' : '#999', border: 'none', padding: '14px 28px', fontSize: 17, fontWeight: 700, borderRadius: 12, cursor: hasAns ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', gap: 8, boxShadow: hasAns ? '0 4px 15px rgba(255,214,10,0.4)' : 'none' }}>
            {qIdx === 18 ? 'REVIEW' : 'NEXT'} <span style={{ fontSize: 20 }}>→</span>
          </button>
        </div>
      </div>
    );
  }

  // ============================================================================
  // REVIEW SCREEN
  // ============================================================================
  if (screen === 'review') return (
    <div onClick={handleDoubleTap} style={{ minHeight: '100vh', background: COLORS.gray, padding: 20, fontFamily: FONT }}>
      <div style={{ background: COLORS.green, color: '#fff', padding: 24, borderRadius: 16, textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>✓</div>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>INTERVIEW COMPLETE!</h1>
        <p style={{ margin: '10px 0 0', fontSize: 17, opacity: 0.9 }}>Your answers have been saved.</p>
      </div>

      <div style={{ background: '#fff', borderRadius: 20, padding: 24, marginBottom: 20 }}>
        <h2 style={{ color: '#000', fontSize: 20, fontWeight: 700, marginBottom: 16 }}>📋 Your 19 Answers</h2>
        {QUESTIONS.slice(0, 4).map((q, i) => (
          <div key={q.id} style={{ borderBottom: i < 3 ? `2px solid ${COLORS.lightGray}` : 'none', paddingBottom: 14, marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ color: '#000', fontSize: 15, fontWeight: 600 }}>{q.id}. {q.title}</span>
              <span style={{ background: COLORS.lightGreen, color: COLORS.green, padding: '2px 8px', borderRadius: 10, fontSize: 12, fontWeight: 700 }}>✓ SAVED</span>
            </div>
            <p style={{ color: '#666', fontSize: 14, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{answers[q.id] || q.sample}</p>
          </div>
        ))}
        <div style={{ color: '#888', fontSize: 15, textAlign: 'center' }}>... and 15 more saved</div>
      </div>

      <button onClick={() => setScreen('done')} style={{ width: '100%', background: COLORS.green, color: '#fff', border: 'none', padding: 20, fontSize: 20, fontWeight: 700, borderRadius: 14, cursor: 'pointer', marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        ✓ LOOKS GOOD — SUBMIT
      </button>

      <button onClick={() => { setScreen('questions'); setQIdx(0); }} style={{ width: '100%', background: 'transparent', color: COLORS.charcoal, border: `3px solid ${COLORS.charcoal}`, padding: 16, fontSize: 17, fontWeight: 700, borderRadius: 14, cursor: 'pointer' }}>
        ✏️ EDIT MY ANSWERS
      </button>

      <SkipButton onClick={() => setScreen('done')} />
    </div>
  );

  // ============================================================================
  // DONE SCREEN
  // ============================================================================
  if (screen === 'done') return (
    <div onClick={handleDoubleTap} style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${COLORS.charcoal}, #000)`, padding: 20, fontFamily: FONT }}>
      <div style={{ textAlign: 'center', paddingTop: 30, marginBottom: 28 }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', background: COLORS.green, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 55 }}>🎉</div>
        <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>YOU DID IT!</h1>
        <p style={{ color: COLORS.gold, fontSize: 19, fontWeight: 600 }}>Your story is safely saved</p>
      </div>

      <div style={{ background: '#fff', borderRadius: 20, padding: 24, marginBottom: 20 }}>
        <h2 style={{ color: '#000', fontSize: 20, fontWeight: 700, marginBottom: 20 }}>What Happens Next:</h2>
        {[
          { icon: '✓', bg: COLORS.lightGreen, title: 'Your Story is Saved', sub: 'Team reviewing now' },
          { icon: '📞', bg: COLORS.lightBlue, title: "We'll Call You", sub: 'Within 24 hours' },
          { icon: '📋', bg: '#FFF8E8', title: 'Finish Details Later', sub: 'Complete full form when ready' }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{item.icon}</div>
            <div>
              <div style={{ color: '#000', fontSize: 17, fontWeight: 700 }}>{item.title}</div>
              <div style={{ color: '#666', fontSize: 14 }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: COLORS.red, borderRadius: 16, padding: 20, marginBottom: 20 }}>
        <div style={{ color: '#fff', fontSize: 18, fontWeight: 700, textAlign: 'center', marginBottom: 12 }}>⚠️ 12 DAYS LEFT for PIP Benefits</div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, textAlign: 'center' }}>
          <div style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>🏥 Haven't seen a doctor?</div>
          <div style={{ color: COLORS.red, fontSize: 24, fontWeight: 800 }}>1-800-ASK-GARY</div>
          <div style={{ color: '#000', fontSize: 14, marginTop: 8 }}>National network of medical specialists<br /><strong>ready to see you TODAY</strong></div>
        </div>
      </div>

      <button onClick={() => { setScreen('splash'); setQIdx(0); setAnswers({}); }} style={{ width: '100%', background: COLORS.blue, color: '#fff', border: 'none', padding: 18, fontSize: 18, fontWeight: 700, borderRadius: 14, cursor: 'pointer', marginBottom: 12 }}>
        📋 CONTINUE TO FULL FORM
      </button>

      <button onClick={() => { setScreen('splash'); setQIdx(0); setAnswers({}); }} style={{ width: '100%', background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '2px solid rgba(255,255,255,0.3)', padding: 16, fontSize: 16, borderRadius: 14, cursor: 'pointer' }}>
        ↻ RESTART DEMO
      </button>

      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <div style={{ fontFamily: 'Georgia', color: '#666', fontSize: 12, letterSpacing: 3 }}>NOETIC DHARMA</div>
      </div>
    </div>
  );

  return null;
}
