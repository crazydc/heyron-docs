import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function HoursScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { workDays, workStart, workEnd, timezone } = useAppSelector(state => state.onboarding)

  const toggleDay = (d) => {
    const next = new Set(workDays || [])
    next.has(d) ? next.delete(d) : next.add(d)
    dispatch(updateOnboarding({ workDays: Array.from(next) }))
  }

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="sleeping" size={80} />
        <div className="hero-text">
          <h1 className="headline">When are you working?</h1>
          <p className="sub">Your agent stays quiet outside these hours.</p>
        </div>
      </div>

      <div className="field">
        <label>Timezone</label>
        <select 
          className="input" 
          value={timezone} 
          onChange={(e) => dispatch(updateOnboarding({ timezone: e.target.value }))}
        >
          <option>Pacific (PT)</option>
          <option>Mountain (MT)</option>
          <option>Central (CT)</option>
          <option>Eastern (ET)</option>
          <option>UK (GMT/BST)</option>
          <option>Central Europe (CET)</option>
        </select>
      </div>

      <div className="two-col">
        <div className="field">
          <label>Start</label>
          <input 
            className="input" 
            type="time" 
            value={workStart} 
            onChange={(e) => dispatch(updateOnboarding({ workStart: e.target.value }))} 
          />
        </div>
        <div className="field">
          <label>End</label>
          <input 
            className="input" 
            type="time" 
            value={workEnd} 
            onChange={(e) => dispatch(updateOnboarding({ workEnd: e.target.value }))} 
          />
        </div>
      </div>

      <div className="field">
        <label>Days</label>
        <div className="day-row">
          {DAYS.map((d) => (
            <button 
              key={d} 
              className={`day ${(workDays || []).includes(d) ? 'selected' : ''}`} 
              onClick={() => toggleDay(d)}
            >
              {d}
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
