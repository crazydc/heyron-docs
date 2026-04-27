# Phase 3: Welcome Walkthrough (Onboarding) / Launchpad

**Objective:** Create multi-step onboarding wizard that guides users through agent setup.

> **Design Note:** This is the Launchpad for first-time users. After completion, they go to OpenClaw.

---

## Overview

The onboarding wizard guides new users through setting up their AI agent. Based on launchpad.heyron.ai.

### Steps

1. **Welcome** - Introduction
2. **Server Selection** - Choose server (c1-c8)
3. **Connection Type** - Cloud, Local, or SSH
4. **SSH Key** - Generate or import
5. **Complete** - Confirmation

---

## Step 1: Create Onboarding Page Structure

### src/pages/Onboarding.jsx

```jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { nextStep, prevStep, setAgentConfig, completeOnboarding } from '../store/slices/onboardingSlice'
import { loginSuccess } from '../store/slices/authSlice'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import StepIndicator from '../components/ui/StepIndicator'
import './Onboarding.css'

const STEPS = [
  { id: 0, title: 'Welcome', description: 'Getting started' },
  { id: 1, title: 'Server', description: 'Choose your server' },
  { id: 2, title: 'Connection', description: 'How to connect' },
  { id: 3, title: 'SSH Key', description: 'Secure access' },
  { id: 4, title: 'Complete', description: 'All done!' }
]

const SERVERS = [
  { id: 'c1', name: 'c1', location: 'London, UK', flag: '🇬🇧' },
  { id: 'c2', name: 'c2', location: 'Frankfurt, DE', flag: '🇩🇪' },
  { id: 'c3', name: 'c3', location: 'Amsterdam, NL', flag: '🇳🇱' },
  { id: 'c4', name: 'c4', location: 'Paris, FR', flag: '🇫🇷' },
  { id: 'c5', name: 'c5', location: 'New York, US', flag: '🇺🇸' },
  { id: 'c6', name: 'c6', location: 'Los Angeles, US', flag: '🇺🇸' },
  { id: 'c7', name: 'c7', location: 'Singapore, SG', flag: '🇸🇬' },
  { id: 'c8', name: 'c8', location: 'Tokyo, JP', flag: '🇯🇵' },
]

export default function Onboarding() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentStep, agentConfig } = useAppSelector(state => state.onboarding)
  const { user } = useAppSelector(state => state.auth)

  const handleNext = () => {
    if (currentStep === STEPS.length - 1) {
      // Complete onboarding
      dispatch(completeOnboarding())
      navigate('/dashboard')
    } else {
      dispatch(nextStep())
    }
  }

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/signup')
    } else {
      dispatch(prevStep())
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true
      case 1: return !!agentConfig.serverName
      case 2: return !!agentConfig.connectionType
      case 3: return true // Skip SSH key for now
      case 4: return true
      default: return false
    }
  }

  return (
    <Layout fullWidth>
      <div className="onboarding-page">
        <div className="onboarding-container">
          <StepIndicator 
            steps={STEPS.map(s => s.title)} 
            current={currentStep} 
          />
          
          <div className="onboarding-content">
            {currentStep === 0 && (
              <WelcomeStep user={user} />
            )}
            
            {currentStep === 1 && (
              <ServerStep 
                selected={agentConfig.serverName}
                onSelect={(serverName) => dispatch(setAgentConfig({ serverName }))}
              />
            )}
            
            {currentStep === 2 && (
              <ConnectionStep 
                selected={agentConfig.connectionType}
                onSelect={(connectionType) => dispatch(setAgentConfig({ connectionType }))}
              />
            )}
            
            {currentStep === 3 && (
              <SSHKeyStep 
                config={agentConfig}
                onUpdate={(config) => dispatch(setAgentConfig(config))}
              />
            )}
            
            {currentStep === 4 && (
              <CompleteStep config={agentConfig} />
            )}
          </div>

          <div className="onboarding-nav">
            <Button variant="ghost" onClick={handleBack}>
              {currentStep === 0 ? 'Back' : 'Back'}
            </Button>
            <Button onClick={handleNext} disabled={!canProceed()}>
              {currentStep === STEPS.length - 1 ? 'Go to Dashboard' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
```

