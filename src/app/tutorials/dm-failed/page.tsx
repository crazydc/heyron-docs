import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DmFailed() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>"I Couldn't Send You a DM" in #help?</h1>
        <span className="badge-yellow mb-8">Discord</span>
        <span className="text-slate-400 ml-4">2 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The agent tried to DM you on Discord but failed. Here's why and how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Privacy Settings</h3>
              <p className="text-slate-400 text-sm">
                You have "Allow server members to DM" disabled in your Discord privacy settings.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. No Mutual Servers</h3>
              <p className="text-slate-400 text-sm">
                The agent can only DM you if you're in a common server. You must share at least one server.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Blocked or Limited</h3>
              <p className="text-slate-400 text-sm">
                You might have the bot blocked or your DMs set to friends only.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li>Go to Discord Settings → Privacy & Safety</li>
            <li>Enable "Allow server members to DM"</li>
            <li>Make sure you're in the same server as the bot</li>
            <li>Unblock the bot if blocked</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Alternative</h2>
          <p className="text-slate-300">
            If DMs don't work, the agent can respond in the channel directly or you can message first to enable DMs.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/connect-discord" className="btn-primary">
            Related: Connect to Discord →
          </Link>
        </div>
      </main>
    </div>
  );
}