import './OnboardingSteps.css'

const CONNECTION_OPTIONS = [
  {
    id: 'cloud',
    title: 'Cloud Connection',
    description: 'Connect via Heyron cloud gateway. Easiest setup.',
    icon: '☁️',
    pros: ['Quick setup', 'No port forwarding', 'Managed by us'],
  },
  {
    id: 'local',
    title: 'Local Network',
    description: 'Connect directly from your local network.',
    icon: '🏠',
    pros: ['Fastest latency', 'Full control', 'No internet needed'],
  },
  {
    id: 'ssh',
    title: 'SSH Tunnel',
    description: 'Connect via reverse SSH tunnel.',
    icon: '🔐',
    pros: ['Works through firewall', 'Secure', 'Remote access'],
  }
]

export default function ConnectionStep({ selected, onSelect }) {
  return (
    <div className="step-content">
      <h2>How do you want to connect?</h2>
      <p>Choose the connection method that works best for you.</p>
      
      <div className="connection-options">
        {CONNECTION_OPTIONS.map(option => (
          <button
            key={option.id}
            className={`connection-card ${selected === option.id ? 'selected' : ''}`}
            onClick={() => onSelect(option.id)}
          >
            <span className="connection-icon">{option.icon}</span>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            
            <div className="connection-details">
              <div className="pros">
                <strong>✓ Pros:</strong>
                <ul>
                  {option.pros.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
