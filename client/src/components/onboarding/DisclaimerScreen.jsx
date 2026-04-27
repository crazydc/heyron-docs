import { useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

export default function DisclaimerScreen({ step, totalSteps, onAccept, onBack }) {
  const { agentName } = useAppSelector(state => state.onboarding)
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="thinking" size={90} />
        <div className="hero-text">
          <h1 className="headline">One real talk before {agentName || 'your agent'} goes live.</h1>
          <p className="sub">A few honest things. Your agent is powerful, and we want you to use it well.</p>
        </div>
      </div>

      <div className="disclaimer-list">
        <div className="disclaimer-item">
          <p className="disclaimer-title">AI makes mistakes.</p>
          <p className="disclaimer-body">Large language models get things wrong. Check the work, verify anything important, and never spend money just because an AI told you to. Treat its output like advice from a smart friend who occasionally hallucinates.</p>
        </div>
        <div className="disclaimer-item">
          <p className="disclaimer-title">Protect your API keys and sensitive data.</p>
          <p className="disclaimer-body">Any key you paste lives in your container. Don't share screenshots of your setup screens. Don't paste keys into public chats. Rotate keys if anything feels off.</p>
        </div>
        <div className="disclaimer-item">
          <p className="disclaimer-title">Be careful with what you give it access to.</p>
          <p className="disclaimer-body">The more tools your agent can use, the more it can do, and the more it could do that you didn't intend. Start with a narrow scope. Turn on destructive-action confirmations.</p>
        </div>
        <div className="disclaimer-item">
          <p className="disclaimer-title">You proceed at your own risk.</p>
          <p className="disclaimer-body">Heyron gives you a powerful agent, not a perfect one. You're the human in the loop. Act accordingly.</p>
        </div>
      </div>

      <label className={`checkbox ${agreed ? 'checked' : ''}`} onClick={() => setAgreed(!agreed)}>
        <span className="checkbox-mark" />
        I understand and accept these risks.
      </label>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onAccept} disabled={!agreed}>Accept & continue</button>
      </div>
    </div>
  )
}
