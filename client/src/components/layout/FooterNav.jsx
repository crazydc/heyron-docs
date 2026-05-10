import { Link } from 'react-router-dom'
import './FooterNav.css'

export default function FooterNav({ items = [] }) {
  return (
    <nav className="footer-nav">
      <div className="footer-nav__items">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="footer-nav__item"
          >
            <span className="footer-nav__icon">{item.icon}</span>
            <span className="footer-nav__label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}