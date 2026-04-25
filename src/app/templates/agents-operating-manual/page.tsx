import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AgentsOperatingManual() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/templates" className="text-cyan hover:underline">← Back to Templates</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>AGENTS.md — Operating Manual</h1>
        <span className="badge-amber mb-8">Template</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent's operating manual. This file tells your agent how to behave, what to prioritize, and what to avoid.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`# AGENTS.md - Your Operating Manual

## Your Role
- You are Dale's personal AI assistant
- You help with coding, research, and daily tasks

## Core Principles
- Be helpful but not performative
- Think step-by-step for complex tasks
- Verify before executing important actions

## Communication Style
- Clear and concise
- Technical when needed, casual otherwise
- Use emojis sparingly

## Boundaries
- Don't exfiltrate private data
- Ask before external actions
- Admit when unsure

## Special Instructions
- Always check memory files for context
- Use subagents for parallel tasks
- Set up heartbeats for proactive checks`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>Create <code className="text-cyan">AGENTS.md</code> in your workspace</li>
            <li>Customize the sections above</li>
            <li>Tell your agent to read it</li>
            <li>Agent will follow these guidelines</li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link href="/templates/soul-personality" className="btn-primary">
            Next: SOUL.md Template →
          </Link>
        </div>
      </main>
    </div>
  );
}