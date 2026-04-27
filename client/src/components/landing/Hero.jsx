import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          <span className="hero-dot"></span>
          Now live
        </div>
        
        <h1>
          Meet your <span className="highlight">AI Agent</span>
        </h1>
        
        <p className="hero-subtitle">
          Your personal AI assistant that lives on your own <strong>server</strong>. 
          Secure, private, and always online.
        </p>
        
        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="#how-it-works" className="btn btn-secondary">
            See how it works
          </Link>
        </div>
        
        <p className="hero-note">
          No credit card required
        </p>
      </div>
    </section>
  )
}
