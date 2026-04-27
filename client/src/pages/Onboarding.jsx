import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { nextStep, prevStep, setAgentConfig, completeOnboarding } from '../store/slices/onboardingSlice'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import StepIndicator from '../components/ui/StepIndicator'
import { Mascot, HeadMascot } from '../components/ui/Mascot'
import './Onboarding.css'

const USE_CASES = [
  { id: 'email', label: 'Email triage & replies' },
  { id: 'calendar', label: 'Calendar & scheduling' },
  { id: 'research', label: 'Research & summaries' },
  { id: 'writing', label: 'Writing & editing' },
  { id: 'code', label: 'Code & technical work' },
  { id: 'support', label: 'Customer support' },
  { id: 'sales', label: 'Sales & outreach' },
  { id: 'data', label: 'Data analysis' },
  { id: 'pm', label: 'Project management' },
  { id: 'personal', label: 'Personal tasks & errands' },
]

const RON_LINES = [
  "Hey, I'm Ron. I'll walk through this with you.",
  "This is the part where your agent becomes yours.",
  "Looking good. Every answer shapes how it treats you.",
  "Almost there, this is the good part.",
];

export default function Onboarding() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentStep, agentConfig } = useAppSelector(state => state.onboarding)
  const { user } = useAppSelector(state => state.auth)

  const [buildMode, setBuildMode] = useState(null) // 'beginner', 'expert', or 'remix'

  const [formData, setFormData] = useState({
    agentName: '',
    yourName: user?.fullName || '',
    useCases: []
  })

  const [step, setStep] = useState(0) // 0=names, 1=usecases, 2=complete
  const totalSteps = 2

  const toggleUsecase = (id) => {
    setFormData(prev => ({
      ...prev,
      useCases: prev.useCases.includes(id)
        ? prev.useCases.filter(u => u !== id)
        : [...prev.useCases, id]
    }))
  }

  const handleNext = () => {
    if (step === totalSteps) {
      dispatch(completeOnboarding())
      navigate('/dashboard')
    } else {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step === 0) {
      setBuildMode(null)
    } else {
      setStep(step - 1)
    }
  }

  const canProceed = () => {
    if (!buildMode) return true
    if (step === 0) return !!formData.agentName.trim() && !!formData.yourName.trim()
    if (step === 1) return formData.useCases.length > 0
    return true
  }

  // Welcome screen - choose build mode
  if (!buildMode) {
    return (
      <Layout fullWidth>
        <div className="onboarding-page">
          <div className="onboarding-container">
            <div className="ron-companion" style={{ marginBottom: 22 }}>
              <HeadMascot size={22} />
              <span>Hey, I'm Ron. I'll walk through this with you.</span>
            </div>

            <div className="panel">
              <div className="hero" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Mascot pose="greeting" size={118} />
                <div className="hero-text">
                  <h1 className="headline">Hey{user?.email ? `, ${user.email.split('@')[0]}` : ''}, let's make your agent yours.</h1>
                  <p className="sub">Pick how you want to build it. Everything is tailored, everything's editable, everything stays yours.</p>
                </div>
              </div>

              <div className="card-grid">
                <button className="card recommended" onClick={() => setBuildMode('beginner')}>
                  <div className="pill">Recommended</div>
                  <p className="card-title">Beginner</p>
                  <p className="card-desc">We walk you through who your agent is, what it cares about, and how it talks to you.</p>
                  <Button>Start as Beginner</Button>
                </button>
                <button className="card" onClick={() => setBuildMode('expert')}>
                  <div className="pill-spacer" />
                  <p className="card-title">Expert</p>
                  <p className="card-desc">Same tailoring, more knobs, model, memory depth, working hours, notifications.</p>
                  <Button variant="ghost">Configure manually</Button>
                </button>
              </div>

              <button className="card remix-card" onClick={() => setBuildMode('remix')}>
                <p className="card-title">Remix</p>
                <p className="card-desc">Already set up? Change what you want, keep the rest.</p>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout fullWidth>
      <div className="onboarding-page">
        <div className="onboarding-container">
          <StepIndicator 
            steps={['Names', 'Use Cases', 'Complete']} 
            current={step} 
          />
          
          <div className="ron-companion">
            <HeadMascot size={22} />
            <span>{RON_LINES[step]}</span>
          </div>
          
          <div className="panel">
            <div className="hero">
              {step === 0 && <Mascot pose="greeting" size={100} />}
              {step === 1 && <Mascot pose="thinking" size={80} />}
              <div className="hero-text">
                {step === 0 && (
                  <>
                    <h1 className="headline">What should we call each other?</h1>
                    <p className="sub">Your name and your agent's name. This is how it'll greet you.</p>
                  </>
                )}
                {step === 1 && (
                  <>
                    <h1 className="headline">What's {formData.agentName || 'your agent'} here for?</h1>
                    <p className="sub">Pick anything that fits. This shapes what your agent learns first.</p>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h1 className="headline">You're all set!</h1>
                    <p className="sub">Your agent is being provisioned.</p>
                  </>
                )}
              </div>
            </div>

            {step === 0 && (
              <div className="fields">
                <div className="field">
                  <label>Your name</label>
                  <input 
                    className="input" 
                    value={formData.yourName} 
                    onChange={(e) => setFormData(prev => ({ ...prev, yourName: e.target.value }))} 
                    placeholder="Your name"
                    autoFocus 
                  />
                </div>
                <div className="field">
                  <label>Your agent's name</label>
                  <input 
                    className="input" 
                    value={formData.agentName} 
                    onChange={(e) => setFormData(prev => ({ ...prev, agentName: e.target.value }))} 
                    placeholder="e.g. Ron, Eloise, Navi, Ari, Mack"
                  />
                  <p className="field-hint">Pick something you'll enjoy seeing every morning.</p>
                </div>
                <div className="soul-note">
                  <strong>Where these go:</strong> both names become part of your agent's <strong>identity</strong>. Editable anytime in Settings.
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="usecase-grid">
                {USE_CASES.map((u) => {
                  const on = formData.useCases.includes(u.id)
                  return (
                    <button 
                      key={u.id} 
                      className={`usecase ${on ? 'selected' : ''}`}
                      onClick={() => toggleUsecase(u.id)}
                    >
                      <div className="usecase-check" />
                      <div className="usecase-label">{u.label}</div>
                    </button>
                  )
                })}
              </div>
            )}

            {step === 2 && (
              <div className="summary">
                <dl>
                  <dt>You</dt>
                  <dd>{formData.yourName || 'Not set'}</dd>
                  <dt>Agent</dt>
                  <dd>{formData.agentName || 'Not set'}</dd>
                  <dt>For</dt>
                  <dd>{formData.useCases.map(u => USE_CASES.find(x => x.id === u)?.label).join(', ') || 'Not set'}</dd>
                </dl>
              </div>
            )}

            <div className="actions">
              <Button variant="ghost" onClick={handleBack}>← Back</Button>
              <Button onClick={handleNext} disabled={!canProceed()}>
                {step === totalSteps ? 'Go to Dashboard' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
