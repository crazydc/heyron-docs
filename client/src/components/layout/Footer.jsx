import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
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
