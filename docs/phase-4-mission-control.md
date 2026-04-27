# Phase 4: Mission Control (Dashboard)

**Objective:** Create the main user dashboard showing agent status and controls.

> **Design Vision:** Mission Control should be the hub — cards for each section, guided path not buffet.

---

## Overview

Based on mockheyron.github.io/. The dashboard shows:
- Agent status cards
- Quick stats
- Agent controls
- Settings access

### Design Dashboard Structure

| Card | Description | Link/Action |
|------|-------------|--------------|
| 🚀 Your Agent | Your AI agent status | Launchpad (new) / OpenClaw (returning) |
| ⚡️ Quickstart | Getting started guide | External (GitHub) |
| 📚 Tutorials | Learning resources | External (GitHub) |
| 🗂 Filing Cabinet | Your documents | Internal page |
| 🛠 Fix Agent | Diagnostics/tools | Internal page |
| 💬 Get Help | Support options | External (Discord) |
| ⚙️ Account | User settings | Account page |

---

## Step 1: Create MissionControl Page Structure

### src/pages/MissionControl.jsx

```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import Layout from '../components/layout/Layout'
import ServerCard from '../components/dashboard/ServerCard'
import StatsCard from '../components/ui/StatsCard'
import TabGroup from '../components/ui/TabGroup'
import Button from '../components/ui/Button'
import './MissionControl.css'

// Mock data - replace with API calls
const MOCK_SERVERS = [
  { id: 'c1', name: 'c1', status: 'online', uptime: '2h 34m', lastPing: 'Just now', cpu: 12, memory: 34 },
  { id: 'c2', name: 'c2', status: 'loading', uptime: '-', lastPing: '10s ago', cpu: 0, memory: 0 },
  { id: 'c3', name: 'c3', status: 'offline', uptime: '-', lastPing: '5m ago', cpu: 0, memory: 0 },
]

export default function MissionControl() {
  const { user } = useAppSelector(state => state.auth)
  const [servers, setServers] = useState(MOCK_SERVERS)
  const [activeTab, setActiveTab] = useState('overview')

  const onlineCount = servers.filter(s => s.status === 'online').length
  const offlineCount = servers.filter(s => s.status === 'offline').length

  return (
    <Layout>
      <div className="mission-control">
        <header className="dashboard-header">
          <div>
            <h1>Mission Control</h1>
            <p>Manage your AI agents</p>
          </div>
          <div className="header-actions">
            <Button variant="secondary">Add Server</Button>
            <Link to="/account">
              <img 
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.fullName || 'User'}`} 
                alt="Profile" 
                className="profile-avatar"
              />
            </Link>
          </div>
        </header>

        <div className="dashboard-stats">
          <StatsCard value={onlineCount} label="Online" variant="success" />
          <StatsCard value={offlineCount} label="Offline" variant="error" />
          <StatsCard value={servers.length} label="Total" />
        </div>

        <TabGroup
          tabs={[
            { id: 'overview', label: 'Overview' },
            { id: 'activity', label: 'Activity' },
            { id: 'settings', label: 'Settings' }
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        >
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="server-grid">
                {servers.map(server => (
                  <ServerCard key={server.id} server={server} />
                ))}
                
                {servers.length === 0 && (
                  <div className="empty-state">
                    <p>No servers yet</p>
                    <Button>Add Your First Server</Button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div className="activity-feed">
                <p>Recent activity will appear here...</p>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="dashboard-settings">
                <p>Dashboard settings...</p>
              </div>
            )}
          </div>
        </TabGroup>
      </div>
    </Layout>
  )
}
```

---

## Step 2: ServerCard Component

### src/components/dashboard/ServerCard.jsx

```jsx
import './ServerCard.css'

