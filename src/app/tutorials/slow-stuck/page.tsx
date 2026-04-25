import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SlowStuck() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Feels Slow or Stuck?</h1>
        <span className="badge-amber mb-8">Performance</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent is taking forever to respond, appears frozen, or keeps spinning without output. Let's get it moving again.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Token overflow</strong> — Context is too large, agent is processing too much</li>
            <li>• <strong>Tool timeout</strong> — A tool is waiting for external response</li>
            <li>• <strong>Model overload</strong> — Server is overloaded with requests</li>
            <li>• <strong>Infinite loop</strong> — Agent is trapped in circular reasoning</li>
            <li>• <strong>Network issues</strong> — Connection to API or tools is slow</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Interrupt and Redirect</h3>
          <p className="text-slate-300 mb-4">
            Stop the current loop and give a new direction:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Stop. Clear everything. Start fresh with [specific simple task]."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Check Context Size</h3>
          <p className="text-slate-300 mb-4">
            Ask about current context usage:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Tell me how many tokens are in our context right now. Give me a number."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Switch Models</h3>
          <p className="text-slate-300 mb-4">
            If one model is slow, try a faster alternative:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Switch to a faster model for this task. Use [model name]."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Simplify Your Request</h3>
          <p className="text-slate-300 mb-4">
            Break down complex tasks into smaller steps:
          </p>
          <ul className="space-y-2 text-slate-300 mb-4 ml-4">
            <li>• One task at a time</li>
            <li>• No multi-file glob patterns</li>
            <li>• No "analyze everything" requests</li>
            <li>• Explicit output format</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prevention</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Keep context trimmed — summarize old conversations</li>
            <li>• Use streaming for long outputs</li>
            <li>• Set explicit timeouts in skills</li>
            <li>• Monitor token usage regularly</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/context-limit" className="btn-primary">
            Next: Context Limit →
          </Link>
        </div>
      </main>
    </div>
  );
}