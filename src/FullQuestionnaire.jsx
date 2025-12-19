import React, { useState, useEffect, useCallback } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════
// ASK-GARY FULL QUESTIONNAIRE - MAIN COMPONENT
// Interactive demo with all 7 phases, presenter mode, audio with review
// Version 1.0 | December 2025 | Noetic Dharma
// ═══════════════════════════════════════════════════════════════════════════════

// Design System
const COLORS = {
  primary: '#C41E3A', primaryDark: '#991B1B', primaryLight: '#FFF0F0',
  success: '#30D158', successDark: '#248A3D', successLight: '#E8FFF0',
  warning: '#FFD60A', warningDark: '#B59410', warningLight: '#FFF8E8',
  danger: '#FF3B30', info: '#007AFF', infoLight: '#E8F4FF',
  purple: '#AF52DE', purpleLight: '#F3E8FF',
  orange: '#FF9500', orangeLight: '#FFF4E6',
  black: '#000000', charcoal: '#1C1C1E', darkGray: '#3A3A3C',
  gray: '#8E8E93', lightGray: '#E5E5EA', offWhite: '#F2F2F7', white: '#FFFFFF',
};

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

// Phase definitions
const PHASES = [
  { id: 1, name: 'ONBOARDING', title: 'Your Information', icon: '👤', color: COLORS.primary },
  { id: 2, name: 'ACCIDENT', title: 'Accident Details', icon: '🚗', color: COLORS.orange },
  { id: 3, name: 'VEHICLES', title: 'Vehicles & Parties', icon: '🚙', color: COLORS.info },
  { id: 4, name: 'EVIDENCE', title: 'Evidence & Documents', icon: '📷', color: COLORS.purple },
  { id: 5, name: 'MEDICAL', title: 'Medical & Injuries', icon: '🏥', color: COLORS.success },
  { id: 6, name: 'DAMAGES', title: 'Damages & Losses', icon: '💰', color: COLORS.warning },
  { id: 7, name: 'FINAL', title: 'Finalization', icon: '✍️', color: COLORS.charcoal },
];

