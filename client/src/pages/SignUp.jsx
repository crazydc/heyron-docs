import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { loginSuccess } from '../store/slices/authSlice'
import { supabase } from '../utils/supabase'
import Layout from '../components/layout/Layout'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'
import Modal from '../components/ui/Modal'
import Alert from '../components/ui/Alert'
import './SignUp.css'

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    discordId: '',
    acceptTerms: false
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showDiscordHelp, setShowDiscordHelp] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    setSuccessMessage('')
    
    if (!validate()) return
    
    setLoading(true)
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            discord_id: formData.discordId || ''
          }
        }
      })

      if (error) {
        throw error
      }

      if (data.user) {
        // User created - check if email confirmation is required
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          // Auto-confirmed - log in immediately
          dispatch(loginSuccess({
            id: session.user.id,
            email: session.user.email,
            fullName: formData.fullName,
            discordId: formData.discordId || null
          }))
          navigate('/onboarding')
        } else {
          // Email confirmation required
          setSuccessMessage('Check your email to confirm your account!')
        }
      }
    } catch (error) {
      setSubmitError(error.message || 'Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-header">
            <h1>Create your account</h1>
            <p>Get started with your AI agent</p>
          </div>

          {submitError && (
            <Alert type="error" dismissible onDismiss={() => setSubmitError('')}>
              {submitError}
            </Alert>
          )}

          {successMessage && (
            <Alert type="success" dismissible onDismiss={() => setSuccessMessage('')}>
              {successMessage}
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="signup-form">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              error={errors.fullName}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
              hint="At least 6 characters"
            />

            <div className="input-group">
              <label htmlFor="discordId">
                Discord ID <span className="optional">(optional)</span>
              </label>
              <div className="input-with-help">
                <input
                  id="discordId"
                  name="discordId"
                  type="text"
                  placeholder="123456789012345678"
                  value={formData.discordId}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="help-btn"
                  onClick={() => setShowDiscordHelp(true)}
                  aria-label="How to find Discord ID"
                >
                  ?
                </button>
              </div>
              <span className="input-hint">Link your Discord for notifications</span>
            </div>

            <Checkbox
              name="acceptTerms"
              label="I agree to the Terms of Service and Privacy Policy"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            {errors.acceptTerms && (
              <span className="form-error">{errors.acceptTerms}</span>
            )}

            <Button 
              type="submit" 
              fullWidth 
              loading={loading}
            >
              Create Account
            </Button>
          </form>

          <p className="signup-footer">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>

        <Modal
          isOpen={showDiscordHelp}
          onClose={() => setShowDiscordHelp(false)}
          title="How to find your Discord ID"
        >
          <div className="discord-help">
            <ol>
              <li>Open Discord and go to <strong>User Settings</strong></li>
              <li>Click on <strong>Advanced</strong> in the sidebar</li>
              <li>Enable <strong>Developer Mode</strong></li>
              <li>Right-click on your username in any chat</li>
              <li>Select <strong>Copy User ID</strong></li>
            </ol>
            <p className="discord-help-note">
              The ID is an 18-digit number that looks like: 123456789012345678
            </p>
          </div>
        </Modal>
      </div>
    </Layout>
  )
}
