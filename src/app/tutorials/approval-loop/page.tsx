import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ApprovalLoop() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Approval Keeps Coming Back?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent asks for approval on the same thing repeatedly, even after you approved it. Here's how to break the loop.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Noisy context</strong> — The approval history is cluttered, causing the agent to re-ask</li>
            <li>• <strong>Vague constraints</strong> — You said "yes" but didn't specify "always allow this type"</li>
            <li>• <strong>Skill misconfiguration</strong> — The skill keeps triggering approval checks</li>
            <li>• <strong>Session reset</strong> — The agent lost memory of your previous approval</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Be Explicit</h3>
          <p className="text-slate-300 mb-4">
            Instead of just "yes", be specific about future permissions:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Yes, and remember: always allow [specific action] without asking again this session."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Clear the Approval Queue</h3>
          <p className="text-slate-300 mb-4">
            Tell the agent to clear pending approvals:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Clear all pending approvals. From now on, only ask for approval when [specific condition]."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Check Skill Settings</h3>
          <p className="text-slate-300 mb-4">
            Some skills have built-in approval requirements. Review your active skills and disable unnecessary approval checks.
          </p>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Use Hardened Approvals</h3>
          <p className="text-slate-300 mb-4">
            If you're using security-hardened agents, approval loops are more common. Consider creating a less restrictive profile for trusted workflows.
          </p>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prevention Tips</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Always specify scope when approving ("this file only" vs "all files")</li>
            <li>• Use session-long permissions when appropriate</li>
            <li>• Review your agent's permission boundaries regularly</li>
            <li>• Keep your constraints document updated</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/slow-stuck" className="btn-primary">
            Next: Agent Feels Slow →
          </Link>
        </div>
      </main>
    </div>
  );
}