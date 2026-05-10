import { useState } from 'react'
import WorkflowBar from '../components/ui/WorkflowBar'
import IconCard from '../components/ui/IconCard'
import RonPanel from '../components/ui/RonPanel'
import DumpsterModal from '../components/ui/DumpsterModal'
import Button from '../components/ui/Button'
import Panel from '../components/ui/Panel'
import './SupportNew.css'

const WORKFLOW_STEPS = [
  { icon: '📝', label: 'Submit Request' },
  { icon: '🔍', label: 'Diagnosis' },
  { icon: '⚡', label: 'Resolution' },
  { icon: '✅', label: 'Complete' }
]

const SUPPORT_OPTIONS = [
  {
    icon: '🐛',
    title: 'Report a Bug',
    description: 'Found something broken? Let us know and we\'ll fix it.',
    buttonText: 'Report Bug',
    buttonHref: '/support'
  },
  {
    icon: '💡',
    title: 'Feature Request',
    description: 'Have an idea? Share it with us and help shape the future.',
    buttonText: 'Request Feature',
    buttonHref: '/support'
  },
  {
    icon: '📚',
    title: 'Documentation',
    description: 'Browse our guides and tutorials to get the most out of Heyron.',
    buttonText: 'View Docs',
    buttonHref: '/resources'
  },
  {
    icon: '💬',
    title: 'Community',
    description: 'Join our Discord to connect with other users and get help.',
    buttonText: 'Join Discord',
    buttonHref: '/support'
  }
]

const FAQ_ITEMS = [
  { question: 'How do I get started?', answer: 'Start by completing the Launchpad setup. Visit /launchpad to begin.' },
  { question: 'How do I connect my email?', answer: 'Go to Settings > Integrations and follow the email setup wizard.' },
  { question: 'Can I customize my agent?', answer: 'Yes! Use the Launchpad Config page to personalize your agent\'s behavior.' },
  { question: 'What integrations are supported?', answer: 'We support email, calendar, Slack, Discord, and more. Check the docs for full list.' }
]

export default function SupportNew() {
  const [showDumpsterModal, setShowDumpsterModal] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="support-new">
      <div className="support-new__container">
        {/* Header */}
        <header className="support-new__header">
          <h1 className="support-new__title">Support Center</h1>
          <p className="support-new__subtitle">How can we help you today?</p>
        </header>

        {/* Workflow Bar */}
        <section className="support-new__workflow">
          <WorkflowBar steps={WORKFLOW_STEPS} />
        </section>

        {/* Support Options */}
        <section className="support-new__options">
          <h2 className="section-title">Common Tasks</h2>
          <div className="support-options-grid">
            {SUPPORT_OPTIONS.map((option, i) => (
              <IconCard key={i} {...option} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="support-new__faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <Panel>
            <div className="faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="faq-item">
                  <button 
                    className="faq-item__question"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={expandedFaq === i}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__icon">{expandedFaq === i ? '−' : '+'}</span>
                  </button>
                  {expandedFaq === i && (
                    <p className="faq-item__answer">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </Panel>
        </section>

        {/* Ron Panel */}
        <section className="support-new__ron">
          <RonPanel 
            message="Need personalized help? I can guide you through common issues."
            showDumpster={true}
            onDumpsterClick={() => setShowDumpsterModal(true)}
          />
        </section>

        {/* Contact Form */}
        <section className="support-new__contact">
          <Panel variant="elevated">
            <h2 className="section-title">Still need help?</h2>
            <p className="contact-description">Submit a ticket and we'll get back to you within 24 hours.</p>
            <div className="contact-form">
              <div className="form-row">
                <input type="email" placeholder="Your email" className="form-input" />
                <input type="text" placeholder="Subject" className="form-input" />
              </div>
              <textarea placeholder="Describe your issue..." className="form-textarea" rows={4} />
              <Button variant="primary">Submit Ticket</Button>
            </div>
          </Panel>
        </section>
      </div>

      {/* Dumpster Modal */}
      <DumpsterModal 
        isOpen={showDumpsterModal}
        onClose={() => setShowDumpsterModal(false)}
        onSubmit={(password) => {
          console.log('Password submitted:', password)
          setShowDumpsterModal(false)
        }}
      />
    </div>
  )
}