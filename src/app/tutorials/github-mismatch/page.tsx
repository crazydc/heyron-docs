import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function GitHubMismatch() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>GitHub File Doesn't Match Workspace?</h1>
        <span className="badge-violet mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You see a different version of a file on GitHub than what's in your local workspace. Here's why and how to sync them.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Not pushed</strong> — Local changes haven't been pushed to GitHub</li>
            <li><strong>Not pulled</strong> — Remote changes haven't been pulled locally</li>
            <li><strong>Different branch</strong> — You're looking at a different branch</li>
            <li><strong>Merge conflict</strong> — Changes weren't merged properly</li>
            <li><strong>Agent edited locally</strong> — The bot changed files but didn't commit</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Check</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check Git Status</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Run <code className="text-cyan">git status</code> in your workspace</li>
            <li>Look for modified files that haven't been committed</li>
            <li>Check for "Your branch is ahead of origin"</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Check Branch</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Run <code className="text-cyan">git branch</code> to see current branch</li>
            <li>Run <code className="text-cyan">git log --oneline -5</code> for recent commits</li>
            <li>Make sure you're on the right branch</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Compare Versions</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Local: <code className="text-cyan">cat filename</code></li>
            <li>GitHub: View file on github.com</li>
            <li>Diff: <code className="text-cyan">git diff origin/main -- filename</code></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Sync</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Option 1: Push Local Changes to GitHub</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><code className="text-cyan">git add .</code></li>
            <li><code className="text-cyan">git commit -m "Your message"</code></li>
            <li><code className="text-cyan">git push origin main</code></li>
          </ol>

          <h3 className="text-xl font-bold text-white mb-3">Option 2: Pull GitHub Changes Locally</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><code className="text-cyan">git fetch origin</code></li>
            <li><code className="text-cyan">git pull origin main</code></li>
            <li>Resolve any merge conflicts</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">When the Bot Edits Files</h2>
          <p className="text-slate-300 mb-4">
            If your AI agent edits files locally but GitHub shows old versions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>The changes need to be committed and pushed</li>
            <li>Ask the bot to commit its changes</li>
            <li>Or manually commit using git commands</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Git Workflow</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li><code className="text-cyan">git status</code> — Check what's changed</li>
            <li><code className="text-cyan">git add .</code> — Stage all changes</li>
            <li><code className="text-cyan">git commit -m "message"</code> — Commit changes</li>
            <li><code className="text-cyan">git push</code> — Push to GitHub</li>
            <li><code className="text-cyan">git pull</code> — Pull from GitHub</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            Back to All Tutorials →
          </Link>
        </div>
      </main>
    </div>
  );
}