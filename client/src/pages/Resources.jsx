import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import './Resources.css'

export default function Resources() {
  const guides = [
    { title: 'Getting Started', desc: 'Set up your first AI agent in minutes', icon: '🚀', path: '/onboarding' },
    { title: 'Connecting Tools', desc: 'Learn how to integrate email, calendar, and more', icon: '🔗', path: '/account' },
    { title: 'Customizing Your Agent', desc: 'Personality, voice, and behavior settings', icon: '⚙️', path: '/account' },
    { title: 'API Keys Guide', desc: 'Managing and securing your API credentials', icon: '🔑', path: '/account' },
  ]

  const docs = [
    { title: 'REST API Reference', desc: 'Full API documentation', path: '/academy' },
    { title: 'Webhooks', desc: 'Event notifications', path: '/support' },
    { title: 'SDKs & Libraries', desc: 'Code examples in Python, JS, and more', path: '/academy' },
    { title: 'Integration Guide', desc: 'Third-party integrations', path: '/support' },
  ]

  return (
    <Layout>
      <div className="resources-page">
        <div className="resources-container">
          <h1>Resources</h1>
          <p className="resources-intro">Everything you need to get the most out of Heyron.</p>

          <section className="resources-section">
            <h2>Quick Start Guides</h2>
            <div className="guides-grid">
              {guides.map((guide, i) => (
                <Link key={i} to={guide.path} className="guide-card">
                  <span className="guide-icon">{guide.icon}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="resources-section">
            <h2>Documentation</h2>
            <div className="docs-list">
              {docs.map((doc, i) => (
                <Link key={i} to={doc.path} className="doc-item">
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="resources-section">
            <h2>FAQ</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How does billing work?</h3>
                <p>Billing is monthly at $29/month. You can cancel anytime from your Account page.</p>
              </div>
              <div className="faq-item">
                <h3>Can I use my own API keys?</h3>
                <p>Yes! You can bring your own OpenAI, Anthropic, or other provider keys.</p>
              </div>
              <div className="faq-item">
                <h3>Is my data private?</h3>
                <p>Yes. Your agent runs in an isolated container. We never read your data unless you ask for support.</p>
              </div>
              <div className="faq-item">
                <h3>What happens when I cancel?</h3>
                <p>You keep access until the end of your paid period. After that, you can still use the free tier.</p>
              </div>
            </div>
          </section>

          <section className="resources-section">
            <h2>Need More Help?</h2>
            <div className="cta-buttons">
              <Link to="/support" className="btn btn-primary">Contact Support</Link>
              <Link to="/academy" className="btn btn-secondary">Browse Academy</Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}