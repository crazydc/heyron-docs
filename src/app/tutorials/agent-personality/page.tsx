import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AgentPersonality() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Defining Agent Personality</h1>
        <span className="badge-mint mb-8">Configuration</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Give your AI agent a unique personality that matches your needs and communication style.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What is Agent Personality?</h2>
          <p className="text-slate-300 mb-6">
            Agent personality defines how your AI assistant thinks, responds, and interacts with you. It controls tone, behavior, and decision-making style.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Key Personality Traits</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🎭 <strong>Tone</strong> — Professional, casual, friendly, or formal</li>
            <li>💭 <strong>Thinking Style</strong> — Analytical, creative, practical, or balanced</li>
            <li>🗣️ <strong>Communication</strong> — Concise, detailed, technical, or conversational</li>
            <li>⚡ <strong>Initiative</strong> — Proactive, reactive, or collaborative</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Set Personality</h2>
          <ol className="list-decimal list-inside space-y-3 text-slate-300 mb-6">
            <li>Open your agent's configuration in the dashboard</li>
            <li>Navigate to the <strong>Personality</strong> section</li>
            <li>Define traits using the personality template</li>
            <li>Save and restart your agent for changes to take effect</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Personality Template Example</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Agent Personality

## Tone
- Friendly but professional
- Clear and concise
- Uses technical terms when needed

## Behavior
- Thinks step-by-step
- Verifies before acting
- Asks clarifying questions

## Values
- Accuracy over speed
- User privacy first
- Transparent about limitations`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Start with a simple personality and iterate. You can always refine based on how your agent responds.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/agent-tone" className="btn-primary">
            Next: Setting Communication Tone →
          </Link>
        </div>
      </main>
    </div>
  );
}