import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SentinelError() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Sentinel Value "__OPENCLAW_REDACTED__" Error?</h1>
        <span className="badge-crimson mb-8">Error Fix</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're seeing "__OPENCLAW_REDACTED__" appear in outputs — this is a security sentinel that blocks sensitive data. Here's what it means and how to handle it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What This Means</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Security trigger</strong> — The agent detected sensitive data (API keys, passwords, tokens)</li>
            <li>• <strong>Content filter</strong> — A security rule is blocking certain outputs</li>
            <li>• <strong>Redaction active</strong> — The system is protecting sensitive information</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Identify the Trigger</h3>
          <p className="text-slate-300 mb-4">
            Check what sensitive data might be in your prompt or context:
          </p>
          <ul className="space-y-2 text-slate-300 mb-4 ml-4">
            <li>• API keys or tokens</li>
            <li>• Passwords or credentials</li>
            <li>• Personal identifiable information (PII)</li>
            <li>• Database connection strings</li>
          </ul>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Use Environment Variables</h3>
          <p className="text-slate-300 mb-4">
            Instead of pasting secrets directly, use environment variables:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Instead of: api_key=sk-1234567890abcdef
# Use:
api_key=${process.env.API_KEY}`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Disable Redaction (If Appropriate)</h3>
          <p className="text-slate-300 mb-4">
            If you're in a trusted environment and need full output:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Disable redaction for this session. I understand the security implications and accept the risk."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Check Security Settings</h3>
          <p className="text-slate-300 mb-4">
            Review your agent's security profile. If it's too restrictive, consider adjusting the content filter settings.
          </p>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Security Best Practices</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Never paste actual API keys or credentials in plain text</li>
            <li>• Use .env files or secret management tools</li>
            <li>• Review which security filters are active on your agent</li>
            <li>• Consider creating separate profiles for trusted vs. untrusted contexts</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/security-broke" className="btn-primary">
            Next: Security Hardening →
          </Link>
        </div>
      </main>
    </div>
  );
}