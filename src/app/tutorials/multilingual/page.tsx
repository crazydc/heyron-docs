import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Multilingual() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Multi-Language Conversations</h1>
        <span className="badge-mint mb-8">Languages</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent can communicate in multiple languages. Here's how to enable and use this feature.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Supported Languages</h2>
          <p className="text-slate-300 mb-4">
            Most modern AI models support 100+ languages. The agent will:
          </p>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• Detect the language you're using</li>
            <li>• Respond in the same language</li>
            <li>• Switch languages mid-conversation when requested</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Setting Default Language</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Tell your agent directly</strong> — "Always respond in Spanish"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Add to SOUL.md</strong> — Set your preferred language in the personality file</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Use system prompts</strong> — Configure default language in agent settings</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Language Switching</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Can you switch to French for this explanation?"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"_respóndeme en alemán por favor"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300 font-mono text-sm">"Let's discuss this in Japanese from now on"</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Tips for Multi-Language</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Be specific about regional variants (Brazilian Portuguese vs European Portuguese)</li>
            <li>• Some languages may have slightly different quality due to training data</li>
            <li>• You can mix languages when needed ("Puedo hablar español también")</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/voice-output-setup" className="btn-secondary">
            ← Voice Output
          </Link>
          <Link href="/tutorials/translation-service" className="btn-primary">
            Next: Translation →
          </Link>
        </div>
      </main>
    </div>
  );
}