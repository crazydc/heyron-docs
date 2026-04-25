import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SecondAgent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Did I Create a Second Agent by Accident?</h1>
        <span className="badge-crimson mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The bot seems different — maybe you created a second one? Here's how to check and fix this.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How You Might Have Multiple Agents</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Multiple OpenClaw instances</strong> — Running more than one OpenClaw setup</li>
            <li><strong>Different Discord bots</strong> — Added more than one bot to your server</li>
            <li><strong>Reconfigured settings</strong> — Changed the agent name or personality</li>
            <li><strong>Different session</strong> — Starting a fresh conversation looks like a new agent</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Check</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check Your Dashboard</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the OpenClaw dashboard</li>
            <li>Look for agent name/identity in settings</li>
            <li>Check SOUL.md to see the configured personality</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Check Discord Bots</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Server Settings → Integrations</li>
            <li>See how many bot integrations are installed</li>
            <li>Check if you have multiple bots from different apps</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Check the Agent's Identity</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Ask the bot: "What is your name?"</li>
            <li>Ask: "What do you know about me?"</li>
            <li>Compare answers with what you configured</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Why It Seems Different</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Fresh session</strong> — Using /new starts a completely fresh context</li>
            <li><strong>Different channel</strong> — Each channel has separate memory</li>
            <li><strong>Configuration changed</strong> — Someone modified SOUL.md or USER.md</li>
            <li><strong>Different model</strong> — Switching AI models can feel like a different agent</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Check your configuration files</strong> — Verify SOUL.md and USER.md are correct</li>
            <li><strong>Don't use /new</strong> — Unless you actually want a fresh start</li>
            <li><strong>Keep context in files</strong> — Important info should be in MEMORY.md</li>
            <li><strong>Verify single bot</strong> — Remove duplicate Discord bot integrations</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">You Probably Have One Agent</h2>
          <p className="text-slate-300 mb-4">
            It's more likely that:
          </p>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>✅ You started a fresh session</li>
            <li>✅ You're in a different channel</li>
            <li>✅ Something was reconfigured</li>
            <li>❌ You actually created a second agent</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/files-missing" className="btn-primary">
            Next: Where Did My Files Go? →
          </Link>
        </div>
      </main>
    </div>
  );
}