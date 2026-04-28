import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Alert from '../components/ui/Alert'
import './Support.css'

export default function Support() {
  const { isAuthenticated, user } = useAppSelector(state => state.auth)
  const [expanded, setExpanded] = useState(true)
  const [ticketSubmitted, setTicketSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    email: user?.email || '',
    category: '',
    agentName: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just show success - in production, this would submit to an API
    setTicketSubmitted(true)
  }

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
                  </a>
                </p>
              </div>
            </div>
          )}
          
          {/* Submit Ticket Section */}
          <div className="ticket-section">
            <div className="ticket-header">
              <span className="ticket-emoji">🦝</span>
              <h2>Heyron Support</h2>
              <p>Open a ticket, keep your ticket number, and add updates here without falling into an email black hole.</p>
            </div>
            
            {ticketSubmitted ? (
              <Alert type="success">
                Ticket submitted successfully! We'll get back to you soon.
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="ticket-form">
                <div className="ticket-row">
                  <div className="field">
                    <label>Email address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="input"
                    >
                      <option value="">Choose one</option>
                      <option value="billing">Billing</option>
                      <option value="connection">Connection</option>
                      <option value="bug">Bug</option>
                      <option value="usage">Usage question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="field">
                  <label>Agent name (optional)</label>
                  <Input
                    type="text"
                    name="agentName"
                    value={formData.agentName}
                    onChange={handleChange}
                    placeholder="If you know which agent this is about"
                  />
                </div>
                
                <div className="field">
                  <label>What happened? *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us what broke, what you expected, what device/channel you're using, and any error text you saw."
                    required
                    rows={7}
                    className="input textarea"
                  />
                </div>
                
                <Button type="submit" fullWidth>
                  Submit Ticket
                </Button>
              </form>
            )}
          </div>
          
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
        </div>
      </div>
    </Layout>
  )
}