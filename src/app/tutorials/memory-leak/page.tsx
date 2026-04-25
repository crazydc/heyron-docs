import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MemoryLeak() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Memory Growing Unbounded?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent's memory keeps growing and you need to stop it before it consumes all available resources.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What's Happening</h2>
          <p className="text-slate-300 mb-6">
            OpenClaw maintains conversation history for context. If left unchecked, this can grow indefinitely, causing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Slow responses as the model processes more history</li>
            <li>Higher token costs</li>
            <li>Potential memory exhaustion on your server</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">Option 1: Start Fresh with /new</h3>
          <p className="text-slate-300 mb-4">
            Use the <code className="bg-surface px-2 py-1 rounded">/new</code> command in Discord to start a completely fresh conversation. This clears all accumulated memory.
          </p>

          <h3 className="text-xl font-bold text-cyan mb-3">Option 2: Restart the Gateway</h3>
          <p className="text-slate-300 mb-4">
            Restarting the OpenClaw gateway clears all session memory:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`openclaw gateway restart`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Option 3: Set Memory Limits</h3>
          <p className="text-slate-300 mb-4">
            Configure memory limits in your config to automatically truncate old sessions.
          </p>

          <h3 className="text-xl font-bold text-cyan mb-3">Option 4: Use External Memory Files</h3>
          <p className="text-slate-300 mb-4">
            Save important information to <code className="text-cyan">MEMORY.md</code> or project-specific files. This persists across restarts and gives you control over what to keep.
          </p>
        </div>

        <div className="glass-panel p-4 mb-8 bg-crimson/10 border-crimson/30">
          <h3 className="text-lg font-bold text-crimson mb-2">⚠️ Pro Tip</h3>
          <p className="text-slate-300">
            If you notice your agent responding slowly, check first if memory has grown unbounded. A quick <code className="text-cyan">/new</code> can often restore performance.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/context-limit" className="btn-primary">
            Next: Context Limit Exceeded →
          </Link>
        </div>
      </main>
    </div>
  );
}