# Heyron Docs - Site Plan

## Completed Pages

### Public Pages
- **Landing** (`/`) - Main landing page with hero, features, CTA ✅
- **Sign Up** (`/signup`) - User registration ✅
- **Sign In** (`/signin`) - User login ✅
- **Terms** (`/terms`) - Terms of service ✅
- **Privacy** (`/privacy`) - Privacy policy ✅
- **Support** (`/support`) - Self-service tools + ticket form + tickets list ✅
- **FAQ** (`/faq`) - Frequently asked questions ✅
- **Academy** (`/academy`) - Learning center with courses ✅
- **Partner** (`/partner`) - Partnership information and form ✅
- **About** (`/about`) - Company information, team ✅

### Protected Pages (behind login)
- **Dashboard** (`/dashboard`) - Main user dashboard with stats, container info, activity ✅ (REDESIGNED)
- **Account** (`/account`) - Profile settings, subscription, payment history ✅
- **Onboarding/Launchpad** (`/onboarding`) - New user setup flow (agent config) ✅
- **Resources** (`/resources`) - User resources, guides, docs (protected) ✅

---

## Navigation

### Header (authenticated)
- Dashboard → Resources → Account → Sign Out

### Footer
- About · Partner · FAQ · Terms · Privacy · Support

---

## Deployment

### Vercel (Original)
- Frontend: Vercel-hosted
- Backend: Vercel serverless functions

### Local/Docker (Mini PC)
- **URL**: https://thesumblers.duckdns.org:9843/
- **SSH**: jeff@86.4.252.119 -p 46664
- **Stack**: Docker + nginx

### Subpath Configuration
For local deployment under `/heyron-docs/` subpath:
- `vite.config.js`: `base: '/heyron-docs/'`
- `App.jsx`: `BrowserRouter basename`
- For Vercel: set `VITE_BASE_PATH=/` in environment variables

---

## GitHub Repos
- `heyron-docs` - Main application code
- `jeff-command` - Landing page / dashboard

---

## Last Updated
2026-04-28