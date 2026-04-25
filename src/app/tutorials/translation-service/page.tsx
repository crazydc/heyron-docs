import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TranslationService() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Real-Time Translation</h1>
        <span className="badge-mint mb-8">Languages</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Use your agent as a real-time translator for conversations and content.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How Translation Works</h2>
          <p className="text-slate-300 mb-4">
            Your agent uses advanced language models to provide high-quality translations that understand context, idioms, and nuance.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Basic Translation</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Translate this to French: Hello, how are you?"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"What's the Japanese translation for 'thank you very much'?"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 font-mono text-sm">"Can you translate this paragraph into German?"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Conversational Translation</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Ask for help</strong> — "Can you help me say this in Italian?"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Provide context</strong> — Tell the agent how you'll use the phrase (formal, casual, business)</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Get alternatives</strong> — Ask for multiple options if needed</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Advanced Translation Features</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Formal/Informal</strong> — "Translate to formal Spanish"</li>
            <li>• <strong>With pronunciation</strong> — "Include how to pronounce each phrase"</li>
            <li>• <strong>Explain differences</strong> — "What's the difference between these two translations?"</li>
            <li>• <strong>Cultural context</strong> — "Add notes about cultural appropriateness"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Supported Language Pairs</h2>
          <p className="text-slate-300">
            Most major language pairs are supported including English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, Russian, Hindi, and 100+ more.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/multilingual" className="btn-secondary">
            ← Multi-Language
          </Link>
          <Link href="/tutorials/code-gen-python" className="btn-primary">
            Next: Python Code →
          </Link>
        </div>
      </main>
    </div>
  );
}