import { useState, useEffect } from 'react'
import { useAppSelector } from '../store/hooks'
import Layout from '../components/layout/Layout'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import './Account.css'

export default function Account() {
  const { user } = useAppSelector(state => state.auth)
  
  const [formData, setFormData] = useState({
    fullName: '',
    discordId: ''
  })
  const [subscription, setSubscription] = useState(null)
  const [payments, setPayments] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        discordId: user.discordId || ''
      })
      
      fetch(`/api/subscription?id=${user.id}`)
        .then(res => res.ok ? res.json() : null)
        .then(data => setSubscription(data))
        .catch(() => {})
      
      fetch(`/api/payments?id=${user.id}`)
        .then(res => res.ok ? res.json() : [])
        .then(data => setPayments(data))
        .catch(() => {})
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const res = await fetch(`/api/update-user?id=${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to update')
      }

      setSuccess('Profile updated successfully!')
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const plan = subscription?.plan || 'free'
  const status = subscription?.status || 'active'
  const expiresAt = subscription?.expiresAt

  return (
    <Layout>
      <div className="account-page">
        <div className="account-container">
          <div className="account-header">
            <h1>Account Settings</h1>
            <p>Manage your profile and subscription</p>
          </div>

          {success && <Alert type="success" dismissible onDismiss={() => setSuccess('')}>{success}</Alert>}
          {error && <Alert type="error" dismissible onDismiss={() => setError('')}>{error}</Alert>}

          {/* Subscription Section */}
          <div className="subscription-section">
            <h2>Subscription</h2>
            <div className="subscription-card">
              <div className="subscription-plan">
                <span className="plan-label">Plan</span>
                <span className="plan-value">{plan.charAt(0).toUpperCase() + plan.slice(1)}</span>
              </div>
              <div className="subscription-status">
                <span className="status-label">Status</span>
                <span className={`status-badge ${status}`}>{status}</span>
              </div>
              {expiresAt && (
                <div className="subscription-renewal">
                  <span className="renewal-label">Renews</span>
                  <span className="renewal-value">{new Date(expiresAt).toLocaleDateString()}</span>
                </div>
              )}
              <button className="history-btn" onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? 'Hide History' : 'View History'}
              </button>
            </div>

            {showHistory && (
              <div className="payment-list">
                <h3>Payment History</h3>
                {payments.length === 0 ? (
                  <p className="no-payments">No payment history</p>
                ) : (
                  payments.map(payment => (
                    <div key={payment.id} className="payment-item">
                      <span className="payment-date">
                        {new Date(payment.paymentDate).toLocaleDateString()}
                      </span>
                      <span className="payment-amount">
                        ${(payment.amount / 100).toFixed(2)} {payment.currency.toUpperCase()}
                      </span>
                      <span className={`payment-status ${payment.status}`}>
                        {payment.status}
                      </span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="account-form">
            <div className="field">
              <label>Email</label>
              <Input
                type="email"
                value={user?.email || ''}
                disabled
                placeholder="your@email.com"
              />
              <span className="input-hint">Email cannot be changed</span>
            </div>

            <div className="field">
              <label>Full Name</label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="field">
              <label>Discord ID</label>
              <Input
                type="text"
                name="discordId"
                value={formData.discordId}
                onChange={handleChange}
                placeholder="123456789012345678"
              />
              <span className="input-hint">Find your Discord ID in User Settings → Advanced</span>
            </div>

            <Button type="submit" fullWidth loading={loading}>
              Save Changes
            </Button>
          </form>

          <div className="account-footer">
            <p className="muted">Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}