---

## Step 2: Create Step Components

### Welcome Step

```jsx
// src/components/onboarding/WelcomeStep.jsx
import './OnboardingSteps.css'

export default function WelcomeStep({ user }) {
  return (
    <div className="step-content">
      <div className="step-icon">👋</div>
      <h1>Welcome{user?.fullName ? `, ${user.fullName.split(' ')[0]}` : ''}!</h1>
      <p>Let's get your AI agent set up. It only takes a minute.</p>
      
      <div className="what-to-expect">
        <h3>What to expect:</h3>
        <ul>
          <li>Choose a server location</li>
          <li>Set up your connection</li>
          <li>Configure your SSH key</li>
        </ul>
      </div>
    </div>
  )
}
```

### Server Step

```jsx
// src/components/onboarding/ServerStep.jsx
import { useState } from 'react'
import SERVERS from './servers' // defined in parent
import './OnboardingSteps.css'

export default function ServerStep({ selected, onSelect }) {
  const [showAll, setShowAll] = useState(false)
  const displayServers = showAll ? SERVERS : SERVERS.slice(0, 4)

  return (
    <div className="step-content">
      <h2>Choose your server</h2>
      <p>Select a server closest to you for the best performance.</p>
      
      <div className="server-grid">
        {displayServers.map(server => (
          <button
            key={server.id}
            className={`server-card ${selected === server.id ? 'selected' : ''}`}
            onClick={() => onSelect(server.id)}
          >
            <span className="server-flag">{server.flag}</span>
            <span className="server-name">{server.name}</span>
            <span className="server-location">{server.location}</span>
          </button>
        ))}
      </div>
      
      {!showAll && SERVERS.length > 4 && (
        <button className="show-more-btn" onClick={() => setShowAll(true)}>
          Show all {SERVERS.length} servers
        </button>
      )}
    </div>
  )
}
```

### Connection Step

```jsx
// src/components/onboarding/ConnectionStep.jsx
import './OnboardingSteps.css'

const CONNECTION_OPTIONS = [
  {
    id: 'cloud',
    title: 'Cloud Connection',
    description: 'Connect via Heyron cloud gateway. Easiest setup.',
    icon: '☁️',
    pros: ['Quick setup', 'No port forwarding', 'Managed by us'],
    cons: ['External dependency']
  },
  {
    id: 'local',
    title: 'Local Network',
    description: 'Connect directly from your local network.',
    icon: '🏠',
    pros: ['Fastest latency', 'Full control', 'No internet needed'],
    cons: ['Requires network access']
  },
  {
    id: 'ssh',
    title: 'SSH Tunnel',
    description: 'Connect via reverse SSH tunnel.',
    icon: '🔐',
    pros: ['Works through firewall', 'Secure', 'Remote access'],
    cons: ['More setup required']
  }
]

export default function ConnectionStep({ selected, onSelect }) {
  return (
    <div className="step-content">
      <h2>How do you want to connect?</h2>
      <p>Choose the connection method that works best for you.</p>
      
      <div className="connection-options">
        {CONNECTION_OPTIONS.map(option => (
          <button
            key={option.id}
            className={`connection-card ${selected === option.id ? 'selected' : ''}`}
            onClick={() => onSelect(option.id)}
          >
            <span className="connection-icon">{option.icon}</span>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            
            <div className="connection-details">
              <div className="pros">
                <strong>✓ Pros:</strong>
                <ul>
                  {option.pros.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
```

### SSH Key Step

