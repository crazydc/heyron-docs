import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

export default function NotificationsScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { notifyEmail, notifyPush, notifyFreq } = useAppSelector(state => state.onboarding)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="greeting" size={80} />
        <div className="hero-text">
          <h1 className="headline">How should we reach you?</h1>
          <p className="sub">You'll get the daily briefing either way.</p>
        </div>
      </div>

      <div>
        <div className="toggle-row">
          <div className="toggle-info">
            <p className="toggle-title">Email</p>
            <p className="toggle-desc">Daily summary.</p>
          </div>
          <button 
            className={`toggle ${notifyEmail ? 'on' : ''}`} 
            onClick={() => dispatch(updateOnboarding({ notifyEmail: !notifyEmail }))}
            aria-label="toggle"
          />
        </div>
        <div className="toggle-row">
          <div className="toggle-info">
            <p className="toggle-title">Push</p>
            <p className="toggle-desc">Real-time alerts.</p>
          </div>
          <button 
            className={`toggle ${notifyPush ? 'on' : ''}`} 
            onClick={() => dispatch(updateOnboarding({ notifyPush: !notifyPush }))}
            aria-label="toggle"
          />
        </div>
      </div>

      <div className="field" style={{ marginTop: 20 }}>
        <label>How often</label>
        <div className="chip-row">
          {[
            { id: 'always', n: 'Always' },
            { id: 'important', n: 'Important only' },
            { id: 'daily', n: 'Daily digest' }
          ].map((p) => (
            <button 
              key={p.id} 
              className={`chip ${notifyFreq === p.id ? 'selected' : ''}`} 
              onClick={() => dispatch(updateOnboarding({ notifyFreq: p.id }))}
            >
              {p.n}
            </button>
          ))}
        </div>
      </div>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Continue</button>
      </div>
    </div>
  )
}
