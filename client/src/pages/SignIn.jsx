import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { loginSuccess } from '../store/slices/authSlice'
import { supabase } from '../utils/supabase'
import Layout from '../components/layout/Layout'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import './SignIn.css'

export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    if (!validate()) return
    
    setLoading(true)
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (error) {
        throw error
      }

      if (data.user) {
        dispatch(loginSuccess({
          id: data.user.id,
          email: data.user.email,
          fullName: data.user.user_metadata?.full_name || 'User'
        }))
        navigate('/dashboard')
      }
    } catch (error) {
      setSubmitError(error.message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="signin-page">
        <div className="signin-container">
          <div className="signin-header">
            <h1>Welcome back</h1>
            <p>Sign in to continue</p>
          </div>

          {submitError && (
            <Alert type="error" dismissible onDismiss={() => setSubmitError('')}>
              {submitError}
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="signin-form">
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
            />

            <Button 
              type="submit" 
              fullWidth 
              loading={loading}
            >
              Sign In
            </Button>
          </form>

          <p className="signin-footer">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}
