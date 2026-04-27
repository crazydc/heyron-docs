import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, HeadMascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

const PERSONAS = [
  { id: 'steady', name: 'Steady', tag: 'Calm, clear, no-frills.', sample: '"Sent. Three more in the queue."', best: 'Focused work with tight deadlines.' },
  { id: 'curious', name: 'Curious', tag: 'Asks before acting.', sample: '"Quick check, should I include the design team?"', best: 'Ambiguous projects with stakeholders.' },
  { id: 'sharp', name: 'Sharp', tag: 'Terse and high-signal.', sample: '"Done. Doc here. Anything else?"', best: 'Power users who hate small talk.' },
  { id: 'warm', name: 'Warm', tag: 'Friendly and on your team.', sample: '"Got this one covered."', best: 'High-stress weeks.' },
  { id: 'playful', name: 'Playful', tag: 'Witty and light.', sample: '"Five down, two to go. Snack break?"', best: 'Casual teams.' },
  { id: 'formal', name: 'Formal', tag: 'Polished and careful.', sample: '"I have completed the draft."', best: 'Client-facing environments.' },
]

const HEYRON_PERSONAS = [
  { id: 'like-ron', name: 'Like Ron', tag: "Warm and steady, like a friend who's got your back.", sample: '"Hey, saw your inbox is piling up. Want me to knock out the easy ones?"' },
  { id: 'like-eloise', name: 'Like Eloise', tag: 'Precise and thoughtful, asks the right questions first.', sample: '"Before I send this, is this going to the full team or just leadership?"' },
  { id: 'like-navi', name: 'Like Navi', tag: 'Energetic and curious, loves figuring things out with you.', sample: '"Ooh, interesting, I see three ways to solve this. Want me to walk through them?"' },
  { id: 'like-ari', name: 'Like Ari', tag: 'Sharp and clean, no-nonsense.', sample: '"Done. Doc here. Anything else?"' },
  { id: 'like-mack', name: 'Like Mack', tag: 'Laid-back, dryly funny, never makes anything a big deal.', sample: '"Five down, two to go. You good?"' },
]

export default function PersonalityScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { agentName, personality } = useAppSelector(state => state.onboarding)

  const handleSelect = (id) => dispatch(updateOnboarding({ personality: id }))

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="thinking" size={80} />
        <div className="hero-text">
          <h1 className="headline">What does {agentName || 'your agent'} sound like?</h1>
          <p className="sub">This is the voice you'll hear every day. Pick a starting point. It'll grow into its own as it learns you.</p>
        </div>
      </div>

      <p className="persona-intro">
        You're picking a <strong>starting voice</strong>, not a final one. As your agent gets to know you, it picks up your phrasing, your inside jokes, your rhythm. In a few weeks it sounds like your agent, not an archetype. You can change this anytime in settings.
      </p>

      <p className="persona-section-label">First, meet the family</p>
      <p className="persona-section-sub">Here's what a few Heyron agents already out in the world sound like.</p>
      <div className="persona-showcase">
        {HEYRON_PERSONAS.map((p) => (
          <div key={p.id} className="persona-example">
            <p className="persona-name">{p.name}</p>
            <p className="persona-tag">{p.tag}</p>
            <p className="persona-sample">{p.sample}</p>
          </div>
        ))}
      </div>

      <p className="persona-section-label" style={{ marginTop: 22 }}>Now pick a voice for yours</p>
      <p className="persona-section-sub">Any one of these works. Go with gut.</p>
      
      <div className="options options-rich">
        {PERSONAS.map((p) => (
          <button 
            key={p.id} 
            className={`option persona-card ${personality === p.id ? 'selected' : ''}`} 
            onClick={() => handleSelect(p.id)}
          >
            <p className="persona-name">{p.name}</p>
            <p className="persona-tag">{p.tag}</p>
            <p className="persona-sample">{p.sample}</p>
            <p className="persona-best"><strong>Best for:</strong> {p.best}</p>
          </button>
        ))}
      </div>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={!personality}>Continue</button>
      </div>
    </div>
  )
}
