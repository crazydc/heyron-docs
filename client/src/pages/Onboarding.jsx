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

const STEPS = [
  { id: 0, title: 'Welcome' },
  { id: 1, title: 'Names' },
  { id: 2, title: 'Use Cases' },
  { id: 3, title: 'Complete' }
]

const RON_LINES = [
  "Hey, I'm Ron. I'll walk through this with you.",
  "This is the part where your agent becomes yours.",
  "Looking good. Every answer shapes how it treats you.",
  "Almost there, this is the good part.",
];

const USECASES = [
  { id: 'helpdesk', label: 'Customer Support' },
  { id: 'knowledge', label: 'Knowledge Base' },
  { id: 'assistant', label: 'Personal Assistant' },
  { id: 'internal', label: 'Internal Tools' },
  { id: 'sales', label: 'Sales Bot' },
  { id: 'other', label: 'Something else' },
];

export default function Onboarding() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentStep, agentConfig } = useAppSelector(state => state.onboarding)
  const { user } = useAppSelector(state => state.auth)

  const [formData, setFormData] = useState({
    agentName: '',
    yourName: user?.fullName || '',
    usecases: []
  })

  const toggleUsecase = (id) => {
    setFormData(prev => ({
      ...prev,
      usecases: prev.usecases.includes(id)
        ? prev.usecases.filter(u => u !== id)
        : [...prev.usecases, id]
    }))
  }

  const handleNext = () => {
    if (currentStep === STEPS.length - 1) {
      dispatch(completeOnboarding())
      navigate('/dashboard')
    } else {
      dispatch(nextStep())
    }
  }

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/signin')
    } else {
      dispatch(prevStep())
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true
      case 1: return !!formData.agentName.trim() && !!formData.yourName.trim()
      case 2: return formData.usecases.length > 0
      case 3: return true
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
          
          <div className="ron-companion">
            <HeadMascot size={22} />
            <span>{RON_LINES[currentStep]}</span>
          </div>
          
          <div className="onboarding-content">
            {currentStep === 0 && (
              <div className="step-content">
                <Mascot pose="greeting" size={140} />
                <h1>Welcome to Heyron.</h1>
                <p className="sub">Thank you for joining us. We're glad you're here.</p>
                
                <p className="hello-body">
                  Heyron isn't another chatbot. You're about to meet <strong>your own agent</strong>. 
                  Custom built for you. Living in its own space. Learning your voice and rhythm as it goes.
                </p>
              </div>
            )}
            
            {currentStep === 1 && (
              <div className="step-content">
                <h2>Let's give your agent a name.</h2>
                <p>What should it call you? And what will you call it?</p>
                
                <div className="form-stack">
                  <Input
                    label="Your name"
                    name="yourName"
                    placeholder="Your name"
                    value={formData.yourName}
                    onChange={(e) => setFormData(prev => ({ ...prev, yourName: e.target.value }))}
                  />
                  <Input
                    label="Agent name"
                    name="agentName"
                    placeholder="e.g., Ron, Assistant, Eloise"
                    value={formData.agentName}
                    onChange={(e) => setFormData(prev => ({ ...prev, agentName: e.target.value }))}
                  />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="step-content">
                <h2>What will your agent do?</h2>
                <p>Select all that apply.</p>
                
                <div className="usecases-grid">
                  {USECASES.map(usecase => (
                    <button
                      key={usecase.id}
                      className={`usecase-chip ${formData.usecases.includes(usecase.id) ? 'selected' : ''}`}
                      onClick={() => toggleUsecase(usecase.id)}
                    >
                      {usecase.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="step-content complete-step">
                <div className="complete-icon">🎉</div>
                <h2>You're all set!</h2>
                <p>Your agent is being provisioned.</p>
                
                <div className="summary-card">
                  <dl>
                    <dt>You</dt>
                    <dd>{formData.yourName || 'Not set'}</dd>
                    <dt>Agent</dt>
                    <dd>{formData.agentName || 'Not set'}</dd>
                    <dt>For</dt>
                    <dd>{formData.usecases.map(u => USECASES.find(x => x.id === u)?.label).join(', ') || 'Not set'}</dd>
                  </dl>
                </div>
              </div>
            )}
          </div>

          <div className="onboarding-nav">
            <Button variant="ghost" onClick={handleBack}>
              {currentStep === 0 ? 'Back' : 'Back'}
            </Button>
            <Button onClick={handleNext} disabled={!canProceed()}>
              {currentStep === 0 ? 'Start Launchpad →' : currentStep === STEPS.length - 1 ? 'Go to Dashboard' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
