import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/partner">Partner</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/support">Support</Link>
        </div>
        <p className="footer-copyright">© 2026 Heyron. All rights reserved.</p>
      </div>
    </footer>
  )
}
