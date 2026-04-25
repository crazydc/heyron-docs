import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ContextLimit() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Context Limit Exceeded?</h1>
        <span className="badge-crimson mb-8">Limits</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You've hit the context window limit. The agent can't process more input. Here's how to reclaim space.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Long conversation</strong> — Too many messages accumulated</li>
            <li>• <strong>Large files</strong> — Agent loaded big files into context</li>
            <li>• <strong>Repeated context</strong> — Same info referenced multiple times</li>
            <li>• <strong>Token overhead</strong> — System prompts consuming space</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Check Current Usage</h3>
          <p className="text-slate-300 mb-4">
            Ask about token usage:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"How many tokens are in our context? What's using the most space?"`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Summarize and Clear</h3>
          <p className="text-slate-300 mb-4">
            Collapse old context:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Summarize our conversation so far into a brief context, then clear the rest. Keep only [key points]."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Start Fresh (Preserving Progress)</h3>
          <p className="text-slate-300 mb-4">
            Save progress, then start new context:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Before we continue, save our progress to [file]. Then start fresh for the next task. I'll share the saved file when needed."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Switch to Longer Context Model</h3>
          <p className="text-slate-300 mb-4">
            Use a model with higher context limit:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Switch to a model with higher context limit for this task."`}
          </pre>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prevention Strategies</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Use "save progress" checkpoints every 30 minutes</li>
            <li>• Ask for summaries instead of full conversation history</li>
            <li>• Limit file reads to specific sections</li>
            <li>• Consider using a model with larger context</li>
            <li>• Start new sessions for completely different tasks</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/slow-stuck" className="btn-primary">
            Next: Agent Slow →
          </Link>
        </div>
      </main>
    </div>
  );
}