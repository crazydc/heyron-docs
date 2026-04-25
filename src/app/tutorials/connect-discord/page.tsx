import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ConnectDiscord() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Connect Your Agent to Discord</h1>
        <span className="badge-amber mb-8">Connect Your Agent</span>
        <span className="text-slate-400 ml-4">10 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Talk to your AI agent from any Discord server.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Get Your Connect URL</h2>
          <p className="text-slate-300 mb-4">
            Go to <code className="text-cyan">connect.c1.heyron.ai</code> and click "Connect Discord".
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Authorize the Bot</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Select your server from the dropdown</li>
            <li>Click "Authorize"</li>
            <li>You'll need "Administrator" or these permissions:</li>
            <ul className="list-disc list-inside ml-4 text-slate-400">
              <li>Read Messages</li>
              <li>Send Messages</li>
              <li>Manage Roles</li>
              <li>Manage Channels</li>
            </ul>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Configure in Nerve</h2>
          <p className="text-slate-300 mb-4">
            Go to your Nerve dashboard → Connect → Discord to configure which channels your agent has access to.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Step 4: Test It Out</h2>
          <p className="text-slate-300">
            Mention your bot in a channel and ask it a question. It should respond!
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/connect-telegram" className="btn-primary">
            Next: Connect to Telegram →
          </Link>
        </div>
      </main>
    </div>
  );
}