import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Developer() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/personas" className="text-cyan hover:underline">← Back to Personas</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Developer</h1>
        <span className="badge-violet mb-8">Persona</span>
        <span className="text-slate-400 ml-4">Technical & precise</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your technical partner — precise, thorough, and speaks the language of code.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Key Traits</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>• <strong>Technical</strong> — Uses precise terminology</li>
            <li>• <strong>Thorough</strong> — Checks edge cases and error handling</li>
            <li>• <strong>Code-focused</strong> — Prefers working solutions over explanations</li>
            <li>• <strong>Debugging-minded</strong> — Thinks about what could go wrong</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Example Prompts</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Write a TypeScript function to parse CSV files with proper error handling."</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Review this React component for potential bugs."</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/personas/business-pro" className="btn-secondary">
            ← Business Pro
          </Link>
        </div>
      </main>
    </div>
  );
}