import { useState } from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Alert from '../components/ui/Alert'
import './Partner.css'

export default function Partner() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    partnerType: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const benefits = [
    { icon: '💰', title: 'Revenue Share', desc: 'Earn 20% recurring on every referral' },
    { icon: '🎯', title: 'Priority Support', desc: 'Dedicated partner success manager' },
    { icon: '📈', title: 'Marketing Assets', desc: 'Co-branded marketing materials' },
    { icon: '🔧', title: 'Technical Access', desc: 'Early access to new features' },
  ]

  return (
    <Layout>
      <div className="partner-page">
        <div className="partner-container">
          <h1>Partner with Us</h1>
          <p className="partner-intro">Join our partner program and help businesses unlock the power of AI agents.</p>

          <section className="partner-section">
            <h2>Why Partner?</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="partner-section">
            <h2>Apply Now</h2>
            {submitted ? (
              <Alert type="success">
                Thanks for applying! We'll be in touch within 2 business days.
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="partner-form">
                <div className="form-row">
                  <div className="field">
                    <label>Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label>Email *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label>Company</label>
                    <Input name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
                  </div>
                  <div className="field">
                    <label>Website</label>
                    <Input name="website" value={formData.website} onChange={handleChange} placeholder="https://" />
                  </div>
                </div>
                <div className="field">
                  <label>Partner Type</label>
                  <select name="partnerType" value={formData.partnerType} onChange={handleChange} className="input">
                    <option value="">Select type</option>
                    <option value="reseller">Reseller</option>
                    <option value="referral">Referral Partner</option>
                    <option value="technical">Technical Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>Tell us about yourself</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="input textarea" placeholder="How do you plan to promote Heyron?" />
                </div>
                <Button type="submit" fullWidth>Submit Application</Button>
              </form>
            )}
          </section>
        </div>
      </div>
    </Layout>
  )
}