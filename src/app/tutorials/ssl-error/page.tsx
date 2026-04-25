import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SslError() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>SSL Certificate Error?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent is having trouble with SSL/TLS certificates. Let's fix the secure connection.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What is SSL?</h2>
          <p className="text-slate-300 mb-6">
            SSL (Secure Sockets Layer) encrypts connections between your agent and external services. Errors mean the connection isn't secure.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Expired certificate</strong> — The SSL cert needs renewal</li>
            <li><strong>Self-signed cert</strong> — Not trusted by the system</li>
            <li><strong>Mismatched domain</strong> — Certificate doesn't match the URL</li>
            <li><strong>Outdated certificates</strong> — System doesn't trust new certs</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">1. Check Certificate Validity</h3>
          <p className="text-slate-300 mb-4">
            Verify the certificate:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`openssl s_client -connect example.com:443`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">2. Update System Certificates</h3>
          <p className="text-slate-300 mb-4">
            Update the trusted certificate store:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Debian/Ubuntu
sudo apt update && sudo apt install ca-certificates

# RHEL/CentOS
sudo update-ca-trust extract`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">3. Use a Self-Signed Cert (Development Only)</h3>
          <p className="text-slate-300 mb-4">
            For local development, you can skip cert verification (not recommended for production):
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Set environment variable
NODE_TLS_REJECT_UNAUTHORIZED=0`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">4. Install Proper Certificates</h3>
          <p className="text-slate-300 mb-4">
            For production, use Let's Encrypt or a proper CA:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Using certbot
sudo certbot --nginx -d yourdomain.com`}
          </pre>
        </div>

        <div className="glass-panel p-4 mb-8 bg-crimson/10 border-crimson/30">
          <h3 className="text-lg font-bold text-crimson mb-2">⚠️ Security Warning</h3>
          <p className="text-slate-300">
            Never disable SSL verification in production. Only use for local development.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/container-restart" className="btn-primary">
            Next: Container Keeps Restarting →
          </Link>
        </div>
      </main>
    </div>
  );
}