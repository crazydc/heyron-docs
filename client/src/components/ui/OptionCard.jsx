import Pill from './Pill'
import './OptionCard.css'

export default function OptionCard({
  title,
  description,
  selected = false,
  onClick,
  tag
}) {
  return (
    <button
      type="button"
      className={`option-card ${selected ? 'option-card--selected' : ''}`}
      onClick={onClick}
    >
      <div className="option-card__content">
        <div className="option-card__header">
          <h4 className="option-card__title">{title}</h4>
          {tag && <Pill label={tag} variant="accent" />}
        </div>
        <p className="option-card__description">{description}</p>
      </div>
      <div className="option-card__radio">
        <div className={`option-card__radio-inner ${selected ? 'option-card__radio-inner--checked' : ''}`} />
      </div>
    </button>
  )
}