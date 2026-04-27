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
  const [submitError, setSubmitError] = useState('')
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.email) {
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
    
    // Fallback timeout
    const timeout = setTimeout(() => {
      setLoading(false)
      setSubmitError('Request timed out. Please try again.')
    }, 10000)
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      clearTimeout(timeout)

      if (error) {
        setSubmitError(error.message || 'Invalid email or password')
        setLoading(false)
        return
      }

      if (data.user) {
        dispatch(loginSuccess({
          user: {
            id: data.user.id,
            email: data.user.email,
            fullName: data.user.user_metadata?.full_name || 'User'
          },
          onboardingComplete: true
        }))
        navigate('/dashboard')
      } else {
        setSubmitError('Something went wrong')
        setLoading(false)
      }
    } catch (error) {
      clearTimeout(timeout)
      setSubmitError(error.message || 'Invalid email or password')
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

          <form onSubmit={handleSubmit} className="signin-form">
            {submitError && <Alert type="error" message={submitError} />}

            <div className="field">
              <label>Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                error={errors.email}
              />
            </div>

            <div className="field">
              <label>Password</label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                error={errors.password}
              />
            </div>

            <Button type="submit" fullWidth loading={loading}>
              Sign In
            </Button>
          </form>

          <div className="signin-footer">
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
