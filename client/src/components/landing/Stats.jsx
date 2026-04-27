import './Stats.css'

const stats = [
  { value: '2,847', label: 'Users' },
  { value: '12k+', label: 'Messages/day' },
  { value: '99.9%', label: 'Uptime' }
]

export default function Stats() {
  return (
    <section className="section">
      <div className="container">
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
