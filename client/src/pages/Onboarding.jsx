import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { nextStep, prevStep, setAgentConfig, completeOnboarding } from '../store/slices/onboardingSlice'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import StepIndicator from '../components/ui/StepIndicator'
import './Onboarding.css'

const STEPS = [
  { id: 0, title: 'Welcome' },
  { id: 1, title: 'Identity' },
  { id: 2, title: 'Soul' },
  { id: 3, title: 'Complete' }
]

export default function Onboarding() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentStep, agentConfig } = useAppSelector(state => state.onboarding)
  const { user } = useAppSelector(state => state.auth)

  const [formData, setFormData] = useState({
    agentName: '',
    yourName: user?.fullName || '',
    instructions: '',
    whoFor: ''
  })

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
      case 1: return !!formData.agentName.trim()
      case 2: return !!formData.instructions.trim()
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
          
          <div className="onboarding-content">
            {currentStep === 0 && (
              <div className="step-content">
                <div className="step-icon">👋</div>
                <h1>Welcome{user?.fullName ? `, ${user.fullName.split(' ')[0]}` : ''}!</h1>
                <p>Let's set up your AI agent. It only takes a minute.</p>
                <div className="what-to-expect">
                  <h3>What we'll do:</h3>
                  <ul>
                    <li>Give your agent a name</li>
                    <li>Write its personality & purpose</li>
                  </ul>
                </div>
              </div>
            )}
            
            {currentStep === 1 && (
              <div className="step-content">
                <h2>What should we call you?</h2>
                <p>And what name should your agent use?</p>
                
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
                    placeholder="e.g., Ron, Assistant, Helper"
                    value={formData.agentName}
                    onChange={(e) => setFormData(prev => ({ ...prev, agentName: e.target.value }))}
                  />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="step-content">
                <h2>What's your agent's purpose?</h2>
                <p>Describe what you want your agent to do.</p>
                
                <div className="form-stack">
                  <Input
                    label="Instructions"
                    name="instructions"
                    placeholder="e.g., You are a helpful assistant that answers questions about our company..."
                    value={formData.instructions}
                    onChange={(e) => setFormData(prev => ({ ...prev, instructions: e.target.value }))}
                  />
                  <Input
                    label="Who is this for?"
                    name="whoFor"
                    placeholder="e.g., My team, My family, My customers"
                    value={formData.whoFor}
                    onChange={(e) => setFormData(prev => ({ ...prev, whoFor: e.target.value }))}
                  />
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="step-content complete-step">
                <div className="complete-icon">🎉</div>
                <h2>You're all set!</h2>
                <p>Your AI agent is being provisioned.</p>
                
                <div className="summary-card">
                  <h3>Summary</h3>
                  <dl>
                    <dt>Your name</dt>
                    <dd>{formData.yourName || 'Not set'}</dd>
                    <dt>Agent name</dt>
                    <dd>{formData.agentName || 'Not set'}</dd>
                    <dt>For</dt>
                    <dd>{formData.whoFor || 'Not set'}</dd>
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
              {currentStep === STEPS.length - 1 ? 'Go to Dashboard' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
