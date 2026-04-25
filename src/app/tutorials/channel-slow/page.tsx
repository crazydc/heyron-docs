import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ChannelSlow() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Channel Responses Very Slow</h1>
        <span className="badge-amber mb-8">Performance</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Messages in your Discord or Telegram channel are taking forever to get responses. Here's what to check.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why It's Slow</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>High volume</strong> — Too many messages overwhelming the bot</li>
            <li>• <strong>API rate limits</strong> — Provider is throttling requests</li>
            <li>• <strong>Model congestion</strong> — The AI model is overloaded</li>
            <li>• <strong>Network issues</strong> — Slow connection to servers</li>
            <li>• <strong>Processing time</strong> — Complex requests take longer</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Speed It Up</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Reduce Message Volume</h3>
              <p className="text-slate-400 text-sm">
                Use threads instead of the main channel. This isolates conversations and reduces the messages the bot processes.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Switch to a Faster Model</h3>
              <p className="text-slate-400 text-sm">
                Some models are faster than others. Try switching to a model known for lower latency.
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Switch to [faster model name] for this session."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Check Server Load</h3>
              <p className="text-slate-400 text-sm">
                If multiple users are using the bot simultaneously, responses will slow down. Consider setting up rate limits per user.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">4. Simplify Requests</h3>
              <p className="text-slate-400 text-sm">
                Complex prompts with many examples take longer to process. Keep requests focused and concise.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Expected Response Times</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Simple queries:</strong> 2-5 seconds</li>
            <li>• <strong>Standard prompts:</strong> 5-15 seconds</li>
            <li>• <strong>Complex tasks:</strong> 15-60 seconds</li>
            <li>• <strong>If >60 seconds:</strong> likely a system issue</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/dm-not-receiving" className="btn-primary">
            ← DM Not Receiving
          </Link>
          <Link href="/tutorials/rate-limit" className="btn-primary">
            Next: Getting Rate Limited →
          </Link>
        </div>
      </main>
    </div>
  );
}