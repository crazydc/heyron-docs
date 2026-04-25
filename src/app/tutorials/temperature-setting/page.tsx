import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TemperatureSetting() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Adjusting Temperature for Creativity</h1>
        <span className="badge-violet mb-8">Configuration</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Temperature controls how creative or predictable the AI's responses are. Here's how to tune it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Is Temperature?</h2>
          <p className="text-slate-300 mb-6">
            Temperature is a setting (0-2) that affects how the AI selects words. Low = predictable, focused responses. High = creative, diverse, sometimes unexpected responses.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Temperature Scale</h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">0.0 - 0.3: Focused & Precise</h3>
              <p className="text-slate-400 text-sm">
                Best for: Code, facts, technical answers,数据分析. The AI picks the most likely next word.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">0.4 - 0.7: Balanced</h3>
              <p className="text-slate-400 text-sm">
                Best for: General conversation, explanations, summaries. Good mix of coherence and variety.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">0.8 - 1.2: Creative</h3>
              <p className="text-slate-400 text-sm">
                Best for: Writing, brainstorming, creative tasks. More varied word choices.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1.3 - 2.0: Highly Creative</h3>
              <p className="text-slate-400 text-sm">
                Best for: Experimental writing, brainstorming wild ideas. Can produce unexpected or nonsensical output.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Change Temperature</h2>
          <pre className="p-3 bg-void border border-border rounded text-sm text-slate-400 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Set temperature to 0.2 for this coding task."
"Use higher temperature (0.9) for the next response."
"Switch to creative mode for this brainstorming."`}
          </pre>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recommended Settings by Task</h2>
          <table className="w-full text-slate-300 text-sm">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 text-cyan">Code & Technical</td>
                <td>0.0 - 0.2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 text-cyan">Fact Summaries</td>
                <td>0.2 - 0.4</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 text-cyan">General Conversation</td>
                <td>0.5 - 0.7</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 text-cyan">Creative Writing</td>
                <td>0.8 - 1.0</td>
              </tr>
              <tr>
                <td className="py-2 text-cyan">Brainstorming</td>
                <td>1.0 - 1.5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/system-prompt" className="btn-primary">
            ← System Prompt
          </Link>
          <Link href="/tutorials/max-tokens" className="btn-primary">
            Next: Max Tokens →
          </Link>
        </div>
      </main>
    </div>
  );
}