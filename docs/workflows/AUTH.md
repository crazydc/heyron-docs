# Authentication Flow

## Overview
Heyron-docs uses a mock authentication system for demo purposes. This document describes the auth flow and implementation.

## Current Implementation

### Fake Login (Demo Mode)
- Any email + password works
- Password field is ignored
- No real authentication
- Suitable for prototyping

### Future: Firebase Auth
The system is designed to be swapped with real Firebase authentication:

1. Replace `AuthContext.tsx` with Firebase provider
2. Keep same API (`login`, `signup`, `logout`, `useAuth`)
3. Update login/signup pages to use Firebase SDK

## Auth Context API

```typescript
// Provider
<AuthProvider>
  {children}
</AuthProvider>

// Hook
const { user, isLoading, login, signup, logout, completeOnboarding } = useAuth()
```

### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `login` | `email: string` | Sign in with email |
| `signup` | `email: string, name: string` | Create account |
| `logout` | none | Sign out |
| `completeOnboarding` | none | Mark launchpad complete |

### User Object

```typescript
interface User {
  email: string;
  name: string;
  isNewUser: boolean;
}
```

## Storage

- **localStorage** key: `heyron-user`
- Stored as JSON string
- Persists across browser sessions

## Route Protection

### Middleware (`src/middleware.ts`)
- Defines public paths list
- Allows static assets and API routes
- Returns 404 for protected routes (client handles redirect)

### Client-Side Navigation
- Navigation component checks auth state
- Redirects to `/login` if user not authenticated
- Shows loading state while checking

## Login Flow Diagram

```
User visits protected route
    │
    ▼
Middleware passes (static export)
    │
    ▼
Client checks auth state
    │
    ├── No user → /login
    │   │
    │   ▼
    │   Enter email
    │   │
    │   ▼
    │   login(email)
    │   │
    │   ▼
    │   user stored in localStorage
    │   │
    │   ▼
    │   Redirect to /dashboard
    │
    └── Has user → Show protected content
```

## Sign Up Flow Diagram

```
User visits /signup
    │
    ▼
Enters name + email
    │
    ▼
signup(email, name)
    │
    ├── user.created = true
    ├── isNewUser = true
    │
    ▼
Redirect to /launchpad
    │
    ▼
User completes onboarding
    │
    ▼
completeOnboarding() → isNewUser = false
    │
    ▼
Redirect to /dashboard
```

## Public Routes

These routes don't require authentication:

- `/` - Home/Landing
- `/login` - Sign in
- `/signup` - Register
- `/what-is-heyron` - About page
- `/getting-started` - Setup guide
- `/tutorials` - Tutorial library
- `/personas` - Agent personas
- `/skills` - Skills library
- `/templates` - Templates
- `/faq` - FAQ
- `/support` - Support info
- `/the-den` - Community