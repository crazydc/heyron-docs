import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StepsProgress from '../components/ui/StepsProgress'
import OptionCard from '../components/ui/OptionCard'
import Input, { Textarea, Select } from '../components/ui/Input'
import Toggle from '../components/ui/Toggle'
import Button from '../components/ui/Button'
import Panel from '../components/ui/Panel'
import styles from './LaunchpadConfig.module.css'

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
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Choose your agent's personality</h2>
            <div className={styles.stepOptions}>
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
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Configure capabilities</h2>
            <div className={styles.stepToggles}>
              <Toggle
                label="Email Integration"
                description="Connect to your email inbox"
                checked={config.capabilities?.email || false}
                onChange={(v) => setConfig({ ...config, capabilities: { ...config.capabilities, email: v } })}
              />
              <Toggle
                label="Calendar Sync"
                description="Manage your calendar events"
                checked={config.capabilities?.calendar || false}
                onChange={(v) => setConfig({ ...config, capabilities: { ...config.capabilities, calendar: v } })}
              />
              <Toggle
                label="Slack Integration"
                description="Connect to Slack workspace"
                checked={config.capabilities?.slack || false}
                onChange={(v) => setConfig({ ...config, capabilities: { ...config.capabilities, slack: v } })}
              />
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Add integrations</h2>
            <div className={styles.stepInput}>
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
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Review your setup</h2>
            <div className={styles.summary}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Personality</span>
                <span className={styles.summaryValue}>{config.personality}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Notifications</span>
                <span className={styles.summaryValue}>{config.notifications ? 'Enabled' : 'Disabled'}</span>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <StepsProgress 
          steps={STEPS} 
          currentStep={currentStep}
          doneSteps={doneSteps}
        />

        <Panel className={styles.panel}>
          {renderStep()}
        </Panel>

        <div className={styles.actions}>
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