import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ChromeRemote() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Chrome Extension Can't Reach Remote Gateway</h1>
        <span className="badge-violet mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Fix connection issues between the Chrome extension and your remote OpenClaw gateway.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <p className="text-slate-300 mb-4">
            Your Chrome extension shows "Cannot connect to gateway" or times out when trying to reach your remote OpenClaw instance.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Gateway URL is not accessible from the browser</li>
            <li>Firewall blocking the port</li>
            <li>Self-signed TLS certificate not trusted</li>
            <li>Wrong gateway URL in extension settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Verify Gateway URL</h2>
          <p className="text-slate-300 mb-4">
            Check your extension settings. The gateway URL must be:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Reachable from the machine running Chrome</li>
            <li>Using HTTPS (unless on localhost)</li>
            <li>The correct port (default 31000)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Check Firewall Rules</h2>
          <p className="text-slate-300 mb-4">
            If running remotely, ensure your firewall allows inbound connections to the gateway port:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Example UFW rule
sudo ufw allow 31000/tcp`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Handle Self-Signed Certificates</h2>
          <p className="text-slate-300 mb-4">
            For self-signed TLS certificates, you'll need to trust the certificate or use a reverse proxy with proper SSL.
          </p>
          <div className="bg-amber/10 border border-amber/30 rounded-lg p-4 mt-6">
            <p className="text-amber text-sm">
              <strong>Quick fix:</strong> Visit your gateway URL directly in Chrome first. Click "Advanced" → "Proceed to..." to accept the certificate.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Step 4: Test Connectivity</h2>
          <p className="text-slate-300 mb-4">
            Open a new tab and navigate directly to your gateway URL. You should see a response or status page.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/elevenlabs-voice" className="btn-primary">
            Next: ElevenLabs Voice →
          </Link>
        </div>
      </main>
    </div>
  );
}