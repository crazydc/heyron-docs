import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ContextWindow() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Understanding Context Window Limits</h1>
        <span className="badge-violet mb-8">Concepts</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The context window is the total amount of text the AI can "see" at once. Understanding it helps you work more effectively.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Is Context Window?</h2>
          <p className="text-slate-300 mb-6">
            Think of context window as the AI's "working memory." It includes your messages, the AI's responses, and any files or system prompts. When full, the oldest information gets dropped.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Current Model Limits</h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Standard Models</h3>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                <li>GPT-3.5 Turbo: ~16K tokens</li>
                <li>GPT-4: ~32K-128K tokens (depending on version)</li>
                <li>Claude 3: ~200K tokens</li>
                <li>Gemini Pro: ~32K tokens</li>
              </ul>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Extended Context Models</h3>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                <li>Claude 3.5 Sonnet: ~200K tokens</li>
                <li>GPT-4 Turbo: ~128K tokens</li>
                <li>Claude 2.1: ~200K tokens</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Check Your Usage</h2>
          <pre className="p-3 bg-void border border-border rounded text-sm text-slate-400 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"How many tokens are in our conversation?
What's the current context usage?"`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Optimizing Context</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• <strong>Summarize instead of repeat</strong> — Ask for summaries of long threads</li>
            <li>• <strong>Use specific sections</strong> — Only load relevant parts of large files</li>
            <li>• <strong>Start fresh sessions</strong> — For unrelated tasks, start new</li>
            <li>• <strong>Save important info</strong> — Write key info to files instead of keeping in context</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Token Estimation</h2>
          <p className="text-slate-300 mb-2">
            Rough estimates:
          </p>
          <ul className="space-y-1 text-slate-400 text-sm">
            <li>• 1 token ≈ 4 characters of English text</li>
            <li>• 1 token ≈ ¾ of a word (average)</li>
            <li>• 1 page ≈ 500-800 tokens</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/model-switch" className="btn-primary">
            ← Switch Models
          </Link>
          <Link href="/tutorials/system-prompt" className="btn-primary">
            Next: System Prompt →
          </Link>
        </div>
      </main>
    </div>
  );
}