import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MemoryWorks() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>How Agent Memory Works</h1>
        <span className="badge-violet mb-8">Understand Your Agent</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Why your agent "forgets" things and how to make important things stick.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How Memory Actually Works</h2>
          <p className="text-slate-300 mb-6">
            Your agent has two types of memory:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Short-term (conversation)</strong> — remembers only the current chat</li>
            <li><strong>Long-term (files)</strong> — remembers what you save to files</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Why It Seems to Forget</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🚫 <strong>New conversation</strong> — start fresh = no memory</li>
            <li>🚫 <strong>Different channel</strong> — Discord ≠ Telegram memory</li>
            <li>🚫 <strong>Session limit</strong> — very long chats get truncated</li>
            <li>🚫 <strong>No file = no recall</strong> — not in a file = forgotten</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Make Things Stick</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>Save important info to <code className="text-cyan">MEMORY.md</code></li>
            <li>Use your agent's file system to persist data</li>
            <li>Reference files explicitly in prompts</li>
            <li>Create <code className="text-cyan">BEST_PRACTICES.md</code> for recurring tasks</li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/privacy-audit" className="btn-primary">
            Next: Privacy Audit →
          </Link>
        </div>
      </main>
    </div>
  );
}