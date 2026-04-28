import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import Layout from '../components/layout/Layout'
import { Mascot, HeadMascot } from '../components/ui/Mascot'
import Button from '../components/ui/Button'
import './Dashboard.css'

export default function Dashboard() {
  const { user, onboardingComplete } = useAppSelector(state => state.auth)
  const [showIntro, setShowIntro] = useState(true)
  const navigate = useNavigate()

  const yourName = user?.fullName || 'friend'
  const agentName = 'Ron' // Could come from onboarding data

  const handleFinishLaunchpad = () => {
    navigate('/onboarding')
  }

  return (
    <Layout fullWidth>
      <div className="dashboard">
        <div className="panel">
          <div className="dash-header">
            <div className="dash-greeting">
              <h2>Hey, {yourName}.</h2>
              <p>{agentName} is online and ready.</p>
            </div>
            <div className="dash-actions">
              {!onboardingComplete && (
                <Button variant="ghost" size="sm" onClick={handleFinishLaunchpad}>
                  Finish Launchpad
                </Button>
              )}
              <Button variant="ghost" size="sm">
                Help
              </Button>
              <HeadMascot size={36} />
            </div>
          </div>

          <div className="dash-grid">
            <div className="metric">
              <p className="metric-label">Tasks today</p>
              <p className="metric-value">0</p>
              <p className="metric-trend">Just started</p>
            </div>
            <div className="metric">
              <p className="metric-label">Avg response</p>
              <p className="metric-value">--</p>
              <p className="metric-trend">No activity yet</p>
            </div>
            <div className="metric">
              <p className="metric-label">Connected tools</p>
              <p className="metric-value">0</p>
              <p className="metric-trend empty">Add some</p>
            </div>
          </div>

          <div className="container-card">
            <div className="container-head">
              <span className="container-title">
                <HeadMascot size={20} /> Your container
              </span>
              <span className="container-status">Running</span>
            </div>
            <div className="container-meta">
              <span className="container-meta-label">ID</span>
              <span className="container-meta-value">heyron-{user?.email?.split('@')[0]?.slice(0,8) || 'new'}</span>
              <span className="container-meta-label">Region</span>
              <span className="container-meta-value">us-east-1</span>
              <span className="container-meta-label">Memory</span>
              <span className="container-meta-value">0.0 / 4.0 GB</span>
              <span className="container-meta-label">Uptime</span>
              <span className="container-meta-value">Just started</span>
              <span className="container-meta-label">Integrations</span>
              <span className="container-meta-value">0</span>
              <span className="container-meta-label">Last deploy</span>
              <span className="container-meta-value">Now</span>
            </div>
          </div>

          <div className="discord-card">
            <div className="integration-icon">DC</div>
            <div className="discord-card-info">
              <p className="discord-card-title">Join the Heyron Discord</p>
              <p className="discord-card-desc">Community help, feature previews, and a place to ask the team things.</p>
            </div>
            <a href="https://discord.gg/heyron" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Join server</a>
          </div>

          <div className="dash-section">
            <h3>Recent activity</h3>
            <div className="activity">
              <div className="activity-empty">No activity yet. Start a conversation!</div>
            </div>
          </div>
        </div>

        {showIntro && (
          <div className="ron-intro" role="dialog">
            <button className="ron-intro-dismiss" onClick={() => setShowIntro(false)} aria-label="Dismiss">×</button>
            <div className="ron-intro-row">
              <HeadMascot size={36} />
              <div className="ron-intro-text">
                <p className="ron-intro-title">Hey, I'm Ron.</p>
                <p className="ron-intro-body">I watch over {agentName}'s container. Click me anytime, I pull logs, restart things, open tickets, or just answer questions.</p>
                <div className="ron-intro-cta-row">
                  <button className="btn btn-ghost" onClick={() => setShowIntro(false)}>Got it</button>
                  <button className="btn btn-primary">Say hi</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}