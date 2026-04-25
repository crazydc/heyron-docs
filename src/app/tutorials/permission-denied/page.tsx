import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PermissionDenied() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Says "Permission Denied" When Saving Files?</h1>
        <span className="badge-red mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent can't save or edit files because it doesn't have permission. Here's how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Causes This?</h2>
          <p className="text-slate-300 mb-6">
            The agent is running in a sandboxed environment that doesn't have write access to certain directories. This is a security feature.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Use the Workspace Directory</h3>
              <p className="text-slate-400 text-sm">
                The agent has full access to its workspace at <code className="bg-void px-2 py-1 rounded">~/.openclaw/workspace/</code>. Save your files there.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Check File Permissions</h3>
              <p className="text-slate-400 text-sm">
                Make sure the target directory is readable and writable. The agent needs execute permission on parent directories too.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Run in Elevated Mode</h3>
              <p className="text-slate-400 text-sm">
                For system-wide changes, the agent may need elevated permissions. Ask Dale to run commands with elevated access.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Checklist</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Is the file in the workspace directory?</li>
            <li>Does the agent have read access to the parent folder?</li>
            <li>Is the file already open by another process?</li>
            <li>Do you need elevated permissions?</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/working-with-files" className="btn-primary">
            Related: Working with Files →
          </Link>
        </div>
      </main>
    </div>
  );
}