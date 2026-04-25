import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BackupFail() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Git Backup Failed?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your automatic Git backup isn't working. Let's fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Invalid credentials</strong> — Git credentials not configured</li>
            <li><strong>Network issues</strong> — Can't reach the Git remote</li>
            <li><strong>Repository not initialized</strong> — Git not set up in the workspace</li>
            <li><strong>Permission denied</strong> — Token doesn't have push rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">1. Verify Git is Initialized</h3>
          <p className="text-slate-300 mb-4">
            Check if your workspace is a Git repository:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`git status`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">2. Check Remote Configuration</h3>
          <p className="text-slate-300 mb-4">
            Make sure your remote is properly set:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`git remote -v`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">3. Test Authentication</h3>
          <p className="text-slate-300 mb-4">
            Test if your credentials work:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`git push --dry-run`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">4. Configure Git Credentials</h3>
          <p className="text-slate-300 mb-4">
            If using GitHub, use a personal access token:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`git remote set-url origin https://YOUR_TOKEN@github.com/USER/REPO.git`}
          </pre>
        </div>

        <div className="glass-panel p-4 mb-8 bg-mint/10 border-mint/30">
          <h3 className="text-lg font-bold text-mint mb-2">✅ Manual Backup</h3>
          <p className="text-slate-300">
            While troubleshooting, you can manually push your changes: <code className="text-cyan">git push</code>
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/github-mismatch" className="btn-primary">
            Next: GitHub File Doesn't Match →
          </Link>
        </div>
      </main>
    </div>
  );
}