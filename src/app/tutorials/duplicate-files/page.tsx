import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DuplicateFiles() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Keeps Creating Duplicate Files?</h1>
        <span className="badge-yellow mb-8">Common Issue</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The agent keeps creating new files instead of editing existing ones. Here's how to stop the duplication.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <p className="text-slate-300 mb-6">
            The agent may not know a file already exists, or it may be confused about the file path. Sometimes it creates backups or variations instead of editing the original.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Specify the Exact File Path</h3>
              <p className="text-slate-400 text-sm">
                Tell the agent exactly where the file is: <code className="bg-void px-2 py-1 rounded">/root/.openclaw/workspace/my-project/src/App.tsx</code>
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Use BEST_PRACTICES.md</h3>
              <p className="text-slate-400 text-sm">
                Create a <code className="bg-void px-2 py-1 rounded">BEST_PRACTICES.md</code> file in your project root that tells the agent your preferred file structure and naming conventions.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Check Existing Files First</h3>
              <p className="text-slate-400 text-sm">
                Ask the agent to list files in the directory first to see what's already there before making changes.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">4. Delete Duplicate Files</h3>
              <p className="text-slate-400 text-sm">
                If duplicates already exist, ask the agent to remove them: <code className="bg-void px-2 py-1 rounded">rm filename.backup.ts</code>
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Prevention Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Always point to the exact file path</li>
            <li>Create BEST_PRACTICES.md for your projects</li>
            <li>Tell the agent "edit existing files, don't create new ones"</li>
            <li>Review file changes before accepting them</li>
          </ul>
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