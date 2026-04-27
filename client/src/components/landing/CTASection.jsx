import { Link } from 'react-router-dom'
import './CTASection.css'

export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <h2>Ready to meet your AI Agent?</h2>
        <p>Get started in minutes. No setup required.</p>
        <Link to="/signin" className="btn btn-primary btn-lg">
          Get Started Free
        </Link>
      </div>
    </section>
  )
}
