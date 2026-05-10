import './Panel.css'

export default function Panel({ children, className = '', variant = 'default' }) {
  return (
    <div className={`panel panel--${variant} ${className}`}>
      {children}
    </div>
  )
}