export default function ServerCard({ server }) {
  const statusColors = {
    online: 'success',
    loading: 'warning',
    offline: 'error'
  }

  return (
    <div className={`server-card ${server.status}`}>
      <div className="server-card-header">
        <span className={`status-dot ${statusColors[server.status]}`}></span>
        <h3>{server.name}</h3>
        <span className={`status-badge ${statusColors[server.status]}`}>
          {server.status}
        </span>
      </div>
      
      <div className="server-stats">
        <div className="stat">
          <span className="stat-label">Uptime</span>
          <span className="stat-value">{server.uptime}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Last Ping</span>
          <span className="stat-value">{server.lastPing}</span>
        </div>
      </div>
      
      {server.status === 'online' && (
        <div className="resource-bars">
          <div className="resource-bar">
            <span>CPU</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${server.cpu}%` }}></div>
            </div>
            <span>{server.cpu}%</span>
          </div>
          <div className="resource-bar">
            <span>RAM</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${server.memory}%` }}></div>
            </div>
            <span>{server.memory}%</span>
          </div>
        </div>
      )}
      
      <div className="server-actions">
        <button className="action-btn" title="Restart">↻</button>
        <button className="action-btn" title="Settings">⚙</button>
        <button className="action-btn" title="Chat">💬</button>
      </div>
    </div>
  )
}
```

### src/components/dashboard/ServerCard.css

```css
.server-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 20px;
  transition: all 0.2s;
}

.server-card:hover {
  border-color: var(--text-muted);
}

.server-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.success { background: var(--success); }
.status-dot.warning { 
  background: var(--warning);
  animation: pulse 1.5s infinite;
}
.status-dot.error { background: var(--error); }

.server-card-header h3 {
  font-size: 16px;
  font-weight: 600;
  flex: 1;
}

.status-badge {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 4px;
}

.status-badge.success {
  background: rgba(74, 222, 128, 0.15);
  color: var(--success);
}

.status-badge.warning {
  background: rgba(234, 179, 8, 0.15);
  color: var(--warning);
}

.status-badge.error {
  background: rgba(248, 113, 113, 0.15);
  color: var(--error);
}

.server-stats {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}

.server-stats .stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.server-stats .stat-label {
  font-size: 11px;
  color: var(--text-muted);
}

.server-stats .stat-value {
  font-size: 14px;
  font-weight: 500;
}

.resource-bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.resource-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.resource-bar > span:first-child {
  width: 32px;
  color: var(--text-muted);
}

.resource-bar > span:last-child {
  width: 32px;
  text-align: right;
  color: var(--text-secondary);
}

.bar-track {
  flex: 1;
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.server-actions {
  display: flex;
  gap: 8px;
  border-top: 1px solid var(--border);
  padding-top: 12px;
}

.action-btn {
  flex: 1;
  padding: 8px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background: var(--bg-card);
  color: var(--accent);
  border-color: var(--accent);
}
```

---

## Step 3: Supporting Components

### StatsCard Variant

```jsx
// Update to support variants
// src/components/ui/StatsCard.jsx

export default function StatsCard({ value, label, variant = 'default' }) {
  return (
    <div className={`stats-card stats-card-${variant}`}>
      <div className="stats-value">{value}</div>
      <div className="stats-label">{label}</div>
    </div>
  )
}
```

### TabGroup Component

```jsx
// src/components/ui/TabGroup.jsx
import './TabGroup.css'

export default function TabGroup({ tabs, activeTab, onChange, children }) {
  return (
    <div className="tab-group">
      <div className="tab-list">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-panel">
        {children}
      </div>
    </div>
  )
}
```

### TabGroup.css

```css
.tab-group {
  margin-top: 24px;
}

.tab-list {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 24px;
}

.tab {
  padding: 12px 20px;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.tab:hover {
  color: var(--text-primary);
}

.tab.active {
  color: var(--accent);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
}

.tab-panel {
  min-height: 300px;
}
```

---

## Step 4: MissionControl CSS

### src/pages/MissionControl.css

```css
.mission-control {
  padding: var(--space-lg) 0;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.dashboard-header h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
}

.dashboard-header p {
  color: var(--text-secondary);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--border);
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.server-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 64px;
  background: var(--bg-card);
  border: 1px dashed var(--border);
  border-radius: var(--radius-md);
}

.empty-state p {
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.activity-feed {
  color: var(--text-secondary);
  text-align: center;
  padding: 48px;
}
```

---

## Checklist

- [ ] Create MissionControl page
- [ ] Create ServerCard component
- [ ] Create StatsCard with variants
- [ ] Create TabGroup component
- [ ] Add header with profile
- [ ] Add server grid layout
- [ ] Add empty state
- [ ] Add API integration (placeholder)
- [ ] Test responsive layout

---

## Estimated Time

- **Development:** 2-3 hours
- **Testing:** 30 minutes