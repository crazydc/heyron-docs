import { useState } from 'react'
import { Link } from 'react-router-dom'
import SpaceScene from '../components/hero/SpaceScene'
import NeuronField from '../components/hero/NeuronField'
import StatCard from '../components/ui/StatCard'
import QuickCard from '../components/ui/QuickCard'
import RonPanel from '../components/ui/RonPanel'
import FooterNav from '../components/layout/FooterNav'
import Panel from '../components/ui/Panel'
import Button from '../components/ui/Button'
import './MissionControl.css'

export default function MissionControl() {
  const [showDumpsterModal, setShowDumpsterModal] = useState(false)

  const stats = [
    { title: 'Uptime', value: '99.9%', trend: 0.1 },
    { title: 'Tasks Completed', value: '847', trend: 12 },
    { title: 'Active Hours', value: '14.2h', trend: -2 },
    { title: 'Errors', value: '3', trend: -25 }
  ]

  const quickActions = [
    { icon: '📧', title: 'Check Emails', description: 'Review inbox for important messages', href: '/support' },
    { icon: '📅', title: 'Calendar', description: 'View upcoming events', href: '/support' },
    { icon: '⚙️', title: 'Settings', description: 'Configure your agent', href: '/account' },
    { icon: '📊', title: 'Reports', description: 'View activity reports', href: '/resources' }
  ]

  const recentActivity = [
    { time: '2m ago', action: 'Email processed', detail: '5 emails summarized' },
    { time: '15m ago', action: 'Calendar updated', detail: 'Meeting scheduled for tomorrow' },
    { time: '1h ago', action: 'Task completed', detail: 'Report generated' },
    { time: '3h ago', action: 'Alert handled', detail: 'System check passed' }
  ]

  return (
    <div className="mission-control">
      <NeuronField dotCount={50} animationSpeed={1.2} />
      <SpaceScene shipPosition={{ x: 85, y: 25 }} raccoonPosition={{ x: 15, y: 65 }} />

      <div className="mission-control__content">
        {/* Header */}
        <header className="mission-control__header">
          <div>
            <h1 className="mission-control__title">Mission Control</h1>
            <p className="mission-control__subtitle">Your agent is running smoothly</p>
          </div>
          <div className="mission-control__status">
            <span className="status-indicator status-indicator--online" />
            <span>All systems operational</span>
          </div>
        </header>

        {/* Stats */}
        <section className="mission-control__stats">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </section>

        {/* Quick Actions */}
        <section className="mission-control__actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action, i) => (
              <QuickCard key={i} {...action} />
            ))}
          </div>
        </section>

        {/* Activity & Ron Panel */}
        <div className="mission-control__bottom">
          {/* Recent Activity */}
          <Panel className="activity-panel">
            <h3 className="activity-panel__title">Recent Activity</h3>
            <div className="activity-list">
              {recentActivity.map((item, i) => (
                <div key={i} className="activity-item">
                  <span className="activity-item__time">{item.time}</span>
                  <span className="activity-item__action">{item.action}</span>
                  <span className="activity-item__detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Ron Panel */}
          <div className="ron-section">
            <RonPanel 
              message="Everything looks good! Your agent has processed 47 tasks today."
              showDumpster={true}
              onDumpsterClick={() => setShowDumpsterModal(true)}
            />
          </div>
        </div>
      </div>

      {/* Footer Nav for Mobile */}
      <FooterNav items={[
        { icon: '🏠', label: 'Home', href: '/mission-control' },
        { icon: '📊', label: 'Stats', href: '/mission-control' },
        { icon: '⚙️', label: 'Settings', href: '/account' },
        { icon: '💬', label: 'Help', href: '/support' }
      ]} />
    </div>
  )
}