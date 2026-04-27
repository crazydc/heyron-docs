import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

const MEMORY_OPTIONS = [
  { id: 'short', name: 'Short', desc: 'Forgets after each session.' },
  { id: 'standard', name: 'Standard', desc: 'Remembers across sessions.', recommended: true },
  { id: 'deep', name: 'Deep', desc: 'Full long-term memory.' },
]

export default function MemoryScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { memory, editableMemory } = useAppSelector(state => state.onboarding)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="thinking" size={80} />
        <div className="hero-text">
          <h1 className="headline">How much should it remember?</h1>
          <p className="sub">Memory holds facts and history. Edit anytime.</p>
        </div>
      </div>

      <div className="options-list">
        {MEMORY_OPTIONS.map((m) => (
          <button 
            key={m.id} 
            className={`option ${memory === m.id ? 'selected' : ''}`} 
            onClick={() => dispatch(updateOnboarding({ memory: m.id }))}
          >
            <div className="option-mark" />
            <div className="option-body">
              <p className="option-title">{m.name} {m.recommended && <span className="option-tag">Recommended</span>}</p>
              <p className="option-desc">{m.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <label className={`checkbox ${editableMemory ? 'checked' : ''}`}>
        <span className="checkbox-mark" />
        Let me view and edit memory at any time
      </label>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={!memory}>Continue</button>
      </div>
    </div>
  )
}
