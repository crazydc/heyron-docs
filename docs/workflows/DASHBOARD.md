# Dashboard Technical Specification

## Overview
The dashboard (Mission Control) is the authenticated area where users manage their AI agent after logging in.

## Route Structure

```
/dashboard              → Main dashboard hub
/dashboard/agent       → Your agent status & launch
/dashboard/quickstart  → Quickstart guides
/dashboard/tutorials  → Tutorial library link
/dashboard/filing-cabinet → File storage (future)
/dashboard/fix-agent   → Troubleshooting
/dashboard/help      → Community support
/dashboard/account   → Subscription & profile
```

## Layout Components

### Sidebar Navigation
- Fixed left sidebar (64px from left on desktop)
- Collapsible on mobile (hamburger menu)
- 7 navigation items with icons
- Active state highlighting (cyan border)

### Top Bar
- Logo (HEYRON.AI)
- User email display
- Sign out button

### Main Content Area
- Max-width: 6xl
- Padding: px-6 py-8
- Glass panel styling for cards

## Styling

```css
/* Sidebar */
background: #0F141C
border-right: 1px solid #1C222B

/* Active nav item */
bg-cyan/10
text-cyan
border-l-4 border-cyan

/* Glass panels */
bg-[#0F141C]/80
border: 1px solid #1C222B
rounded: 12px
```

## Protected Routes

All `/dashboard/*` routes are protected by:
1. **Middleware** (`src/middleware.ts`) - Server-side redirect
2. **Client-side check** - Navigation component redirects to `/login`

## Auth Context

```typescript
interface User {
  email: string;
  name: string;
  isNewUser: boolean;
}
```

- `isNewUser: true` → redirect to `/launchpad`
- `isNewUser: false` → redirect to `/dashboard`

## Mobile Responsiveness

- Sidebar hidden by default
- Hamburger menu toggles sidebar
- Main content takes full width on mobile
- Touch-friendly tap targets (min 44px)