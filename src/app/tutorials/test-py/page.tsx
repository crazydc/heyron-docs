import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TestPy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Generate Python Tests</h1>
        <span className="badge-mint mb-8">Testing</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Generate unit tests, integration tests, and more for your Python code.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Supported Test Frameworks</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>pytest</strong> — Most popular, recommended</li>
            <li>• <strong>unittest</strong> — Built-in Python testing</li>
            <li>• <strong>doctest</strong> — Test from docstrings</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Request Tests</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Paste your code</strong> — The function or module you want tested</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Specify the framework</strong> — "Use pytest"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>List edge cases</strong> — Any special conditions to test</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Request fixtures</strong> — If you need test data setup</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Example Test Requests</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Write pytest tests for this function covering normal cases and edge cases"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Create unittest.TestCase class for this class with mock dependencies"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Add tests for error handling - what happens with invalid input?"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">What to Test</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Happy path - normal valid inputs</li>
            <li>• Edge cases - empty input, max values</li>
            <li>• Error cases - invalid input, exceptions</li>
            <li>• Boundary conditions</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/code-refactor" className="btn-secondary">
            ← Refactor Code
          </Link>
          <Link href="/tutorials/test-js" className="btn-primary">
            Next: JavaScript Tests →
          </Link>
        </div>
      </main>
    </div>
  );
}