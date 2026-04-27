import './Capabilities.css'

const capabilities = [
  {
    emoji: '💬',
    title: 'Natural Chat',
    description: 'Converse naturally with AI that understands context'
  },
  {
    emoji: '🔒',
    title: 'Private & Secure',
    description: 'Your data stays on your server, never trains our models'
  },
  {
    emoji: '⚡',
    title: 'Always Online',
    description: '24/7 availability with instant responses'
  },
  {
    emoji: '🎯',
    title: 'Customizable',
    description: 'Fine-tune behavior to match your needs'
  }
]

export default function Capabilities() {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <h2>What it can do</h2>
        
        <div className="capabilities-grid">
          {capabilities.map(cap => (
            <div key={cap.title} className="capability-card">
              <div className="capability-emoji">{cap.emoji}</div>
              <h4>{cap.title}</h4>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
