import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StepsProgress from '../components/ui/StepsProgress'
import OptionCard from '../components/ui/OptionCard'
import Input, { Textarea, Select } from '../components/ui/Input'
import Toggle from '../components/ui/Toggle'
import Button from '../components/ui/Button'
import Panel from '../components/ui/Panel'
import './LaunchpadConfig.css'

const STEPS = ['Personality', 'Capabilities', 'Integrations', 'Review']

export default function LaunchpadConfig() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [doneSteps, setDoneSteps] = useState([])
  
  const [config, setConfig] = useState({
    personality: 'friendly',
    tone: 'professional',
    notifications: true,
    autoRun: false,
    integrations: []
  })

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setDoneSteps([...doneSteps, currentStep])
      setCurrentStep(currentStep + 1)
    } else {
      navigate('/mission-control')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      navigate('/launchpad')
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="config-step">
            <h2 className="config-step__title">Choose your agent's personality</h2>
            <div className="config-step__options">
              <OptionCard
                title="Friendly Assistant"
                description="Warm, approachable, and always ready to help"
                selected={config.personality === 'friendly'}
                onClick={() => setConfig({ ...config, personality: 'friendly' })}
              />
              <OptionCard
                title="Professional Agent"
                description="Formal, efficient, focused on results"
                selected={config.personality === 'professional'}
                onClick={() => setConfig({ ...config, personality: 'professional' })}
              />
              <OptionCard
                title="Technical Expert"
                description="Technical, precise, great with complex tasks"
                selected={config.personality === 'technical'}
                onClick={() => setConfig({ ...config, personality: 'technical' })}
              />
            </div>
          </div>
        )
      
      case 1:
        return (
          <div className="config-step">
            <h2 className="config-step__title">Configure capabilities</h2>
            <div className="config-step__toggles">
              <Toggle
                label="Email Integration"
                description="Connect to your email inbox"
                checked={config.capabilities?.email}
                onChange={(v) => setConfig({ ...config, capabilities: { ...config.capabilities, email: v } })}
              />
              <Toggle
                label="Calendar Sync"
                description="Manage your calendar events"
                checked={config.capabilities?.calendar}
                onChange={(v) => setConfig({ ...config, capabilities: { ...config.capabilities, calendar: v } })}
              />
              <Toggle
                label="Slack Integration"
                description="Connect to Slack workspace"
                checked={config.capabilities?.slack}
                onChange={(v) => setConfig({ ...config, capabilities: { ...config.capabilities, slack: v } })}
              />
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="config-step">
            <h2 className="config-step__title">Add integrations</h2>
            <div className="config-step__input">
              <Input
                label="API Key (optional)"
                placeholder="Enter your API key"
                value={config.apiKey || ''}
                onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                hint="Get your API key from the settings page"
              />
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="config-step">
            <h2 className="config-step__title">Review your setup</h2>
            <div className="config-step__summary">
              <div className="summary-item">
                <span className="summary-item__label">Personality</span>
                <span className="summary-item__value">{config.personality}</span>
              </div>
              <div className="summary-item">
                <span className="summary-item__label">Notifications</span>
                <span className="summary-item__value">{config.notifications ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="launchpad-config">
      <div className="launchpad-config__container">
        <StepsProgress 
          steps={STEPS} 
          currentStep={currentStep}
          doneSteps={doneSteps}
        />

        <Panel className="launchpad-config__panel">
          {renderStep()}
        </Panel>

        <div className="launchpad-config__actions">
          <Button variant="ghost" onClick={handleBack}>
            Back
          </Button>
          <Button variant="primary" onClick={handleNext}>
            {currentStep === STEPS.length - 1 ? 'Complete Setup' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  )
}