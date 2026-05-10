import { Link } from 'react-router-dom'
import './PageHeader.css'

export default function PageHeader({
  title = 'Heyron',
  slogan = 'Your AI Agent Platform',
  navLinks = [],
  variant = 'default'
}) {
  if (variant === 'minimal') {
    return (
      <header className="page-header page-header--minimal">
        <Link to="/" className="page-header__logo">
          <img src="/logo.svg" alt="Heyron" className="page-header__logo-img" />
          <span className="page-header__title">{title}</span>
        </Link>
      </header>
    )
  }

  return (
    <header className="page-header">
      <div className="page-header__container">
        <Link to="/" className="page-header__logo">
          <img src="/logo.svg" alt="Heyron" className="page-header__logo-img" />
          <span className="page-header__title">{title}</span>
        </Link>

        <nav className="page-header__nav">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="page-header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="page-header__actions">
          <span className="page-header__slogan">{slogan}</span>
        </div>
      </div>
    </header>
  )
}