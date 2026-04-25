import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RestartFresh() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Starting Fresh Without Pasting Your Entire Old Chat</h1>
        <span className="badge-mint mb-8">Productivity</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You need a fresh session but don't want to re-type everything. Here's how to carry forward only what matters.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <p className="text-slate-300 mb-6">
            Long chats get slow and buggy. You want to start fresh, but pasting your entire chat history defeats the purpose. You need a lighter way to transfer context.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">The Solution: Context Carry-Over</h2>
          <p className="text-slate-300 mb-6">
            Instead of pasting everything, extract only the essential information your new session needs.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">What to Carry Forward</h2>
          <div className="space-y-3 mb-6">
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">🎯 Project State</h3>
              <p className="text-slate-300 text-sm">Current files, what's done, what's pending, any errors or blockers</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">📋 Key Decisions</h3>
              <p className="text-slate-300 text-sm">Architecture choices, feature implementations, what you decided against</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">🔧 Configuration</h3>
              <p className="text-slate-300 text-sm">API keys, environment variables, tool settings</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">📝 Instructions</h3>
              <p className="text-slate-300 text-sm">Special preferences, patterns to follow, things to avoid</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Step-by-Step Workflow</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Ask for a summary</strong> — "Give me a concise status of where we are"</li>
            <li><strong className="text-white">Copy key points</strong> — Note decisions, file states, and pending tasks</li>
            <li><strong className="text-white">Start new session</strong> — Use /new or the dashboard reset</li>
            <li><strong className="text-white">Provide context first</strong> — Paste your notes at the start</li>
            <li><strong className="text-white">Continue from there</strong> — Fresh agent with all the context it needs</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Template for Context Transfer</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <pre className="text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Project Context (Transfer from previous session)

## Where We Left Off
- [What was being worked on]
- [Last action taken]

## Current State
- Files: [list important files]
- Status: [working / blocked / testing]

## Key Decisions Made
1. [Decision 1]
2. [Decision 2]

## Next Steps
- [Immediate next action]
- [Things pending]

## Notes
- [Any warnings or gotchas]`}
            </pre>
          </div>

          <div className="mt-6 p-4 bg-cyan/10 border border-cyan/30 rounded-lg">
            <p className="text-cyan">
              <strong className="text-white">💡 Pro Tip:</strong> Create a MEMORY.md file in your workspace. Update it after every session. Future sessions can just read this one file to get up to speed.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/long-chats" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/new-not-responding" className="btn-primary">
            Next: Used /new and Now Your Bot Won't Respond? →
          </Link>
        </div>
      </main>
    </div>
  );
}