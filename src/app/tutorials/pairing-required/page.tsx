import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PairingRequired() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Pairing Required / Unauthorized</h1>
        <span className="badge-red mb-8">Authentication</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're seeing "Pairing Required" or "Unauthorized" when trying to connect. Your device needs to be paired with the gateway first.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>First connection</strong> — Device has never been paired</li>
            <li><strong>Token expired</strong> — The pairing token is no longer valid</li>
            <li><strong>Manual unpair</strong> — You manually unpaired the device</li>
            <li><strong>Gateway restarted</strong> — Gateway was restarted with new credentials</li>
            <li><strong>Multiple gateways</strong> — Trying to connect to wrong gateway</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Pair Your Device</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Get Pairing Code</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>On the machine running the gateway, run:</li>
            <li><code className="text-cyan">openclaw gateway pair</code></li>
            <li>This will display a pairing code or QR code</li>
            <li>The code is time-limited, so act quickly</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Enter Code in App</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the OpenClaw app on your device</li>
            <li>Look for "Add Gateway" or "Pair Device"</li>
            <li>Enter the pairing code</li>
            <li>Or scan the QR code with your phone camera</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Confirm Connection</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Once paired, you should see the gateway in your app</li>
            <li>The device is now authorized to communicate</li>
            <li>You can now access the Control UI and chat</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Re-pairing (If Already Paired)</h2>
          <p className="text-slate-300 mb-4">
            If you've been paired before and need to re-pair:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>First, unpair from the app (Settings → Gateway → Unpair)</li>
            <li>Then follow the pairing steps above</li>
            <li>Or run <code className="text-cyan">openclaw gateway pair --force</code> to force a new pairing</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Code expired?</strong> — Run the pair command again</li>
            <li><strong>Wrong gateway?</strong> — Ensure you're connecting to the right IP/hostname</li>
            <li><strong>Firewall blocking?</strong> — Check that required ports are open</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/module-error" className="btn-primary">
            Next: Module Error (Agent No Reply) →
          </Link>
        </div>
      </main>
    </div>
  );
}