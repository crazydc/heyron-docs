import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import './DumpsterModal.css'

export default function DumpsterModal({ 
  isOpen, 
  onClose, 
  onSubmit 
}) {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      await onSubmit(password)
      setPassword('')
    } catch (err) {
      setError('Invalid password')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="dumpster-modal__overlay" onClick={onClose}>
      <div className="dumpster-modal" onClick={e => e.stopPropagation()}>
        <div className="dumpster-modal__header">
          <span className="dumpster-modal__icon">🗑️</span>
          <h2 className="dumpster-modal__title">Moderator Access</h2>
        </div>
        
        <p className="dumpster-modal__description">
          Enter your moderator password to access the dumpster.
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
            placeholder="Enter password"
            autoFocus
          />
          
          <div className="dumpster-modal__actions">
            <Button variant="ghost" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={loading || !password}>
              {loading ? 'Verifying...' : 'Enter'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}