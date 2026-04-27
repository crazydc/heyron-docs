# Heyron - User Flows & Paths

*Complete path documentation for all scenarios*

---

## 📚 Related Documentation

- **[Main Plan](./heyron-modernization-plan.md)** - Overview & architecture
- **[Task Breakdown](./task-breakdown.md)** - 133 micro-tasks
- **[Component Spec](./component-spec.md)** - UI components
- **[Design Requirements](./design-requirements.md)** - Design requirements

---

## Overview: User States

| State | Description | Landing Behavior |
|-------|-------------|-------------------|
| **Anonymous** | Never logged in | Show Sign Up/Sign In CTAs |
| **New User** | Account, no onboarding | Show Launchpad |
| **Onboarding** | In progress | Show onboarding step |
| **Active User** | Completed onboarding | Show Dashboard |
| **Cancelled** | Subscription cancelled | Show Dashboard (limited) |

---

## PATH 1: New Visitor → Sign Up → Active User

```
┌────────────────────────────────────────────────────────────────────────────┐
│  LANDING PAGE                                                              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│  │ Click Sign │────▶│  SIGN UP    │────▶│  Redirect   │                  │
│  │    Up      │     │   FORM      │     │  to         │                  │
│  └─────────────┘     └──────┬──────┘     │  Onboarding │                  │
│                             │               └─────────────┘                  │
│                             │                                               │
│                        ┌────▼──────┐                                        │
│                        │  Submit   │                                        │
│                        │  FORM     │                                        │
│                        └─────┬─────┘                                        │
│                              │ POST /api/auth/register                      │
│                              ▼                                               │
│                        ┌─────────────┐                                      │
│                        │  SUCCESS   │────▶  Save JWT to localStorage         │
│                        │  (201 Created)                                    │
│                        └─────┬─────┘                                        │
│                              │                                               │
│                              ▼                                               │
│                    ┌───────────────────┐                                   │
│                    │  REDIRECT         │────▶  /onboarding                   │
│                    │  to /onboarding   │                                   │
│                    └───────────────────┘                                   │
└────────────────────────────────────────────────────────────────────────────┘
```

### Steps:
1. User visits landing page
2. Clicks "Get Started" → /signup
3. Fills form (name, email, password, discord optional)
4. Submits → API creates account
5. Returns token → stored in localStorage
6. Redirects to /onboarding

### Error States:
- Email taken (409) → Show "Email already exists"
- Invalid email → Show validation error
- Password weak → Show password requirements
- Network error → Show retry button

---

## PATH 2: New Visitor → Sign In → Active User

```
┌────────────────────────────────────────────────────────────────────────────┐
│  LANDING PAGE                                                              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│  │ Click Sign │────▶│  SIGN IN    │────▶│  CHECK      │                  │
│  │    In      │     │   FORM      │     │  ONBOARDING │                  │
│  └─────────────┘     └──────┬──────┘     │  STATUS     │                  │
│                             │              └──────┬──────┘                  │
│                        ┌────▼──────┐             │                         │
│                        │  Submit   │             ▼                         │
│                        │  FORM     │       ┌─────────────┐                 │
│                        └─────┬─────┘       │ COMPLETED   │                 │
│                              │             └──────┬──────┘                  │
│                              ▼                    │                        │
│                        ┌─────────────┐            │                        │
│                        │  SUCCESS   │◀───────────┘                        │
│                        │  (200 OK)  │                                      │
│                        └─────┬─────┘                                      │
│                              │                                               │
│                        Save JWT + refresh token                            │
│                              │                                               │
│                              ▼                                               │
│                    ┌───────────────────┐                                   │
│                    │  REDIRECT         │────▶  /onboarding OR /dashboard   │
│                    │  (conditional)    │                                   │
│                    └───────────────────┘                                   │
└────────────────────────────────────────────────────────────────────────────┘
```

### Steps:
1. User visits landing page
2. Clicks "Sign In" → /signin
3. Enters email + password
4. Submits → API validates
5. Returns tokens → stored in localStorage
6. Check onboarding status:
   - Not completed → /onboarding
   - Completed → /dashboard

---

## PATH 3: Onboarding Flow (New User)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  /onboarding                                                                │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ STEP 1: WELCOME                                        │              │
│  │ - Welcome message                                      │              │
│  │ - What to expect                                       │              │
│  │ - [Continue] ─────────────────────────────────────────▶ │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ STEP 2: SERVER SELECTION                                │              │
│  │ - Grid of c1-c8 servers                                 │              │
│  │ - Must select one before continuing                     │              │
│  │ - [Back] ──────────────────▶ [Continue] ──────────────▶ │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ STEP 3: CONNECTION TYPE                                 │              │
│  │ - Cloud / Local / SSH options                           │              │
│  │ - [Back] ──────────────────▶ [Continue] ──────────────▶ │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ STEP 4: SSH KEY                                         │              │
│  │ - Generate new OR paste existing                       │              │
│  │ - [Back] ──────────────────▶ [Continue] ──────────────▶ │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ STEP 5: COMPLETE                                         │              │
│  │ - Success message                                       │              │
│  │ - Summary of selections                                 │              │
│  │ - [Go to Dashboard] ──────────────────────────────────▶│              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ API CALL: POST /api/users/onboarding-complete           │              │
│  │ - Save server selection, connection type               │              │
│  │ - Mark user as onboarded                               │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  REDIRECT TO /dashboard                                                     │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## PATH 4: Active User → Dashboard

