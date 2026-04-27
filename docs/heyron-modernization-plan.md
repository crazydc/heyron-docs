# Heyron Modernization Plan

> **Design Design Vision:** Guided path (not buffet), mobile-first, component-driven design, content behind login.

---

## 📚 Documentation Navigation

| Document | Description |
|----------|-------------|
| **[Task Breakdown](./task-breakdown.md)** | 133 micro-tasks (10-20 min each), ordered by dependency |
| **[User Flows](./user-flows.md)** | All paths: signup, login, onboarding, dashboard, account, logout |
| **[Component Spec](./component-spec.md)** | 34 UI components with full specifications |
| **[Design Requirements](./design-requirements.md)** | All feedback consolidated from Design |
| **[Phase 0: Foundation](./phase-0-foundation.md)** | Backend setup + DB schema |
| **[Phase 1: Landing](./phase-1-landing.md)** | Landing page conversion |
| **[Phase 2: Sign Up](./phase-2-signup.md)** | Authentication pages |
| **[Phase 3: Onboarding](./phase-3-onboarding.md)** | Launchpad wizard |
| **[Phase 4: Mission Control](./phase-4-mission-control.md)** | Dashboard |
| **[Phase 5: Account](./phase-5-account.md)** | Account page |
| **[Deployment Guide](./deployment-guide.md)** | Vercel + Supabase full setup |

---

## Overview

Convert heyron-doc from basic HTML to a full React-based platform with authentication, onboarding walkthrough, and user dashboard.

---

## Project Structure

```
heyron-docs/
├── client/                 # React frontend (Vite + React Router)
│   ├── src/
│   │   ├── components/     # Shared components
│   │   │   ├── layout/     # Layout, Header, Footer
│   │   │   ├── ui/         # Buttons, Inputs, Cards
│   │   │   └── common/     # Logo, Loading, etc.
│   │   ├── pages/          # Page components
│   │   │   ├── Landing.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Onboarding.jsx
│   │   │   ├── MissionControl.jsx
│   │   │   └── Account.jsx
│   │   ├── store/          # Redux store
│   │   │   ├── index.js    # Store config
│   │   │   ├── slices/     # Redux slices
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── userSlice.js
│   │   │   │   └── onboardingSlice.js
│   │   │   └── hooks.js     # useSelector/useDispatch wrappers
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utility functions
│   │   ├── styles/         # Global styles & theme
│   │   ├── assets/         # Images, icons
│   │   ├── App.jsx         # Main app with routes
│   │   └── main.jsx        # Entry point
│   └── public/
├── server/                 # Express backend (if needed)
│   ├── routes/
│   ├── middleware/
│   └── models/
└── docs/                   # This plan
```

---

## Layout Architecture

### Page Layout Template

```
┌─────────────────────────────────────────────┐
│                   HEADER                    │
│  [Logo]            [Nav Links]    [Auth]    │
├─────────────────────────────────────────────┤
│                                             │
│              MAIN CONTENT                   │
│         (changes per page)                 │
│                                             │
├─────────────────────────────────────────────┤
│                   FOOTER                    │
│     [Links]    [Social]    [Copyright]     │
└─────────────────────────────────────────────┘
```

### Layout Components

- **Layout** (wrapper): Wraps all pages, contains Header + Footer
- **Header**: Logo, navigation, auth state (sign in/profile)
- **Footer**: Links, social icons, copyright
- **Main Content**: Router outlet (renders current page)

### Auth vs Unauth Layout

| State | Header Content | Pages Accessible |
|-------|----------------|-------------------|
| **Unauthenticated** | Logo + "Sign In" button | Landing, Sign Up |
| **Authenticated** | Logo + "Mission Control" + Profile | Onboarding, Mission Control, Account |

### Shared Styles

- Same background color on all pages
- Same container max-width (660px)
- Same spacing/padding conventions
- Smooth page transitions (Framer Motion)

---

## User Flow (Design Vision)

```
HOME (Landing)
└── Sign Up / Login (SignUp)
    ↓
MISSION CONTROL (Dashboard)
├── 🚀 Your Agent    → Launchpad (new users) / OpenClaw (returning)
├── ⚡️ Quickstart   → GitHub (external)
├── 📚 Tutorials    → GitHub (external)
├── 🗂 Filing Cabinet → Internal
├── 🛠 Fix Agent    → Internal / Diagnostics
├── 💬 Get Help     → Discord (external)
└── ⚙️ Account      → Account Page
```

