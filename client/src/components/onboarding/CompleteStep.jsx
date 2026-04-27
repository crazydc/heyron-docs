import './OnboardingSteps.css'

export default function CompleteStep({ config }) {
  return (
    <div className="step-content complete-step">
      <div className="complete-icon">🎉</div>
      <h2>You're all set!</h2>
      <p>Your AI agent is being provisioned.</p>
      
      <div className="summary-card">
        <h3>Configuration Summary</h3>
        <dl>
          <dt>Server</dt>
          <dd>{config.serverName || 'Not selected'}</dd>
          
          <dt>Connection</dt>
          <dd>{config.connectionType || 'Not selected'}</dd>
          
          <dt>SSH Key</dt>
          <dd>{config.sshKey ? 'Configured' : 'Not set'}</dd>
        </dl>
      </div>
      
      <div className="next-steps">
        <h4>What's next?</h4>
        <ol>
          <li>Check your email for confirmation</li>
          <li>Your agent will be online in 5-10 minutes</li>
          <li>Visit Mission Control to start chatting</li>
        </ol>
      </div>
    </div>
  )
}
