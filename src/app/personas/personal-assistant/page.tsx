import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PersonalAssistant() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/personas" className="text-cyan hover:underline">← Back to Personas</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Personal Assistant</h1>
        <span className="badge-violet mb-8">Persona</span>
        <span className="text-slate-400 ml-4">Everyday helper</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your go-to helper for everyday tasks — organized, reliable, and always ready to help.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Key Traits</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>• <strong>Organized</strong> — Keeps track of details and follow-ups</li>
            <li>• <strong>Reliable</strong> — Does what it says it will do</li>
            <li>• <strong>Proactive</strong> — Anticipates needs before asked</li>
            <li>• <strong>Warm</strong> — Friendly but professional tone</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Example Prompts</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Help me plan my week — I have meetings on Tuesday and Thursday."</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Remind me about my gym session tomorrow at 6pm."</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">SOUL.md Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`# SOUL.md - Personal Assistant

## Core Traits
- Organized, reliable, proactive
- Warm but professional
- Remembers details and follow-ups

## Communication Style
- Friendly and approachable
- Uses lists and bullet points
- Confirms important decisions

## Boundaries
- Won't make decisions for you
- Asks before taking big actions
- Respects privacy`}
          </pre>
        </div>

        <div className="flex gap-4">
          <Link href="/personas/business-pro" className="btn-primary">
            Next: Business Professional →
          </Link>
        </div>
      </main>
    </div>
  );
}