### Key Principles (from design review)

1. **Guided path, not a buffet** — Each user sees what they need
2. **New vs Returning users** — Different flows (Launchpad vs OpenClaw directly)
3. **Mobile-first** — Design for mobile discovery
4. **Component-driven** — Same cards across all sites
5. **Content behind login** — Teasers public, full content members only

---

## Style Guide

### Colors (from current HTML)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0c1018` | Main background |
| `--bg-secondary` | `#111822` | Section backgrounds |
| `--bg-card` | `#182230` | Card backgrounds |
| `--text-primary` | `#e8edf2` | Main text |
| `--text-secondary` | `#8a9bb0` | Subtitles, descriptions |
| `--text-muted` | `#5a6a7a` | Hints, timestamps |
| `--border` | `#243040` | Borders, dividers |
| `--accent` | `#5ec4d4` | CTAs, highlights |
| `--success` | `#4ade80` | Success states |
| `--warning` | `#eab308` | Warnings, beta notice |

### New Colors to Add

| Token | Value | Usage |
|-------|-------|-------|
| `--error` | `#f87171` | Error states |
| `--accent-hover` | `#4ab0c0` | Button hover |
| `--discord` | `#5865F2` | Discord branding |

### Typography

- **Font Family:** DM Sans (Google Fonts)
- **Headings:** 700-800 weight
- **Body:** 400-500 weight, 1.6 line-height
- **Font Sizes:**
  - H1: 52px (hero), 26px (sections)
  - H2: 26px
  - H3: 15-20px
  - Body: 14-18px
  - Small: 11-13px

### Spacing

- **Container:** max-width 660px, padding 0 24px
- **Section:** padding 48px vertical
- **Cards:** padding 18-24px, border-radius 12px
- **Buttons:** padding 14px 28px, border-radius 10px

---

## Pages & Features Checklist

### Phase 0: Foundation (Do First!)

- [ ] Set up Vite + React project
- [ ] Configure React Router
- [ ] Set up Redux Toolkit store
- [ ] Create layout components (Header, Footer, Layout wrapper)
- [ ] Define theme/CSS variables
- [ ] Test routing between placeholder pages

### Phase 1: Landing Page (Convert HTML)

- [ ] Convert current HTML to React components
- [ ] Extract CSS to styled-components or CSS modules
- [ ] Make responsive (mobile-friendly)
- [ ] Preserve current color scheme
- [ ] Add smooth scroll & animations
- [ ] Update header with navigation

### Phase 2: Sign Up Page

- [ ] Create sign-up form component
- [ ] Fields: Full Name (required), Email (required), Discord ID (optional)
- [ ] Add Discord ID helper (tooltip/modal showing how to find it)
- [ ] Form validation (email format, required fields)
- [ ] Submit to backend API
- [ ] Handle loading/success/error states

**Discord ID Helper Content:**
> To find your Discord User ID:
> 1. Open Discord Settings → Advanced
> 2. Enable "Developer Mode"
> 3. Right-click your username → "Copy User ID"

### Phase 3: Welcome Walkthrough

- [ ] Create multi-step onboarding wizard
- [ ] Steps based on launchpad.heyron.ai layout
- [ ] Collect agent setup information:
  - Server name selection
  - SSH key generation/import
  - Connection method (cloud vs local)
- [ ] Progress indicator
- [ ] Allow skip (optional)
- [ ] Save progress to user account
- [ ] Redirect to Mission Control on complete

### Phase 4: Mission Control (Dashboard)

- [ ] Import layout from mockheyron.github.io/
- [ ] Make it a React component
- [ ] Add real data binding (from user account)
- [ ] Responsive design
- [ ] Navigation to other pages

### Phase 5: Account Page

- [ ] **Profile Edit:**
  - [ ] Edit full name
  - [ ] Edit email
  - [ ] Edit Discord ID
  - [ ] Save changes

- [ ] **Payment History:**
  - [ ] List all payments
  - [ ] Show date, amount, method, status
  - [ ] Show activation date

