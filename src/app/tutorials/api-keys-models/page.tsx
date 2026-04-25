import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ApiKeysModels() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>API Keys & Models — Choosing Your Agent's Brain</h1>
        <span className="badge-mint mb-8">Start Here</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            What models are, what they cost, how to get API keys, and which model is right for you.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What is an AI Model?</h2>
          <p className="text-slate-300 mb-6">
            An AI model is like your agent's brain. Different models have different strengths — some are great at coding, others at writing, some are faster, others more thorough.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Popular Models</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white">Claude (Anthropic)</h3>
              <p className="text-slate-400 text-sm">Great for reasoning, writing, and complex tasks. Best overall choice.</p>
            </div>
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white">GPT-4 (OpenAI)</h3>
              <p className="text-slate-400 text-sm">Excellent for coding and general tasks. Very capable.</p>
            </div>
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white">Gemini (Google)</h3>
              <p className="text-slate-400 text-sm">Fast, good reasoning, great value.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Get API Keys</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li>Visit the model's website (anthropic.com, openai.com, etc.)</li>
            <li>Create an account</li>
            <li>Go to API settings or API keys section</li>
            <li>Generate a new API key</li>
            <li><strong>Copy it immediately</strong> — you won't see it again!</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Cost Tips</h2>
          <ul className="space-y-2 text-slate-300">
            <li>💰 Most models charge per 1K tokens (input + output)</li>
            <li>⚡ Smaller/faster models cost less</li>
            <li>🎯 Use the right model for the task</li>
            <li>📊 Set spending limits in your account</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/connect-discord" className="btn-primary">
            Next: Connect to Discord →
          </Link>
        </div>
      </main>
    </div>
  );
}