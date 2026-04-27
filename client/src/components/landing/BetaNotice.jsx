import './BetaNotice.css'

export default function BetaNotice() {
  return (
    <section className="beta-notice">
      <div className="container">
        <div className="beta-card">
          <div className="beta-icon">⚠️</div>
          <div className="beta-content">
            <h3>Beta Access</h3>
            <p>
              We're currently in beta with limited spots available. 
              Sign up now to secure your spot and get early access!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
