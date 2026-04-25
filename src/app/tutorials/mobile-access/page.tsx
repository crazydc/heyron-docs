import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MobileAccess() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Mobile Access Guide</h1>
        <span className="badge-mint mb-8">Getting Started</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Access your AI agent on the go using mobile devices — phones and tablets.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Mobile Access Methods</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>📱 <strong>Mobile Web App</strong> — Access via browser</li>
            <li>💬 <strong>Telegram Bot</strong> — Chat-based interface</li>
            <li>📱 <strong>iOS App</strong> — Native iPhone/iPad app</li>
            <li>📱 <strong>Android App</strong> — Native Android app</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Connecting via Mobile Web</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Open Browser</h3>
                <p className="text-slate-400">Navigate to your agent's web URL</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Sign In</h3>
                <p className="text-slate-400">Use your credentials or SSO</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Add to Home Screen</h3>
                <p className="text-slate-400">Tap Share → Add to Home Screen for app-like experience</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Setting Up Telegram Access</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Create Telegram Bot</h3>
                <p className="text-slate-400">Message @BotFather on Telegram to create a bot</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Get Bot Token</h3>
                <p className="text-slate-400">Copy the API token provided by BotFather</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Configure in Dashboard</h3>
                <p className="text-slate-400">Settings → Channels → Telegram → Add Token</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Start Chatting</h3>
                <p className="text-slate-400">Find your bot on Telegram and start a conversation</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Mobile Features</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>📷 <strong>Image Upload</strong> — Send photos for analysis</li>
            <li>🎤 <strong>Voice Messages</strong> — Speak your queries</li>
            <li>🔔 <strong>Push Notifications</strong> — Get notified of responses</li>
            <li>📍 <strong>Location Access</strong> — Location-aware responses</li>
          </ul>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> For the best mobile experience, install the native app when available for your platform.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/two-factor" className="btn-primary">
            Next: Two-Factor Authentication →
          </Link>
        </div>
      </main>
    </div>
  );
}