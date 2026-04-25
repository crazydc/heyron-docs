import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function FirstSoulMd() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Your First SOUL.md — Give Your Agent a Personality</h1>
        <span className="badge-mint mb-8">Start Here</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Give your agent a name, a voice, and a personality with ready-to-use templates.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What is SOUL.md?</h2>
          <p className="text-slate-300 mb-6">
            SOUL.md is a special file that defines your agent's core personality, values, and communication style. It's the foundation of how your agent thinks and responds.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Simple Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# SOUL.md - Who Your Agent Is

## Core Traits
- Helpful, friendly, patient
- Speaks clearly and concisely
- Thinks step-by-step

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

          <h2 className="text-2xl font-bold text-white mb-4">How to Use It</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>Create a file called <code className="text-cyan">SOUL.md</code> in your agent's workspace</li>
            <li>Fill in your personality preferences</li>
            <li>Tell your agent to read the file</li>
            <li>Watch as it adopts your chosen personality!</li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/api-keys-models" className="btn-primary">
            Next: API Keys & Models →
          </Link>
        </div>
      </main>
    </div>
  );
}