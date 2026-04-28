## ✅ COMPLETED

# Phase 2: Sign Up Page

**Objective:** Create registration page with email, name, Discord ID, and validation.

---

## Overview

The sign-up page collects user information and creates their account. It needs:
- Form with validation
- Discord ID helper
- Terms acceptance
- Loading states
- Error handling

---

## Step 1: Create SignUp Page Structure

### src/pages/SignUp.jsx

```jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { loginSuccess } from '../store/slices/authSlice'
import Layout from '../components/layout/Layout'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'
import Modal from '../components/ui/Modal'
import Alert from '../components/ui/Alert'
import './SignUp.css'

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    discordId: '',
    acceptTerms: false
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showDiscordHelp, setShowDiscordHelp] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    if (!validate()) return
    
    setLoading(true)
    
    try {
      // Simulate API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful response
      const user = {
        id: 'user_' + Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        discordId: formData.discordId || null
      }
      
      dispatch(loginSuccess(user))
      navigate('/onboarding')
    } catch (error) {
      setSubmitError('Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-header">
            <h1>Create your account</h1>
            <p>Get started with your AI agent</p>
          </div>

          {submitError && (
            <Alert type="error" dismissible onDismiss={() => setSubmitError('')}>
              {submitError}
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="signup-form">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              error={errors.fullName}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
            />

            <div className="input-group">
              <label htmlFor="discordId">
                Discord ID <span className="optional">(optional)</span>
              </label>
              <div className="input-with-help">
                <input
                  id="discordId"
                  name="discordId"
                  type="text"
                  placeholder="123456789012345678"
                  value={formData.discordId}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="help-btn"
                  onClick={() => setShowDiscordHelp(true)}
                  aria-label="How to find Discord ID"
                >
                  ?
                </button>
              </div>
              <span className="input-hint">Link your Discord for notifications</span>
            </div>

            <Checkbox
              name="acceptTerms"
              label="I agree to the Terms of Service and Privacy Policy"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            {errors.acceptTerms && (
              <span className="form-error">{errors.acceptTerms}</span>
            )}

            <Button 
              type="submit" 
              fullWidth 
              loading={loading}
            >
              Create Account
            </Button>
          </form>

          <p className="signup-footer">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>

        <Modal
          isOpen={showDiscordHelp}
          onClose={() => setShowDiscordHelp(false)}
          title="How to find your Discord ID"
        >
          <div className="discord-help">
            <ol>
              <li>Open Discord and go to <strong>User Settings</strong></li>
              <li>Click on <strong>Advanced</strong> in the sidebar</li>
              <li>Enable <strong>Developer Mode</strong></li>
              <li>Right-click on your username in any chat</li>
              <li>Select <strong>Copy User ID</strong></li>
            </ol>
            <p className="discord-help-note">
              The ID is an 18-digit number that looks like: 123456789012345678
            </p>
          </div>
        </Modal>
      </div>
    </Layout>
  )
}
```

---

## Step 2: SignUp CSS

### src/pages/SignUp.css

```css
.signup-page {
  min-height: calc(100vh - var(--header-height) - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl) 0;
}

.signup-container {
  width: 100%;
  max-width: 400px;
  padding: 0 var(--space-lg);
}

.signup-header {
  text-align: center;
  margin-bottom: 32px;
}

.signup-header h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}

.signup-header p {
  color: var(--text-secondary);
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-with-help {
  display: flex;
  gap: 8px;
}

.input-with-help input {
  flex: 1;
}

.help-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;
}

.help-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.optional {
  color: var(--text-muted);
  font-weight: 400;
}

.form-error {
  color: var(--error);
  font-size: 13px;
  margin-top: -12px;
}

.signup-footer {
  text-align: center;
  margin-top: 24px;
  color: var(--text-secondary);
  font-size: 14px;
}

.discord-help ol {
  padding-left: 20px;
  color: var(--text-secondary);
}

.discord-help li {
  margin-bottom: 8px;
}

.discord-help strong {
  color: var(--text-primary);
}

.discord-help-note {
  margin-top: 16px;
  padding: 12px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  font-family: monospace;
  font-size: 13px;
  color: var(--text-muted);
}
```

---

## Step 3: Create Supporting UI Components

