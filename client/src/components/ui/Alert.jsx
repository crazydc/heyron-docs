import { useState } from 'react'
import './Alert.css'

export default function Alert({ type = 'info', children, dismissible, onDismiss }) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }

  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">{icons[type]}</span>
      <span className="alert-content">{children}</span>
      {dismissible && (
        <button className="alert-dismiss" onClick={handleDismiss}>×</button>
      )}
    </div>
  )
}
