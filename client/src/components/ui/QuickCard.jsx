import { Link } from 'react-router-dom'
import './QuickCard.css'

export default function QuickCard({
  icon,
  title,
  description,
  href,
  onClick,
  disabled = false
}) {
  const content = (
    <>
      <div className="quick-card__icon">{icon}</div>
      <div className="quick-card__content">
        <h3 className="quick-card__title">{title}</h3>
        <p className="quick-card__description">{description}</p>
      </div>
    </>
  )

  const className = `quick-card ${disabled ? 'quick-card--disabled' : ''}`

  if (href && !disabled) {
    return <Link to={href} className={className}>{content}</Link>
  }
  
  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    )
  }

  return <div className={className}>{content}</div>
}