```jsx
// src/components/onboarding/SSHKeyStep.jsx
import { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Toggle from '../ui/Toggle'
import './OnboardingSteps.css'

export default function SSHKeyStep({ config, onUpdate }) {
  const [generateNew, setGenerateNew] = useState(true)

  const handleGenerate = () => {
    // Generate random SSH key (simulated)
    const newKey = `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB... generated-${Date.now()}`
    onUpdate({ sshKey: newKey })
  }

  return (
    <div className="step-content">
      <h2>SSH Key</h2>
      <p>Secure your connection with an SSH key.</p>
      
      <div className="ssh-options">
        <Toggle
          label="Generate new SSH key"
          checked={generateNew}
          onChange={setGenerateNew}
        />
        
        {!generateNew && (
          <div className="import-key">
            <p className="import-label">Or paste your existing public key:</p>
            <textarea
              className="key-textarea"
              placeholder="ssh-rsa AAAA..."
              value={config.sshKey || ''}
              onChange={(e) => onUpdate({ sshKey: e.target.value })}
            />
          </div>
        )}
        
        {generateNew && (
          <div className="generated-key">
            <p>We'll generate a secure SSH key for you:</p>
            <div className="key-preview">
              ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB...
            </div>
            <Button variant="secondary" onClick={handleGenerate}>
              Generate Key
            </Button>
          </div>
        )}
      </div>
      
      <div className="ssh-help">
        <h4>What is an SSH key?</h4>
        <p>
          SSH keys provide a secure way to access your server without 
          passwords. Think of it like a digital ID card.
        </p>
      </div>
    </div>
  )
}
```

### Complete Step

```jsx
// src/components/onboarding/CompleteStep.jsx
import './OnboardingSteps.css'

export default function CompleteStep({ config }) {
  return (
    <div className="step-content complete-step">
      <div className="complete-icon">🎉</div>
      <h2>You're all set!</h2>
      <p>Your AI agent is being provisioned.</p>
      
      <div className="summary-card">
        <h3>Configuration Summary</h3>
        <dl>
          <dt>Server</dt>
          <dd>{config.serverName || 'Not selected'}</dd>
          
          <dt>Connection</dt>
          <dd>{config.connectionType || 'Not selected'}</dd>
          
          <dt>SSH Key</dt>
          <dd>{config.sshKey ? 'Configured' : 'Not set'}</dd>
        </dl>
      </div>
      
      <div className="next-steps">
        <h4>What's next?</h4>
        <ol>
          <li>Check your email for confirmation</li>
          <li>Your agent will be online in 5-10 minutes</li>
          <li>Visit Mission Control to start chatting</li>
        </ol>
      </div>
    </div>
  )
}
```

---

## Step 3: Onboarding CSS

### src/pages/Onboarding.css

```css
.onboarding-page {
  min-height: 100vh;
  background: var(--bg-primary);
  padding: var(--space-xl) 0;
}

.onboarding-container {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.onboarding-content {
  margin: 48px 0;
  min-height: 400px;
}

.onboarding-nav {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}
```

### src/components/onboarding/OnboardingSteps.css

