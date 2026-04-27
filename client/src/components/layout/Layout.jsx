import Header from './Header'
import Footer from './Footer'
import './Layout.css'

export default function Layout({ children, fullWidth = false }) {
  return (
    <div className="layout">
      <Header />
      <main className={`main-content ${fullWidth ? 'full-width' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
