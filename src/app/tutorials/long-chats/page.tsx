import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function LongChats() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Why Your Agent Gets Worse in Long Chats</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Session length, bloated chats, and how to keep progress safe. Your agent degrades over time — here's why and what to do about it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <p className="text-slate-300 mb-6">
            Large Language Models have a "context window" — a limit on how much text they can consider at once. As your conversation grows, two problems emerge:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Context Overflow</strong> — The oldest messages get pushed out when new ones arrive</li>
            <li><strong className="text-white">Signal Dilution</strong> — Important instructions get buried in noise</li>
            <li><strong className="text-white">Token Burn</strong> — Longer chats cost more to run</li>
            <li><strong className="text-white">Performance Drop</strong> — Models process more text, responses slow down</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Signs Your Chat Is Too Long</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Agent "forgets" things you discussed hours ago</li>
            <li>Responses become generic or repetitive</li>
            <li>It starts ignoring your latest instructions</li>
            <li>Responses take longer and longer</li>
            <li>You see "context limit" or "token limit" errors</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Option 1: Start Fresh</h3>
              <p className="text-slate-300 text-sm">Begin a new session. Copy the essential context (like SOUL.md or project instructions) to carry forward.</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Option 2: Summarize Mid-Chat</h3>
              <p className="text-slate-300 text-sm">Ask your agent: "Can you summarize where we are in this project? Include the key decisions and next steps."</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Option 3: Use Memory Files</h3>
              <p className="text-slate-300 text-sm">Write important context to memory files (MEMORY.md, NOTES.md) that the agent can read at the start of each session.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">The "Mid-Chat Summary" Workflow</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li>Before starting a new phase, ask: "Where are we now?"</li>
              <li>Get a summary of decisions, file states, and pending tasks</li>
              <li>Copy this to a persistent memory file</li>
              <li>Start a new session with this context</li>
              <li>Agent picks up exactly where you left off</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Prevention Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li><strong className="text-white">Break big projects into phases</strong> — Each phase = a fresh session</li>
            <li><strong className="text-white">Keep memory files updated</strong> — Don't rely on chat history alone</li>
            <li><strong className="text-white">Set session reminders</strong> — "Every 30 messages, summarize where we are"</li>
            <li><strong className="text-white">Trim unnecessary context</strong> — Remove overly verbose explanations</li>
          </ul>

          <div className="mt-6 p-4 bg-cyan/10 border border-cyan/30 rounded-lg">
            <p className="text-cyan">
              <strong className="text-white">💡 Pro Tip:</strong> Check your token usage regularly. If you're burning through tokens quickly, it's a sign your session is getting bloated.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/image-hallucination" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/restart-fresh" className="btn-primary">
            Next: Starting Fresh Without Pasting Your Entire Old Chat →
          </Link>
        </div>
      </main>
    </div>
  );
}