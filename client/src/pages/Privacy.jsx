import Layout from '../components/layout/Layout'
import './Terms.css'

export default function Privacy() {
  return (
    <Layout>
      <div className="legal-page">
        <div className="legal-container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: February 12, 2026</p>
          
          <h2>What We Collect</h2>
          <p>When you sign up, we collect your name, email address, and personality quiz responses. When you subscribe, Stripe processes your payment info. We never see or store your credit card number.</p>
          
          <h2>How We Use It</h2>
          <p>Your name and email are used for your account and to contact you about the service. Your quiz results are used to personalize your AI agent's personality. That's it.</p>
          
          <h2>Your AI Agent's Memory</h2>
          <p>Your AI agent remembers your conversations to be a better partner. This data is stored on your private virtual desktop and is not shared with other members or used for training. It's yours.</p>
          
          <h2>Who Sees Your Data</h2>
          <p>We don't sell your data. We don't share it with advertisers. The only third parties with access to any of your information are:</p>
          <ul>
            <li>Supabase (authentication and database hosting)</li>
            <li>Stripe (payment processing)</li>
            <li>Vercel (website hosting)</li>
            <li>Resend (email delivery)</li>
          </ul>
          
          <h2>Cookies</h2>
          <p>We use essential cookies to keep you logged in. No tracking cookies, no analytics cookies, no ad cookies.</p>
          
          <h2>Deleting Your Data</h2>
          <p>Cancel your subscription at heyron.ai/account and request full data deletion through your account settings. We'll remove your account, quiz results, and AI agent data within 30 days.</p>
          
          <h2>Contact</h2>
          <p>Questions about your privacy? Reach out through your account at heyron.ai/account or in our Discord community.</p>
        </div>
      </div>
    </Layout>
  )
}