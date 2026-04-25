import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CodeDebug() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Debug Code with Agent</h1>
        <span className="badge-crimson mb-8">Debugging</span>
          <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Paste your code and error messages to get help debugging issues.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How to Debug Effectively</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Paste the error message</strong> — Include the full error output</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Share the relevant code</strong> — Paste the function or file causing issues</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Describe expected behavior</strong> — What should happen instead?</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Add context</strong> — What have you already tried?</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Example Debugging Requests</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"This Python code throws 'IndexError: list index out of range'. Why?"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"My React useEffect runs infinitely. Here's my code..."</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Getting 'undefined is not a function' in my JavaScript. Can you spot the issue?"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">What the Agent Can Help With</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• Syntax errors and typos</li>
            <li>• Logic errors and bugs</li>
            <li>• Type errors and null/undefined issues</li>
            <li>• Race conditions and async issues</li>
            <li>• Performance problems</li>
            <li>• Memory leaks (with proper context)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Pro Tips</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Paste the exact error message, not just "it doesn't work"</li>
            <li>• Include line numbers if available</li>
            <li>• Share what you've already tried</li>
            <li>• Ask for explanation, not just the fix</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/code-gen-javascript" className="btn-secondary">
            ← JavaScript Code
          </Link>
          <Link href="/tutorials/code-refactor" className="btn-primary">
            Next: Refactor Code →
          </Link>
        </div>
      </main>
    </div>
  );
}