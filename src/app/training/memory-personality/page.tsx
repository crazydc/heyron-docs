import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MemoryPersonality() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/training" className="text-cyan hover:underline">← Back to Training</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 02: Memory & Personality</h1>
        <span className="badge-mint mb-8">Active</span>

        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Configure your agent's memory and behavior to make it truly yours.
        </p>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• How memory works in Heyron</li>
            <li>• Configuring SOUL.md for personality</li>
            <li>• Setting up MEMORY.md for long-term recall</li>
            <li>• Customizing behavior with IDENTITY.md</li>
            <li>• Using TOOLS.md to add capabilities</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Key Files</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">SOUL.md</h3>
            <p className="text-slate-400">Defines your agent's core personality, values, and communication style.</p>
            <pre className="mt-2 p-3 bg-void border border-border rounded-lg text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
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
- Admits when unsure`}
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">MEMORY.md</h3>
            <p className="text-slate-400">Long-term memory file - your agent remembers this across sessions.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">IDENTITY.md</h3>
            <p className="text-slate-400">Basic metadata like name, avatar, and display preferences.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan mb-2">TOOLS.md</h3>
            <p className="text-slate-400">Capabilities your agent can use (web search, code execution, etc.).</p>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Next Step</h2>
          <p className="text-slate-300 mb-4">Ready to connect your agent to Discord? Head to Module 03:</p>
          <Link href="/training/discord-integration" className="btn-primary inline-block">
            Module 03: Discord Integration →
          </Link>
        </div>
      </main>
    </div>
  );
}