```
┌────────────────────────────────────────────────────────────────────────────┐
│  /dashboard                                                                │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ HEADER                                                 │              │
│  │ [Logo] [Mission Control] [Account] [Profile ▼]         │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ STATS BAR                                              │              │
│  │ [● Online: 2] [○ Offline: 0] [Σ Total: 2]              │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ DASHBOARD CARDS (7 sections)                            │              │
│  │                                                        │              │
│  │ ┌─────────────────┐ ┌─────────────────┐ ┌───────────┐  │              │
│  │ │ 🚀 Your Agent   │ │ ⚡ Quickstart   │ │ 📚 Tuts   │  │              │
│  │ └────────┬────────┘ └────────┬────────┘ └───┬─────┘  │              │
│  │          │                  │              │        │              │
│  │          ▼                  ▼              ▼        │              │
│  │    OpenClaw/Launchpad   GitHub (ext)   GitHub (ext)   │              │
│  │                                                        │              │
│  │ ┌─────────────────┐ ┌─────────────────┐ ┌───────────┐  │              │
│  │ │ 🗂 Filing Cab   │ │ 🛠 Fix Agent    │ │ 💬 Get    │  │              │
│  │ └────────┬────────┘ └────────┬────────┘ └───┬─────┘  │              │
│  │          │                  │              │        │              │
│  │          ▼                  ▼              ▼        │              │
│  │    /filing-cabinet    /fix-agent      Discord (ext)  │              │
│  │                                                        │              │
│  │ ┌─────────────────┐ ┌─────────────────┐                 │              │
│  │ │ ⚙️ Account     │ │ 📖 Resources   │                 │              │
│  │ └────────┬────────┘ └────────┬────────┘                 │              │
│  │          │                  │                           │              │
│  │          ▼                  ▼                           │              │
│  │       /account         External                         │              │
│  └─────────────────────────────────────────────────────────┘              │
└────────────────────────────────────────────────────────────────────────────┘
```

### Card Actions:

| Card | New User (onboarding incomplete) | Returning User |
|------|----------------------------------|----------------|
| 🚀 Your Agent | → Launchpad (onboarding) | → OpenClaw |
| ⚡ Quickstart | → External GitHub | → External GitHub |
| 📚 Tutorials | → External GitHub | → External GitHub |
| 🗂 Filing Cabinet | → /filing-cabinet | → /filing-cabinet |
| 🛠 Fix Agent | → /fix-agent | → /fix-agent |
| 💬 Get Help | → Discord (new tab) | → Discord (new tab) |
| ⚙️ Account | → /account | → /account |
| 📖 Resources | → External | → External |

---

## PATH 5: Dashboard → Your Agent

