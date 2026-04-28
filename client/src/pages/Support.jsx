import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import './Support.css'

export default function Support() {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const [expanded, setExpanded] = useState(true)

  return (
    <Layout>
      <div className="support-page">
        <div className="support-container">
          <h1>Support</h1>
          
          {isAuthenticated && expanded && (
            <div className="support-tools">
              <button 
                className="tools-toggle"
                onClick={() => setExpanded(!expanded)}
              >
                <span className="tools-icon">🛠</span>
                <span>Agent not working? Self-service tools</span>
                <span className="tools-arrow">{expanded ? '▲' : '▼'}</span>
              </button>
              
              <div className="tools-content">
                <div className="status-card">
                  <div className="status-row">
                    <span className="status-label">Status</span>
                    <span className="status-value online">● Online</span>
                  </div>
                  <div className="status-row">
                    <span className="status-label">Uptime</span>
                    <span className="status-value">10h 44m</span>
                  </div>
                </div>
                
                <div className="tools-grid">
                  <button className="tool-btn">
                    <span className="tool-icon">🔄</span>
                    <span className="tool-label">Restart Agent</span>
                  </button>
                  <button className="tool-btn">
                    <span className="tool-icon">🔑</span>
                    <span className="tool-label">Reset API Key</span>
                  </button>
                  <button className="tool-btn">
                    <span className="tool-icon">🔧</span>
                    <span className="tool-label">Fix Connection</span>
                  </button>
                  <button className="tool-btn">
                    <span className="tool-icon">🧹</span>
                    <span className="tool-label">Clear Chat</span>
                  </button>
                </div>
                
                <p className="support-contact">
                  Still stuck?{' '}
                  <a href="https://discord.gg/ZYZsDNXTjW" target="_blank" rel="noopener" className="link">
                    Ask in Discord
                  </a>{' '}
                  or{' '}
                  <a href="/support" className="link">
                    submit a ticket
                  </a>.
                </p>
              </div>
            </div>
          )}
          
          <div className="help-section">
            <h2>Need more help?</h2>
            <p>
              Check out our{' '}
              <a href="https://docs.heyron.ai" target="_blank" rel="noopener" className="link">
                documentation
              </a>{' '}
              or join our{' '}
              <a href="https://discord.gg/ZYZsDNXTjW" target="_blank" rel="noopener" className="link">
                Discord community
              </a>{' '}
              for real-time support.
            </p>
          </div>
          
          <div className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item">
              <h3>How do I reset my API key?</h3>
              <p>Go to your dashboard settings and click "Reset API Key" under the self-service tools.</p>
            </div>
            <div className="faq-item">
              <h3>Why isn't my agent responding?</h3>
              <p>Try restarting the agent using the self-service tools above. If the issue persists, check your API key status.</p>
            </div>
            <div className="faq-item">
              <h3>How do I cancel my subscription?</h3>
              <p>Visit the Account page and click "Manage or cancel subscription" to access Stripe billing.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}