import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DeletedFiles() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Deleted Files by Mistake?</h1>
        <span className="badge-red mb-8">Urgent</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Oh no! The agent accidentally deleted important files. Here's how to recover and prevent this.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Immediate Recovery Steps</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Check Git History</h3>
              <p className="text-slate-400 text-sm">
                If the project is in git, recover the file:<br/>
                <code className="bg-void px-2 py-1 rounded">git checkout HEAD -- path/to/file.ts</code>
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Use Trash Instead of Delete</h3>
              <p className="text-slate-400 text-sm">
                The agent should use <code className="bg-void px-2 py-1 rounded">trash</code> instead of <code className="bg-void px-2 py-1 rounded">rm</code> when available. Files go to trash where they can be recovered.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Check Backups</h3>
              <p className="text-slate-400 text-sm">
                Look for backup files (often ending in <code className="bg-void px-2 py-1 rounded">.backup</code>, <code className="bg-void px-2 py-1 rounded">.old</code>, or <code className="bg-void px-2 py-1 rounded">~</code>).
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Prevent This</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Tell the agent to always use <code className="bg-void px-2 py-1 rounded">trash</code> instead of <code className="bg-void px-2 py-1 rounded">rm</code></li>
            <li>Initialize git and commit regularly</li>
            <li>Add a safety rule: "Always ask before deleting files"</li>
            <li>Keep backups of important files</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Safety Command</h2>
          <p className="text-slate-300">
            Add this to your agent's instructions:<br/>
            <code className="bg-void px-2 py-1 rounded text-cyan">"Use trash instead of rm for all file deletions. Ask before deleting files outside the workspace."</code>
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/file-best-practices" className="btn-primary">
            Related: File Best Practices →
          </Link>
        </div>
      </main>
    </div>
  );
}