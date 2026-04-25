import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function OldVersion() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Updated File But Agent Uses Old Version?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Fix stale-file confusion with a versioning workflow. Your agent sometimes "forgets" updates — here's why and how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <p className="text-slate-300 mb-6">
            Your agent reads files at the start of a session or when explicitly prompted. If you've edited a file since the last time your agent read it, it won't automatically know about the changes. This is called "stale cache" — the agent is working with an old copy.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Tell If It's Stale</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Agent references old content you definitely deleted</li>
            <li>Claims something isn't in the file when you can see it</li>
            <li>Mentions dates or version numbers that are outdated</li>
            <li>Ignores changes you just made</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Fix: Force a Re-read</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300">
              Simply ask your agent to re-read the file:
            </p>
            <pre className="mt-3 p-3 bg-surface rounded text-sm text-cyan" style={{ fontFamily: 'var(--font-mono)' }}>
&quot;Please re-read [filename] — I've made changes since the last time you looked at it.&quot;
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Preventing Stale Files</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Tell the agent to read files after editing</strong> — Say "read this file" immediately after making changes</li>
            <li><strong className="text-white">Use version suffixes</strong> — "config-v2.yaml" makes it clear which version is current</li>
            <li><strong className="text-white">Add a "last updated" note</strong> — Put a date at the top of important files</li>
            <li><strong className="text-white">Start fresh sessions for big changes</strong> — A new session forces a clean read</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Versioning Workflow</h2>
          <div className="bg-void border border-border rounded-lg p-4">
            <div className="space-y-2 text-slate-300">
              <p><strong className="text-white">Step 1:</strong> Rename old file to <code className="text-cyan">file-v1.yaml</code></p>
              <p><strong className="text-white">Step 2:</strong> Create new file as <code className="text-cyan">file-v2.yaml</code></p>
              <p><strong className="text-white">Step 3:</strong> Tell agent: "I'm working with file-v2.yaml now"</p>
              <p><strong className="text-white">Step 4:</strong> Agent will naturally use the new file</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-cyan/10 border border-cyan/30 rounded-lg">
            <p className="text-cyan">
              <strong className="text-white">💡 Pro Tip:</strong> Keep a CHANGELOG.md file in your project root. When you make important changes, note them there with a date. Your agent can check this to stay current.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/dashboard-guide" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/agent-edited-wrong-file" className="btn-primary">
            Next: Agent Edited the Wrong File? →
          </Link>
        </div>
      </main>
    </div>
  );
}