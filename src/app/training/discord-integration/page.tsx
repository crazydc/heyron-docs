import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DiscordIntegration() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/training" className="text-cyan hover:underline">← Back to Training</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 03: Discord Integration</h1>
        <span className="badge-mint mb-8">Active</span>

        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Connect your agent to Discord so it can interact with your server.
        </p>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Setting up the Heyron bot in your Discord server</li>
            <li>• Configuring bot permissions</li>
            <li>• Testing the connection</li>
            <li>• Managing multiple channels</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Step-by-Step Setup</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 1: Get Your Connect URL</h3>
            <p className="text-slate-400">Go to <code className="text-cyan">connect.c1.heyron.ai</code> and click "Connect Discord".</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 2: Authorize the Bot</h3>
            <p className="text-slate-400">Select your server and authorize the Heyron bot. You'll need "Administrator" or these permissions:</p>
            <ul className="mt-2 list-disc list-inside text-slate-400">
              <li>Read Messages</li>
              <li>Send Messages</li>
              <li>Manage Roles</li>
              <li>Manage Channels</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 3: Configure in Nerve</h3>
            <p className="text-slate-400">Go to your Nerve dashboard → Connect → Discord to configure which channels your agent has access to.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan mb-2">Step 4: Test It Out</h3>
            <p className="text-slate-400">Mention your bot in a channel and ask it a question. It should respond!</p>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Next Step</h2>
          <p className="text-slate-300 mb-4">Now let's set up file storage with GitHub:</p>
          <Link href="/training/file-storage" className="btn-primary inline-block">
            Module 04: File Storage →
          </Link>
        </div>
      </main>
    </div>
  );
}