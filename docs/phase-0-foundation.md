# Phase 0: Foundation Setup

**Objective:** Set up the complete project infrastructure before building any pages.

---

## Prerequisites

- Node.js 18+
- npm or yarn
- Git
- GitHub repo access

---

## Step 1: Initialize Project

### Create Vite + React Project

```bash
# Create project
npm create vite@latest client -- --template react
cd client

# Install dependencies
npm install

# Install additional packages
npm install react-router-dom @reduxjs/toolkit react-redux axios framer-motion
npm install -D eslint prettier
```

### Project Structure Setup

```
client/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Card.jsx
│   │       ├── Badge.jsx
│   │       └── index.js
│   ├── hooks/
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── SignUp.jsx
│   │   ├── Onboarding.jsx
│   │   ├── MissionControl.jsx
│   │   └── Account.jsx
│   ├── store/
│   │   ├── index.js
│   │   ├── hooks.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── userSlice.js
│   │       └── onboardingSlice.js
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Step 2: Configure Vite

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
```

---

## Step 3: Set Up CSS Variables

### src/styles/variables.css

```css
:root {
  /* Colors */
  --bg-primary: #0c1018;
  --bg-secondary: #111822;
  --bg-card: #182230;
  --text-primary: #e8edf2;
  --text-secondary: #8a9bb0;
  --text-muted: #5a6a7a;
  --border: #243040;
  --accent: #5ec4d4;
  --accent-hover: #4ab0c0;
  --success: #4ade80;
  --warning: #eab308;
  --error: #f87171;
  --discord: #5865F2;
  
  /* Typography */
  --font-family: 'DM Sans', sans-serif;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 48px;
  
  /* Borders */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 100px;
  
  /* Container */
  --container-max: 660px;
  --header-height: 60px;
}
```

### src/styles/global.css

```css
@import './variables.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-family);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  font-family: inherit;
  cursor: pointer;
}

input, select, textarea {
  font-family: inherit;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}
```

---

## Step 4: Set Up Redux Store

### src/store/hooks.js

```javascript
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = useDispatch
export const useAppSelector = useSelector
```

### src/store/slices/authSlice.js

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.user = action.payload
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } = authSlice.actions
export default authSlice.reducer
```

### src/store/slices/userSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {
    fullName: '',
    email: '',
    discordId: '',
  },
  subscription: {
    status: 'inactive', // active, cancelled, refunded
    activatedAt: null,
    plan: 'free',
  },
  payments: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload }
    },
    setSubscription: (state, action) => {
      state.subscription = { ...state.subscription, ...action.payload }
    },
    addPayment: (state, action) => {
      state.payments.push(action.payload)
    },
    setPayments: (state, action) => {
      state.payments = action.payload
    },
  },
})

export const { setProfile, setSubscription, addPayment, setPayments } = userSlice.actions
export default userSlice.reducer
```

### src/store/slices/onboardingSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentStep: 0,
  completed: false,
  agentConfig: {
    serverName: '',
    connectionType: 'cloud', // cloud, local, ssh
    sshKey: '',
    serverRegion: '',
  },
}

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload
    },
    nextStep: (state) => {
      state.currentStep += 1
    },
    prevStep: (state) => {
      state.currentStep = Math.max(0, state.currentStep - 1)
    },
    completeOnboarding: (state) => {
      state.completed = true
    },
    setAgentConfig: (state, action) => {
      state.agentConfig = { ...state.agentConfig, ...action.payload }
    },
    resetOnboarding: () => initialState,
  },
})

export const { setStep, nextStep, prevStep, completeOnboarding, setAgentConfig, resetOnboarding } = onboardingSlice.actions
export default onboardingSlice.reducer
```

### src/store/index.js

```javascript
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
import onboardingReducer from './slices/onboardingSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    onboarding: onboardingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
```

---

## Step 5: Create Layout Components

### src/components/layout/Header.jsx

```jsx
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import './Header.css'

export default function Header() {
  const { isAuthenticated, user } = useAppSelector(state => state.auth)

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-text">heyron.ai</span>
        </Link>
        
        {isAuthenticated ? (
          <nav className="header-nav">
            <Link to="/dashboard">Mission Control</Link>
            <Link to="/account">Account</Link>
            <button onClick={() => dispatch(logout())}>Sign Out</button>
          </nav>
        ) : (
          <Link to="/signup" className="header-cta">Sign Up</Link>
        )}
      </div>
    </header>
  )
}
```

### src/components/layout/Footer.jsx

```jsx
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Discord">DC</a>
          <a href="#" aria-label="Twitter">TW</a>
        </div>
        <p className="footer-copyright">© 2026 Heyron. All rights reserved.</p>
      </div>
    </footer>
  )
}
```

### src/components/layout/Layout.jsx

```jsx
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

export default function Layout({ children, fullWidth = false }) {
  return (
    <div className="layout">
      <Header />
      <main className={`main-content ${fullWidth ? 'full-width' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

---

## Step 6: Set Up React Router

### src/App.jsx

```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './components/layout/Layout'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import Onboarding from './pages/Onboarding'
import MissionControl from './pages/MissionControl'
import Account from './pages/Account'
import './styles/global.css'

function PrivateRoute({ children }) {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/signup" />
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Landing /></Layout>} />
          <Route path="/signup" element={<Layout><SignUp /></Layout>} />
          <Route path="/onboarding" element={<Layout><Onboarding /></Layout>} />
          <Route path="/dashboard" element={<Layout><MissionControl /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
```

---

## Step 7: Create Base UI Components

### src/components/ui/Button.jsx

```jsx
import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  ...props
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''}`}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading ? <span className="btn-spinner" /> : children}
    </button>
  )
}
```

### src/components/ui/Input.jsx

```jsx
import './Input.css'

export default function Input({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  error,
  hint,
  value,
  onChange,
}) {
  return (
    <div className={`input-group ${error ? 'input-error' : ''}`}>
      {label && <label htmlFor={name}>{label}{required && <span>*</span>}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {(hint || error) && (
        <span className={error ? 'input-hint error' : 'input-hint'}>
          {error || hint}
        </span>
      )}
    </div>
  )
}
```

---

## Step 8: Test Setup

1. Run `npm run dev`
2. Verify:
   - Dev server starts on port 5173
   - Basic layout renders (Header, Footer)
   - CSS variables apply correctly
   - Redux DevTools shows store
   - Routes work (/, /signup, /dashboard, /account)
3. Create placeholder pages

---

## Checklist

- [ ] Initialize Vite + React project
- [ ] Install dependencies (router, redux, axios, framer-motion)
- [ ] Set up folder structure
- [ ] Configure Vite
- [ ] Create CSS variables and global styles
- [ ] Set up Redux store with 3 slices
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Create Layout wrapper
- [ ] Configure React Router
- [ ] Create base UI components (Button, Input, Card, Badge)
- [ ] Test development server
- [ ] Verify all routes work

---

## Estimated Time

- **Setup:** 1-2 hours
- **Testing:** 30 minutes