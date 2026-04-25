import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function OverEditing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Keeps Changing Too Much?</h1>
        <span className="badge-violet mb-8">Behavior</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent is making too many edits, reworking things that were already fine, or constantly "improving" stable code. Here's how to get it to chill.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Vague constraints</strong> — You didn't set clear boundaries on what's "good enough"</li>
            <li>• <strong>Perfectionism drift</strong> — The agent keeps optimizing beyond what's needed</li>
            <li>• <strong>Context saturation</strong> — Too much history makes the agent re-evaluate past decisions</li>
            <li>• <strong>Missing validation criteria</strong> — No clear definition of "done"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Set Explicit Boundaries</h3>
          <p className="text-slate-300 mb-4">
            Tell the agent exactly when to stop:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Make exactly these 3 changes and nothing else. Do not refactor or improve unrelated code."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Use "Good Enough" Language</h3>
          <p className="text-slate-300 mb-4">
            Be explicit that you want minimal changes:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Fix only the bug. Do not make style changes, refactor, or add new features. Ship it as-is."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Snapshot Before Changes</h3>
          <p className="text-slate-300 mb-4">
            Create checkpoints so you can roll back:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Before making any changes, save the current state. Then make changes and show me a diff."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Clear Context</h3>
          <p className="text-slate-300 mb-4">
            If the agent is stuck in re-evaluation mode, start fresh:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Forget previous context. Start fresh with just this task: [specific task]"`}
          </pre>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Pro Tips</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Use numbered lists in your requests to limit scope</li>
            <li>• Say "no refactoring" explicitly — agents love to refactor</li>
            <li>• Break large tasks into smaller, single-purpose requests</li>
            <li>• Review diffs before approving any multi-file changes</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/tools-disappeared" className="btn-primary">
            Next: Tools Disappeared →
          </Link>
        </div>
      </main>
    </div>
  );
}