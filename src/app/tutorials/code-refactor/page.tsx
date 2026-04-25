import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CodeRefactor() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Refactor Code Efficiently</h1>
        <span className="badge-violet mb-8">Refactoring</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Improve your code quality with the agent's help — cleaner, faster, more maintainable.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Refactoring Tasks</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Clean up messy code</strong> — Improve readability</li>
            <li>• <strong>Extract functions</strong> — Break large functions into smaller ones</li>
            <li>• <strong>Add types</strong> — Convert to TypeScript or add type hints</li>
            <li>• <strong>Remove duplication</strong> — DRY up repeated code</li>
            <li>• <strong>Modernize syntax</strong> — Convert to newer language features</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Request Refactoring</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Paste your code</strong> — Include the file you want to improve</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Specify goals</strong> — "Make this more readable" or "Add type hints"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Mention constraints</strong> — "Keep it compatible with Python 3.8"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Ask for explanation</strong> — "Explain what changed and why"</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Example Refactoring Requests</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Refactor this function to use async/await instead of callbacks"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Convert this JavaScript to TypeScript with proper interfaces"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Extract this 200-line function into smaller, focused functions"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Refactoring Best Practices</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Always test after refactoring</li>
            <li>• Request one improvement at a time for complex changes</li>
            <li>• Ask for a diff/explanation of what changed</li>
            <li>• Keep the original for comparison</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/code-debug" className="btn-secondary">
            ← Debug Code
          </Link>
          <Link href="/tutorials/test-py" className="btn-primary">
            Next: Python Tests →
          </Link>
        </div>
      </main>
    </div>
  );
}