import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

const MODELS = [
  { id: 'standard', name: 'Heyron Standard', desc: 'Best balance of speed and depth.', recommended: true },
  { id: 'deep', name: 'Heyron Deep', desc: 'Slower, more thorough.' },
  { id: 'fast', name: 'Heyron Fast', desc: 'Quickest replies.' },
]

export default function ModelScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { model } = useAppSelector(state => state.onboarding)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="thinking" size={80} />
        <div className="hero-text">
          <h1 className="headline">Which brain should it use?</h1>
          <p className="sub">The model is the engine. You can swap it anytime without losing who your agent is.</p>
        </div>
      </div>

      <div className="options-list">
        {MODELS.map((m) => (
          <button 
            key={m.id} 
            className={`option ${model === m.id ? 'selected' : ''}`} 
            onClick={() => dispatch(updateOnboarding({ model: m.id }))}
          >
            <div className="option-mark" />
            <div className="option-body">
              <p className="option-title">{m.name} {m.recommended && <span className="option-tag">Recommended</span>}</p>
              <p className="option-desc">{m.desc}</p>
            </div>
          </button>
        ))}
      </div>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={!model}>Continue</button>
      </div>
    </div>
  )
}
