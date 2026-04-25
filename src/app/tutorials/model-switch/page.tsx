import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ModelSwitch() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>How to Switch Models Mid-Conversation</h1>
        <span className="badge-mint mb-8">Features</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You can change the AI model during a conversation without losing context. Here's how.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Switch Models?</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Speed vs Quality</strong> — Faster models for simple tasks, smarter for complex ones</li>
            <li>• <strong>Cost</strong> — Switch to cheaper models for routine queries</li>
            <li>• <strong>Specialization</strong> — Some models are better at coding, others at writing</li>
            <li>• <strong>Context limits</strong> — Switch to longer-context models when needed</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Switch</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 1: Direct Command</h3>
              <p className="text-slate-400 text-sm mb-2">
                Simply ask to switch:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Switch to Claude 3.5 Sonnet for this task."
"Use the fastest model available."
"Switch to GPT-4 for better reasoning."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 2: Specify Per Task</h3>
              <p name="text-slate-400 text-sm">
                Add model preference to your request:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Using GPT-4, analyze this code for bugs."
"Can you switch to a faster model and summarize this?"`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 3: Dashboard Selection</h3>
              <p className="text-slate-400 text-sm">
                Go to Settings → Models and select your preferred model. This sets the default for new conversations.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Model Comparison</h2>
          <table className="w-full text-slate-300 text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2">Model</th>
                <th className="text-left py-2">Best For</th>
                <th className="text-left py-2">Speed</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr className="border-b border-border">
                <td className="py-2">GPT-4</td>
                <td>Complex reasoning, coding</td>
                <td>Medium</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2">GPT-3.5 Turbo</td>
                <td>Fast responses, simple tasks</td>
                <td>Fast</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2">Claude 3</td>
                <td>Writing, analysis</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td className="py-2">Gemini Pro</td>
                <td>Multimodal, research</td>
                <td>Fast</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/rate-limit" className="btn-primary">
            ← Getting Rate Limited
          </Link>
          <Link href="/tutorials/context-window" className="btn-primary">
            Next: Context Window →
          </Link>
        </div>
      </main>
    </div>
  );
}