import { useState } from 'react'
import './Input.css'

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  hint,
  error,
  disabled = false,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${disabled ? 'input-group--disabled' : ''}`}>
      {label && <label className="input-group__label">{label}</label>}
      
      <div className="input-group__wrapper">
        <input
          type={inputType}
          className="input-group__input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        
        {isPassword && (
          <button
            type="button"
            className="input-group__toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? '👁' : '👁‍🗨'}
          </button>
        )}
      </div>
      
      {(hint || error) && (
        <span className={`input-group__hint ${error ? 'input-group__hint--error' : ''}`}>
          {error || hint}
        </span>
      )}
    </div>
  )
}

export function Textarea({
  label,
  placeholder,
  value,
  onChange,
  hint,
  error,
  disabled = false,
  rows = 4,
  ...props
}) {
  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${disabled ? 'input-group--disabled' : ''}`}>
      {label && <label className="input-group__label">{label}</label>}
      <textarea
        className="input-group__input input-group__textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        {...props}
      />
      {(hint || error) && (
        <span className={`input-group__hint ${error ? 'input-group__hint--error' : ''}`}>
          {error || hint}
        </span>
      )}
    </div>
  )
}

export function Select({
  label,
  options = [],
  value,
  onChange,
  hint,
  error,
  disabled = false,
  ...props
}) {
  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${disabled ? 'input-group--disabled' : ''}`}>
      {label && <label className="input-group__label">{label}</label>}
      <select
        className="input-group__input input-group__select"
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {(hint || error) && (
        <span className={`input-group__hint ${error ? 'input-group__hint--error' : ''}`}>
          {error || hint}
        </span>
      )}
    </div>
  )
}