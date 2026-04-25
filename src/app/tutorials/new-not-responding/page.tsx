import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function NewNotResponding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Used /new and Now Your Bot Won't Respond?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Fast recovery flow for post-reset silence. You typed /new to start fresh and now your agent is ghosting you. Here's what went wrong and how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Happened</h2>
          <p className="text-slate-300 mb-6">
            When you use /new, the Discord bot attempts to start a fresh session. But sometimes things get stuck — the bot is waiting for something, permissions got wonky, or the session didn't initialize properly.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Fixes (Try These First)</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Send a Simple Message</h3>
              <p className="text-slate-300 text-sm">Just say "Hello" or "hi" — sometimes the bot needs a nudge to respond after /new</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Try /status</h3>
              <p className="text-slate-300 text-sm">Run /status to see if the bot is actually online and responding</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-3">3. Check Bot Permissions</h3>
              <p className="text-slate-300 text-sm">Make sure the bot can:</p>
              <ul className="list-disc list-inside text-slate-400 text-sm mt-2">
                <li>Read messages in the channel</li>
                <li>Send messages</li>
                <li>Use external emojis (if applicable)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">If Quick Fixes Don't Work</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Leave the channel</strong> — Have the bot leave, then re-invite it</li>
            <li><strong className="text-white">Restart via dashboard</strong> — Go to the OpenClaw dashboard and force a restart</li>
            <li><strong className="text-white">Check bot status</strong> — Run /ping or /status in any channel</li>
            <li><strong className="text-white">Re-authenticate</strong> — The bot may need to be re-authorized</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Prevention</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li><strong className="text-white">Don't spam /new</strong> — One /new per conversation is enough</li>
            <li><strong className="text-white">Wait between commands</strong> — Give the bot 2-3 seconds to respond</li>
            <li><strong className="text-white">Use the dashboard for resets</strong> — It's more reliable than /new</li>
          </ul>

          <div className="mt-6 p-4 bg-crimson/10 border border-crimson/30 rounded-lg">
            <p className="text-crimson">
              <strong className="text-white">⚠️ Still Stuck?</strong> If nothing works, the bot may have crashed. Check the OpenClaw gateway status or restart the service from the dashboard.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/restart-fresh" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/meet-agent" className="btn-primary">
            Next: "Meet [Agent]" Opened OpenClaw Dashboard? →
          </Link>
        </div>
      </main>
    </div>
  );
}