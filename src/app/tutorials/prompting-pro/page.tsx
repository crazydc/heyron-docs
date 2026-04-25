import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PromptingPro() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Prompting Your Agent Like a Pro</h1>
        <span className="badge-mint mb-8">How-To</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A practical guide to getting better outputs with a 4-part prompt formula.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The 4-Part Formula</h2>
          <p className="text-slate-300 mb-4">
            The best prompts have four elements:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-slate-300 mb-6">
            <li><strong>Context</strong> — What's the situation?</li>
            <li><strong>Task</strong> — What do you want?</li>
            <li><strong>Format</strong> — How should it look?</li>
            <li><strong>Constraints</strong> — Any limits or special rules?</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Example: Before and After</h2>
          
          <div className="bg-crimson/20 border border-crimson/30 rounded-lg p-4 mb-4">
            <p className="text-crimson font-bold mb-2">❌ Weak Prompt</p>
            <p className="text-slate-300">"Summarize this meeting"</p>
          </div>

          <div className="bg-mint/20 border border-mint/30 rounded-lg p-4 mb-6">
            <p className="text-mint font-bold mb-2">✓ Strong Prompt</p>
            <p className="text-slate-300">
              "Context: Weekly team sync about the new feature launch. Task: Summarize key decisions and action items. Format: Bullet points with owners and deadlines. Constraints: Keep it under 200 words, focus on blockers."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Pro Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Be specific about format</strong> — "Write as bullet points" or "Use a table"</li>
            <li><strong>Show examples</strong> — "Like this: [example]"</li>
            <li><strong>Set length limits</strong> — "In 3 sentences" or "Under 100 words"</li>
            <li><strong>Mention the audience</strong> — "Explain to a non-technical person"</li>
            <li><strong>Iterate</strong> — If you don't like the result, refine and try again</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Advanced Techniques</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Chain of thought</strong> — "Think step by step before answering"</li>
            <li><strong>Role-playing</strong> — "Act as a senior software engineer reviewing code"</li>
            <li><strong>Negative constraints</strong> — "Don't use jargon, don't mention pricing"</li>
            <li><strong>Reference files</strong> — "Based on BEST_PRACTICES.md in the workspace"</li>
          </ul>

          <div className="bg-violet/10 border border-violet/30 rounded-lg p-4 mt-6">
            <p className="text-violet text-sm">
              <strong>Remember:</strong> Your agent remembers context within a conversation. You don't need to repeat everything — just build on previous messages.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/working-with-files" className="btn-primary">
            Previous: Working with Files
          </Link>
        </div>
      </main>
    </div>
  );
}