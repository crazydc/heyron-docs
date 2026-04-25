import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TokenCalc() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Calculate Estimated Token Usage</h1>
        <span className="badge-cyan mb-8">Tools</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Knowing token usage helps you estimate costs and avoid hitting limits. Here's how to calculate it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Are Tokens?</h2>
          <p className="text-slate-300 mb-6">
            Tokens are the basic units the AI processes. They're not exactly words — roughly 1 token equals 4 characters or ¾ of a word in English.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Estimation Methods</h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 1: Word Count</h3>
              <p className="text-slate-400 text-sm">
                <strong>Tokens ≈ Words ÷ 0.75</strong>
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Example: 500 words ÷ 0.75 ≈ 667 tokens
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 2: Character Count</h3>
              <p className="text-slate-400 text-sm">
                <strong>Tokens ≈ Characters ÷ 4</strong>
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Example: 2000 chars ÷ 4 = 500 tokens
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 3: Ask the AI</h3>
              <p className="text-slate-400 text-sm">
                Simply ask during your session:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`"How many tokens have we used so far?"`}
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Cost Estimation</h2>
          <p className="text-slate-300 mb-4">
            Most providers charge per 1M tokens:
          </p>
          <table className="w-full text-slate-300 text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2">Model</th>
                <th className="text-left py-2">Input</th>
                <th className="text-left py-2">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2">GPT-4</td>
                <td>$10-30/M</td>
                <td>$30-90/M</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2">GPT-3.5</td>
                <td>$0.50/M</td>
                <td>$1.50/M</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2">Claude 3</td>
                <td>$3-15/M</td>
                <td>$15-75/M</td>
              </tr>
              <tr>
                <td className="py-2">Gemini Pro</td>
                <td>$0.50/M</td>
                <td>$1.50/M</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Token Calculation Examples</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>1 short email:</strong> ~150-250 tokens</li>
            <li>• <strong>1 page of code:</strong> ~300-500 tokens</li>
            <li>• <strong>1 page of prose:</strong> ~400-600 tokens</li>
            <li>• <strong>Typical chat message:</strong> ~20-100 tokens</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/max-tokens" className="btn-primary">
            ← Max Tokens
          </Link>
          <Link href="/tutorials/batch-processing" className="btn-primary">
            Next: Batch Processing →
          </Link>
        </div>
      </main>
    </div>
  );
}