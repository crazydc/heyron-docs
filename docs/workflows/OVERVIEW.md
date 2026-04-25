# User Workflows

This document outlines the user flows for heyron-docs, based on user research and product requirements.

---

## Flow 1: New User Sign Up → Launchpad → Dashboard

### Overview
First-time users go through an onboarding flow to set up their AI agent.

### Steps

```
HOME (/signup)
    │
    ▼
[Create Account]
- Enter name + email
- Password not required (demo)
    │
    ▼
LAUNCHPAD (/launchpad)
    │
    ├── Step 1: Quickstart
    │   └── Guide to set up agent
    │
    ├── Step 2: Run First Task
    │   └── Try asking agent something
    │
    └── Step 3: Join Discord
    │   └── Community link
    │
    ▼
[Complete Setup]
    │
    ▼
DASHBOARD (/dashboard)
```

### User Experience
1. User clicks "Get Started" on home page
2. Fills simple form (name + email)
3. Automatically routed to Launchpad
4. Completes 3 steps at their own pace
5. Clicks "Complete Setup" → enters Dashboard

---

## Flow 2: Returning User Login

### Overview
Existing users log in and go straight to their dashboard.

### Steps

```
HOME (/login)
    │
    ▼
[Sign In]
- Enter any email
- Password ignored (demo)
    │
    ▼
DASHBOARD (/dashboard)
```

### User Experience
1. User clicks "Sign In" on home page
2. Enters email (any works for demo)
3. Redirected directly to Dashboard

---

## Flow 3: Dashboard Navigation

### Overview
Once logged in, users access features from the dashboard sidebar.

### Structure

```
MISSION CONTROL (Dashboard)
│
├── 🚀 Your Agent
│   ├── New User → Launchpad → OpenClaw
│   └── Returning → OpenClaw (external)
│
├── ⚡ Quickstart
│   └── GitHub Quickstart Repo
│
├── 📚 Tutorials
│   └── /tutorials (library)
│
├── 🗂 Filing Cabinet
│   └── Internal file storage (future)
│
├── 🛠 Fix Agent
│   └── /troubleshooting
│
├── 💬 Get Help
│   └── Discord community (external)
│
└── ⚙️ Account
    └── Subscription / Profile
```

---

## Route Protection

| Route | Auth Required | Notes |
|-------|---------------|-------|
| `/` | No | Landing page |
| `/login` | No | Sign in |
| `/signup` | No | Register |
| `/dashboard/*` | Yes | All dashboard routes |
| `/launchpad` | Yes | First-time users |
| `/personas` | No | Public |
| `/skills` | No | Public |
| `/templates` | No | Public |
| `/tutorials` | No | Public |

---

## Implementation Notes

- Auth state stored in localStorage (`heyron-user`)
- `isNewUser` flag determines if user goes to Launchpad
- Middleware provides route protection
- Navigation component conditionally renders based on auth state