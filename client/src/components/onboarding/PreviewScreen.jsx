import { useAppSelector } from '../../store/hooks'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

const PERSONAS = [
  { id: 'steady', name: 'Steady' },
  { id: 'curious', name: 'Curious' },
  { id: 'sharp', name: 'Sharp' },
  { id: 'warm', name: 'Warm' },
  { id: 'playful', name: 'Playful' },
  { id: 'formal', name: 'Formal' },
]

const COMM_STYLES = [
  { id: 'concise', name: 'Concise' },
  { id: 'balanced', name: 'Balanced' },
  { id: 'detailed', name: 'Detailed' },
]

const MODELS = [
  { id: 'standard', name: 'Heyron Standard' },
  { id: 'deep', name: 'Heyron Deep' },
  { id: 'fast', name: 'Heyron Fast' },
]

const MEMORY_OPTIONS = [
  { id: 'short', name: 'Short' },
  { id: 'standard', name: 'Standard' },
  { id: 'deep', name: 'Deep' },
]

const USE_CASES = [
  { id: 'email', label: 'Email triage & replies' },
  { id: 'calendar', label: 'Calendar & scheduling' },
  { id: 'research', label: 'Research & summaries' },
  { id: 'writing', label: 'Writing & editing' },
  { id: 'code', label: 'Code & technical work' },
  { id: 'support', label: 'Customer support' },
  { id: 'sales', label: 'Sales & outreach' },
  { id: 'data', label: 'Data analysis' },
  { id: 'pm', label: 'Project management' },
  { id: 'personal', label: 'Personal tasks & errands' },
]

export default function PreviewScreen({ step, totalSteps, onLaunch, onBack, expert }) {
  const data = useAppSelector(state => state.onboarding)

  const persona = PERSONAS.find((p) => p.id === data.personality)
  const comm = COMM_STYLES.find((c) => c.id === data.commStyle)
  const model = MODELS.find((m) => m.id === data.model)
  const memory = MEMORY_OPTIONS.find((m) => m.id === data.memory)
  const useCaseLabels = data.useCases.map(id => USE_CASES.find(u => u.id === id)?.label).filter(Boolean)

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="greeting" size={100} />
        <div className="hero-text">
          <h1 className="headline">Here's your setup.</h1>
          <p className="sub">Look it over. Change any of this from settings.</p>
        </div>
      </div>

      <div className="summary">
        <div className="summary-section-title">Identity</div>
        <div className="summary-row"><span className="summary-label">Your name</span><span className="summary-value">{data.yourName}</span></div>
        <div className="summary-row"><span className="summary-label">Agent name</span><span className="summary-value">{data.agentName}</span></div>
        
        <div className="summary-section-title">Soul</div>
        <div className="summary-row"><span className="summary-label">Focus</span><span className="summary-value">{useCaseLabels.length ? useCaseLabels.join(', ') : 'None'}</span></div>
        {persona && <div className="summary-row"><span className="summary-label">Personality</span><span className="summary-value">{persona.name}</span></div>}
        {comm && <div className="summary-row"><span className="summary-label">Verbosity</span><span className="summary-value">{comm.name}</span></div>}
        
        {expert && (model || memory) && <div className="summary-section-title">Brain</div>}
        {expert && model && <div className="summary-row"><span className="summary-label">Model</span><span className="summary-value">{model.name}</span></div>}
        {expert && memory && <div className="summary-row"><span className="summary-label">Memory</span><span className="summary-value">{memory.name}</span></div>}
        
        <div className="summary-section-title">Connections</div>
        <div className="summary-row"><span className="summary-label">Tools connected</span><span className="summary-value">{data.tools.length === 0 ? 'None yet' : data.tools.join(', ')}</span></div>
        
        {expert && <div className="summary-section-title">Schedule & alerts</div>}
        {expert && <div className="summary-row"><span className="summary-label">Working hours</span><span className="summary-value">{data.workStart} - {data.workEnd}, {data.workDays?.length || 0} days</span></div>}
        {expert && <div className="summary-row"><span className="summary-label">Notifications</span><span className="summary-value">{[data.notifyEmail && 'Email', data.notifyPush && 'Push'].filter(Boolean).join(' + ') || 'Off'}</span></div>}
      </div>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onLaunch}>Looks good, continue</button>
      </div>
    </div>
  )
}
