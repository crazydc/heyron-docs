import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

export default function PrivacyScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { learnFromMe, shareUsage, autoDelete } = useAppSelector(state => state.onboarding)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="thinking" size={80} />
        <div className="hero-text">
          <h1 className="headline">A few privacy choices.</h1>
          <p className="sub">Change anytime.</p>
        </div>
      </div>

      <div>
        <div className="toggle-row">
          <div className="toggle-info">
            <p className="toggle-title">Learn from my interactions</p>
            <p className="toggle-desc">Improve at the things you do most.</p>
          </div>
          <button 
            className={`toggle ${learnFromMe ? 'on' : ''}`} 
            onClick={() => dispatch(updateOnboarding({ learnFromMe: !learnFromMe }))}
            aria-label="toggle"
          />
        </div>
        <div className="toggle-row">
          <div className="toggle-info">
            <p className="toggle-title">Share anonymous usage data</p>
            <p className="toggle-desc">Helps improve Heyron. No content.</p>
          </div>
          <button 
            className={`toggle ${shareUsage ? 'on' : ''}`} 
            onClick={() => dispatch(updateOnboarding({ shareUsage: !shareUsage }))}
            aria-label="toggle"
          />
        </div>
      </div>

      <div className="field" style={{ marginTop: 20 }}>
        <label>Auto-delete chat history</label>
        <select 
          className="input" 
          value={autoDelete} 
          onChange={(e) => dispatch(updateOnboarding({ autoDelete: e.target.value }))}
        >
          <option>Never</option>
          <option>After 30 days</option>
          <option>After 90 days</option>
          <option>After 1 year</option>
        </select>
      </div>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Continue</button>
      </div>
    </div>
  )
}
