# Heyron Docs - Mission Control Replatform

## Project Overview
Transform heyron-docs from a tutorial site to a full-featured Heyron.ai clone with login flow, dashboard, and member-only sections.

## Target Structure

```
HOME ( Landing)
├── Sign Up / Login
↓
MISSION CONTROL (Dashboard)
├── 🚀 Your Agent
│   ├── New User → Launchpad → OpenClaw
│   └── Returning → OpenClaw
├── ⚡ Quickstart → GitHub (Quickstart Repo)
├── 📚 Tutorials → /tutorials
├── 🗂 Filing Cabinet (internal)
├── 🛠 Fix Agent → /troubleshooting
├── 💬 Get Help → Discord (external)
└── ⚙️ Account → Subscription Page

LAUNCHPAD (first-time only)
├── Step 1 → Quickstart
├── Step 2 → Run First Task
├── Step 3 → Join Discord
└── → OpenClaw
```

## Page Structure

| Route | Component | Auth Required |
|-------|-----------|---------------|
| `/` | Home/Landing | No |
| `/login` | Login Page | No |
| `/signup` | Sign Up Page | No |
| `/dashboard` | Mission Control | Yes |
| `/dashboard/agent` | Your Agent | Yes |
| `/dashboard/quickstart` | Quickstart Hub | Yes |
| `/dashboard/tutorials` | Tutorials Hub | Yes |
| `/dashboard/filing-cabinet` | Filing Cabinet | Yes |
| `/dashboard/fix-agent` | Fix Agent | Yes |
| `/dashboard/help` | Get Help | Yes |
| `/dashboard/account` | Account/Subscription | Yes |
| `/launchpad` | Launchpad Flow | Yes (first-time) |

## Authentication Flow

### Option A: Mock Login (Demo)
- Simple form with email/password
- Store "logged in" state in localStorage
- Show/hide based on auth state

### Option B: Firebase Auth (Production)
- Integrate Firebase Authentication
- Real user accounts
- Subscription management

### Decision: Start with Mock Login for prototype

## Implementation Plan

### Phase 1: Landing + Auth (Today)
1. Create `/login` page with email/password form
2. Create `/signup` page with registration form
3. Add auth context (React context for login state)
4. Protect dashboard routes

### Phase 2: Dashboard Structure
1. Create `/dashboard` layout with sidebar
2. Add navigation items matching structure
3. Create section pages with placeholder content

### Phase 3: Launchpad
1. Create `/launchpad` multi-step flow
2. Track if user has completed onboarding
3. Redirect to dashboard after completion

### Phase 4: Polish
1. Add real content to each section
2. Style with Mission Control design system
3. Test auth flow

## Technical Notes

- Use Next.js App Router
- Create auth context for state management
- Protect routes with middleware or client-side checks
- Use CSS variables for consistent theming
- All pages use existing design system

## Files to Create/Modify

### New Files
- `/src/app/login/page.tsx`
- `/src/app/signup/page.tsx`
- `/src/app/dashboard/layout.tsx`
- `/src/app/dashboard/page.tsx`
- `/src/app/dashboard/agent/page.tsx`
- `/src/app/dashboard/quickstart/page.tsx`
- `/src/app/dashboard/tutorials/page.tsx`
- `/src/app/dashboard/filing-cabinet/page.tsx`
- `/src/app/dashboard/fix-agent/page.tsx`
- `/src/app/dashboard/help/page.tsx`
- `/src/app/dashboard/account/page.tsx`
- `/src/app/launchpad/page.tsx`
- `/src/contexts/AuthContext.tsx`

### Modify Files
- `/src/components/Navigation.tsx` - Add conditional auth links
- `/src/app/page.tsx` - Update to link to login/signup