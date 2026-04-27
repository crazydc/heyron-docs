import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Coming soon...</p>
        <Link to="/" style={{ display: 'inline-block', marginTop: '2rem' }}>Back to Home</Link>
      </div>
    </Layout>
  )
}
