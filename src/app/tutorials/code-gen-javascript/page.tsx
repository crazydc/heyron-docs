import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CodeGenJavaScript() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Generate JavaScript Code</h1>
        <span className="badge-amber mb-8">Code Generation</span>
        <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent can write JavaScript code for Node.js, browsers, and frameworks.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Basic Code Generation</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Write a JavaScript function to debounce user input"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Create a JavaScript class for handling localStorage"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Specifying the Environment</h2>
          <p className="text-slate-300 mb-4">Always specify where your code will run:</p>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Node.js</strong> — "Write a Node.js script to read a JSON file"</li>
            <li>• <strong>Browser</strong> — "Create a vanilla JS function for the browser"</li>
            <li>• <strong>React</strong> — "Write a React hooks for data fetching"</li>
            <li>• <strong>TypeScript</strong> — "Use TypeScript with proper interfaces"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Example: Complete Feature</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Write a Node.js Express route that:</p>
            <p className="text-slate-300 font-mono text-sm">- Accepts POST requests to /api/users</p>
            <p className="text-slate-300 font-mono text-sm">- Validates the request body</p>
            <p className="text-slate-300 font-mono text-sm">- Saves to MongoDB using Mongoose</p>
            <p className="text-slate-300 font-mono text-sm">- Returns the created user"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Framework-Specific Requests</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>React</strong> — "Create a functional component with useState and useEffect"</li>
            <li>• <strong>Next.js</strong> — "Write a Next.js API route with proper error handling"</li>
            <li>• <strong>Node/Express</strong> — "Create middleware for JWT authentication"</li>
            <li>• <strong>Vanilla JS</strong> — "Write a JavaScript module (no framework)"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
          <ol className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Specify JavaScript or TypeScript</strong> — TypeScript catches bugs early</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Name the framework</strong> — "Use React 18 with functional components"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Include error handling</strong> — Always request proper error handling</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Ask for imports</strong> — Specify which npm packages to use</div>
            </li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/code-gen-python" className="btn-secondary">
            ← Python Code
          </Link>
          <Link href="/tutorials/code-debug" className="btn-primary">
            Next: Debug Code →
          </Link>
        </div>
      </main>
    </div>
  );
}