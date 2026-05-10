import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SpaceScene from '../components/hero/SpaceScene'
import Panel from '../components/ui/Panel'
import OptionCard from '../components/ui/OptionCard'
import Pill from '../components/ui/Pill'
import Button from '../components/ui/Button'
import './Launchpad.css'

export default function Launchpad() {
  const navigate = useNavigate()
  const [selectedPath, setSelectedPath] = useState(null)

  const handleContinue = () => {
    if (selectedPath === 'beginner') {
      navigate('/launchpad-config')
    } else if (selectedPath === 'expert') {
      navigate('/mission-control')
    }
  }

  return (
    <div className="launchpad">
      <SpaceScene />
      
      <div className="launchpad__content">
        <div className="launchpad__header">
          <h1 className="launchpad__title">Welcome to Heyron</h1>
          <p className="launchpad__subtitle">Choose your journey</p>
        </div>

        <Panel variant="elevated" className="launchpad__panel">
          <div className="launchpad__options">
            <OptionCard
              title="Beginner Path"
              description="Step-by-step setup with guided instructions. Perfect for getting started with your AI agent."
              tag="Recommended"
              selected={selectedPath === 'beginner'}
              onClick={() => setSelectedPath('beginner')}
            />
            
            <OptionCard
              title="Expert Path"
              description="Jump straight in with default settings. Customize everything yourself."
              selected={selectedPath === 'expert'}
              onClick={() => setSelectedPath('expert')}
            />
          </div>

          <div className="launchpad__actions">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleContinue}
              disabled={!selectedPath}
            >
              Continue
            </Button>
          </div>
        </Panel>

        <div className="launchpad__footer">
          <Pill label="🚀 Powered by AI" variant="accent" />
        </div>
      </div>
    </div>
  )
}