```
┌────────────────────────────────────────────────────────────────────────────┐
│  YOUR AGENT CARD CLICK                                                      │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│  │ CHECK       │────▶│ NEW USER?   │────▶│ LAUNCHPAD   │                  │
│  │ ONBOARDING  │     │             │     │ (onboarding)│                  │
│  │ COMPLETE    │     └──────┬──────┘     └─────────────┘                  │
│  └─────────────┘            │                                             │
│       │                    │                                              │
│       ▼                    ▼                                              │
│  ┌─────────────┐     ┌─────────────┐                                      │
│  │ NO          │     │ YES         │                                      │
│  └──────┬──────┘     └──────┬──────┘                                      │
│        │                    │                                              │
│        ▼                    ▼                                              │
│  ┌─────────────┐     ┌─────────────┐                                      │
│  │ REDIRECT TO │     │ REDIRECT TO │                                      │
│  │ /onboarding │     │ OPENCLAW    │                                      │
│  └─────────────┘     └─────────────┘                                      │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## PATH 6: Account Management

```
┌────────────────────────────────────────────────────────────────────────────┐
│  /account                                                                    │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ TAB NAVIGATION                                         │              │
│  │ [Profile] [Payments] [Subscription]                    │              │
│  └─────────────────────────────────────────────────────────┘              │
│       │                                                                     │
│  ┌────┴────┐                                                              │
│  │         │                                                              │
│  ▼         ▼                                                              │
│ PROFILE  SUBSCRIPTION                                                     │
│   │         │                                                              │
│   ▼         ▼                                                              │
│ ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                  │
│ │ • Full Name │   │ • Plan: Pro  │   │ • Cancel     │                  │
│ │ • Email     │   │ • Status:    │   │ • Refund     │                  │
│ │ • DiscordID │   │ • Activated  │   │   (5 days)   │                  │
│ │             │   │ • Next Bill  │   │              │                  │
│ │ [Save]     │   │             │   │ [Confirm]    │                  │
│ └──────────────┘   │ [Cancel]    │   └──────────────┘                  │
│                    └──────────────┘                                     │
│                                                                          │
│ PAYMENTS                                                                 │
│   │                                                                       │
│   ▼                                                                       │
│ ┌────────────────────────────────────┐                                  │
│ │ Date     | Amount | Method | Status │                                  │
│ │ 2026-04  | £9.99  | Card   | ✓ Paid │                                  │
│ │ 2026-03  | £9.99  | Card   | ✓ Paid │                                  │
│ │ 2026-02  | £9.99  | Card   | ✓ Paid │                                  │
│ └────────────────────────────────────┘                                  │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## PATH 7: Redirects (Auth Guards)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  ATTEMPT TO ACCESS PROTECTED ROUTE                                         │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────┐              │
│  │ IS USER AUTHENTICATED?                                 │              │
│  └────────────────────────┬───────────────────────────────┘              │
│                           │                                               │
│              ┌────────────┴────────────┐                                 │
│              │                         │                                  │
│              ▼                         ▼                                  │
│        ┌──────────┐            ┌──────────────┐                          │
│        │   YES    │            │     NO       │                          │
│        └────┬─────┘            └──────┬───────┘                          │
│             │                         │                                   │
│             ▼                         ▼                                   │
│  ┌──────────────────┐      ┌──────────────────┐                         │
│  │ IS ONBOARDING    │      │  REDIRECT TO     │                         │
│  │ COMPLETE?        │      │  /signin?        │                         │
│  └────────┬─────────┘      │  returnTo={url}  │                         │
│           │                └──────────────────┘                          │
│    ┌──────┴──────┐                                                      │
│    │             │                                                      │
│    ▼             ▼                                                      │
│ ┌──────┐   ┌──────────┐                                                 │
│ │ YES  │   │   NO     │                                                 │
│ └──┬───┘   └────┬─────┘                                                 │
│    │           │                                                         │
│    ▼           ▼                                                         │
│ ALLOW     REDIRECT TO /onboarding                                        │
│ ROUTE                                                               │
└────────────────────────────────────────────────────────────────────────────┘
```

### Protected Routes:

| Route | Auth Required | Onboarding Required |
|-------|---------------|---------------------|
| / | No | - |
| /signup | No | - |
| /signin | No | - |
| /dashboard | Yes | Yes |
| /onboarding | Yes | No |
| /account | Yes | Yes |
| /filing-cabinet | Yes | Yes |
| /fix-agent | Yes | Yes |

---

## PATH 8: Session Expiry

```
┌────────────────────────────────────────────────────────────────────────────┐
│  API REQUEST RETURNS 401                                                    │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│  │ TRY REFRESH │────▶│ REFRESH     │────▶│  RETRY      │                  │
│  │    TOKEN    │     │   SUCCESS   │     │  ORIGINAL   │                  │
│  └─────────────┘     └──────┬──────┘     │  REQUEST    │                  │
│                             │              └─────────────┘                  │
│                        ┌────▼──────┐                                    │
│                        │ REFRESH   │                                    │
│                        │ FAILED    │                                    │
│                        └────┬──────┘                                    │
│                             │                                             │
│                             ▼                                             │
│                    ┌──────────────────┐                                  │
│                    │  CLEAR STORAGE  │                                  │
│                    │  REDIRECT TO    │                                  │
│                    │  /signin        │                                  │
│                    └──────────────────┘                                  │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## PATH 9: Logout

```
┌────────────────────────────────────────────────────────────────────────────┐
│  USER CLICKS LOGOUT                                                        │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐                  │
│  │ CLEAR       │────▶│ API CALL    │────▶│ REDIRECT    │                  │
│  │ localStorage│     │ /auth/logout│     │ TO /        │                  │
│  │ (JWT)       │     │ (optional)  │     │            │                  │
│  └─────────────┘     └─────────────┘     └─────────────┘                  │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## COMPLETE PATH MATRIX

| From | To | Auth | Onboarding | Notes |
|------|-----|------|------------|-------|
| Landing | Sign Up | ❌ | - | |
| Landing | Sign In | ❌ | - | |
| Sign Up | Onboarding | ✅ | ❌ | Auto on success |
| Sign In | Dashboard | ✅ | ✅ | If completed |
| Sign In | Onboarding | ✅ | ❌ | If not completed |
| Onboarding | Dashboard | ✅ | - | Auto on complete |
| Dashboard | Any Card | ✅ | ✅ | |
| Any | /signin | ❌ | - | If not authenticated |
| Any | /dashboard | ✅ | - | If not onboarded → /onboarding |

---

## ERROR REDIRECTS

| Error | Action |
|-------|--------|
| 401 Unauthorized | Try refresh → redirect /signin |
| 403 Forbidden | Show error page |
| 404 Not Found | Show 404 page |
| 500 Error | Show error page + retry |

---

*All paths documented. Ready for implementation.*