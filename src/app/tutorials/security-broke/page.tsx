import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SecurityBroke() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Security Hardening Broke Your Agent?</h1>
        <span className="badge-crimson mb-8">Security</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            After applying security hardening, your agent stopped working properly. Here's how to balance security with functionality.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Issues</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Tool execution blocked</strong> — Security rules prevent any tool use</li>
            <li>• <strong>Approval spam</strong> — Too many security approval prompts</li>
            <li>• <strong>Content filtered</strong> — Legitimate content getting redacted</li>
            <li>• <strong>Connection blocked</strong> — Can't access needed resources</li>
            <li>• <strong>Context truncated</strong> — Security trimming removes needed context</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Identify What's Blocked</h3>
          <p className="text-slate-300 mb-4">
            Ask what's being blocked:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"What security rules are currently active? What has been blocked in this session?"`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Adjust Security Profile</h3>
          <p className="text-slate-300 mb-4">
            Create a balanced profile:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Create a balanced security profile that:
- Allows tool execution for known-safe operations
- Reduces approval frequency for routine tasks
- Only blocks clearly dangerous actions
- Logs security events instead of blocking"`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Whitelist Trusted Actions</h3>
          <p className="text-slate-300 mb-4">
            Allow specific actions without approval:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Whitelist these actions (no approval needed):
- read files in /project/src
- write to /project/output
- exec npm build commands"`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Use Two Profiles</h3>
          <p className="text-slate-300 mb-4">
            Switch between strict and relaxed:
          </p>
          <ul className="space-y-2 text-slate-300 mb-4 ml-4">
            <li>• Strict: For untrusted input, public-facing tasks</li>
            <li>• Relaxed: For trusted development work</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Finding the Right Balance</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Start permissive, tighten incrementally</li>
            <li>• Log what gets blocked, then whitelist as needed</li>
            <li>• Use tiered security (low/medium/high)</li>
            <li>• Test workflows after each security change</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/sentinel-error" className="btn-primary">
            Next: Sentinel Error →
          </Link>
        </div>
      </main>
    </div>
  );
}