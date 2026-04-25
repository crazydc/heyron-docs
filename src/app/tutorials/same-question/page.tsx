import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SameQuestion() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Keeps Asking the Same Question?</h1>
        <span className="badge-yellow mb-8">Common Issue</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The agent keeps asking the same question over and over. It's forgetting your answers. Here's the fix.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <p className="text-slate-300 mb-6">
            The agent has a limited context window and may lose track of information shared earlier in the conversation. Each session starts fresh.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Update USER.md</h3>
              <p className="text-slate-400 text-sm">
                Tell the agent about yourself once in <code className="bg-void px-2 py-1 rounded">~/.openclaw/workspace/USER.md</code>. It loads this every session.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Write It Down in Memory</h3>
              <p className="text-slate-400 text-sm">
                Important info should go in <code className="bg-void px-2 py-1 rounded">memory/YYYY-MM-DD.md</code> or <code className="bg-void px-2 py-1 rounded">MEMORY.md</code>. The agent reads these on startup.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Be Explicit</h3>
              <p className="text-slate-400 text-sm">
                Say: "Remember this for future sessions" when sharing important info. The agent will save it to memory.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">4. Check Context Limits</h3>
              <p className="text-slate-400 text-sm">
                If the conversation is very long, start a new session. The agent may be losing context.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">What to Include in USER.md</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Your name and pronouns</li>
            <li>Your timezone</li>
            <li>Projects you're working on</li>
            <li>Important preferences</li>
            <li>Things you want the agent to remember</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/memory-works" className="btn-primary">
            Related: How Memory Works →
          </Link>
        </div>
      </main>
    </div>
  );
}