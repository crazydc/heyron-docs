import { useState } from 'react'
import Button from '../ui/Button'
import './OnboardingSteps.css'

export default function SSHKeyStep({ config, onUpdate }) {
  const [generateNew, setGenerateNew] = useState(true)

  const handleGenerate = () => {
    const newKey = `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB... generated-${Date.now()}`
    onUpdate({ sshKey: newKey })
  }

  return (
    <div className="step-content">
      <h2>SSH Key</h2>
      <p>Secure your connection with an SSH key.</p>
      
      <div className="ssh-options">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={generateNew}
            onChange={(e) => setGenerateNew(e.target.checked)}
          />
          <span>Generate new SSH key</span>
        </label>
        
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
