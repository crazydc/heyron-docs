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
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        discordId: ''
      })
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

  return (
    <Layout>
      <div className="account-page">
        <div className="account-container">
          <div className="account-header">
            <h1>Account Settings</h1>
            <p>Manage your profile and preferences</p>
          </div>

          {success && <Alert type="success" dismissible onDismiss={() => setSuccess('')}>{success}</Alert>}
          {error && <Alert type="error" dismissible onDismiss={() => setError('')}>{error}</Alert>}

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