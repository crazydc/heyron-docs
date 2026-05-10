import { useState } from 'react'
import WorkflowBar from '../components/ui/WorkflowBar'
import IconCard from '../components/ui/IconCard'
import RonPanel from '../components/ui/RonPanel'
import DumpsterModal from '../components/ui/DumpsterModal'
import Button from '../components/ui/Button'
import Panel from '../components/ui/Panel'
import styles from './SupportNew.module.css'

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
    description: "Found something broken? Let us know and we'll fix it.",
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
    <div className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Support Center</h1>
          <p className={styles.subtitle}>How can we help you today?</p>
        </header>

        <section className={styles.workflow}>
          <WorkflowBar steps={WORKFLOW_STEPS} />
        </section>

        <section className={styles.options}>
          <h2 className={styles.sectionTitle}>Common Tasks</h2>
          <div className={styles.optionsGrid}>
            {SUPPORT_OPTIONS.map((option, i) => (
              <IconCard key={i} {...option} />
            ))}
          </div>
        </section>

        <section className={styles.faq}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <Panel>
            <div className={styles.faqList}>
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <button 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(i)}
                    aria-expanded={expandedFaq === i}
                  >
                    <span>{item.question}</span>
                    <span className={styles.faqIcon}>{expandedFaq === i ? '−' : '+'}</span>
                  </button>
                  {expandedFaq === i && (
                    <p className={styles.faqAnswer}>{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section className={styles.ron}>
          <RonPanel 
            message="Need personalized help? I can guide you through common issues."
            showDumpster={true}
            onDumpsterClick={() => setShowDumpsterModal(true)}
          />
        </section>

        <section className={styles.contact}>
          <Panel variant="elevated">
            <h2 className={styles.sectionTitle}>Still need help?</h2>
            <p className={styles.contactDesc}>Submit a ticket and we'll get back to you within 24 hours.</p>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <input type="email" placeholder="Your email" className={styles.formInput} />
                <input type="text" placeholder="Subject" className={styles.formInput} />
              </div>
              <textarea placeholder="Describe your issue..." className={styles.formTextarea} rows={4} />
              <Button variant="primary">Submit Ticket</Button>
            </div>
          </Panel>
        </section>
      </div>

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