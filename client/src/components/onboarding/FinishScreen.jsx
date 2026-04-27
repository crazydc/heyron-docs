import { useAppSelector } from '../../store/hooks'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

export default function FinishScreen({ step, totalSteps, onEnter, onBack, onResumeLaunchpad }) {
  const { agentName } = useAppSelector(state => state.onboarding)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero finish-hero">
        <Mascot pose="greeting" size={120} />
        <div className="hero-text">
          <h1 className="headline">You did it.</h1>
          <p className="sub">{agentName || 'Your agent'} is yours now. Set up around you, ready to learn.</p>
        </div>
      </div>

      <div className="finish-note">
        <p>This is day one. Every conversation, every task, every correction, {agentName || 'your agent'} remembers and grows from it. The more you work with it, the more it becomes yours.</p>
        <p>Change its name, voice, tools, or anything else anytime by coming back to Launchpad.</p>
        <button className="btn-link" onClick={onResumeLaunchpad}>Open Launchpad again →</button>
      </div>

      <div className="actions" style={{ justifyContent: 'center', marginTop: 28 }}>
        <button className="btn btn-primary" onClick={onEnter} style={{ minWidth: 260 }}>Open dashboard →</button>
      </div>
    </div>
  )
}
