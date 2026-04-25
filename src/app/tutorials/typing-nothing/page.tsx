import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BotTyping() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Discord Bot Typing... Then Nothing?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The bot shows "typing..." but then goes silent. This is usually a logic issue, not a permission issue.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>API error</strong> — The LLM responded with an error or empty response</li>
            <li><strong>Message filtered</strong> — The response was flagged by content filters</li>
            <li><strong>Tool execution failed</strong> — The bot tried to run a tool that failed silently</li>
            <li><strong>Rate limited</strong> — Discord is throttling the bot</li>
            <li><strong>Empty response</strong> — The model generated no usable output</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Debug</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check the Dashboard Logs</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the OpenClaw dashboard</li>
            <li>Go to the Discord channel session</li>
            <li>Look for error messages or warnings</li>
            <li>Check if the bot is responding in the dashboard chat</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Test in Dashboard</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Try sending a message via the dashboard</li>
            <li>If dashboard works but Discord doesn't → permission issue</li>
            <li>If dashboard also fails → check API keys and model settings</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Check for Content Filtering</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Sometimes the LLM refuses to respond due to safety guidelines</li>
            <li>Try a simpler, uncontroversial message</li>
            <li>Check if specific topics trigger the silence</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Fixes to Try</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Restart the bot session</strong> — Use <code className="text-cyan">/new</code> in Discord</li>
            <li><strong>Check API keys</strong> — Make sure your API key hasn't expired</li>
            <li><strong>Switch models</strong> — Try a different model temporarily</li>
            <li><strong>Reduce message length</strong> — Very long conversations can cause issues</li>
            <li><strong>Reset and reconnect</strong> — Remove the bot and re-add it</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Still Stuck?</h2>
          <p className="text-slate-300 mb-4">
            If none of the above works, the issue might be with the Discord gateway. Try:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Restarting the Discord connection in the dashboard</li>
            <li>Checking Discord's status page for outages</li>
            <li>Re-inviting the bot with a fresh OAuth link</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/slash-missing" className="btn-primary">
            Next: Slash Commands Missing →
          </Link>
        </div>
      </main>
    </div>
  );
}