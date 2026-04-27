import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

const COMM_STYLES = [
  { id: 'concise', name: 'Concise', desc: 'Just the answer. No fluff.', sample: '"Done, saved to Drive."' },
  { id: 'balanced', name: 'Balanced', desc: 'Answer plus useful context.', sample: '"Done, saved to Drive under /work/april. Want a recap?"' },
  { id: 'detailed', name: 'Detailed', desc: 'Full reasoning and next steps.', sample: '"Done. Saved at /work/april/notes.md. I added two columns and reformatted dates. Anything else?"' },
]

export default function CommStyleScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { agentName, commStyle } = useAppSelector(state => state.onboarding)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="thinking" size={80} />
        <div className="hero-text">
          <h1 className="headline">How chatty do you want it?</h1>
          <p className="sub">Same voice, different rhythm. Do you like short and direct, or a little more context?</p>
        </div>
      </div>

      <div className="options-list">
        {COMM_STYLES.map((c) => (
          <button 
            key={c.id} 
            className={`option ${commStyle === c.id ? 'selected' : ''}`} 
            onClick={() => dispatch(updateOnboarding({ commStyle: c.id }))}
            style={{ flexDirection: 'column', alignItems: 'stretch', gap: 0 }}
          >
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div className="option-mark" />
              <div className="option-body">
                <p className="option-title">{c.name}</p>
                <p className="option-desc">{c.desc}</p>
              </div>
            </div>
            <p className="comm-sample">{c.sample}</p>
          </button>
        ))}
      </div>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={!commStyle}>Continue</button>
      </div>
    </div>
  )
}
