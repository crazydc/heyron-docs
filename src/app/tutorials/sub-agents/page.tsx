import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SubAgents() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>How to Use Sub-Agents Without Chaos</h1>
        <span className="badge-cyan mb-8">Advanced</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Delegate work safely with a manager+workers pattern. Sub-agents let you split complex tasks into manageable chunks.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Are Sub-Agents?</h2>
          <p className="text-slate-300 mb-6">
            Sub-agents are child sessions that your main agent can spawn to handle specific tasks. Think of it as a manager delegating work to specialists — your main agent coordinates, while sub-agents handle the details.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">When to Use Sub-Agents</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Breaking large tasks into smaller pieces</li>
            <li>Running parallel research on different topics</li>
            <li>Isolating experimental or risky operations</li>
            <li>Keeping complex workflows organized</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">The Manager+Workers Pattern</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 mb-4">
              <strong className="text-white">Manager Agent</strong> — Your main agent that coordinates the overall task
            </p>
            <p className="text-slate-300 mb-4">
              <strong className="text-white">Worker Agents</strong> — Sub-agents that handle specific subtasks
            </p>
            <p className="text-slate-300">
              The manager breaks down the task, assigns workers, collects results, and synthesizes the final output.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Use Them</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>Identify a task that can be broken into independent pieces</li>
            <li>Tell your main agent: "Use sub-agents to handle X, Y, and Z in parallel"</li>
            <li>Give each sub-agent a clear, focused goal</li>
            <li>Review the combined results from all workers</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4 mt-6">Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li><strong className="text-white">Give clear boundaries</strong> — Each sub-agent should know exactly what it owns</li>
            <li><strong className="text-white">Avoid overlap</strong> — Prevent duplicate work by defining clear territories</li>
            <li><strong className="text-white">Review outputs</strong> — The manager should validate and synthesize results</li>
            <li><strong className="text-white">Keep it simple</strong> — Don't spawn more sub-agents than necessary</li>
          </ul>

          <div className="mt-6 p-4 bg-amber/10 border border-amber/30 rounded-lg">
            <p className="text-amber">
              <strong className="text-white">⚠️ Watch Out:</strong> Too many sub-agents can create confusion. Start with 2-3 workers and scale up only when needed.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/dashboard-guide" className="btn-primary">
            Next: Your Dashboard — Every Button Explained →
          </Link>
        </div>
      </main>
    </div>
  );
}