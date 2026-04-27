import './Checkbox.css'

export default function Checkbox({ label, name, checked, onChange, error }) {
  return (
    <div className={`checkbox-group ${error ? 'checkbox-error' : ''}`}>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="checkbox-custom"></span>
        <span className="checkbox-text">{label}</span>
      </label>
    </div>
  )
}
