import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RateLimit() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Getting Rate Limited</h1>
        <span className="badge-crimson mb-8">Limits</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're being rate limited — too many requests in a short time. Here's how to handle it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Is Rate Limiting?</h2>
          <p className="text-slate-300 mb-6">
            Rate limiting protects the API from abuse. If you send too many requests too quickly, the system blocks you temporarily. This can come from the AI provider (OpenAI, Anthropic, etc.) or your own configuration.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Slow Down Your Requests</h3>
              <p className="text-slate-400 text-sm">
                Don't spam messages. Wait a few seconds between requests. Use the wait time shown in the rate limit error message.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Check Your Plan Limits</h3>
              <p className="text-slate-400 text-sm mb-2">
                You're likely exceeding your tier limits:
              </p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                <li>Free tier: ~50-150 requests/minute</li>
                <li>Pro tier: ~500 requests/minute</li>
                <li>Enterprise: Custom limits</li>
              </ul>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Implement Backoff</h3>
              <p className="text-slate-400 text-sm">
                Add exponential backoff to your code. If a rate limit is hit, wait 1 second, then 2, then 4, etc.
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`// Simple backoff example
let delay = 1000;
while (retries < 3) {
  try { await sendRequest(); break; }
  catch (e) {
    if (e.status === 429) {
      await sleep(delay);
      delay *= 2;
    }
  }
}`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">4. Batch Requests</h3>
              <p className="text-slate-400 text-sm">
                Instead of sending multiple separate requests, batch them together when possible.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prevention Tips</h2>
          <ul className="space-y-2 text-slate-300">
            <li>✓ Use caching for repeated queries</li>
            <li>✓ Implement request queuing</li>
            <li>✓ Monitor your usage patterns</li>
            <li>✓ Upgrade your plan if consistently hitting limits</li>
            <li>✓ Set up alerts for approaching limits</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/channel-slow" className="btn-primary">
            ← Channel Responses Slow
          </Link>
          <Link href="/tutorials/model-switch" className="btn-primary">
            Next: Switch Models →
          </Link>
        </div>
      </main>
    </div>
  );
}