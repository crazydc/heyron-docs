import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ClientData() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Is It Safe to Paste Client Data Into Your Agent?</h1>
        <span className="badge-violet mb-8">Privacy</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A redaction-first workflow to protect client information when working with your agent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Risk</h2>
          <p className="text-slate-300 mb-6">
            When you paste client data into your agent, it becomes part of the conversation context. This data may be:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Stored in conversation history</li>
            <li>Used to generate responses</li>
            <li>Potentially exposed in future sessions</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">The Redaction Workflow</h2>
          <p className="text-slate-300 mb-4">
            Before pasting any client data, redact sensitive fields:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li>Replace names with "[CLIENT_NAME]" or "Client A"</li>
            <li>Remove or mask phone numbers, emails, addresses</li>
            <li>Use generic identifiers for case/reference numbers</li>
            <li>Remove any financial or health data unless essential</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Safe Alternatives</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Ask the agent to summarize</strong> — Instead of pasting full data, describe what you need</li>
            <li><strong>Use file references</strong> — Let the agent read files without pasting content</li>
            <li><strong>Work in ephemeral sessions</strong> — Use /new to start fresh conversations</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Configure Data Protection</h2>
          <p className="text-slate-300 mb-4">
            In your dashboard, enable:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Auto-redaction hints</strong> — Agent reminds you to redact</li>
            <li><strong>Session expiry</strong> — Conversations auto-delete</li>
            <li><strong>Approval for sensitive outputs</strong></li>
          </ul>

          <div className="bg-amber/10 border border-amber/30 rounded-lg p-4 mt-6">
            <p className="text-amber text-sm">
              <strong>Best practice:</strong> When in doubt, redact. It's easier to share more info later than to retract leaked data.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/private-info-group" className="btn-primary">
            Previous: Private Info in Groups
          </Link>
          <Link href="/tutorials/working-with-files" className="btn-primary">
            Next: Working with Files →
          </Link>
        </div>
      </main>
    </div>
  );
}