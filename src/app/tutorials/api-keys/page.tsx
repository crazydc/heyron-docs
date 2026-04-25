import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function APIKeys() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Managing API Keys Securely</h1>
        <span className="badge-crimson mb-8">Security</span>
        <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Learn how to store and manage API keys securely for your AI agent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why API Key Security Matters</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• API keys grant access to paid services</li>
            <li>• Leaked keys can lead to unexpected charges</li>
            <li>• Some keys provide access to sensitive data</li>
            <li>• Compromised keys may need immediate rotation</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Never paste keys in chat</strong> — Use secure storage instead</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Use environment variables</strong> — Store keys in .env files</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Add to agent config</strong> — Use the secure key storage feature</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Rotate keys periodically</strong> — Update keys every few months</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Common API Keys</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>OpenAI</strong> — GPT models</li>
            <li>• <strong>Anthropic</strong> — Claude models</li>
            <li>• <strong>ElevenLabs</strong> — Voice synthesis</li>
            <li>• <strong>GitHub</strong> — Code storage</li>
            <li>• <strong>Custom LLM providers</strong> — Ollama, etc.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">What To Do If a Key Is Leaked</h2>
          <div className="bg-panel border border-crimson/30 rounded-lg p-4">
            <ol className="space-y-2 text-slate-300">
              <li>1. <strong>Revoke the key immediately</strong> in the provider's dashboard</li>
              <li>2. <strong>Generate a new key</strong></li>
              <li>3. <strong>Update your agent</strong> with the new key</li>
              <li>4. <strong>Check usage logs</strong> for any unauthorized access</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Secure Storage Options</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Agent configuration (recommended)</li>
            <li>• Environment variables in .env files</li>
            <li>• Secret management services (for advanced users)</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/doc-markdown" className="btn-secondary">
            ← Markdown Docs
          </Link>
          <Link href="/tutorials/webhook-debug" className="btn-primary">
            Next: Webhook Debug →
          </Link>
        </div>
      </main>
    </div>
  );
}