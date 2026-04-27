# Heyron Project - Micro-Task Breakdown

*Atomic tasks, each ~10-20 mins, complete daily wins*

---

## 📚 Related Documentation

- **[Main Plan](./heyron-modernization-plan.md)** - Overview & architecture
- **[User Flows](./user-flows.md)** - All paths & redirects
- **[Component Spec](./component-spec.md)** - UI component details
- **[Design Requirements](./design-requirements.md)** - Design requirements
- **[Deployment Guide](./deployment-guide.md)** - Vercel + Supabase setup

---

## How to Use This Plan

- Each task should take 10-20 minutes max
- Tasks are ordered by dependency
- Test after each task (don't batch multiple tasks without testing)
- Mark complete in Progress section

---

## PHASE 0: BACKEND (25 tasks)

### Week 1: Setup & Auth (8 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 0.1 | Create server folder, `npm init`, install express/cors/helmet/dotenv | 15 | - |
| 0.2 | Install prisma/bcryptjs/jsonwebtoken/express-validator | 10 | 0.1 |
| 0.3 | Run `npx prisma init`, create minimal schema with User model only | 15 | 0.2 |
| 0.4 | Add Subscription, Payment, Server models to schema | 15 | 0.3 |
| 0.5 | Run `npx prisma migrate dev` to create DB | 15 | 0.4 |
| 0.6 | Generate Prisma client `npx prisma generate` | 10 | 0.5 |
| 0.7 | Create server.js with express setup + health endpoint | 15 | 0.1 |
| 0.8 | Add CORS and basic middleware to server.js | 10 | 0.7 |

### Week 1: Auth Routes (6 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 0.9 | Create auth controller - register function (hash password, create user) | 20 | 0.6 |
| 0.10 | Create auth controller - login function (compare password, generate JWT) | 20 | 0.9 |
| 0.11 | Create auth routes file with /register and /login endpoints | 15 | 0.10 |
| 0.12 | Create JWT middleware to verify token | 20 | 0.11 |
| 0.13 | Create /me endpoint to get current user | 15 | 0.12 |
| 0.14 | Add logout endpoint (client-side token removal is fine) | 10 | 0.13 |

### Week 2: User Routes (5 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 0.15 | Create user routes file | 10 | 0.14 |
| 0.16 | Add GET /profile endpoint | 15 | 0.15 |
| 0.17 | Add PUT /profile endpoint (update name/discordId) | 15 | 0.16 |
| 0.18 | Add PUT /password endpoint (change password) | 20 | 0.17 |
| 0.19 | Test all user routes with curl/Postman | 20 | 0.18 |

### Week 2: Subscription & Payment (6 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 0.20 | Create subscription routes file | 10 | 0.19 |
| 0.21 | Add GET /subscription endpoint | 15 | 0.20 |
| 0.22 | Add POST /subscription/cancel endpoint | 15 | 0.21 |
| 0.23 | Create payment routes file | 10 | 0.22 |
| 0.24 | Add GET /payments endpoint | 15 | 0.23 |
| 0.25 | Add error handling middleware + test | 20 | 0.24 |

---

## PHASE 1: FRONTEND (28 tasks)

### Week 2: Setup (8 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 1.1 | Create Vite React project `npm create vite@latest client` | 10 | - |
| 1.2 | Install react-router-dom @reduxjs/toolkit react-redux axios framer-motion | 10 | 1.1 |
| 1.3 | Create folder structure (components, pages, store, services, styles) | 10 | 1.2 |
| 1.4 | Create styles/variables.css with all CSS variables | 15 | 1.3 |
| 1.5 | Create styles/global.css with base styles | 10 | 1.4 |
| 1.6 | Update index.html with title and meta tags | 10 | 1.5 |
| 1.7 | Run `npm run dev` and verify blank page loads | 10 | 1.6 |
| 1.8 | Add basic App.jsx with React Router setup | 15 | 1.7 |

### Week 2: Redux (8 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 1.9 | Create store/hooks.js (useAppDispatch, useAppSelector) | 10 | 1.8 |
| 1.10 | Create store/slices/authSlice.js with login/logout actions | 15 | 1.9 |
| 1.11 | Create store/slices/userSlice.js | 15 | 1.10 |
| 1.12 | Create store/index.js to combine slices | 10 | 1.11 |
| 1.13 | Wrap App with Provider in main.jsx | 10 | 1.12 |
| 1.14 | Create services/api.js with axios instance + baseURL | 15 | 1.13 |
| 1.15 | Create services/authService.js (login, register, logout) | 15 | 1.14 |
| 1.16 | Test: verify Redux DevTools shows store | 10 | 1.15 |

### Week 3: UI Components (12 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 1.17 | Create Button component (primary/secondary/ghost variants) | 15 | 1.16 |
| 1.18 | Create Input component (all variants) | 15 | 1.17 |
| 1.19 | Create Card component | 10 | 1.18 |
| 1.20 | Create Badge component | 10 | 1.19 |
| 1.21 | Create Header component (with auth state) | 20 | 1.20 |
| 1.22 | Create Footer component | 10 | 1.21 |
| 1.23 | Create Layout component | 10 | 1.22 |
| 1.24 | Create NotFound (404) page | 10 | 1.23 |
| 1.25 | Create PrivateRoute component | 10 | 1.24 |
| 1.26 | Create Alert component | 10 | 1.25 |
| 1.27 | Create Modal component | 15 | 1.26 |
| 1.28 | Create Spinner component (loading) | 10 | 1.27 |

---

## PHASE 2: AUTH PAGES (14 tasks)

### Week 3: Sign Up (8 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 2.1 | Create SignUp page file + basic structure | 15 | 1.28 |
| 2.2 | Add form state with useState | 10 | 2.1 |
| 2.3 | Add fullName input + validation | 10 | 2.2 |
| 2.4 | Add email input + validation | 10 | 2.3 |
| 2.5 | Add password input + validation | 10 | 2.4 |
| 2.6 | Add terms checkbox | 10 | 2.5 |
| 2.7 | Connect form submit to authService.register | 20 | 2.6 |
| 2.8 | Handle success -> redirect to onboarding | 10 | 2.7 |

### Week 3: Sign In (6 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 2.9 | Create SignIn page + basic structure | 15 | 2.8 |
| 2.10 | Add email/password inputs | 10 | 2.9 |
| 2.11 | Connect to authService.login | 15 | 2.10 |
| 2.12 | Store token in localStorage on success | 15 | 2.11 |
| 2.13 | Redirect to dashboard on success | 10 | 2.12 |
| 2.14 | Add logout button to Header | 10 | 2.13 |

---

## PHASE 3: LANDING PAGE (12 tasks)

### Week 3 (12 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 3.1 | Create Landing page file + basic structure | 15 | 1.28 |
| 3.2 | Create Hero component | 20 | 3.1 |
| 3.3 | Create BetaNotice component | 10 | 3.2 |
| 3.4 | Create HowItWorks component | 15 | 3.3 |
| 3.5 | Create Stats component | 15 | 3.4 |
| 3.6 | Create Capabilities component | 15 | 3.5 |
| 3.7 | Create SocialProof component | 10 | 3.6 |
| 3.8 | Create CTASection component | 10 | 3.7 |
| 3.9 | Assemble all in Landing page | 15 | 3.8 |
| 3.10 | Add Sign Up link to CTA | 10 | 3.9 |
| 3.11 | Test responsive on mobile | 15 | 3.10 |
| 3.12 | Add SEO meta tags to index.html | 10 | 3.11 |

---

## PHASE 4: ONBOARDING (14 tasks)

### Week 4 (14 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 4.1 | Create Onboarding page file + structure | 15 | 2.14 |
| 4.2 | Create StepIndicator component | 15 | 4.1 |
| 4.3 | Create WelcomeStep component | 10 | 4.2 |
| 4.4 | Create ServerStep component (c1-c8 grid) | 20 | 4.3 |
| 4.5 | Create ConnectionStep component | 20 | 4.4 |
| 4.6 | Create SSHKeyStep component | 20 | 4.5 |
| 4.7 | Create CompleteStep component | 15 | 4.6 |
| 4.8 | Add navigation (Back/Next buttons) | 15 | 4.7 |
| 4.9 | Add step validation (can't advance) | 10 | 4.8 |
| 4.10 | Add progress to Redux store | 10 | 4.9 |
| 4.11 | Save to backend on complete | 20 | 4.10 |
| 4.12 | Mark user as onboarding_complete in DB | 15 | 4.11 |
| 4.13 | Redirect to dashboard on finish | 10 | 4.12 |
| 4.14 | Test full onboarding flow | 20 | 4.13 |

---

## PHASE 5: DASHBOARD (18 tasks)

### Week 4-5 (18 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 5.1 | Create Dashboard page + header | 15 | 4.14 |
| 5.2 | Create StatsCard component | 10 | 5.1 |
| 5.3 | Create TabGroup component | 15 | 5.2 |
| 5.4 | Create ServerCard component | 20 | 5.3 |
| 5.5 | Fetch servers from API on mount | 20 | 5.4 |
| 5.6 | Render server grid with data | 15 | 5.5 |
| 5.7 | Create YourAgentCard → OpenClaw/Launchpad | 15 | 5.6 |
| 5.8 | Create QuickstartCard → GitHub | 10 | 5.7 |
| 5.9 | Create TutorialsCard → GitHub | 10 | 5.8 |
| 5.10 | Create FilingCabinetCard | 10 | 5.9 |
| 5.11 | Create FixAgentCard | 10 | 5.10 |
| 5.12 | Create GetHelpCard → Discord | 10 | 5.11 |
| 5.13 | Create AccountCard → Account page | 10 | 5.12 |
| 5.14 | Create ResourcesCard | 10 | 5.13 |
| 5.15 | Add empty state (no servers) | 10 | 5.14 |
| 5.16 | Add loading skeleton | 15 | 5.15 |
| 5.17 | Add "new user" vs "returning" logic | 15 | 5.16 |
| 5.18 | Test responsive + all links work | 20 | 5.17 |

---

## PHASE 6: ACCOUNT (12 tasks)

### Week 5 (12 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 6.1 | Create Account page + tabs | 15 | 5.18 |
| 6.2 | Create ProfileTab component | 20 | 6.1 |
| 6.3 | Fetch profile on mount + populate form | 15 | 6.2 |
| 6.4 | Save profile to API | 15 | 6.3 |
| 6.5 | Create PaymentsTab component | 20 | 6.4 |
| 6.6 | Fetch payments on mount | 10 | 6.5 |
| 6.7 | Create SubscriptionTab component | 15 | 6.6 |
| 6.8 | Create CancelButton component + modal | 15 | 6.7 |
| 6.9 | Add 5-day refund check logic | 20 | 6.8 |
| 6.10 | Create RefundButton + modal | 15 | 6.9 |
| 6.11 | Add ConfirmDialog component | 10 | 6.10 |
| 6.12 | Test full account flow | 20 | 6.11 |

---

## PHASE 7: POLISH (14 tasks)

### Week 6 (14 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 7.1 | Add error boundary to App | 15 | 6.12 |
| 7.2 | Global error handler (catch API errors) | 15 | 7.1 |
| 7.3 | Toast notification system | 20 | 7.2 |
| 7.4 | Loading skeletons for all pages | 20 | 7.3 |
| 7.5 | Token refresh on 401 | 15 | 7.4 |
| 7.6 | Add favicon | 10 | 7.5 |
| 7.7 | Verify all forms have proper validation | 15 | 7.6 |
| 7.8 | Test all redirects work | 10 | 7.7 |
| 7.9 | Test on mobile (responsive) | 15 | 7.8 |
| 7.10 | Fix any console errors | 15 | 7.9 |
| 7.11 | Test all links work | 10 | 7.10 |
| 7.12 | Add page titles (document.title) | 10 | 7.11 |
| 7.13 | Create .env.production.example | 10 | 7.12 |
| 7.14 | Final smoke test | 20 | 7.13 |

---

## PHASE 8: DEPLOY (10 tasks)

### Week 6-7 (10 tasks)

| # | Task | Time | Depends On |
|---|------|------|------------|
| 8.1 | Push code to GitHub | 10 | 7.14 |
| 8.2 | Deploy backend to Render | 20 | 8.1 |
| 8.3 | Configure DATABASE_URL env var | 10 | 8.2 |
| 8.4 | Test backend on production | 15 | 8.3 |
| 8.5 | Deploy frontend to Vercel | 15 | 8.4 |
| 8.6 | Configure VITE_API_URL | 10 | 8.5 |
| 8.7 | Test frontend on production | 15 | 8.6 |
| 8.8 | Point domain to Vercel | 15 | 8.7 |
| 8.9 | Enable HTTPS | 10 | 8.8 |
| 8.10 | Final production test | 20 | 8.9 |

---

## PROGRESS TRACKER

### Phase 0: Backend
- [ ] 0.1-0.8: Setup + Middleware
- [ ] 0.9-0.14: Auth Routes
- [ ] 0.15-0.19: User Routes
- [ ] 0.20-0.25: Subscription/Payment

### Phase 1: Frontend
- [ ] 1.1-1.8: Setup
- [ ] 1.9-1.16: Redux
- [ ] 1.17-1.28: UI Components

### Phase 2: Auth
- [ ] 2.1-2.8: Sign Up
- [ ] 2.9-2.14: Sign In

### Phase 3: Landing
- [ ] 3.1-3.12: Full Landing Page

### Phase 4: Onboarding
- [ ] 4.1-4.14: Full Onboarding Flow

### Phase 5: Dashboard
- [ ] 5.1-5.18: Full Dashboard

### Phase 6: Account
- [ ] 6.1-6.12: Full Account Page

### Phase 7: Polish
- [ ] 7.1-7.14: Polish & Fixes

### Phase 8: Deploy
- [ ] 8.1-8.10: Production Deploy

---

## QUICK START (Do These First)

| Order | Task | Why |
|-------|------|-----|
| 1 | 0.1-0.8 | Backend runs |
| 2 | 0.9-0.14 | Auth works |
| 3 | 1.1-1.8 | Frontend runs |
| 4 | 1.9-1.16 | Redux ready |
| 5 | 1.17-1.28 | UI components done |
| 6 | 2.1-2.14 | Sign up + sign in work |
| 7 | 3.1-3.12 | Landing page live |

**After task 7: You have a working app!** 🚀

Then continue with onboarding, dashboard, account as needed.

---

*Micro-tasks for fast iteration. Complete 2-3 per day = done in 6 weeks.*