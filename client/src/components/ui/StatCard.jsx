import './StatCard.css'

export default function StatCard({
  title,
  value,
  trend,
  sparklineData,
  variant = 'default'
}) {
  const trendPositive = trend > 0
  const trendColor = trendPositive ? 'var(--success)' : 'var(--error)'

  return (
    <div className={`stat-card stat-card--${variant}`}>
      <div className="stat-card__header">
        <span className="stat-card__title">{title}</span>
        {trend !== undefined && (
          <span className="stat-card__trend" style={{ color: trendColor }}>
            {trendPositive ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="stat-card__value">{value}</div>
      {sparklineData && (
        <div className="stat-card__sparkline">
          <svg viewBox="0 0 100 30" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              points={sparklineData.map((v, i) => `${(i / (sparklineData.length - 1)) * 100},${30 - (v / 100) * 30}`).join(' ')}
            />
          </svg>
        </div>
      )}
    </div>
  )
}