// Sample questions for each phase (abbreviated for demo - full version has 430+)
const QUESTIONS = {
  1: [
    { id: '1.1', section: 'PERSONAL', title: 'Legal First Name', prompt: 'What is your legal first name?', type: 'text', required: true, sample: 'Maria' },
    { id: '1.2', section: 'PERSONAL', title: 'Legal Last Name', prompt: 'What is your legal last name?', type: 'text', required: true, sample: 'Vasquez' },
    { id: '1.3', section: 'PERSONAL', title: 'Date of Birth', prompt: 'What is your date of birth?', type: 'date', required: true, sample: '1987-05-15' },
    { id: '1.4', section: 'CONTACT', title: 'Primary Phone', prompt: 'What is your primary phone number?', type: 'phone', required: true, sample: '(813) 555-9247' },
    { id: '1.5', section: 'CONTACT', title: 'Can We Text?', prompt: 'Can we send text messages to this number?', type: 'yesno', required: true, sample: 'yes' },
    { id: '1.6', section: 'CONTACT', title: 'Email Address', prompt: 'What is your email address?', type: 'email', required: true, sample: 'maria.vasquez@email.com' },
    { id: '1.7', section: 'ADDRESS', title: 'Street Address', prompt: 'What is your street address?', type: 'text', required: true, sample: '4521 Palm Bay Drive, Apt 204' },
    { id: '1.8', section: 'ADDRESS', title: 'City', prompt: 'What city do you live in?', type: 'text', required: true, sample: 'Sarasota' },
    { id: '1.9', section: 'ADDRESS', title: 'State', prompt: 'What state?', type: 'select', options: ['Florida', 'Georgia', 'Alabama', 'Other'], required: true, sample: 'Florida' },
    { id: '1.10', section: 'ADDRESS', title: 'ZIP Code', prompt: 'What is your ZIP code?', type: 'text', required: true, sample: '34231' },
    { id: '1.11', section: 'EMERGENCY', title: 'Emergency Contact', prompt: 'Who should we contact in emergency?', type: 'text', required: true, sample: 'Rosa Vasquez (Mother)' },
    { id: '1.12', section: 'EMERGENCY', title: 'Emergency Phone', prompt: 'Emergency contact phone number?', type: 'phone', required: true, sample: '(813) 555-1234' },
  ],
  2: [
    { id: '2.1', section: 'DATE & TIME', title: 'Date of Accident', prompt: 'What date did the accident occur?', type: 'date', required: true, sample: '2025-11-28' },
    { id: '2.2', section: 'DATE & TIME', title: 'Time of Accident', prompt: 'Approximately what time?', type: 'select', options: ['Morning (6am-12pm)', 'Afternoon (12pm-5pm)', 'Evening (5pm-9pm)', 'Night (9pm-6am)'], required: true, sample: 'Evening (5pm-9pm)' },
    { id: '2.3', section: 'LOCATION', title: 'Accident Street', prompt: 'What street did it happen on?', type: 'text', required: true, sample: 'US Highway 41' },
    { id: '2.4', section: 'LOCATION', title: 'Cross Street', prompt: 'Nearest cross street?', type: 'text', required: true, sample: 'Fruitville Road' },
    { id: '2.5', section: 'LOCATION', title: 'City', prompt: 'What city?', type: 'text', required: true, sample: 'Sarasota' },
    { id: '2.6', section: 'TYPE', title: 'Type of Accident', prompt: 'What type of accident?', type: 'radio', options: ['Rear-end', 'Side-impact (T-bone)', 'Head-on', 'Sideswipe', 'Hit and run', 'Other'], required: true, sample: 'Rear-end' },
    { id: '2.7', section: 'TYPE', title: 'Who Hit Who', prompt: 'Who hit who?', type: 'radio', options: ['They hit me', 'I hit them', 'Both collided', 'Not sure'], required: true, sample: 'They hit me' },
    { id: '2.8', section: 'CONDITIONS', title: 'Weather', prompt: 'What was the weather?', type: 'radio', options: ['Clear/Sunny', 'Cloudy', 'Raining', 'Fog', 'Other'], required: true, sample: 'Clear/Sunny' },
    { id: '2.9', section: 'CONDITIONS', title: 'Road Conditions', prompt: 'Road conditions?', type: 'radio', options: ['Dry', 'Wet', 'Icy', 'Construction', 'Other'], required: true, sample: 'Dry' },
    { id: '2.10', section: 'POLICE', title: 'Police Called?', prompt: 'Were police called?', type: 'yesno', required: true, sample: 'yes' },
    { id: '2.11', section: 'POLICE', title: 'Police Department', prompt: 'Which department responded?', type: 'text', required: false, sample: 'Sarasota Police Department' },
    { id: '2.12', section: 'POLICE', title: 'Report Number', prompt: 'Police report number?', type: 'text', required: false, sample: 'SPD-2025-118547' },
    { id: '2.13', section: 'POLICE', title: 'Citations Issued?', prompt: 'Were any tickets given?', type: 'radio', options: ['Yes - to other driver', 'Yes - to me', 'No citations', 'Unknown'], required: true, sample: 'Yes - to other driver' },
  ],
  3: [
    { id: '3.1', section: 'YOUR VEHICLE', title: 'Vehicle Year', prompt: 'What year is your vehicle?', type: 'select', options: ['2025','2024','2023','2022','2021','2020','2019','2018','Older'], required: true, sample: '2022' },
    { id: '3.2', section: 'YOUR VEHICLE', title: 'Make', prompt: 'Vehicle make?', type: 'text', required: true, sample: 'Honda' },
    { id: '3.3', section: 'YOUR VEHICLE', title: 'Model', prompt: 'Vehicle model?', type: 'text', required: true, sample: 'Accord' },
    { id: '3.4', section: 'YOUR VEHICLE', title: 'Color', prompt: 'Vehicle color?', type: 'text', required: true, sample: 'White' },
    { id: '3.5', section: 'DAMAGE', title: 'Damage Severity', prompt: 'How severe is the damage?', type: 'radio', options: ['Minor scratches', 'Moderate', 'Severe', 'Totaled'], required: true, sample: 'Totaled' },
    { id: '3.6', section: 'DAMAGE', title: 'Vehicle Drivable?', prompt: 'Is your vehicle drivable?', type: 'yesno', required: true, sample: 'no' },
    { id: '3.7', section: 'DAMAGE', title: 'Where Is It?', prompt: 'Where is your vehicle now?', type: 'radio', options: ['At home', 'Body shop', 'Tow yard', 'Unknown'], required: true, sample: 'Tow yard' },
    { id: '3.8', section: 'OTHER VEHICLE', title: 'Other Vehicle Type', prompt: 'What type of vehicle hit you?', type: 'radio', options: ['Car/Sedan', 'SUV', 'Pickup', 'Van', 'Box Truck', 'Semi', 'Other'], required: true, sample: 'Box Truck' },
    { id: '3.9', section: 'OTHER VEHICLE', title: 'Commercial?', prompt: 'Was it a commercial vehicle?', type: 'yesno', required: true, sample: 'yes' },
    { id: '3.10', section: 'OTHER VEHICLE', title: 'Company Name', prompt: 'Company name on vehicle?', type: 'text', required: false, sample: 'ABC Plumbing Services' },
    { id: '3.11', section: 'OTHER DRIVER', title: 'Driver Name', prompt: 'Other driver\'s name?', type: 'text', required: true, sample: 'Robert Johnson' },
    { id: '3.12', section: 'OTHER DRIVER', title: 'Their Insurance', prompt: 'Their insurance company?', type: 'text', required: true, sample: 'Progressive' },
    { id: '3.13', section: 'WITNESSES', title: 'Any Witnesses?', prompt: 'Were there witnesses?', type: 'yesno', required: true, sample: 'yes' },
    { id: '3.14', section: 'WITNESSES', title: 'Witness Name', prompt: 'Witness name?', type: 'text', required: false, sample: 'Jennifer Williams' },
  ],
  4: [
    { id: '4.1', section: 'PHOTOS', title: 'Photos Taken?', prompt: 'Did you take photos at scene?', type: 'yesno', required: true, sample: 'yes' },
    { id: '4.2', section: 'PHOTOS', title: 'What Photos', prompt: 'What did you photograph?', type: 'checkbox', options: ['My vehicle', 'Other vehicle', 'Scene', 'Injuries', 'Other driver info'], required: false, sample: ['My vehicle', 'Other vehicle', 'Scene', 'Other driver info'] },
    { id: '4.3', section: 'PHOTOS', title: 'How Many', prompt: 'Approximately how many photos?', type: 'select', options: ['1-5', '6-10', '11-20', '20+'], required: false, sample: '6-10' },
    { id: '4.4', section: 'REPORT', title: 'Have Police Report?', prompt: 'Do you have police report copy?', type: 'yesno', required: true, sample: 'no' },
    { id: '4.5', section: 'REPORT', title: 'Report Requested?', prompt: 'Have you requested a copy?', type: 'yesno', required: false, sample: 'no' },
    { id: '4.6', section: 'VIDEO', title: 'Dashcam?', prompt: 'Do you have a dashcam?', type: 'yesno', required: true, sample: 'no' },
    { id: '4.7', section: 'DOCUMENTS', title: 'Insurance Docs?', prompt: 'Do you have insurance documents?', type: 'yesno', required: true, sample: 'yes' },
    { id: '4.8', section: 'DOCUMENTS', title: 'Medical Bills?', prompt: 'Do you have medical bills?', type: 'yesno', required: true, sample: 'yes' },
  ],
  5: [
    { id: '5.1', section: 'ER VISIT', title: 'ER Visit?', prompt: 'Did you go to the ER?', type: 'yesno', required: true, sample: 'yes' },
    { id: '5.2', section: 'ER VISIT', title: 'Which Hospital', prompt: 'Which hospital?', type: 'text', required: false, sample: 'Sarasota Memorial Hospital' },
    { id: '5.3', section: 'ER VISIT', title: 'Date of Visit', prompt: 'Date of ER visit?', type: 'date', required: false, sample: '2025-11-28' },
    { id: '5.4', section: 'INJURIES', title: 'Body Parts Hurt', prompt: 'What body parts are injured?', type: 'checkbox', options: ['Head', 'Neck', 'Upper Back', 'Lower Back', 'Shoulder', 'Arm', 'Chest', 'Hip', 'Leg', 'Ankle/Foot'], required: true, sample: ['Neck', 'Upper Back', 'Lower Back', 'Chest'] },
    { id: '5.5', section: 'INJURIES', title: 'Describe Pain', prompt: 'Describe your pain in your own words', type: 'audio', required: true, guidance: 'Tell us where it hurts, how bad (1-10), what makes it worse', sample: 'My neck hurts constantly, rated 7/10. Lower back pain shoots down my left leg. Chest is sore from seatbelt. Headaches every day. Having trouble sleeping.' },
    { id: '5.6', section: 'INJURIES', title: 'Headaches?', prompt: 'Are you having headaches?', type: 'yesno', required: true, sample: 'yes' },
    { id: '5.7', section: 'INJURIES', title: 'Sleep Issues?', prompt: 'Trouble sleeping?', type: 'yesno', required: true, sample: 'yes' },
    { id: '5.8', section: 'INJURIES', title: 'Emotional Impact', prompt: 'Any emotional impact?', type: 'checkbox', options: ['Anxiety', 'Depression', 'Fear of driving', 'Nightmares', 'None'], required: true, sample: ['Anxiety', 'Fear of driving'] },
    { id: '5.9', section: 'TREATMENT', title: 'Current Treatment?', prompt: 'Currently receiving treatment?', type: 'yesno', required: true, sample: 'yes' },
    { id: '5.10', section: 'TREATMENT', title: 'Treatment Types', prompt: 'What types of treatment?', type: 'checkbox', options: ['Primary care', 'Chiropractor', 'Physical therapy', 'Pain management', 'Orthopedist', 'Other'], required: false, sample: ['Primary care', 'Physical therapy'] },
    { id: '5.11', section: 'TREATMENT', title: 'Medications?', prompt: 'Taking any medications?', type: 'yesno', required: true, sample: 'yes' },
    { id: '5.12', section: 'TREATMENT', title: 'Which Medications', prompt: 'List medications', type: 'text', required: false, sample: 'Flexeril, Ibuprofen 800mg, Tramadol' },
    { id: '5.13', section: 'PIP', title: 'First Treatment', prompt: 'Date of first treatment?', type: 'date', required: true, guidance: '⚠️ Must be within 14 days for PIP!', sample: '2025-11-28' },
  ],
  6: [
    { id: '6.1', section: 'VEHICLE', title: 'Vehicle Value', prompt: 'Vehicle value before accident?', type: 'currency', required: true, sample: '28000' },
    { id: '6.2', section: 'VEHICLE', title: 'Repair Estimate?', prompt: 'Have repair estimate?', type: 'yesno', required: true, sample: 'no' },
    { id: '6.3', section: 'VEHICLE', title: 'Total Loss?', prompt: 'Declared total loss?', type: 'radio', options: ['Yes', 'No', 'Pending'], required: true, sample: 'Pending' },
    { id: '6.4', section: 'RENTAL', title: 'Rental Car?', prompt: 'Had to rent a car?', type: 'yesno', required: true, sample: 'no' },
    { id: '6.5', section: 'RENTAL', title: 'Days Without Car', prompt: 'Days without your vehicle?', type: 'number', required: true, sample: '5' },
    { id: '6.6', section: 'EMPLOYMENT', title: 'Employed?', prompt: 'Were you employed?', type: 'yesno', required: true, sample: 'yes' },
    { id: '6.7', section: 'EMPLOYMENT', title: 'Employer', prompt: 'Who is your employer?', type: 'text', required: false, sample: 'Tampa General Hospital' },
    { id: '6.8', section: 'EMPLOYMENT', title: 'Job Title', prompt: 'Your job title?', type: 'text', required: false, sample: 'Registered Nurse' },
    { id: '6.9', section: 'EMPLOYMENT', title: 'Hourly Rate', prompt: 'Hourly rate?', type: 'currency', required: false, sample: '38' },
    { id: '6.10', section: 'EMPLOYMENT', title: 'Missed Work?', prompt: 'Missed any work?', type: 'yesno', required: true, sample: 'yes' },
    { id: '6.11', section: 'EMPLOYMENT', title: 'Days Missed', prompt: 'Days missed so far?', type: 'number', required: false, sample: '3' },
    { id: '6.12', section: 'MEDICAL COSTS', title: 'Total Medical Bills', prompt: 'Total medical bills?', type: 'currency', required: true, sample: '4500' },
    { id: '6.13', section: 'MEDICAL COSTS', title: 'Out of Pocket', prompt: 'Paid out of pocket?', type: 'currency', required: true, sample: '150' },
  ],
  7: [
    { id: '7.1', section: 'YOUR INSURANCE', title: 'Insurance Company', prompt: 'Your auto insurance company?', type: 'text', required: true, sample: 'GEICO' },
    { id: '7.2', section: 'YOUR INSURANCE', title: 'Policy Number', prompt: 'Policy number?', type: 'text', required: true, sample: 'GKO-485721-FL' },
    { id: '7.3', section: 'YOUR INSURANCE', title: 'Claim Filed?', prompt: 'Filed a claim?', type: 'yesno', required: true, sample: 'yes' },
    { id: '7.4', section: 'YOUR INSURANCE', title: 'PIP Coverage?', prompt: 'Have PIP coverage?', type: 'radio', options: ['Yes', 'No', 'Not sure'], required: true, sample: 'Yes' },
    { id: '7.5', section: 'HEALTH INS', title: 'Health Insurance?', prompt: 'Have health insurance?', type: 'yesno', required: true, sample: 'yes' },
    { id: '7.6', section: 'HEALTH INS', title: 'Company', prompt: 'Health insurance company?', type: 'text', required: false, sample: 'Blue Cross Blue Shield' },
    { id: '7.7', section: 'LEGAL', title: 'Other Attorneys?', prompt: 'Talked to other attorneys?', type: 'yesno', required: true, sample: 'no' },
    { id: '7.8', section: 'LEGAL', title: 'Signed Contract?', prompt: 'Signed with any attorney?', type: 'yesno', required: true, sample: 'no' },
    { id: '7.9', section: 'DECLARATIONS', title: 'Info Accurate?', prompt: 'Is all info accurate and true?', type: 'yesno', required: true, guidance: 'Your honesty is essential', sample: 'yes' },
    { id: '7.10', section: 'DECLARATIONS', title: 'Authorize Records', prompt: 'Authorize us to get your records?', type: 'yesno', required: true, sample: 'yes' },
    { id: '7.11', section: 'CONTACT', title: 'Preferred Contact', prompt: 'Preferred contact method?', type: 'radio', options: ['Phone', 'Text', 'Email', 'Any'], required: true, sample: 'Text' },
    { id: '7.12', section: 'FINAL', title: 'Anything Else?', prompt: 'Anything else to tell us?', type: 'audio', required: false, guidance: 'Share anything we haven\'t covered', sample: 'I just want to make sure my kids are taken care of. This has really impacted our family. How long will this take?' },
    { id: '7.13', section: 'SIGNATURE', title: 'Electronic Signature', prompt: 'Sign to confirm all info is accurate', type: 'signature', required: true, sample: 'Maria Elena Vasquez' },
  ],
};

