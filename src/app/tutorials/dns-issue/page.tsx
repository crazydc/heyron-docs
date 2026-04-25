import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DnsIssue() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>DNS Resolution Failing?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent can't resolve domain names. Let's get DNS working again.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What is DNS?</h2>
          <p className="text-slate-300 mb-6">
            DNS (Domain Name System) translates domain names like "example.com" to IP addresses. Without it, your agent can't reach external services.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Network issues</strong> — No internet connection</li>
            <li><strong>DNS server down</strong> — Your configured DNS isn't responding</li>
            <li><strong>Firewall blocking</strong> — DNS ports (53) are blocked</li>
            <li><strong>Cache corruption</strong> — Stale DNS cache</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">1. Test DNS Resolution</h3>
          <p className="text-slate-300 mb-4">
            Check if DNS is working:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`nslookup google.com
# or
dig google.com`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">2. Flush DNS Cache</h3>
          <p className="text-slate-300 mb-4">
            Clear the DNS cache:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Linux
sudo systemd-resolve --flush-caches

# macOS
sudo dscacheutil -flushcache`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">3. Change DNS Server</h3>
          <p className="text-slate-300 mb-4">
            Try a different DNS server:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Use Cloudflare DNS
8.8.8.8
1.1.1.1`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">4. Check Network Configuration</h3>
          <p className="text-slate-300 mb-4">
            Verify your network settings and ensure DNS is properly configured in your system or router.
          </p>
        </div>

        <div className="glass-panel p-4 mb-8 bg-cyan/10 border-cyan/30">
          <h3 className="text-lg font-bold text-cyan mb-2">💡 Quick Test</h3>
          <p className="text-slate-300">
            Try pinging an IP address directly. If that works but domain names don't, DNS is the issue.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/ssl-error" className="btn-primary">
            Next: SSL Certificate Error →
          </Link>
        </div>
      </main>
    </div>
  );
}