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
  const memberSince = 'January 2026'

  return (
    <Layout>
      <div className="account-page">
        <div className="account-container">
          {success && <Alert type="success" dismissible onDismiss={() => setSuccess('')}>{success}</Alert>}
          {error && <Alert type="error" dismissible onDismiss={() => setError('')}>{error}</Alert>}

          {/* Profile Section */}
          <div className="account-section">
            <h2 className="section-title">Profile</h2>
            <form onSubmit={handleSubmit} className="section-card">
              <div className="section-row">
                <span className="section-label">Name</span>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="section-row">
                <span className="section-label">Email</span>
                <span className="section-value-sm">{user?.email || ''}</span>
              </div>
              <div className="section-row">
                <span className="section-label">Discord ID</span>
                <Input
                  type="text"
                  name="discordId"
                  value={formData.discordId}
                  onChange={handleChange}
                  placeholder="123456789012345678"
                />
              </div>
              <div className="section-row">
                <span className="section-label">Member since</span>
                <span>{memberSince}</span>
              </div>
              
              <Button type="submit" fullWidth loading={loading} className="save-btn">
                Save Changes
              </Button>
            </form>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}