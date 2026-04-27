import './SocialProof.css'

export default function SocialProof() {
  const avatars = ['JD', 'MK', 'AS', 'RL', 'TW']
  
  return (
    <section className="section">
      <div className="container">
        <div className="social-proof">
          <div className="avatars">
            {avatars.map((initials, i) => (
              <div key={i} className="avatar">{initials}</div>
            ))}
          </div>
          <span>Join 2,800+ others already using Heyron</span>
        </div>
      </div>
    </section>
  )
}