### src/components/ui/Checkbox.jsx

```jsx
import './Checkbox.css'

export default function Checkbox({ label, name, checked, onChange, error }) {
  return (
    <div className={`checkbox-group ${error ? 'checkbox-error' : ''}`}>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="checkbox-custom"></span>
        <span className="checkbox-text">{label}</span>
      </label>
    </div>
  )
}
```

### src/components/ui/Checkbox.css

```css
.checkbox-group {
  display: flex;
  align-items: flex-start;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-secondary);
}

.checkbox-label input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: transparent;
  position: relative;
  transition: all 0.2s;
}

.checkbox-label input:checked + .checkbox-custom {
  background: var(--accent);
  border-color: var(--accent);
}

.checkbox-label input:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--bg-primary);
  font-size: 12px;
  font-weight: 700;
}

.checkbox-text {
  line-height: 1.4;
}

.checkbox-error .checkbox-custom {
  border-color: var(--error);
}
```

### src/components/ui/Alert.jsx

```jsx
import { useState } from 'react'
import './Alert.css'

export default function Alert({ type = 'info', children, dismissible, onDismiss }) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">
        {type === 'success' && '✓'}
        {type === 'error' && '✕'}
        {type === 'warning' && '⚠'}
        {type === 'info' && 'ℹ'}
      </span>
      <span className="alert-content">{children}</span>
      {dismissible && (
        <button className="alert-dismiss" onClick={handleDismiss}>×</button>
      )}
    </div>
  )
}
```

### src/components/ui/Alert.css

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  margin-bottom: 20px;
}

.alert-icon {
  font-size: 16px;
  font-weight: 600;
}

.alert-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.4;
}

.alert-dismiss {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.alert-success {
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  color: var(--success);
}

.alert-error {
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: var(--error);
}

.alert-warning {
  background: rgba(234, 179, 8, 0.1);
  border: 1px solid rgba(234, 179, 8, 0.3);
  color: var(--warning);
}

.alert-info {
  background: rgba(94, 196, 212, 0.1);
  border: 1px solid rgba(94, 196, 212, 0.3);
  color: var(--accent);
}
```

---

## Step 4: API Integration (Placeholder)

### src/api/auth.js

```javascript
import axios from 'axios'

const API_URL = '/api/auth'

export const signUp = async (data) => {
  const response = await axios.post(`${API_URL}/signup`, data)
  return response.data
}

export const signIn = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data)
  return response.data
}

export const getMe = async () => {
  const response = await axios.get(`${API_URL}/me`)
  return response.data
}
```

---

## Step 5: Redux Integration

### Update authSlice for SignUp

```javascript
// In authSlice.js, add signup async thunk
export const signUpAsync = createAsyncThunk(
  'auth/signUp',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signUp(userData)
      return response.user
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)
```

### In SignUp.jsx, use the async thunk:

```jsx
const dispatch = useAppDispatch()

const handleSubmit = async (e) => => {
  e.preventDefault()
  if (!validate()) return
  
  setLoading(true)
  const result = await dispatch(signUpAsync(formData))
  
  if (signUpAsync.fulfilled.match(result)) {
    navigate('/onboarding')
  } else {
    setSubmitError(result.payload || 'Failed to create account')
  }
  setLoading(false)
}
```

---

## Checklist

- [ ] Create SignUp page component
- [ ] Implement form state management
- [ ] Add form validation
- [ ] Create Input component with error states
- [ ] Create Checkbox component
- [ ] Create Alert component
- [ ] Create Modal component
- [ ] Add Discord ID helper modal
- [ ] Add loading states
- [ ] Add error handling
- [ ] Connect to Redux store
- [ ] Add API integration
- [ ] Test form validation
- [ ] Test successful submission
- [ ] Test error scenarios

---

## Component Dependencies

- `Input` - existing (Phase 0)
- `Button` - existing (Phase 0)
- `Checkbox` - new
- `Modal` - new
- `Alert` - new

---

## Estimated Time

- **Development:** 2-3 hours
- **Testing:** 30 minutes
--- Implementation Notes ---
Updated: 2026-04-28
- Implemented as part of heyron-docs local deployment
- Running on https://thesumblers.duckdns.org:9843/heyron-docs/