```css
.step-content {
  text-align: center;
}

.step-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.step-content h1 {
  font-size: 32px;
  margin-bottom: 12px;
}

.step-content h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

.step-content > p {
  color: var(--text-secondary);
  margin-bottom: 32px;
}

/* Server Grid */
.server-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.server-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 20px;
  background: var(--bg-card);
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
}

.server-card:hover {
  border-color: var(--text-muted);
}

.server-card.selected {
  border-color: var(--accent);
  background: rgba(94, 196, 212, 0.05);
}

.server-flag {
  font-size: 24px;
}

.server-name {
  font-weight: 700;
  font-size: 16px;
}

.server-location {
  font-size: 12px;
  color: var(--text-muted);
}

.show-more-btn {
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  font-size: 14px;
}

/* Connection Cards */
.connection-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.connection-card {
  text-align: left;
  padding: 20px;
  background: var(--bg-card);
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
}

.connection-card:hover {
  border-color: var(--text-muted);
}

.connection-card.selected {
  border-color: var(--accent);
  background: rgba(94, 196, 212, 0.05);
}

.connection-icon {
  font-size: 24px;
}

.connection-card h3 {
  font-size: 16px;
  margin: 8px 0 4px;
}

.connection-card p {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.pros ul {
  list-style: none;
  font-size: 12px;
  color: var(--success);
}

.pros li {
  margin-bottom: 2px;
}

/* SSH Step */
.ssh-options {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 20px;
  margin-bottom: 24px;
  text-align: left;
}

.import-key {
  margin-top: 16px;
}

.import-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.key-textarea {
  width: 100%;
  height: 80px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px;
  color: var(--text-primary);
  font-family: monospace;
  font-size: 12px;
  resize: none;
}

.key-textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.generated-key {
  margin-top: 16px;
}

.key-preview {
  background: var(--bg-secondary);
  padding: 12px;
  border-radius: var(--radius-sm);
  font-family: monospace;
  font-size: 12px;
  color: var(--text-muted);
  margin: 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ssh-help {
  text-align: left;
  background: rgba(94, 196, 212, 0.05);
  border: 1px solid rgba(94, 196, 212, 0.15);
  border-radius: var(--radius-md);
  padding: 16px;
}

.ssh-help h4 {
  font-size: 14px;
  margin-bottom: 8px;
}

.ssh-help p {
  font-size: 13px;
  color: var(--text-secondary);
}

/* Complete Step */
.complete-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.summary-card {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 20px;
  text-align: left;
  margin: 24px 0;
}

.summary-card h3 {
  font-size: 14px;
  margin-bottom: 16px;
}

.summary-card dl {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
}

.summary-card dt {
  color: var(--text-muted);
  font-size: 13px;
}

.summary-card dd {
  font-size: 13px;
}

.next-steps {
  text-align: left;
}

.next-steps h4 {
  font-size: 14px;
  margin-bottom: 12px;
}

.next-steps ol {
  padding-left: 20px;
  color: var(--text-secondary);
  font-size: 14px;
}

.next-steps li {
  margin-bottom: 8px;
}
```

---

## Step 4: Step Indicator Component

### src/components/ui/StepIndicator.jsx

```jsx
import './StepIndicator.css'

export default function StepIndicator({ steps, current }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div 
          key={index}
          className={`step-dot ${index < current ? 'completed' : ''} ${index === current ? 'current' : ''}`}
        >
          <span className="step-number">
            {index < current ? '✓' : index + 1}
          </span>
          <span className="step-label">{step}</span>
        </div>
      ))}
      <div className="step-line">
        <div 
          className="step-progress" 
          style={{ width: `${(current / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
```

### src/components/ui/StepIndicator.css

```css
.step-indicator {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
}

.step-dot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  background: var(--bg-card);
  border: 2px solid var(--border);
  color: var(--text-muted);
}

.step-dot.completed .step-number {
  background: var(--success);
  border-color: var(--success);
  color: var(--bg-primary);
}

.step-dot.current .step-number {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg-primary);
}

.step-label {
  font-size: 12px;
  color: var(--text-muted);
}

.step-dot.current .step-label,
.step-dot.completed .step-label {
  color: var(--text-primary);
}

.step-line {
  position: absolute;
  top: 16px;
  left: 60px;
  right: 60px;
  height: 2px;
  background: var(--border);
}

.step-progress {
  height: 100%;
  background: var(--success);
  transition: width 0.3s ease;
}
```

---

## Checklist

- [ ] Create Onboarding page container
- [ ] Create StepIndicator component
- [ ] Create Welcome step
- [ ] Create Server selection step
- [ ] Create Connection type step
- [ ] Create SSH key step
- [ ] Create Complete step
- [ ] Add Redux state management
- [ ] Add navigation (back/next)
- [ ] Add validation (can't proceed without selections)
- [ ] Test multi-step flow
- [ ] Test Redux state persistence

---

## Estimated Time

- **Development:** 3-4 hours
- **Testing:** 30 minutes