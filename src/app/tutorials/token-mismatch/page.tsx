import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TokenMismatch() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Gateway Token Mismatch</h1>
        <span className="badge-amber mb-8">Authentication</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're seeing a token mismatch error. The gateway and your configuration have mismatched authentication tokens.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Config regenerated</strong> — Gateway was restarted with new credentials</li>
            <li><strong>Manual edits</strong> — Config files were edited incorrectly</li>
            <li><strong>Multiple instances</strong> — Running more than one gateway instance</li>
            <li><strong>Outdated config</strong> — Using an old config file with stale tokens</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Get Fresh Token</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Run: <code className="text-cyan">openclaw gateway token</code></li>
            <li>This will display the current valid token</li>
            <li>Copy the token carefully (no extra spaces)</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Update Your Config</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open your gateway config file</li>
            <li>Look for <code className="text-cyan">GATEWAY_TOKEN</code> or <code className="text-cyan">token</code> field</li>
            <li>Replace with the new token from Step 1</li>
            <li>Save and close the config file</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Restart Services</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Run: <code className="text-cyan">openclaw gateway restart</code></li>
            <li>Wait for the gateway to fully start</li>
            <li>Try connecting again</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Alternative: Regenerate Token</h2>
          <p className="text-slate-300 mb-4">
            If you want to generate a fresh token:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Stop the gateway: <code className="text-cyan">openclaw gateway stop</code></li>
            <li>Delete or rename existing token files</li>
            <li>Start the gateway: <code className="text-cyan">openclaw gateway start</code></li>
            <li>A new token will be auto-generated</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Prevention</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Keep config files in version control but exclude tokens</li>
            <li>Use environment variables for tokens instead of files</li>
            <li>Document which files contain tokens for your setup</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/origin-not-allowed" className="btn-primary">
            Next: Origin Not Allowed →
          </Link>
        </div>
      </main>
    </div>
  );
}