import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/support">Support</Link>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Discord">DC</a>
          <a href="#" aria-label="Twitter">TW</a>
        </div>
        <p className="footer-copyright">© 2026 Heyron. All rights reserved.</p>
      </div>
    </footer>
  )
}
