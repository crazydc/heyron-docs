import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ApprovalRequired() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Why Your Agent Says "Approval Required"</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            What approval prompts mean and when to approve. Your agent hit a security checkpoint — here's what's happening.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Is "Approval Required"?</h2>
          <p className="text-slate-300 mb-6">
            OpenClaw has safety guards that require your explicit approval before the agent executes certain actions. When you see "approval required," the agent is asking permission to proceed with something sensitive.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Why It Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">External actions</strong> — Sending emails, posting to social media, making API calls</li>
            <li><strong className="text-white">File modifications</strong> — Creating, editing, or deleting files</li>
            <li><strong className="text-white">System commands</strong> — Running shell commands or scripts</li>
            <li><strong className="text-white">New connections</strong> — Linking new platforms or services</li>
            <li><strong className="text-white">Sensitive data</strong> — Accessing or sharing private information</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">What to Do</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <ol className="list-decimal list-inside space-y-3 text-slate-300">
              <li><strong className="text-white">Read the request</strong> — Understand what the agent wants to do</li>
              <li><strong className="text-white">Verify it's legitimate</strong> — Make sure it's something you actually want</li>
              <li><strong className="text-white">Approve or deny</strong> — Use the approval buttons or reply with yes/no</li>
              <li><strong className="text-white">Add context if needed</strong> — You can approve with modifications</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Approval Types</h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="badge-mint">One-time</span>
              <span className="text-slate-300">Approve this single action only</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="badge-amber">Remember</span>
              <span className="text-slate-300">Approve and remember for similar future requests</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="badge-violet">Always Allow</span>
              <span className="text-slate-300">Permanently allow this type of action</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">If Approval Keeps Coming Back</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Check if you're using different platforms (Discord vs Dashboard may have different settings)</li>
            <li>The action might need "Always Allow" instead of one-time approval</li>
            <li>Your security settings might be stricter on certain platforms</li>
            <li>Some actions simply can't be auto-approved for safety</li>
          </ul>

          <div className="mt-6 p-4 bg-cyan/10 border border-cyan/30 rounded-lg">
            <p className="text-cyan">
              <strong className="text-white">💡 Pro Tip:</strong> You can configure approval settings in the dashboard under Security → Approval Policies. Adjust thresholds based on your risk tolerance.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/meet-agent" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials" className="btn-primary">
            Back to Tutorials →
          </Link>
        </div>
      </main>
    </div>
  );
}