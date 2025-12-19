# ASK-GARY Voice-First Case Intake Portal

> **© 2025 Noetic Dharma Group, LLC | CONFIDENTIAL & PROPRIETARY**

Complete unified demo of the ASK-GARY Voice-First Case Intake Portal for Dr. Gary Kompothecras.

## Demo Access

**PIN Code:** `STOPAUTISM`

## Features

- **Complete Unified Flow** - Audio Interview → Transcript Review → Full 7-Phase Questionnaire
- **Feature Showcase** - 18-screen mobile app visual walkthrough
- **Audio-First Interview** - Standalone voice-to-text demo with presenter mode

## Tech Stack

- Vite + React
- Self-contained components with inline styles
- No external dependencies beyond React

## Deployment to Vercel

### Option 1: Via GitHub (Recommended)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ASK-GARY Unified Demo"
   git branch -M main
   git remote add origin git@github.com:badandy-beep/askgary-unified.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Deploy automatically

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Local Development

```bash
npm install
npm run dev
```

## Project Structure

```
askgary-unified/
├── src/
│   ├── App.jsx                    # Main app with navigation
│   ├── PinGate.jsx                # PIN authentication
│   ├── AskGaryCompleteDemo.jsx    # Unified flow
│   ├── FeatureShowcase.jsx        # 18-screen demo
│   ├── AudioFirstDemo.jsx         # Voice interview
│   └── index.css                  # Global styles
├── public/
│   └── photos/                    # Licensed images
├── index.html
├── vercel.json                    # Deployment config
└── package.json
```

---

**Noetic Dharma Group**  
Private Equity • Venture Capital • Strategic Advisory  
www.noeticdharma.com
