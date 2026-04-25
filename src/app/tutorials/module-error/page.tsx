import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ModuleError() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 2: Agent Error (No Reply)</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent isn't replying. You're in Module 2 and seeing an error about the agent module failing.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What This Means</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Module 2 is the agent</strong> — This processes your messages and generates responses</li>
            <li><strong>It failed to respond</strong> — Either crashed, timed out, or returned an error</li>
            <li><strong>This is different from a permission issue</strong> — The bot got your message but couldn't process it</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Debug</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check Dashboard Works</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Try sending a message via the OpenClaw dashboard</li>
            <li>If dashboard works → Discord/Telegram integration issue</li>
            <li>If dashboard also fails → Agent/LLM issue</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Check API Keys</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the dashboard → Settings → API Keys</li>
            <li>Verify your LLM API key is valid</li>
            <li>Check for rate limits or expiration</li>
            <li>Try a different model temporarily</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Check Agent Logs</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Look for error messages in the dashboard logs</li>
            <li>Check for "Module 2" specific errors</li>
            <li>Look for timeout or crash indicators</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 4: Restart the Agent</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Run: <code className="text-cyan">openclaw gateway restart</code></li>
            <li>Or restart just the agent: <code className="text-cyan">openclaw agent restart</code></li>
            <li>Wait for the agent to fully initialize</li>
            <li>Try sending a message again</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>API key invalid</strong> — Key expired or invalid</li>
            <li><strong>Model unavailable</strong> — Selected model is down or rate limited</li>
            <li><strong>Memory exhausted</strong> — Agent ran out of memory</li>
            <li><strong>Configuration error</strong> — Agent config has invalid settings</li>
            <li><strong>Tool error</strong> — A tool the agent tried to use failed</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Prevention</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Keep your API keys up to date</li>
            <li>Monitor your API usage and rate limits</li>
            <li>Ensure sufficient server resources (RAM)</li>
            <li>Use a fallback model in settings</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/support-moved" className="btn-primary">
            Next: Where to Get Support →
          </Link>
        </div>
      </main>
    </div>
  );
}