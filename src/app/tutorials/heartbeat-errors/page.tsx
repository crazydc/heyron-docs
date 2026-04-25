import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HeartbeatErrors() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>HEARTBEAT.md Errors?</h1>
        <span className="badge-red mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The heartbeat is throwing errors when reading HEARTBEAT.md. Here's how to debug and fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Errors</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">File Not Found</h3>
              <p className="text-slate-400 text-sm">
                The HEARTBEAT.md file doesn't exist in the workspace. Create it at <code className="bg-void px-2 py-1 rounded">~/.openclaw/workspace/HEARTBEAT.md</code>
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Invalid JSON</h3>
              <p className="text-slate-400 text-sm">
                If HEARTBEAT.md contains JSON, make sure it's valid. Check for missing quotes, commas, or brackets.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Permission Denied</h3>
              <p className="text-slate-400 text-sm">
                The agent can't read the file. Check file permissions: <code className="bg-void px-2 py-1 rounded">chmod 644 HEARTBEAT.md</code>
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Empty File</h3>
              <p className="text-slate-400 text-sm">
                The file exists but is empty. Add at least one task or checklist item.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Debug</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li>Check if the file exists: <code className="bg-void px-2 py-1 rounded">ls -la ~/.openclaw/workspace/HEARTBEAT.md</code></li>
            <li>Verify the file is readable</li>
            <li>Check for syntax errors if using JSON</li>
            <li>Look at the error message for clues</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Fix</h2>
          <p className="text-slate-300">
            If all else fails, delete and recreate the file with a simple structure.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/heartbeat-repeat" className="btn-primary">
            Related: Heartbeat Repeating →
          </Link>
        </div>
      </main>
    </div>
  );
}