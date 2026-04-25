import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BlankScreen() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Dashboard Blank Screen?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The Control UI loads but shows a blank screen. No errors, just nothing. Here's how to diagnose and fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Quick Checklist</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>✅ Is the gateway running?</li>
            <li>✅ Is the server accessible?</li>
            <li>✅ Are you using the correct URL?</li>
            <li>✅ Is your browser up to date?</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Debug</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check Browser Console</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the blank dashboard page</li>
            <li>Press F12 to open developer tools</li>
            <li>Go to the "Console" tab</li>
            <li>Look for red error messages</li>
            <li>Common errors:</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-slate-400">
              <li><code className="text-cyan">Failed to fetch</code> — Can't reach gateway</li>
              <li><code className="text-cyan">CORS error</code> — Origin not allowed</li>
              <li><code className="text-cyan">401 Unauthorized</code> — Token issue</li>
            </ul>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Check Network Tab</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>In developer tools, go to "Network" tab</li>
            <li>Refresh the page</li>
            <li>Look for failed requests (red)</li>
            <li>Check the status code of API calls</li>
            <li>Common issues:</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-slate-400">
              <li><strong>502</strong> — Gateway is down</li>
              <li><strong>404</strong> — Wrong URL</li>
              <li><strong>401</strong> — Not authenticated</li>
            </ul>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Verify Gateway Running</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>SSH into your server</li>
            <li>Check if gateway is running:</li>
            <li><code className="text-cyan">openclaw gateway status</code></li>
            <li>If not running: <code className="text-cyan">openclaw gateway start</code></li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 4: Try Different Browser/Device</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Try opening in Incognito/Private mode</li>
            <li>Try a different browser (Chrome, Firefox, Edge)</li>
            <li>Try a different device (phone, tablet)</li>
            <li>This helps isolate browser-specific issues</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 5: Clear Cache</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Clear browser cache for the dashboard URL</li>
            <li>Or hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)</li>
            <li>Try clearing cookies too</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Gateway stopped</strong> — Service not running</li>
            <li><strong>Port conflict</strong> — Another process on same port</li>
            <li><strong>Browser extension</strong> — Extension interfering</li>
            <li><strong>Outdated dashboard</strong> — Need to rebuild UI</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Still Blank?</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Check gateway logs for errors</li>
            <li>Restart the gateway completely</li>
            <li>Rebuild the UI: <code className="text-cyan">npm run build</code></li>
            <li>Post in support with your console errors</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← Back to All Tutorials
          </Link>
        </div>
      </main>
    </div>
  );
}