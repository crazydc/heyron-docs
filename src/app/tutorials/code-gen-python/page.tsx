import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CodeGenPython() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Generate Python Code</h1>
        <span className="badge-amber mb-8">Code Generation</span>
        <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent can write Python code for you. Learn how to get the best results.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Basic Code Generation</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Write a Python function to calculate factorial"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Create a Python class for handling API requests"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Writing Effective Prompts</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Specify the goal</strong> — What should the code do?</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Include requirements</strong> — Any libraries, Python version, style preferences</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Add context</strong> — Is this for web, data science, scripts?</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Request documentation</strong> — Ask for comments and docstrings</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Example: Complete Feature</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Write a Python script that:</p>
            <p className="text-slate-300 font-mono text-sm">- Connects to a PostgreSQL database</p>
            <p className="text-slate-300 font-mono text-sm">- Fetches all users from the 'users' table</p>
            <p className="text-slate-300 font-mono text-sm">- Exports them to a CSV file</p>
            <p className="text-slate-300 font-mono text-sm">- Use async/await and python-dotenv"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Code Style Preferences</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Type hints</strong> — "Add type annotations to all functions"</li>
            <li>• <strong>Docstrings</strong> — "Use Google-style docstrings"</li>
            <li>• <strong>Error handling</strong> — "Add proper try/except blocks"</li>
            <li>• <strong>Testing</strong> — "Include basic unit tests with pytest"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">After Generation</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Review the code and ask for modifications</li>
            <li>• Request explanations of complex parts</li>
            <li>• Ask to add error handling or edge cases</li>
            <li>• Have the agent save it to a file</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/translation-service" className="btn-secondary">
            ← Translation
          </Link>
          <Link href="/tutorials/code-gen-javascript" className="btn-primary">
            Next: JavaScript →
          </Link>
        </div>
      </main>
    </div>
  );
}