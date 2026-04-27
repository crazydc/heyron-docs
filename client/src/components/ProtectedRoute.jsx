import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

// Route wrapper that requires authentication
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }
  
  return children
}

// Route wrapper for guest-only pages (redirect if already authenticated)
export function GuestRoute({ children }) {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }
  
  return children
}