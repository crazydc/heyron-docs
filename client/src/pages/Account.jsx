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

  const plan = subscription?.plan || 'AI Agents Club'
  const price = '$29/month'
  const status = subscription?.status || 'active'
  const expiresAt = subscription?.expiresAt
  const memberSince = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Unknown'

  return (
    <Layout>
      <div className="account-page">
        <div className="account-container">
          {success && <Alert type="success" dismissible onDismiss={() => setSuccess('')}>{success}</Alert>}
          {error && <Alert type="error" dismissible onDismiss={() => setError('')}>{error}</Alert>}

          {/* Profile Section */}
          <div className="account-section">
            <h2 className="section-title">Profile</h2>
            <div className="section-card">
              <div className="section-row">
                <span className="section-label">Name</span>
                <span>{formData.fullName || 'Not set'}</span>
              </div>
              <div className="section-row">
                <span className="section-label">Email</span>
                <span className="section-value-sm">{user?.email || ''}</span>
              </div>
              <div className="section-row">
                <span className="section-label">Member since</span>
                <span>{memberSince}</span>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="account-section">
            <h2 className="section-title">Subscription</h2>
            <div className="section-card">
              <div className="section-row">
                <span className="section-label">Plan</span>
                <span>{plan}</span>
              </div>
              <div className="section-row">
                <span className="section-label">Price</span>
                <span>{price}</span>
              </div>
              <div className="section-row">
                <span className="section-label">Status</span>
                <span className={`status-badge ${status}`}>{status}</span>
              </div>
              
              <div className="manage-subscription">
                <Button fullWidth>
                  Manage or cancel subscription
                </Button>
                <p className="manage-hint">Opens the Stripe billing portal. You can update your card, view invoices, or cancel — if you cancel, you keep access until the end of your paid period.</p>
              </div>
            </div>

            {showHistory && payments.length > 0 && (
              <div className="payment-list">
                <h3>Payment History</h3>
                {payments.map(payment => (
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
                ))}
              </div>
            )}
          </div>

          {/* Edit Profile */}
          <form onSubmit={handleSubmit} className="account-form">
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
            </div>

            <Button type="submit" fullWidth loading={loading}>
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}