import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ConnectTelegram() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Connect Your Agent to Telegram</h1>
        <span className="badge-amber mb-8">Connect Your Agent</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Set up your agent on Telegram in under 5 minutes.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Find the Heyron Bot</h2>
          <p className="text-slate-300 mb-4">
            Search for <code className="text-cyan">@heyron_bot</code> in Telegram or visit your Nerve dashboard for the direct link.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Start a Chat</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Click "Start" or send <code className="text-cyan">/start</code></li>
            <li>The bot will verify your account</li>
            <li>Once verified, you're connected!</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Test</h2>
          <p className="text-slate-300">
            Send a message and your agent should reply. You're now chatting privately with your AI!
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/google-chat" className="btn-primary">
            Next: Google Chat →
          </Link>
        </div>
      </main>
    </div>
  );
}