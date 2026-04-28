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
              <Button variant="ghost" size="sm" onClick={() => navigate('/support')}>
                Help
              </Button>
              <HeadMascot size={36} />
            </div>
          </div>

          <div className="dash-grid">
            <div className="metric">
              <p className="metric-label">Tasks today</p>
              <p className="metric-value">12</p>
              <p className="metric-trend">+3 from yesterday</p>
            </div>
            <div className="metric">
              <p className="metric-label">Avg response</p>
              <p className="metric-value">2.4s</p>
              <p className="metric-trend">Great speed</p>
            </div>
            <div className="metric">
              <p className="metric-label">Connected tools</p>
              <p className="metric-value">8</p>
              <p className="metric-trend">Active</p>
            </div>
          </div>

          <div className="container-card">
            <div className="container-head">
              <span className="container-title">
                <HeadMascot size={20} /> Your container
              </span>
              <span className="container-status status-online">Running</span>
            </div>
            <div className="container-meta">
              <span className="container-meta-label">ID</span>
              <span className="container-meta-value">heyron-{user?.email?.split('@')[0]?.slice(0,8) || 'newuser'}</span>
              <span className="container-meta-label">Region</span>
              <span className="container-meta-value">us-east-1</span>
              <span className="container-meta-label">Memory</span>
              <span className="container-meta-value">2.1 / 4.0 GB</span>
              <span className="container-meta-label">Uptime</span>
              <span className="container-meta-value">3d 14h</span>
              <span className="container-meta-label">Integrations</span>
              <span className="container-meta-value">8</span>
              <span className="container-meta-label">Last deploy</span>
              <span className="container-meta-value">2 hours ago</span>
            </div>
          </div>

          <div className="dash-section">
            <h3>Recent activity</h3>
            <div className="activity">
              <div className="activity-item">
                <span className="activity-time">2m ago</span>
                <span className="activity-text">Summarized 5 emails from inbox</span>
              </div>
              <div className="activity-item">
                <span className="activity-time">15m ago</span>
                <span className="activity-text">Created calendar event for tomorrow</span>
              </div>
              <div className="activity-item">
                <span className="activity-time">1h ago</span>
                <span className="activity-text">Drafted response to client inquiry</span>
              </div>
              <div className="activity-item">
                <span className="activity-time">2h ago</span>
                <span className="activity-text">Researched topic: AI automation trends</span>
              </div>
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