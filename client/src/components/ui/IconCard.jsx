import { Link } from 'react-router-dom'
import Button from './Button'
import './IconCard.css'

export default function IconCard({
  icon,
  title,
  description,
  buttonText,
  buttonHref
}) {
  return (
    <div className="icon-card">
      <div className="icon-card__icon">{icon}</div>
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__description">{description}</p>
      {buttonText && buttonHref && (
        <Link to={buttonHref} className="icon-card__button">
          <Button variant="ghost" size="sm">{buttonText}</Button>
        </Link>
      )}
    </div>
  )
}