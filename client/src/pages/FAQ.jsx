import Layout from '../components/layout/Layout'
import './FAQ.css'

export default function FAQ() {
  const faqs = [
    {
      question: "How does billing work?",
      answer: "Billing is monthly at $29/month. You can cancel anytime from your Account page."
    },
    {
      question: "Can I use my own API keys?",
      answer: "Yes! You can bring your own OpenAI, Anthropic, or other provider keys."
    },
    {
      question: "Is my data private?",
      answer: "Yes. Your agent runs in an isolated container. We never read your data unless you ask for support."
    },
    {
      question: "What happens when I cancel?",
      answer: "You keep access until the end of your paid period. After that, you can still use the free tier."
    },
    {
      question: "How do I get started?",
      answer: "Sign up for an account, complete the onboarding wizard, and you'll have your AI agent running in minutes."
    },
    {
      question: "What providers do you support?",
      answer: "We support OpenAI, Anthropic, Google Gemini, and other major LLM providers. You can use your own API keys for any of them."
    }
  ]

  return (
    <Layout>
      <div className="faq-page">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-intro">Got questions? We've got answers.</p>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <p>Still have questions? <a href="/support">Contact support</a></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}