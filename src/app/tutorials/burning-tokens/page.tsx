import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BurningTokens() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Burning Too Many Tokens?</h1>
        <span className="badge-crimson mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A practical workflow to reduce token burn fast.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Quick Fixes</h2>
          <ol className="list-decimal list-inside space-y-3 text-slate-300 mb-6">
            <li><strong>Start a new conversation</strong> — long chats cost more</li>
            <li><strong>Use a cheaper model</strong> — for simple tasks</li>
            <li><strong>Trim the system prompt</strong> — less instructions = fewer tokens</li>
            <li><strong>Set context limits</strong> — cap how much history is included</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Long-term Solutions</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>📝 <strong>Create BEST_PRACTICES.md</strong> — persistent instructions without repeating</li>
            <li>💾 <strong>Offload to files</strong> — reference docs instead of pasting</li>
            <li>🎯 <strong>Use the right model</strong> — Claude Haiku for quick tasks, Opus for complex</li>
            <li>📊 <strong>Monitor usage</strong> — check your API dashboard regularly</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Pro Tips</h2>
          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              Ask your agent: <code className="text-cyan">"Give me a summary of our conversation so far in 50 words or less"</code> — then start a new thread with that summary.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/502-error" className="btn-primary">
            Next: 502 Error →
          </Link>
        </div>
      </main>
    </div>
  );
}