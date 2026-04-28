import Layout from '../components/layout/Layout'
import './About.css'

export default function About() {
  return (
    <Layout>
      <div className="about-page">
        <div className="about-container">
          <h1>About Heyron</h1>
          <p className="about-intro">We're building the future of AI assistants — one that works for you, not the other way around.</p>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe AI agents should be private, personal, and powerful. Unlike cloud AI services that read your data, 
              Heyron runs in your own isolated container. Your conversations, files, and work stay yours.
            </p>
            <p>
              Our goal is to make AI accessible to everyone — from small businesses to enterprises — without 
              sacrificing privacy or control.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Heyron started in early 2026 when we realized most "personal AI" products were really just 
              cloud services in disguise. We wanted something different.
            </p>
            <p>
              So we built Heyron — a private AI agent that runs in your own virtual desktop, connects to your 
              tools, and learns your preferences. No data collection, no hidden training, no compromises.
            </p>
          </section>

          <section className="about-section">
            <h2>The Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-avatar">👨‍💻</div>
                <h3>Robby</h3>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <div className="team-avatar">👩‍💼</div>
                <h3>Dale</h3>
                <p>Co-founder</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Get in Touch</h2>
            <p>Questions? Want to chat? Here's where to find us:</p>
            <div className="contact-list">
              <a href="mailto:robby@heyron.ai" className="contact-item">📧 robby@heyron.ai</a>
              <a href="https://discord.gg/heyron" className="contact-item">💬 Join our Discord</a>
              <a href="https://twitter.com/heyronai" className="contact-item">🐦 @heyronai</a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}