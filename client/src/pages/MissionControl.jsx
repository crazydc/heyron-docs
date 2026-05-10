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
import styles from './MissionControl.module.css'

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
    <div className={styles.container}>
      <NeuronField dotCount={50} animationSpeed={1.2} />
      <SpaceScene shipPosition={{ x: 85, y: 25 }} raccoonPosition={{ x: 15, y: 65 }} />

      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Mission Control</h1>
            <p className={styles.subtitle}>Your agent is running smoothly</p>
          </div>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            <span>All systems operational</span>
          </div>
        </header>

        <section className={styles.stats}>
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </section>

        <section className={styles.actions}>
          <h2 className={styles.sectionTitle}>Quick Actions</h2>
          <div className={styles.quickGrid}>
            {quickActions.map((action, i) => (
              <QuickCard key={i} {...action} />
            ))}
          </div>
        </section>

        <div className={styles.bottom}>
          <Panel className={styles.activityPanel}>
            <h3 className={styles.activityTitle}>Recent Activity</h3>
            <div className={styles.activityList}>
              {recentActivity.map((item, i) => (
                <div key={i} className={styles.activityItem}>
                  <span className={styles.activityTime}>{item.time}</span>
                  <span className={styles.activityAction}>{item.action}</span>
                  <span className={styles.activityDetail}>{item.detail}</span>
                </div>
              ))}
            </div>
          </Panel>

          <div className={styles.ronSection}>
            <RonPanel 
              message="Everything looks good! Your agent has processed 47 tasks today."
              showDumpster={true}
              onDumpsterClick={() => setShowDumpsterModal(true)}
            />
          </div>
        </div>
      </div>

      <FooterNav items={[
        { icon: '🏠', label: 'Home', href: '/mission-control' },
        { icon: '📊', label: 'Stats', href: '/mission-control' },
        { icon: '⚙️', label: 'Settings', href: '/account' },
        { icon: '💬', label: 'Help', href: '/support' }
      ]} />
    </div>
  )
}