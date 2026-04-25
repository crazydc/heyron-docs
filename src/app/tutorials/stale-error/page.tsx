import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function StaleError() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Fixed It, But Still Seeing the Old Error?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You fixed the error in your code/files, but the agent still sees the old version. Here's how to sync up.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Context caching</strong> — Agent is reading from cached/stale context</li>
            <li>• <strong>File not re-read</strong> — Agent didn't reload the file after changes</li>
            <li>• <strong>Session persistence</strong> — Old error is stuck in conversation history</li>
            <li>• <strong>Build artifact</strong> — Compiled output is outdated, not the source</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Force a Re-read</h3>
          <p className="text-slate-300 mb-4">
            Ask the agent to explicitly re-read the file:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Re-read the file at [path]. Show me the current state of [specific section]."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Clear Error from Context</h3>
          <p className="text-slate-300 mb-4">
            Explicitly clear the old error from context:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Forget that previous error. The issue is fixed. Let's start fresh - read [file] and confirm it's correct now."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Rebuild or Restart</h3>
          <p className="text-slate-300 mb-4">
            If it's a build artifact, rebuild:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Rebuild the project to ensure we're using the latest code. Then verify the error is gone."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Start a New Session</h3>
          <p className="text-slate-300 mb-4">
            If all else fails, start fresh:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Start a new session context. Clear all history and begin fresh with the current codebase."`}
          </pre>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prevention Tips</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• After fixing errors, explicitly tell the agent it's resolved</li>
            <li>• Always rebuild/refresh after code changes</li>
            <li>• Use "show me the current state" to verify</li>
            <li>• Consider starting fresh sessions for major fixes</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/slow-stuck" className="btn-primary">
            Next: Agent Slow →
          </Link>
        </div>
      </main>
    </div>
  );
}