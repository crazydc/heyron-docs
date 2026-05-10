import './Toggle.css'

export default function Toggle({
  checked = false,
  onChange,
  label,
  description,
  disabled = false
}) {
  return (
    <label className={`toggle ${disabled ? 'toggle--disabled' : ''}`}>
      <div className="toggle__content">
        {label && <span className="toggle__label">{label}</span>}
        {description && <span className="toggle__description">{description}</span>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`toggle__switch ${checked ? 'toggle__switch--on' : ''}`}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
      >
        <span className="toggle__knob" />
      </button>
    </label>
  )
}