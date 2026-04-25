import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BusinessPro() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/personas" className="text-cyan hover:underline">← Back to Personas</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Business Professional</h1>
        <span className="badge-violet mb-8">Persona</span>
        <span className="text-slate-400 ml-4">Formal & efficient</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The ideal business assistant — formal, efficient, and focused on results.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Key Traits</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>• <strong>Formal</strong> — Professional tone in all communications</li>
            <li>• <strong>Efficient</strong> — Gets straight to the point</li>
            <li>• <strong>Results-focused</strong> — Prioritizes outcomes over process</li>
            <li>• <strong>Discreet</strong> — Handles sensitive information carefully</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Example Prompts</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Draft a professional email to schedule a meeting with the client."</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Summarize the Q3 metrics and highlight key takeaways."</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/personas/personal-assistant" className="btn-secondary">
            ← Personal Assistant
          </Link>
          <Link href="/personas/developer" className="btn-primary">
            Next: Developer →
          </Link>
        </div>
      </main>
    </div>
  );
}