export default function FullQuestionnaire() {
  const [screen, setScreen] = useState('intro');
  const [phase, setPhase] = useState(1);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showPhaseJumper, setShowPhaseJumper] = useState(false);
  const [lastTap, setLastTap] = useState(0);
  
  // Audio states
  const [recording, setRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [showAudioReview, setShowAudioReview] = useState(false);
  const [audioText, setAudioText] = useState('');
  
  // Get current question
  const currentQuestions = QUESTIONS[phase] || [];
  const currentQ = currentQuestions[qIdx];
  const currentPhase = PHASES.find(p => p.id === phase);
  
  // Timer for recording
  useEffect(() => {
    let interval;
    if (recording) {
      interval = setInterval(() => setRecordTime(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [recording]);

  // Double-tap handler
  const handleDoubleTap = useCallback(() => {
    const now = Date.now();
    if (now - lastTap < 300) {
      handleSkip();
    }
    setLastTap(now);
  }, [lastTap, screen, phase, qIdx]);

  const handleSkip = () => {
    if (screen === 'intro') {
      setScreen('questions');
    } else if (screen === 'questions') {
      // Auto-fill and advance
      if (currentQ) {
        setAnswers(a => ({ ...a, [currentQ.id]: currentQ.sample }));
      }
      if (qIdx < currentQuestions.length - 1) {
        setQIdx(q => q + 1);
      } else if (phase < 7) {
        setPhase(p => p + 1);
        setQIdx(0);
      } else {
        setScreen('complete');
      }
      setShowAudioReview(false);
      setAudioText('');
      setRecording(false);
    } else if (screen === 'complete') {
      // Reset
      setScreen('intro');
      setPhase(1);
      setQIdx(0);
      setAnswers({});
    }
  };

  const handleNext = () => {
    if (qIdx < currentQuestions.length - 1) {
      setQIdx(q => q + 1);
    } else if (phase < 7) {
      setPhase(p => p + 1);
      setQIdx(0);
    } else {
      setScreen('complete');
    }
    setShowAudioReview(false);
    setAudioText('');
    setRecording(false);
  };

  const handlePrev = () => {
    if (qIdx > 0) {
      setQIdx(q => q - 1);
    } else if (phase > 1) {
      setPhase(p => p - 1);
      setQIdx(QUESTIONS[phase - 1].length - 1);
    }
    setShowAudioReview(false);
    setAudioText('');
    setRecording(false);
  };

  const handleAnswer = (value) => {
    setAnswers(a => ({ ...a, [currentQ.id]: value }));
  };

  const startRecording = () => {
    setRecording(true);
    setRecordTime(0);
  };

  const stopRecording = () => {
    setRecording(false);
    // Simulate transcription
    setShowAudioReview(true);
    const sample = currentQ.sample;
    let c = 0;
    const iv = setInterval(() => {
      if (c < sample.length) {
        setAudioText(sample.slice(0, ++c));
      } else {
        clearInterval(iv);
      }
    }, 8);
  };

  const approveAudio = () => {
    setAnswers(a => ({ ...a, [currentQ.id]: audioText }));
    setShowAudioReview(false);
    setAudioText('');
    handleNext();
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  
  const hasAnswer = currentQ && (answers[currentQ.id] !== undefined && answers[currentQ.id] !== '');

  // Calculate overall progress
  const totalQuestions = Object.values(QUESTIONS).reduce((sum, qs) => sum + qs.length, 0);
  const completedQuestions = Object.keys(answers).length;
  const overallProgress = Math.round((completedQuestions / totalQuestions) * 100);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE JUMPER MODAL
  // ═══════════════════════════════════════════════════════════════════════════
  const PhaseJumper = () => (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.95)', zIndex: 1000, padding: 20,
      fontFamily: FONT, display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ color: COLORS.white, fontSize: 22, fontWeight: 700, margin: 0 }}>Jump to Phase</h2>
        <button onClick={() => setShowPhaseJumper(false)} style={{
          background: COLORS.charcoal, color: COLORS.white, border: 'none',
          width: 44, height: 44, borderRadius: 22, fontSize: 24, cursor: 'pointer',
        }}>✕</button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {PHASES.map((p) => {
          const phaseQs = QUESTIONS[p.id] || [];
          const answered = phaseQs.filter(q => answers[q.id]).length;
          return (
            <button
              key={p.id}
              onClick={() => { setPhase(p.id); setQIdx(0); setShowPhaseJumper(false); }}
              style={{
                width: '100%', background: p.id === phase ? p.color : COLORS.charcoal,
                border: `2px solid ${p.color}`, borderRadius: 14, padding: 16,
                marginBottom: 12, cursor: 'pointer', textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 28 }}>{p.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: COLORS.white, fontSize: 17, fontWeight: 700 }}>
                    Phase {p.id}: {p.title}
                  </div>
                  <div style={{ color: '#888', fontSize: 13, marginTop: 4 }}>
                    {answered}/{phaseQs.length} questions answered
                  </div>
                </div>
                {answered === phaseQs.length && phaseQs.length > 0 && (
                  <span style={{ color: COLORS.success, fontSize: 24 }}>✓</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // INTRO SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (screen === 'intro') {
    return (
      <div onClick={handleDoubleTap} style={{
        minHeight: '100vh', background: `linear-gradient(180deg, ${COLORS.charcoal}, #000)`,
        padding: 20, fontFamily: FONT, display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ textAlign: 'center', paddingTop: 30, marginBottom: 30 }}>
          <div style={{
            background: 'linear-gradient(90deg, #000 38%, #C41E3A 38%)',
            padding: '10px 20px', borderRadius: 8, display: 'inline-block', marginBottom: 20,
          }}>
            <span style={{ color: COLORS.white, fontWeight: 800, fontSize: 18 }}>1-800 ASK-GARY</span>
          </div>
          <h1 style={{ color: COLORS.white, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
            Complete Your Case File
          </h1>
          <p style={{ color: COLORS.warning, fontSize: 17, fontWeight: 500 }}>
            Detailed information for your attorney
          </p>
        </div>

        <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, marginBottom: 20 }}>
          <h2 style={{ color: COLORS.black, fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
            7 Phases to Complete:
          </h2>
          {PHASES.map((p, i) => (
            <div key={p.id} style={{
              display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14,
              padding: 12, background: i % 2 === 0 ? COLORS.offWhite : COLORS.white, borderRadius: 10,
            }}>
              <span style={{
                width: 40, height: 40, borderRadius: 10, background: p.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>{p.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: COLORS.black, fontSize: 16, fontWeight: 600 }}>{p.title}</div>
                <div style={{ color: COLORS.gray, fontSize: 13 }}>{QUESTIONS[p.id]?.length || 0} questions</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, background: COLORS.white, borderRadius: 14, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.primary }}>
              {totalQuestions}
            </div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>Total Questions</div>
          </div>
          <div style={{ flex: 1, background: COLORS.white, borderRadius: 14, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.info }}>~25</div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>Minutes</div>
          </div>
          <div style={{ flex: 1, background: COLORS.white, borderRadius: 14, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.success }}>✓</div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>Save Progress</div>
          </div>
        </div>

        <button onClick={() => setScreen('questions')} style={{
          width: '100%', background: COLORS.primary, color: COLORS.white, border: 'none',
          padding: 20, fontSize: 20, fontWeight: 700, borderRadius: 14, cursor: 'pointer',
          fontFamily: FONT, boxShadow: '0 6px 25px rgba(196,30,58,0.4)',
        }}>
          BEGIN QUESTIONNAIRE →
        </button>

        <button onClick={() => setScreen('questions')} style={{
          position: 'fixed', bottom: 100, right: 20, background: COLORS.info,
          color: COLORS.white, border: 'none', padding: '12px 20px', fontSize: 15,
          fontWeight: 700, borderRadius: 25, cursor: 'pointer', zIndex: 100,
        }}>SKIP →</button>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // AUDIO REVIEW SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (showAudioReview && currentQ?.type === 'audio') {
    return (
      <div style={{
        minHeight: '100vh', background: COLORS.offWhite,
        padding: 20, fontFamily: FONT, display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          background: COLORS.white, padding: 16, borderRadius: 12, marginBottom: 20,
          borderBottom: `4px solid ${COLORS.success}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{
              background: COLORS.success, color: COLORS.white, padding: '4px 12px',
              borderRadius: 15, fontSize: 14, fontWeight: 700,
            }}>✓ RECORDED</span>
            <span style={{ color: COLORS.gray, fontSize: 14 }}>
              Review your response
            </span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ color: COLORS.black, fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
            Review Your Answer
          </h1>
          <p style={{ color: COLORS.gray, fontSize: 15, marginBottom: 20 }}>
            {currentQ.title}
          </p>

          <div style={{
            background: COLORS.warning, borderRadius: 14, padding: 16, marginBottom: 20,
          }}>
            <p style={{ color: COLORS.black, fontSize: 17, fontWeight: 600, margin: 0 }}>
              💡 We've cleaned up spelling and punctuation. Please review and approve.
            </p>
          </div>

          <div style={{
            background: COLORS.white, borderRadius: 20, padding: 24,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}>
            <div style={{
              background: COLORS.offWhite, borderRadius: 12, padding: 16,
              maxHeight: 250, overflowY: 'auto',
            }}>
              <p style={{ color: COLORS.black, fontSize: 17, lineHeight: 1.6, margin: 0 }}>
                "{audioText}"
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
          <button onClick={approveAudio} style={{
            width: '100%', background: COLORS.success, color: COLORS.white, border: 'none',
            padding: 20, fontSize: 20, fontWeight: 700, borderRadius: 14, cursor: 'pointer',
            fontFamily: FONT, boxShadow: '0 6px 25px rgba(48,209,88,0.4)',
          }}>
            ✓ APPROVE & CONTINUE
          </button>
          <button onClick={() => { setShowAudioReview(false); setAudioText(''); }} style={{
            width: '100%', background: 'transparent', color: COLORS.primary,
            border: `3px solid ${COLORS.primary}`, padding: 16, fontSize: 17,
            fontWeight: 700, borderRadius: 14, cursor: 'pointer', fontFamily: FONT,
          }}>
            🎤 RE-RECORD
          </button>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // QUESTION SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (screen === 'questions' && currentQ) {
    return (
      <div style={{
        minHeight: '100vh', background: COLORS.offWhite,
        display: 'flex', flexDirection: 'column', fontFamily: FONT,
      }}>
        {showPhaseJumper && <PhaseJumper />}

        {/* Header */}
        <div style={{
          background: COLORS.white, padding: 16,
          borderBottom: `4px solid ${currentPhase?.color || COLORS.primary}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <button onClick={() => setShowPhaseJumper(true)} style={{
              background: currentPhase?.color || COLORS.primary, color: COLORS.white,
              padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700,
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {currentPhase?.icon} Phase {phase} ▼
            </button>
            <span style={{
              color: COLORS.black, fontSize: 13, fontWeight: 600,
              background: COLORS.lightGray, padding: '6px 12px', borderRadius: 8,
            }}>
              {currentQ.section}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: COLORS.gray, marginBottom: 8 }}>
            <span>Q{qIdx + 1}/{currentQuestions.length}</span>
            <span>{overallProgress}% complete</span>
          </div>
          <div style={{ background: COLORS.lightGray, height: 6, borderRadius: 3 }}>
            <div style={{
              background: currentPhase?.color || COLORS.primary, height: '100%',
              width: `${((qIdx + 1) / currentQuestions.length) * 100}%`, borderRadius: 3,
            }} />
          </div>
        </div>

        {/* Content */}
        <div onClick={handleDoubleTap} style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <h1 style={{ color: COLORS.black, fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
            {currentQ.title}
          </h1>

          <div style={{ background: COLORS.infoLight, borderRadius: 14, padding: 18, marginBottom: 20 }}>
            <p style={{ color: COLORS.black, fontSize: 18, fontWeight: 500, margin: 0 }}>
              "{currentQ.prompt}"
            </p>
          </div>

          {currentQ.guidance && (
            <div style={{ background: COLORS.warning, borderRadius: 14, padding: 16, marginBottom: 20 }}>
              <p style={{ color: COLORS.black, fontSize: 16, fontWeight: 600, margin: 0 }}>
                💡 {currentQ.guidance}
              </p>
            </div>
          )}

          {/* Question Input based on type */}
          <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            
            {/* TEXT INPUT */}
            {(currentQ.type === 'text' || currentQ.type === 'phone' || currentQ.type === 'email') && (
              <input
                type={currentQ.type === 'email' ? 'email' : 'text'}
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder={currentQ.placeholder || 'Type your answer...'}
                style={{
                  width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                  border: `2px solid ${COLORS.lightGray}`, borderRadius: 12,
                  boxSizing: 'border-box', outline: 'none',
                }}
              />
            )}

            {/* DATE INPUT */}
            {currentQ.type === 'date' && (
              <input
                type="date"
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                style={{
                  width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                  border: `2px solid ${COLORS.lightGray}`, borderRadius: 12,
                  boxSizing: 'border-box',
                }}
              />
            )}

            {/* NUMBER/CURRENCY INPUT */}
            {(currentQ.type === 'number' || currentQ.type === 'currency') && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {currentQ.type === 'currency' && (
                  <span style={{ fontSize: 24, fontWeight: 700, color: COLORS.gray }}>$</span>
                )}
                <input
                  type="number"
                  value={answers[currentQ.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder="0"
                  style={{
                    flex: 1, padding: 18, fontSize: 18, fontFamily: FONT,
                    border: `2px solid ${COLORS.lightGray}`, borderRadius: 12,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            )}

            {/* SELECT DROPDOWN */}
            {currentQ.type === 'select' && (
              <select
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                style={{
                  width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                  border: `2px solid ${COLORS.lightGray}`, borderRadius: 12,
                  background: COLORS.white, cursor: 'pointer',
                }}
              >
                <option value="">Select an option...</option>
                {currentQ.options?.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            )}

            {/* RADIO OPTIONS */}
            {currentQ.type === 'radio' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {currentQ.options?.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    style={{
                      padding: 16, fontSize: 17, fontFamily: FONT, fontWeight: 500,
                      border: `3px solid ${answers[currentQ.id] === opt ? currentPhase?.color : COLORS.lightGray}`,
                      borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                      background: answers[currentQ.id] === opt ? `${currentPhase?.color}15` : COLORS.white,
                      color: COLORS.black,
                    }}
                  >
                    {answers[currentQ.id] === opt && '✓ '}{opt}
                  </button>
                ))}
              </div>
            )}

            {/* YES/NO */}
            {currentQ.type === 'yesno' && (
              <div style={{ display: 'flex', gap: 12 }}>
                {['yes', 'no'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    style={{
                      flex: 1, padding: 20, fontSize: 18, fontFamily: FONT, fontWeight: 700,
                      border: `3px solid ${answers[currentQ.id] === opt ? (opt === 'yes' ? COLORS.success : COLORS.primary) : COLORS.lightGray}`,
                      borderRadius: 14, cursor: 'pointer',
                      background: answers[currentQ.id] === opt
                        ? (opt === 'yes' ? COLORS.successLight : COLORS.primaryLight)
                        : COLORS.white,
                      color: answers[currentQ.id] === opt
                        ? (opt === 'yes' ? COLORS.successDark : COLORS.primaryDark)
                        : COLORS.black,
                    }}
                  >
                    {opt === 'yes' ? '✓ YES' : '✕ NO'}
                  </button>
                ))}
              </div>
            )}

            {/* CHECKBOX */}
            {currentQ.type === 'checkbox' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {currentQ.options?.map((opt, i) => {
                  const selected = (answers[currentQ.id] || []).includes(opt);
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        const current = answers[currentQ.id] || [];
                        if (selected) {
                          handleAnswer(current.filter(x => x !== opt));
                        } else {
                          handleAnswer([...current, opt]);
                        }
                      }}
                      style={{
                        padding: 16, fontSize: 17, fontFamily: FONT, fontWeight: 500,
                        border: `3px solid ${selected ? currentPhase?.color : COLORS.lightGray}`,
                        borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                        background: selected ? `${currentPhase?.color}15` : COLORS.white,
                        color: COLORS.black,
                      }}
                    >
                      {selected ? '☑ ' : '☐ '}{opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* AUDIO RECORDING */}
            {currentQ.type === 'audio' && (
              <div style={{ textAlign: 'center' }}>
                {recording ? (
                  <>
                    <div onClick={stopRecording} style={{
                      width: 100, height: 100, borderRadius: '50%', background: COLORS.success,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 16px', cursor: 'pointer',
                      boxShadow: '0 0 0 12px rgba(48,209,88,0.25)',
                    }}>
                      <div style={{ width: 30, height: 30, background: COLORS.white, borderRadius: 6 }} />
                    </div>
                    <div style={{ color: COLORS.success, fontSize: 20, fontWeight: 700 }}>RECORDING...</div>
                    <div style={{ color: COLORS.black, fontSize: 24, fontWeight: 700, marginTop: 8 }}>{formatTime(recordTime)}</div>
                    <div style={{ color: COLORS.gray, fontSize: 15, marginTop: 8 }}>Tap GREEN to stop</div>
                  </>
                ) : (
                  <>
                    <div onClick={startRecording} style={{
                      width: 100, height: 100, borderRadius: '50%', background: COLORS.primary,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 16px', cursor: 'pointer',
                      boxShadow: '0 8px 30px rgba(196,30,58,0.4)',
                    }}>
                      <span style={{ fontSize: 40 }}>🎤</span>
                    </div>
                    <div style={{ color: COLORS.primary, fontSize: 20, fontWeight: 700 }}>TAP TO RECORD</div>
                    <div style={{ color: COLORS.gray, fontSize: 15, marginTop: 8 }}>Speak your answer</div>
                  </>
                )}
              </div>
            )}

            {/* SIGNATURE */}
            {currentQ.type === 'signature' && (
              <div>
                <div style={{
                  border: `2px dashed ${COLORS.lightGray}`, borderRadius: 12,
                  padding: 40, textAlign: 'center', marginBottom: 16,
                  background: COLORS.offWhite,
                }}>
                  {answers[currentQ.id] ? (
                    <div style={{ fontFamily: 'cursive', fontSize: 32, color: COLORS.black }}>
                      {answers[currentQ.id]}
                    </div>
                  ) : (
                    <div style={{ color: COLORS.gray, fontSize: 16 }}>
                      Signature will appear here
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={answers[currentQ.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder="Type your full legal name to sign"
                  style={{
                    width: '100%', padding: 18, fontSize: 18, fontFamily: FONT,
                    border: `2px solid ${COLORS.lightGray}`, borderRadius: 12,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            )}

            {/* TEXTAREA */}
            {currentQ.type === 'textarea' && (
              <textarea
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder={currentQ.placeholder || 'Type your answer...'}
                rows={4}
                style={{
                  width: '100%', padding: 18, fontSize: 17, fontFamily: FONT,
                  border: `2px solid ${COLORS.lightGray}`, borderRadius: 12,
                  boxSizing: 'border-box', resize: 'vertical',
                }}
              />
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{
          background: COLORS.white, padding: 16, borderTop: `2px solid ${COLORS.lightGray}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button onClick={handlePrev} disabled={phase === 1 && qIdx === 0} style={{
            background: (phase === 1 && qIdx === 0) ? COLORS.lightGray : COLORS.charcoal,
            color: (phase === 1 && qIdx === 0) ? '#999' : COLORS.white,
            border: 'none', padding: '14px 20px', fontSize: 16, fontWeight: 700,
            borderRadius: 12, cursor: (phase === 1 && qIdx === 0) ? 'not-allowed' : 'pointer',
            fontFamily: FONT,
          }}>
            ← BACK
          </button>

          <button onClick={handleSkip} style={{
            background: COLORS.info, color: COLORS.white, border: 'none',
            padding: '14px 18px', fontSize: 14, fontWeight: 700, borderRadius: 12,
            cursor: 'pointer', fontFamily: FONT,
          }}>
            SKIP →
          </button>

          <button
            onClick={handleNext}
            disabled={currentQ.required && !hasAnswer}
            style={{
              background: (currentQ.required && !hasAnswer) ? COLORS.lightGray : COLORS.warning,
              color: (currentQ.required && !hasAnswer) ? '#999' : COLORS.black,
              border: 'none', padding: '14px 24px', fontSize: 16, fontWeight: 700,
              borderRadius: 12, cursor: (currentQ.required && !hasAnswer) ? 'not-allowed' : 'pointer',
              fontFamily: FONT, boxShadow: hasAnswer ? '0 4px 15px rgba(255,214,10,0.4)' : 'none',
            }}
          >
            {phase === 7 && qIdx === currentQuestions.length - 1 ? 'FINISH' : 'NEXT'} →
          </button>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPLETE SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (screen === 'complete') {
    return (
      <div onClick={handleDoubleTap} style={{
        minHeight: '100vh', background: `linear-gradient(180deg, ${COLORS.charcoal}, #000)`,
        padding: 20, fontFamily: FONT, display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ textAlign: 'center', paddingTop: 40, marginBottom: 30 }}>
          <div style={{
            width: 100, height: 100, borderRadius: '50%', background: COLORS.success,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', fontSize: 50,
          }}>🎉</div>
          <h1 style={{ color: COLORS.white, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
            QUESTIONNAIRE COMPLETE!
          </h1>
          <p style={{ color: COLORS.warning, fontSize: 18, fontWeight: 500 }}>
            Your case file is ready for review
          </p>
        </div>

        <div style={{ background: COLORS.white, borderRadius: 20, padding: 24, marginBottom: 20 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
            padding: 16, background: COLORS.successLight, borderRadius: 12,
          }}>
            <span style={{ fontSize: 32 }}>✓</span>
            <div>
              <div style={{ color: COLORS.successDark, fontSize: 18, fontWeight: 700 }}>
                {completedQuestions} Questions Answered
              </div>
              <div style={{ color: COLORS.gray, fontSize: 14 }}>
                All 7 phases complete
              </div>
            </div>
          </div>

          <h2 style={{ color: COLORS.black, fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
            What Happens Next:
          </h2>
          {[
            { icon: '📋', title: 'Case File Submitted', sub: 'Your attorney will review' },
            { icon: '📞', title: 'Attorney Contact', sub: 'Within 24-48 hours' },
            { icon: '⚖️', title: 'Case Evaluation', sub: 'Strategy discussion' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: i === 0 ? COLORS.successLight : i === 1 ? COLORS.infoLight : COLORS.warningLight,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
              }}>{item.icon}</div>
              <div>
                <div style={{ color: COLORS.black, fontSize: 17, fontWeight: 700 }}>{item.title}</div>
                <div style={{ color: COLORS.gray, fontSize: 14 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: COLORS.primary, borderRadius: 16, padding: 20, marginBottom: 20,
        }}>
          <div style={{ color: COLORS.white, fontSize: 16, fontWeight: 600, textAlign: 'center', marginBottom: 12 }}>
            Questions? Need medical care?
          </div>
          <div style={{
            background: COLORS.white, borderRadius: 12, padding: 16, textAlign: 'center',
          }}>
            <div style={{ color: COLORS.primary, fontSize: 24, fontWeight: 800 }}>
              1-800-ASK-GARY
            </div>
          </div>
        </div>

        <button onClick={() => { setScreen('intro'); setPhase(1); setQIdx(0); setAnswers({}); }} style={{
          width: '100%', background: COLORS.info, color: COLORS.white, border: 'none',
          padding: 18, fontSize: 18, fontWeight: 700, borderRadius: 14, cursor: 'pointer',
          fontFamily: FONT, marginBottom: 12,
        }}>
          ↻ RESTART DEMO
        </button>

        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <div style={{ fontFamily: 'Georgia', color: '#666', fontSize: 12, letterSpacing: 3 }}>
            NOETIC DHARMA
          </div>
        </div>
      </div>
    );
  }

  return null;
}
