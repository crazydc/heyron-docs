import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function GoogleChat() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Connect Your Agent to Google Chat</h1>
        <span className="badge-amber mb-8">Connect Your Agent</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Add your Heyron agent to Google Chat spaces and start chatting.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Get Your Agent's Google Chat Integration</h2>
          <p className="text-slate-300 mb-4">
            In your Nerve dashboard, navigate to <strong>Channels → Google Chat</strong> and enable the integration. Copy the bot email address shown.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Add Bot to a Space</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open Google Chat and go to the space where you want to add the bot</li>
            <li>Click the space name → <strong>Add people and bots</strong></li>
            <li>Enter the bot email address</li>
            <li>Click Add</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Start Chatting</h2>
          <p className="text-slate-300 mb-4">
            Once added, the bot will appear in the space. Send a message to start a conversation. The bot will respond in the thread.
          </p>

          <div className="bg-amber/10 border border-amber/30 rounded-lg p-4 mt-6">
            <p className="text-amber text-sm">
              <strong>Note:</strong> Google Chat bots only respond when @mentioned in group spaces. In direct messages, any message triggers a response.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/run-locally" className="btn-primary">
            Next: Run Locally →
          </Link>
        </div>
      </main>
    </div>
  );
}