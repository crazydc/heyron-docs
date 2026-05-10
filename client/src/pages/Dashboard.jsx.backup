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
  const agentName = 'Ron'

  const handleFinishLaunchpad = () => {
    navigate('/onboarding')
  }

  // Demo data (would come from API)
  const containerStats = {
    id: 'heyron-' + (user?.email?.split('@')[0]?.slice(0,8) || 'newuser'),
    region: 'us-east-1',
    memory: '2.1 / 4.0 GB',
    uptime: '3d 14h',
    integrations: 8,
    lastDeploy: '2 hours ago'
  }

  const progress = {
    workspaceConnected: true,
    launchpadStarted: true,
    personalityComplete: false,
    inviteTeam: false,
    percent: 50
  }

  const recentActivity = [
    { time: '2m ago', text: 'Summarized 5 emails from inbox' },
    { time: '15m ago', text: 'Created calendar event for tomorrow' },
    { time: '1h ago', text: 'Drafted response to client inquiry' },
    { time: '2h ago', text: 'Researched topic: AI automation trends' }
  ]

  const quickActions = [
    { label: 'Settings', icon: '⚙️', path: '/account' },
    { label: 'Integrations', icon: '🔗', path: '/resources' },
    { label: 'Academy', icon: '📚', path: '/academy' },
    { label: 'Support', icon: '💬', path: '/support' }
  ]

  return (
    <Layout fullWidth>
      <div className="dashboard-new">
        {/* Header */}
        <div className="dash-header-new">
          <div className="dash-welcome">
            <h1>Welcome back, {yourName}.</h1>
            <p className="dash-status">
              <span className="status-dot online"></span>
              {agentName} is ready to work
            </p>
          </div>
          <div className="dash-user">
            <div className="dash-user-info">
              <span className="dash-user-name">{yourName}</span>
              <span className="dash-user-email">{user?.email || 'Loading...'}</span>
            </div>
            <div className="dash-avatar">
              {yourName.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* Next Step Banner */}
        {!onboardingComplete && (
          <div className="dash-next-step">
            <div className="next-step-content">
              <span className="next-step-label">Next recommended step</span>
              <h3>Finish Launchpad: Personality</h3>
            </div>
            <Button onClick={handleFinishLaunchpad}>Continue</Button>
          </div>
        )}

        {/* Stats Cards Grid */}
        <div className="dash-grid-new">
          {/* Agent Card */}
          <div className="dash-card">
            <div className="dash-card-header">
              <h2>Your Agent</h2>
              <span className="dash-card-badge online">Running</span>
            </div>
            <div className="dash-card-content">
              <div className="agent-stats">
                <div className="stat-item">
                  <span className="stat-label">Container ID</span>
                  <span className="stat-value">{containerStats.id}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Region</span>
                  <span className="stat-value">{containerStats.region}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Memory</span>
                  <span className="stat-value">{containerStats.memory}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Uptime</span>
                  <span className="stat-value">{containerStats.uptime}</span>
                </div>
              </div>
            </div>
            <div className="dash-card-footer">
              <Link to="/account" className="dash-card-link">View details →</Link>
            </div>
          </div>

          {/* Progress Card */}
          <div className="dash-card">
            <div className="dash-card-header">
              <h2>Your Progress</h2>
            </div>
            <div className="dash-card-content">
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: progress.percent + '%' }}></div>
                </div>
                <span className="progress-percent">{progress.percent}%</span>
              </div>
              <div className="milestones">
                <div className={`milestone ${progress.workspaceConnected ? 'complete' : ''}`}>
                  <span className="milestone-check">{progress.workspaceConnected ? '✓' : '○'}</span>
                  <span>Workspace connected</span>
                </div>
                <div className={`milestone ${progress.launchpadStarted ? 'complete' : ''}`}>
                  <span className="milestone-check">{progress.launchpadStarted ? '✓' : '○'}</span>
                  <span>Launchpad started</span>
                </div>
                <div className={`milestone ${progress.personalityComplete ? 'complete' : 'in-progress'}`}>
                  <span className="milestone-check">{progress.personalityComplete ? '✓' : '◐'}</span>
                  <span>Next: Personality</span>
                </div>
                <div className={`milestone ${progress.inviteTeam ? 'complete' : 'optional'}`}>
                  <span className="milestone-check">{progress.inviteTeam ? '✓' : '○'}</span>
                  <span>Invite your team (optional)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="dash-card">
            <div className="dash-card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="dash-card-content">
              <div className="quick-actions-grid">
                {quickActions.map((action, i) => (
                  <Link key={i} to={action.path} className="quick-action-btn">
                    <span className="quick-action-icon">{action.icon}</span>
                    <span className="quick-action-label">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dash-card dash-card-full">
          <div className="dash-card-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="dash-card-content">
            <div className="activity-list">
              {recentActivity.map((item, i) => (
                <div key={i} className="activity-item-new">
                  <span className="activity-time">{item.time}</span>
                  <span className="activity-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ron Companion (dismissible) */}
        {showIntro && (
          <div className="dash-companion">
            <button className="companion-dismiss" onClick={() => setShowIntro(false)}>×</button>
            <div className="companion-avatar">
              <HeadMascot size={32} />
            </div>
            <div className="companion-content">
              <h4>Hey, I'm Ron.</h4>
              <p>I watch over your agent. Click me anytime for logs, restarts, or help.</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowIntro(false)}>Got it</Button>
          </div>
        )}
      </div>
    </Layout>
  )
}