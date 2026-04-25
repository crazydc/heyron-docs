import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MaxTokens() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Setting Max Tokens to Control Response Length</h1>
        <span className="badge-violet mb-8">Configuration</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Max tokens limit how long a response can be. This helps control costs and get exactly the length you need.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Are Max Tokens?</h2>
          <p className="text-slate-300 mb-6">
            Max tokens sets the maximum length of the AI's response. Each token is roughly ¾ of a word. Setting this prevents overly long responses and controls API costs.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Token to Word Conversion</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>• <strong>~250 tokens</strong> ≈ 1 short paragraph</li>
            <li>• <strong>~500 tokens</strong> ≈ 1 page (250 words)</li>
            <li>• <strong>~1000 tokens</strong> ≈ 2 pages</li>
            <li>• <strong>~2000 tokens</strong> ≈ 4 pages</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Set Max Tokens</h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 1: Direct Command</h3>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Keep your response under 100 tokens."
"Limit your answer to 2-3 sentences."
"Summarize in approximately 500 tokens."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 2: Settings</h3>
              <p className="text-slate-400 text-sm">
                Go to Settings → AI → Max Tokens and set your default. Common defaults: 1024, 2048, 4096.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 3: Set Per-Request</h3>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Write a 200-token summary of this article."
"Explain this concept in 500 tokens or less."`}
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Use Max Tokens?</h2>
          <ul className="space-y-2 text-slate-300">
            <li>✓ <strong>Control costs</strong> — Each token costs money</li>
            <li>✓ <strong>Get focused answers</strong> — Prevents rambling</li>
            <li>✓ <strong>Faster responses</strong> — Shorter = quicker</li>
            <li>✓ <strong>Meet length requirements</strong> — Perfect for limits</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Note on Limits</h2>
          <p className="text-slate-300">
            Max tokens is a soft limit — the AI may go slightly over. Also remember: max tokens applies to <em>output only</em>, not input. Your context window is separate.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/temperature-setting" className="btn-primary">
            ← Temperature
          </Link>
          <Link href="/tutorials/token-calc" className="btn-primary">
            Next: Token Calculator →
          </Link>
        </div>
      </main>
    </div>
  );
}