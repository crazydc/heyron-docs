import './OnboardingSteps.css'

export default function WelcomeStep({ user }) {
  return (
    <div className="step-content">
      <div className="step-icon">👋</div>
      <h1>Welcome{user?.fullName ? `, ${user.fullName.split(' ')[0]}` : ''}!</h1>
      <p>Let's get your AI agent set up. It only takes a minute.</p>
      
      <div className="what-to-expect">
        <h3>What to expect:</h3>
        <ul>
          <li>Choose a server location</li>
          <li>Set up your connection</li>
          <li>Configure your SSH key</li>
        </ul>
      </div>
    </div>
  )
}
