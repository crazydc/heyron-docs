import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PrivacyAudit() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>What Does My Agent Know About Me?</h1>
        <span className="badge-violet mb-8">Privacy</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A simple privacy audit flow to verify what your agent can access.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Audit?</h2>
          <p className="text-slate-300 mb-6">
            Your agent has access to various data sources depending on your configuration. Regular audits ensure you're not exposing more than intended.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Check Access Permissions</h2>
          <p className="text-slate-300 mb-4">
            Review what your agent can access:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Files:</strong> What directories can it read/write?</li>
            <li><strong>Channels:</strong> Which Discord/Telegram channels?</li>
            <li><strong>Calendar:</strong> Does it have calendar access?</li>
            <li><strong>Email:</strong> Any email permissions?</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Review Memory Files</h2>
          <p className="text-slate-300 mb-4">
            Your agent stores persistent info in workspace files. Check:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>MEMORY.md — long-term facts about you</li>
            <li>SOUL.md — your agent's configuration</li>
            <li>USER.md — your personal context</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Check Conversation History</h2>
          <p className="text-slate-300 mb-4">
            New conversations start fresh, but long conversations get stored in context. Ask your agent: "What do you know about me from our conversation?"
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Step 4: Run a Privacy Check</h2>
          <p className="text-slate-300 mb-4">
            Ask your agent directly: "Can you tell me what personal information you have stored about me?"
          </p>

          <div className="bg-crimson/10 border border-crimson/30 rounded-lg p-4 mt-6">
            <p className="text-crimson text-sm">
              <strong>Action:</strong> If you find sensitive info you don't want stored, delete or redact those files and update your agent's instructions.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/client-data" className="btn-primary">
            Next: Client Data Safety →
          </Link>
        </div>
      </main>
    </div>
  );
}