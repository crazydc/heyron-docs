import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-text">heyron.ai</span>
        </Link>
        
        <nav className="header-nav">
          <Link to="/signup" className="header-cta">Sign Up</Link>
        </nav>
      </div>
    </header>
  )
}
