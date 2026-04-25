import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SystemPrompt() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Editing System Prompt Effectively</h1>
        <span className="badge-mint mb-8">Customization</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The system prompt shapes how the AI behaves. Here's how to edit it effectively.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Is a System Prompt?</h2>
          <p className="text-slate-300 mb-6">
            The system prompt is instructions given to the AI before any conversation. It sets the tone, role, and behavioral guidelines. Think of it as the AI's "personality" or "instructions manual."
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Edit It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Access System Prompt Settings</h3>
              <p className="text-slate-400 text-sm">
                Go to Settings → AI → System Prompt (or edit the SOUL.md file in your workspace).
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Use Clear Instructions</h3>
              <p className="text-slate-400 text-sm mb-2">
                Be specific and concise:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`✅ "You are a helpful coding assistant.
Always explain your reasoning.
Prefer simple solutions over complex ones."

❌ "Be nice and helpful and try to do 
what the user wants as best as possible 
and don't be rude."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Define the Role Clearly</h3>
              <p className="text-slate-400 text-sm">
                Start with a clear role definition. This has the biggest impact on behavior.
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`"You are a senior software engineer
specialized in Python and JavaScript.
You explain concepts clearly and
provide code examples."`}
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Effective System Prompt Elements</h2>
          <ul className="space-y-3 text-slate-300">
            <li>✓ <strong>Role definition</strong> — Who are you?</li>
            <li>✓ <strong>Response style</strong> — How should you respond?</li>
            <li>✓ <strong>Boundaries</strong> — What should you avoid?</li>
            <li>✓ <strong>Special capabilities</strong> — What tools can you use?</li>
            <li>✓ <strong>Format preferences</strong> — Code blocks, bullet points, etc.</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-2 text-slate-300">
            <li>✗ Too many instructions (keep under 500 words)</li>
            <li>✗ Contradictory rules</li>
            <li>✗ Vague or subjective preferences</li>
            <li>✗ Overly restrictive rules that limit helpfulness</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/context-window" className="btn-primary">
            ← Context Window
          </Link>
          <Link href="/tutorials/temperature-setting" className="btn-primary">
            Next: Temperature Setting →
          </Link>
        </div>
      </main>
    </div>
  );
}