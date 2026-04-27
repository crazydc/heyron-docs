import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { useAppDispatch } from '../../store/hooks'
import { logout } from '../../store/slices/authSlice'
import './Header.css'

export default function Header() {
  const { isAuthenticated, user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Heyron" className="logo-img" />
          <span className="logo-text">heyron.ai</span>
        </Link>
        
        <nav className="header-nav">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="header-link">Dashboard</Link>
              <Link to="/account" className="header-link">Account</Link>
              <button onClick={handleLogout} className="header-btn-logout">Sign Out</button>
            </>
          ) : (
            <Link to="/signin" className="header-cta">Sign In</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
