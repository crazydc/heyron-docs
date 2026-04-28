import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/partner">Partner</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/support">Support</Link>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/robby.builds/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
          <a href="https://www.tiktok.com/@robbyhouston" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
          <a href="https://beacons.ai/robbyhouston" target="_blank" rel="noopener noreferrer" aria-label="Linktree">🔗</a>
          <a href="https://www.youtube.com/@robby.builds" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
        </div>
        <p className="footer-copyright">© 2026 Heyron. All rights reserved.</p>
      </div>
    </footer>
  )
}
