import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function WebhookDebug() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Debug Webhook Issues</h1>
        <span className="badge-crimson mb-8">Debugging</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Diagnose and fix webhook-related problems with your agent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Are Webhooks?</h2>
          <p className="text-slate-300 mb-4">
            Webhooks are HTTP callbacks that notify your agent when events occur. They allow real-time responses to external events.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Common Webhook Issues</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Webhook not firing</strong> — Events aren't triggering the webhook</li>
            <li>• <strong>Silent failures</strong> — Webhook fires but agent doesn't respond</li>
            <li>• <strong>Wrong payload</strong> — Data format doesn't match expectations</li>
            <li>• <strong>Timeout issues</strong> — Webhook takes too long to process</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Debugging Steps</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Check webhook URL</strong> — Verify the endpoint is correct and accessible</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Review event logs</strong> — Check if the event is being sent</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Test manually</strong> — Send a test webhook payload</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Check response format</strong> — Ensure the webhook returns proper acknowledgment</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">What to Check</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• Is the webhook URL reachable from the internet?</li>
            <li>• Is the webhook signed/verified correctly?</li>
            <li>• Are there CORS issues blocking the request?</li>
            <li>• Is the agent responding within timeout limits?</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Getting Help</h2>
          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              When asking for help, share: the webhook provider, the event type, any error messages, and what you've already tried.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/api-keys" className="btn-secondary">
            ← API Keys
          </Link>
          <Link href="/tutorials" className="btn-primary">
            All Tutorials →
          </Link>
        </div>
      </main>
    </div>
  );
}