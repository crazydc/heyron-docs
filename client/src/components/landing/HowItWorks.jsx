import './HowItWorks.css'

const steps = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create your account in seconds. No credit card required.'
  },
  {
    number: 2,
    title: 'Choose Your Server',
    description: 'Pick a server location closest to you for optimal performance.'
  },
  {
    number: 3,
    title: 'Connect & Go',
    description: 'Your AI agent comes pre-configured. Just start chatting!'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-secondary">
      <div className="container">
        <h2>How it works</h2>
        
        <div className="steps">
          {steps.map(step => (
            <div key={step.number} className="step">
              <div className="step-num">{step.number}</div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
