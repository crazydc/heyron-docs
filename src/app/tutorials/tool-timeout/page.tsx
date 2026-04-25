import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ToolTimeout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Tool Execution Timeout?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A tool took too long to execute and timed out. Here's how to handle it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Timeouts</h2>
          <p className="text-slate-300 mb-6">
            Tools have a maximum execution time to prevent your agent from hanging indefinitely. Common causes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Large file operations (reading/writing big files)</li>
            <li>Slow network requests to external APIs</li>
            <li>Complex shell commands that take time to complete</li>
            <li>Long-running processes like database queries</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">1. Break Down the Task</h3>
          <p className="text-slate-300 mb-4">
            Instead of one large operation, break it into smaller steps. This gives each piece time to complete.
          </p>

          <h3 className="text-xl font-bold text-cyan mb-3">2. Increase Timeout Settings</h3>
          <p className="text-slate-300 mb-4">
            If you're running locally, you can adjust timeout settings in your config:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Increase tool timeout (in seconds)
TOOL_TIMEOUT=120`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">3. Use Background Execution</h3>
          <p className="text-slate-300 mb-4">
            For long-running tasks, run them in the background:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`your-long-command &
# Get the PID and wait for it`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">4. Simplify the Command</h3>
          <p className="text-slate-300 mb-4">
            Review if you can simplify what you're asking. Often a complex command can be broken into simpler steps.
          </p>
        </div>

        <div className="glass-panel p-4 mb-8 bg-cyan/10 border-cyan/30">
          <h3 className="text-lg font-bold text-cyan mb-2">💡 Quick Fix</h3>
          <p className="text-slate-300">
            Ask your agent to break complex tasks into smaller steps with explicit waits between them. This often solves timeout issues without config changes.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/slow-stuck" className="btn-primary">
            Next: Agent Feels Slow or Stuck →
          </Link>
        </div>
      </main>
    </div>
  );
}