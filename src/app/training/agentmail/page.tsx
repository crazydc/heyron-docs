import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AgentMail() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/training" className="text-cyan hover:underline">← Back to Training</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 08: AgentMail Setup</h1>
        <span className="badge-mint mb-8">Active</span>

        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Give your agent its own email inbox — keep your personal email tidy.
        </p>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">⏱️ 10 minutes</h2>
          <h3 className="text-lg font-bold text-cyan mb-2">✨ Why AgentMail?</h3>
          <p className="text-slate-400 mb-4">
            Think of AgentMail as your AI's own personal mailbox — it's free, it's made for agents, and it keeps your regular email tidy.
          </p>
          
          <h3 className="text-lg font-bold text-cyan mb-2">Other Options:</h3>
          <ul className="list-disc list-inside text-slate-400 mb-4">
            <li><strong>Gmail:</strong> Create a fresh account just for your agent</li>
            <li><strong>Your domain:</strong> Set up agent@yourdomain.com</li>
          </ul>
          <p className="text-amber text-sm">⚠️ Keep it separate from your personal email.</p>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">🔑 CRITICAL: The JSON Format</h2>
          <p className="text-slate-400 mb-4">
            Most email sending problems come from wrong JSON format. Always use both text and html at the top level:
          </p>
          <pre className="p-3 bg-void border border-border rounded-lg text-sm text-slate-300 mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
{`{
  "to": "recipient@example.com",
  "subject": "My Subject",
  "text": "Plain text fallback",
  "html": "This is HTML with [a link]("https://example.com")"
}`}
          </pre>
          <p className="text-slate-400">
            <strong>Why both?</strong> Text is fallback for clients that don't render HTML. Always provide both — it improves deliverability.
          </p>
          <p className="text-cyan text-sm mt-2">💡 Pro tip: Create a skill with this JSON format so your agent remembers it.</p>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Let's get your agent its own mailbox</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 1: Get an AgentMail inbox</h3>
            <ul className="list-decimal list-inside text-slate-400">
              <li>Visit <a href="https://agentmail.to" target="_blank" className="text-cyan hover:underline">agentmail.to</a></li>
              <li>Sign up for a free inbox (e.g., yourname-agent)</li>
              <li>Check your email for a verification link</li>
              <li>Log into your new inbox</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 2: Grab your API token</h3>
            <ul className="list-decimal list-inside text-slate-400">
              <li>In your AgentMail inbox, look for "API" or "Tokens"</li>
              <li>Click "Generate new token" — name it "My Heyron Agent"</li>
              <li><strong>Copy the token now</strong> — you won't see it again!</li>
            </ul>
            <p className="text-amber text-sm mt-2">⚠️ This token is like a password. Save it somewhere safe!</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 3: Connect your agent</h3>
            <p className="text-slate-400 mb-2">Tell your agent:</p>
            <pre className="p-3 bg-void border border-border rounded-lg text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
{`Connect to AgentMail. My inbox is [your-inbox]@agentmail.to and here's my token: [paste-token]`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan mb-2">Step 4: Test it</h3>
            <p className="text-slate-400">Ask your agent: "Send a test email to my regular email"</p>
            <p className="text-slate-400">Check both inboxes to confirm it went through.</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">⚠️ Common Issues</h2>
          <ul className="space-y-3 text-slate-400">
            <li><strong>Blank emails / HTML not rendering:</strong> Wrong JSON format. Use both text AND html at top level.</li>
            <li><strong>Links get blocked:</strong> First emails with links often get flagged. Send your first message plain, add links in follow-ups.</li>
            <li><strong>Attachments:</strong> Max 20-25MB. Don't send images inline in first emails — send as links instead.</li>
          </ul>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-2xl font-bold text-white mb-4">✨ Look what you've built!</h2>
          <p className="text-slate-300 mb-4">Your agent now has:</p>
          <ul className="space-y-2 text-slate-300 mb-4">
            <li>✅ Chat (Discord — Module 03)</li>
            <li>✅ Memory (GitHub — Module 04)</li>
            <li>✅ Vision (Images — Module 05)</li>
            <li>✅ Scheduling (Cron — Module 07)</li>
            <li>✅ Email (AgentMail — right now)</li>
          </ul>
          <p className="text-cyan">A full digital assistant! 🚀</p>
        </div>
      </main>
    </div>
  );
}