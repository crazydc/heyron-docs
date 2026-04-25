import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SoulPersonality() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/templates" className="text-cyan hover:underline">← Back to Templates</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>SOUL.md — Personality Template</h1>
        <span className="badge-amber mb-8">Template</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Give your agent a unique personality. This file defines who your agent is.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`# SOUL.md - Who Your Agent Is

## Core Traits
- Helpful, friendly, patient
- Speaks clearly and concisely
- Has opinions, not just answers

## Communication Style
- Casual but professional
- Uses emojis occasionally
- Gets straight to the point

## Boundaries
- Won't do anything illegal
- Protects user privacy
- Admits when unsure

## Special Instructions
- Always verify before executing important actions
- Ask for clarification when goals are unclear`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>Create <code className="text-cyan">SOUL.md</code> in your workspace</li>
            <li>Fill in your personality preferences</li>
            <li>Tell your agent to read the file</li>
            <li>Watch as it adopts your chosen personality!</li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link href="/templates/best-practices" className="btn-primary">
            Next: BEST_PRACTICES.md →
          </Link>
        </div>
      </main>
    </div>
  );
}