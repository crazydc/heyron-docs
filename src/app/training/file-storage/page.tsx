import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function FileStorage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/training" className="text-cyan hover:underline">← Back to Training</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 04: File Storage</h1>
        <span className="badge-mint mb-8">Active</span>

        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Set up robust file storage with GitHub so your agent can save work.
        </p>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Creating a GitHub repository for your agent</li>
            <li>• Generating a Personal Access Token</li>
            <li>• Connecting GitHub to your agent</li>
            <li>• Saving and loading files</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Step-by-Step Setup</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 1: Create GitHub Account</h3>
            <p className="text-slate-400">If you don't have one, go to <a href="https://github.com" target="_blank" className="text-cyan hover:underline">github.com</a> and sign up.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 2: Create a Repository</h3>
            <p className="text-slate-400">Create a new private repository called <code className="text-amber">heyron-backup</code> (or any name you prefer).</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 3: Generate Personal Access Token</h3>
            <ol className="mt-2 list-decimal list-inside text-slate-400">
              <li>Go to GitHub → Settings → Developer settings</li>
              <li>Click "Personal access tokens" → "Tokens (classic)"</li>
              <li>Generate new token with <code className="text-amber">repo</code> scope</li>
              <li>Copy the token immediately (you won't see it again!)</li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 4: Connect to Your Agent</h3>
            <p className="text-slate-400">Tell your agent:</p>
            <pre className="mt-2 p-3 bg-void border border-border rounded-lg text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
{`Connect to GitHub. My repository is at github.com/YOURUSERNAME/heyron-backup. My token is: ghp_xxxxxxxxxxxx`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan mb-2">Step 5: Test It</h3>
            <p className="text-slate-400">Ask your agent to save something to a file. Check your GitHub repo to confirm it worked!</p>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Congratulations! 🎉</h2>
          <p className="text-slate-300 mb-4">You've completed the core training modules. Your agent can now:</p>
          <ul className="space-y-2 text-slate-300 mb-4">
            <li>✅ Remember you across sessions</li>
            <li>✅ Respond in Discord</li>
            <li>✅ Save files to GitHub</li>
          </ul>
          <p className="text-slate-300 mb-4">Ready for more? Check out:</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/api-docs" className="btn-primary">API Docs</Link>
            <Link href="/prompts" className="btn-secondary">Prompt Library</Link>
          </div>
        </div>
      </main>
    </div>
  );
}