import './Pill.css'

export default function Pill({ label, variant = 'default' }) {
  return (
    <span className={`pill pill--${variant}`}>
      {label}
    </span>
  )
}