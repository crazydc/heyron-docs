import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HeartbeatRepeat() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Heartbeat Keeps Repeating Old Tasks?</h1>
        <span className="badge-yellow mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The heartbeat keeps doing the same tasks over and over. It forgets what's already done. Here's how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <p className="text-slate-300 mb-6">
            The heartbeat doesn't maintain state between runs. It reads the same HEARTBEAT.md each time and doesn't know what's already been completed.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Track State in a File</h3>
              <p className="text-slate-400 text-sm">
                Create a <code className="bg-void px-2 py-1 rounded">heartbeat-state.json</code> file to track what was done. Update it after each task.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Clear the Task List</h3>
              <p className="text-slate-400 text-sm">
                After completing tasks in HEARTBEAT.md, remove or comment them out so they don't run again.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Use Timestamps</h3>
              <p className="text-slate-400 text-sm">
                Add "last checked" timestamps to tasks so the agent knows when it last ran them.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">State File Example</h2>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 overflow-x-auto text-sm">
{`{
  "lastChecks": {
    "email": 1703275200,
    "calendar": 1703260800,
    "weather": null
  }
}`}
          </pre>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/heartbeat-errors" className="btn-primary">
            Related: HEARTBEAT.md Errors →
          </Link>
        </div>
      </main>
    </div>
  );
}