- [ ] **Subscription Management:**
  - [ ] Show current plan
  - [ ] "Request Cancellation" button
  - [ ] Refund logic:
    - Within 5 days: Show refund option (active)
    - After 5 days: Grey out, show tooltip "Refunds only possible within 5 days of service"
  - [ ] Cancellation confirmation flow

---

## API Endpoints (Suggested)

### Auth
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### User
- `PUT /api/user/profile` - Update profile
- `GET /api/user/subscription` - Get subscription status
- `POST /api/user/subscription/cancel` - Request cancellation
- `POST /api/user/subscription/refund` - Request refund (within 5 days)

### Onboarding
- `GET /api/onboarding/status` - Get onboarding progress
- `PUT /api/onboarding/status` - Update onboarding progress

---

## Progress Tracker

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 0: Foundation | ⬜ Not Started | [Detailed Plan](./phase-0-foundation.md) |
| Phase 1: Landing Page | ⬜ Not Started | [Detailed Plan](./phase-1-landing.md) |
| Phase 2: Sign Up Page | ⬜ Not Started | [Detailed Plan](./phase-2-signup.md) |
| Phase 3: Onboarding | ⬜ Not Started | [Detailed Plan](./phase-3-onboarding.md) |
| Phase 4: Mission Control | ⬜ Not Started | [Detailed Plan](./phase-4-mission-control.md) |
| Phase 5: Account Page | ⬜ Not Started | [Detailed Plan](./phase-5-account.md) |

## Component Library

See [Component Specification](./component-spec.md) for detailed UI component documentation.

---

## Quick Links

- [Component Spec](./component-spec.md)
- [Design Requirements](./design-requirements.md)
- [Task Breakdown](./task-breakdown.md)
- [User Flows](./user-flows.md)
- [Phase 0: Foundation](./phase-0-foundation.md)
- [Phase 1: Landing](./phase-1-landing.md)
- [Phase 2: Sign Up](./phase-2-signup.md)
- [Phase 3: Onboarding](./phase-3-onboarding.md)
- [Phase 4: Mission Control](./phase-4-mission-control.md)
- [Phase 5: Account](./phase-5-account.md)

---

## Design Requirements (24/04/2026)

This modernization project addresses many of Design concerns:

| Design Concern | How We Address It |
|-------------------|-------------------|
| JS tabs → real pages | React Router with proper URLs |
| 2-tier navigation | Header + Footer layout in Phase 0 |
| No unified navigation | Layout components shared across all pages |
| Visual interest needed | Landing page with stats, icons, animations |
| Hard-coded content | Future CMS consideration |

Full feedback: [Design Requirements](./design-requirements.md)

---

## State Management (Redux)

### Store Structure

```javascript
{
  auth: {
    isAuthenticated: boolean,
    user: null | { id, email, name, discordId },
    loading: boolean,
    error: null
  },
  user: {
    profile: { fullName, email, discordId },
    subscription: {
      status: 'active' | 'cancelled' | 'refunded',
      activatedAt: Date,
      plan: string
    },
    payments: [
      { id, date, amount, method, status }
    ]
  },
  onboarding: {
    currentStep: number,
    completed: boolean,
    agentConfig: { serverName, connectionType, sshKey }
  }
}
```

### Redux Slices

| Slice | Purpose | Key Actions |
|-------|---------|-------------|
| `authSlice` | Login state | login, logout, setUser, setError |
| `userSlice` | User profile & subscription | updateProfile, setSubscription, addPayment |
| `onboardingSlice` | Walkthrough progress | setStep, completeStep, setAgentConfig |

### Using in Components

```javascript
// Selectors
const { user, isAuthenticated } = useSelector(state => state.auth);
const { currentStep } = useSelector(state => state.onboarding);

// Actions
const dispatch = useDispatch();
dispatch(login({ email, password }));
dispatch(updateProfile({ fullName: 'New Name' }));
```

---

## Dependencies

### Frontend
- React 18+
- React Router DOM
- @reduxjs/toolkit + react-redux
- axios
- framer-motion (page transitions)
- styled-components or CSS modules

### Backend (if needed)
- Express.js
- MongoDB or PostgreSQL
- JWT auth
- Stripe (payments)

---

## Notes

- Current HTML uses DM Sans font, dark theme with teal accent (#5ec4d4)
- Mobile-first approach recommended
- Use component library (like shadcn/ui) to speed up development
- Consider using Vercel for deployment (frontend)