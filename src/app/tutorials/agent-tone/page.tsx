import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AgentTone() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Setting Communication Tone</h1>
        <span className="badge-mint mb-8">Configuration</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Configure how your agent communicates — from casual chats to formal business communications.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Tone</h2>
          <p className="text-slate-300 mb-6">
            Tone determines the voice and style of your agent's responses. The right tone builds trust and makes interactions more effective.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Tone Presets</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>💬 <strong>Casual</strong> — Relaxed, friendly, uses informal language</li>
            <li>📋 <strong>Professional</strong> — Business-appropriate, clear, formal</li>
            <li>🎯 <strong>Direct</strong> — Concise, to-the-point, minimal fluff</li>
            <li>📚 <strong>Educational</strong> — Detailed explanations, teaching style</li>
            <li>🤖 <strong>Technical</strong> — Precise, uses industry terminology</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Configure Tone</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Access Configuration</h3>
                <p className="text-slate-400">Open your agent settings in the dashboard</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Select Tone Preset</h3>
                <p className="text-slate-400">Choose from available presets or create custom</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Customize Further</h3>
                <p className="text-slate-400">Add specific phrases or style guidelines</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Test & Iterate</h3>
                <p className="text-slate-400">Chat with your agent and refine as needed</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Custom Tone Example</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Custom Tone Settings

## Rules
- Start responses with a brief acknowledgment
- Use active voice
- Keep sentences under 25 words
- Include one relevant emoji in casual contexts
- Always end with a clear next step or question`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Match your agent's tone to your use case. A support agent should be empathetic, while a code assistant should be precise.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/agent-limits" className="btn-primary">
            Next: Setting Agent Boundaries →
          </Link>
        </div>
      </main>
    </div>
  );
}