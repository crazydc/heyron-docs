import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DocMarkdown() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Generate Markdown Docs</h1>
        <span className="badge-cyan mb-8">Documentation</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent can create professional documentation in Markdown format.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Documentation Types</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>README files</strong> — Project overviews and setup instructions</li>
            <li>• <strong>API docs</strong> — Endpoint documentation with examples</li>
            <li>• <strong>Code comments</strong> — Docstrings and inline explanations</li>
            <li>• <strong>Architecture docs</strong> — System design and flow diagrams</li>
            <li>• <strong>Changelogs</strong> — Version history and release notes</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Request Documentation</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Specify the type</strong> — "Write a README for this project"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Include code context</strong> — Paste relevant files</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Target audience</strong> — "For new developers" vs "For API users"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Format requirements</strong> — "Include code examples in each section"</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Example Documentation Requests</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Write a comprehensive README for this Python project"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Create API documentation for these Express routes"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Add JSDoc comments to this JavaScript module"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Documentation Tips</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Be specific about what the docs should cover</li>
            <li>• Ask for code examples where helpful</li>
            <li>• Request a table of contents for long docs</li>
            <li>• Have the agent save directly to a .md file</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/test-js" className="btn-secondary">
            ← JavaScript Tests
          </Link>
          <Link href="/tutorials/api-keys" className="btn-primary">
            Next: API Keys →
          </Link>
        </div>
      </main>
    </div>
  );
}