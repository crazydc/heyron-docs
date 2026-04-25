import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TestJs() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Generate JavaScript Tests</h1>
        <span className="badge-mint mb-8">Testing</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Generate tests for your JavaScript, TypeScript, React, and Node.js code.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Supported Test Frameworks</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Jest</strong> — Most popular for JavaScript/TypeScript</li>
            <li>• <strong>Vitest</strong> — Modern alternative, faster</li>
            <li>• <strong>Mocha + Chai</strong> — Flexible and widely used</li>
            <li>• <strong>React Testing Library</strong> — For React components</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Framework-Specific Tests</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>React</strong> — "Use React Testing Library for component tests"</li>
            <li>• <strong>Node.js</strong> — "Write Jest tests for this Express route with supertest"</li>
            <li>• <strong>Vanilla JS</strong> — "Create pure unit tests with Jest"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Example Test Requests</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Write Jest tests for this utility function with mocks"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Create React Testing Library tests for this component"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Write integration tests for this API endpoint using supertest"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Testing Best Practices</h2>
          <ol className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Name the framework</strong> — Specify Jest, Vitest, etc.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Mock dependencies</strong> — External APIs, databases need mocking</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Test edge cases</strong> — Null, undefined, empty arrays</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Run tests before commit</strong> — Always verify they pass</div>
            </li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/test-py" className="btn-secondary">
            ← Python Tests
          </Link>
          <Link href="/tutorials/doc-markdown" className="btn-primary">
            Next: Markdown Docs →
          </Link>
        </div>
      </main>
    </div>
  );
}