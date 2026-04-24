import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SavedWork() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/training" className="text-cyan hover:underline">← Back to Training</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 06: Saved Work & Backup</h1>
        <span className="badge-mint mb-8">Active</span>

        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Ensure your agent's work is saved and backed up — never lose important data.
        </p>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why This Matters</h2>
          <p className="text-slate-400 mb-4">
            By default, files your agent creates are stored on the VPS (virtual private server). 
            If the server is restarted or has issues, those files could be lost.
          </p>
          <p className="text-slate-400">
            This module ensures your important work is always backed up to GitHub.
          </p>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Setting Up Automatic Backups</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 1: Configure GitHub (from Module 04)</h3>
            <p className="text-slate-400">
              Make sure you've already connected GitHub to your agent. If not, 
              go back to <Link href="/training/file-storage" className="text-cyan hover:underline">Module 04</Link> first.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 2: Tell Your Agent to Auto-Save</h3>
            <p className="text-slate-400 mb-2">Ask your agent:</p>
            <pre className="p-3 bg-void border border-border rounded-lg text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Automatically save any important files I create to GitHub.

Use this structure:
/memory/backups/[date]/[filename]

Also save a daily summary of my preferences and settings."`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan mb-2">Step 3: Verify Backups</h3>
            <p className="text-slate-400">
              Periodically check your GitHub repository to confirm files are being saved correctly.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
          <ul className="space-y-3 text-slate-300">
            <li>📁 <strong>Organize files</strong> — Use clear folder structures (notes/, projects/, configs/)</li>
            <li>💾 <strong>Daily backups</strong> — Set up a daily cron job to save important data</li>
            <li>🔄 <strong>Version control</strong> — GitHub keeps history, so you can revert if needed</li>
            <li>🔒 <strong>Sensitive data</strong> — Don't store passwords or API keys in GitHub</li>
            <li>📋 <strong>Regular reviews</strong> — Check monthly that backups are working</li>
          </ul>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Recovery Checklist</h2>
          <p className="text-slate-400 mb-4">If you ever need to restore your agent:</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>Re-connect GitHub to your agent</li>
            <li>Pull down your saved files from GitHub</li>
            <li>Restore SOUL.md, MEMORY.md, and IDENTITY.md</li>
            <li>Ask your agent to read its personality and memory files</li>
            <li>Verify everything is working</li>
          </ol>
        </div>
      </main>
    </div>
  );
}