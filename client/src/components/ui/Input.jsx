import './Input.css'

export default function Input({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  error,
  hint,
  value,
  onChange,
}) {
  return (
    <div className={`input-group ${error ? 'input-error' : ''}`}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {(hint || error) && (
        <span className={error ? 'input-hint error' : 'input-hint'}>
          {error || hint}
        </span>
      )}
    </div>
  )
}
