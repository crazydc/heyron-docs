import Layout from '../components/layout/Layout'
import './Terms.css'

export default function Terms() {
  return (
    <Layout>
      <div className="legal-page">
        <div className="legal-container">
          <h1>Terms of Service</h1>
          
          <h2>The Short Version</h2>
          <p>You're using Heyron (beta). Your AI agent is yours — you're responsible for what it does. We're not liable for its outputs, decisions, or actions. If something breaks or goes wrong, we'll do our best to fix it, but this is v1 software. Use at your own risk.</p>
          
          <h2>1. Your Responsibility</h2>
          <p>You are responsible for your agent's actions. This includes:</p>
          <ul>
            <li>Anything your agent creates, generates, or outputs</li>
            <li>Decisions made based on your agent's recommendations</li>
            <li>Files, code, or content your agent produces</li>
            <li>How you use the agent in your business or personal life</li>
          </ul>
          <p>We provide the tool. You control how it's used.</p>
          
          <h2>2. What We Provide</h2>
          <p>Heyron gives you:</p>
          <ul>
            <li>A private AI instance running in your own container</li>
            <li>Access to language models via OpenRouter</li>
            <li>Tools for file management, web browsing, and task execution</li>
          </ul>
          <p>This is beta software. Expect bugs. Expect downtime. Expect things to change.</p>
          
          <h2>3. What We Don't Guarantee</h2>
          <p>We do NOT guarantee:</p>
          <ul>
            <li>100% uptime (we'll do our best, but servers crash)</li>
            <li>Perfect accuracy (AI makes mistakes)</li>
            <li>Data persistence forever (back up anything critical)</li>
            <li>That your agent won't occasionally do something weird</li>
          </ul>
          
          <h2>4. No Liability</h2>
          <p>We are not liable for:</p>
          <ul>
            <li>Business decisions you make based on your agent's advice</li>
            <li>Financial losses from trading, investing, or business activities</li>
            <li>Legal issues arising from content your agent generates</li>
            <li>Data loss, service interruptions, or bugs</li>
            <li>Any indirect, incidental, or consequential damages</li>
          </ul>
          <p><strong>Maximum liability:</strong> The amount you paid for your subscription in the last month. That's it.</p>
          
          <h2>5. Acceptable Use</h2>
          <p>Don't:</p>
          <ul>
            <li>Use Heyron for anything illegal</li>
            <li>Try to hack, exploit, or abuse the system</li>
            <li>Resell access to your agent</li>
            <li>Use it to spam, harass, or harm others</li>
          </ul>
          <p>If you do, we'll suspend your account.</p>
          
          <h2>6. Data & Privacy</h2>
          <p>Your agent runs in a private container. Your files and conversations stay in your container. We don't read your data unless you ask us to help debug something. We may collect anonymous usage metrics (error logs, performance data).</p>
          
          <h3>Data Usage & Improvement</h3>
          <p>By using Heyron, you grant Heyron a non-exclusive, royalty-free license to use anonymized and aggregated interaction data to improve our services, train and fine-tune AI models, and develop new features. This data is stripped of personally identifiable information before any use.</p>
          <p>Specifically:</p>
          <ul>
            <li>Interaction patterns and task types may be analyzed to improve agent performance</li>
            <li>Anonymized conversation data may be used to train and fine-tune AI models</li>
            <li>Aggregated usage data may be shared with research partners in anonymized form</li>
            <li>You may opt out of data usage for model training by contacting us at robby@heyron.ai</li>
          </ul>
          <p>We will never sell your personally identifiable information.</p>
          
          <h2>7. Payment & Refunds</h2>
          <ul>
            <li>Subscriptions renew monthly</li>
            <li>You can cancel anytime</li>
            <li>Refunds: Case-by-case basis (email us)</li>
            <li>If we shut down, you'll get a prorated refund for unused time</li>
          </ul>
          
          <h2>8. Changes to Service</h2>
          <p>We can:</p>
          <ul>
            <li>Change features</li>
            <li>Change pricing (with 30 days notice)</li>
            <li>Update these terms (you'll be notified)</li>
            <li>Shut down the service (with refunds)</li>
          </ul>
          
          <h2>9. Termination</h2>
          <p>You can cancel anytime.</p>
          <p>We can suspend/terminate your account if:</p>
          <ul>
            <li>You violate these terms</li>
            <li>You abuse the system</li>
            <li>You don't pay</li>
          </ul>
          
          <h2>10. The Legal Stuff</h2>
          <p><strong>AS-IS:</strong> The service is provided "as-is" without warranties.</p>
          <p><strong>Governing Law:</strong> United States</p>
          <p><strong>Severability:</strong> If one part of this is unenforceable, the rest still applies.</p>
          
          <h2>Questions?</h2>
          <p>Reach out at robby@heyron.ai, through your account at heyron.ai/account, or in our Discord community.</p>
          
          <p className="legal-footer">By using Heyron, you agree to these terms. If you don't agree, don't use the service.</p>
        </div>
      </div>
    </Layout>
  )
}