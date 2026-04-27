import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

// Route wrapper that requires authentication
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAppSelector(state => state.auth)
  
  // Wait for auth to load before redirecting
  if (loading) {
    return null // or a loading spinner
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }
  
  return children
}

// Route wrapper for guest-only pages (redirect if already authenticated)
export function GuestRoute({ children }) {
  const { isAuthenticated, loading } = useAppSelector(state => state.auth)
  
  if (loading) {
    return null
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }
  
  return children
}