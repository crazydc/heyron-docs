import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function OriginNotAllowed() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Origin Not Allowed (Control UI)</h1>
        <span className="badge-amber mb-8">CORS</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're seeing "Origin Not Allowed" when accessing the Control UI. This is a CORS (Cross-Origin Resource Sharing) issue.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>New domain</strong> — Accessing from a domain not in the allowed list</li>
            <li><strong>IP access</strong> — Accessing by IP instead of domain name</li>
            <li><strong>Port mismatch</strong> — Accessing on a different port than configured</li>
            <li><strong>Protocol mismatch</strong> — Using HTTP vs HTTPS mismatch</li>
            <li><strong>Gateway config</strong> — CORS origins not configured in gateway</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Identify Your Access Method</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Are you using a domain name or IP address?</li>
            <li>Are you using HTTP or HTTPS?</li>
            <li>What port is the gateway running on?</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Configure Allowed Origins</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the gateway configuration file</li>
            <li>Find the <code className="text-cyan">CORS_ORIGINS</code> or <code className="text-cyan">allowedOrigins</code> setting</li>
            <li>Add your access URL to the allowed list</li>
            <li>Examples:</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-slate-400">
              <li><code className="text-cyan">http://localhost:3000</code></li>
              <li><code className="text-cyan">https://your-domain.com</code></li>
              <li><code className="text-cyan">http://192.168.1.100:3000</code></li>
            </ul>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Restart the Gateway</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Run: <code className="text-cyan">openclaw gateway restart</code></li>
            <li>Wait for the gateway to fully start</li>
            <li>Try accessing the Control UI again</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Workaround</h2>
          <p className="text-slate-300 mb-4">
            If you're developing locally:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Add <code className="text-cyan">http://localhost:*</code> to allowed origins</li>
            <li>Or set CORS to allow all (not recommended for production):</li>
            <li><code className="text-cyan">CORS_ORIGINS=*</code></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Production Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Always use HTTPS in production</li>
            <li>Allow only specific domains, avoid <code className="text-cyan">*</code></li>
            <li>Document your allowed origins for future reference</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/pairing-required" className="btn-primary">
            Next: Pairing Required →
          </Link>
        </div>
      </main>
    </div>
  );
}