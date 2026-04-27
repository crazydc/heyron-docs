import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { nextStep, prevStep, setAgentConfig, completeOnboarding } from '../store/slices/onboardingSlice'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import StepIndicator from '../components/ui/StepIndicator'
import WelcomeStep from '../components/onboarding/WelcomeStep'
import ServerStep from '../components/onboarding/ServerStep'
import ConnectionStep from '../components/onboarding/ConnectionStep'
import SSHKeyStep from '../components/onboarding/SSHKeyStep'
import CompleteStep from '../components/onboarding/CompleteStep'
import './Onboarding.css'

const STEPS = [
  { id: 0, title: 'Welcome', description: 'Getting started' },
  { id: 1, title: 'Server', description: 'Choose your server' },
  { id: 2, title: 'Connection', description: 'How to connect' },
  { id: 3, title: 'SSH Key', description: 'Secure access' },
  { id: 4, title: 'Complete', description: 'All done!' }
]

export default function Onboarding() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentStep, agentConfig } = useAppSelector(state => state.onboarding)
  const { user } = useAppSelector(state => state.auth)

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
      case 1: return !!agentConfig.serverName
      case 2: return !!agentConfig.connectionType
      case 3: return true
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
