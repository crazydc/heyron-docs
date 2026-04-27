# Heyron - Production Setup Guide

*Full Vercel + Supabase deployment*

---

## Accounts Needed (Do These First)

| Service | Sign Up | Free Tier |
|---------|---------|-----------|
| **GitHub** | github.com | - |
| **Vercel** | vercel.com | 100GB bandwidth/month |
| **Supabase** | supabase.com | 500MB DB, 2GB storage |

---

## Step 1: Supabase (Database)

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" → Sign in with GitHub
3. Click "New project"
4. Fill in:
   - **Name**: heyron
   - **Database Password**: (create a strong password, save it!)
   - **Region**: closest to you
5. Wait 2 minutes for provisioning
6. Once ready, go to **Settings → Database**
7. Copy **Connection string** (looks like `postgresql://postgres:[password]@db.xxx.supabase.co:5432/postgres`)

---

## Step 2: Vercel (Frontend + Backend)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Sign in with GitHub
3. Click "Add New..." → Project
4. Select your GitHub repo (heyron-docs or create new)
5. **Framework Preset**: Vite (we'll update this)
6. **Environment Variables**: Add these:
   - `DATABASE_URL` = your Supabase connection string
   - `JWT_SECRET` = create a random 32+ char string
   - `NODE_ENV` = production
7. Click "Deploy"

---

## Step 3: Verify

After deploy:
- Frontend: `https://your-project.vercel.app`
- API: `https://your-project.vercel.app/api/health`

---

## Project Structure for Vercel

```
heyron-docs/
├── client/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── src/
│   │   ├── index.js       # Entry point
│   │   ├── routes/
│   │   └── middleware/
│   └── package.json
├── prisma/
│   └── schema.prisma
├── package.json            # Root (for Vercel)
└── vercel.json            # Vercel config
```

---

## Vercel Config (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "client/dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/server/index.js" }
  ],
  "env": {
    "DATABASE_URL": "@database-url",
    "JWT_SECRET": "@jwt-secret"
  }
}
```

---

## Root package.json

```json
{
  "name": "heyron",
  "version": "1.0.0",
  "scripts": {
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:client": "cd client && npm run dev",
    "dev:server": "cd server && npm run dev",
    "build": "cd client && npm run build",
    "start": "cd server && npm start",
    "install:all": "npm install && cd client && npm install && cd ../server && npm install"
  },
  "devDependencies": {
    "concurrently": "^8.2.0"
  }
}
```

---

## Database Setup (Prisma)

After connecting Supabase:

1. Create `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id              String   @id @default(cuid())
  email           String   @unique
  passwordHash    String
  fullName        String
  discordId       String?
  avatarUrl       String?
  onboardingStep  Int      @default(0)
  onboardingComplete Boolean @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  subscription    Subscription?
  servers         Server[]
}

model Subscription {
  id              String   @id @default(cuid())
  userId          String   @unique
  user            User     @relation(fields: [userId], references: [id])
  plan            String   @default("free")
  status          String   @default("active")
  stripeCustomerId String?
  activatedAt     DateTime?
  expiresAt       DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model Server {
  id              String   @id @default(cuid())
  userId          String
  user            User     @relation(fields: [userId], references: [id])
  name            String
  displayName     String?
  status          String   @default("offline")
  region          String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model Payment {
  id              String   @id @default(cuid())
  userId          String
  subscriptionId  String?
  amount          Int
  currency        String   @default("gbp")
  status          String   @default("pending")
  paymentDate     DateTime @default(now())
  createdAt       DateTime @default(now())
}
```

2. Run `npx prisma generate`

---

## Development Workflow

```bash
# Clone repo
git clone https://github.com/Crazydc/heyron-docs.git
cd heyron-docs

# Install all dependencies
npm run install:all

# Database
npx prisma db push

# Development
npm run dev
```

---

## Deployment Flow

```
Local Dev → GitHub Push → Vercel Auto-Deploy → Live!
     │                                      │
     └── Test here                          └── Production
```

---

## Environment Variables Checklist

| Variable | Where | Description |
|----------|-------|-------------|
| `DATABASE_URL` | Supabase | Connection string |
| `JWT_SECRET` | Create random | 32+ characters |
| `NODE_ENV` | production | Set on Vercel |

---

## Cost (First Year)

| Service | Free Tier | Estimated Cost |
|---------|-----------|----------------|
| GitHub | Free | £0 |
| Vercel | 100GB/mo bandwidth | £0 |
| Supabase | 500MB DB | £0 |
| Domain | ~£10/year | ~£10 |

**Total: ~£10/year** (just domain)