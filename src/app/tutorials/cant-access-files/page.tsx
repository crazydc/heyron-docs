import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CantAccessFiles() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Can't Access My Computer Files?</h1>
        <span className="badge-red mb-8">Permissions</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The agent can't read or modify files outside its workspace. Here's how to grant access.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Understanding the Security Model</h2>
          <p className="text-slate-300 mb-6">
            The agent runs in a sandboxed environment for security. It can access:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Its workspace directory (~/.openclaw/workspace/)</li>
            <li>Files you explicitly share with it</li>
            <li>System directories with elevated permissions</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Grant Access</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Copy Files to Workspace</h3>
              <p className="text-slate-400 text-sm">
                The simplest approach: copy the files you want to work with to <code className="bg-void px-2 py-1 rounded">~/.openclaw/workspace/</code>
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Use Elevated Mode</h3>
              <p className="text-slate-400 text-sm">
                For system files, ask Dale to run commands with elevated permissions. The agent will need approval.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Check Permissions</h3>
              <p className="text-slate-400 text-sm">
                Make sure the agent has read permissions on the parent directories leading to the file.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Solution</h2>
          <p className="text-slate-300">
            If you need the agent to work on a file, just copy it to the workspace first:<br/>
            <code className="bg-void px-2 py-1 rounded">cp /path/to/your/file ~/.openclaw/workspace/</code>
          </p>
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