import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AgentLimits() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Setting Agent Boundaries</h1>
        <span className="badge-mint mb-8">Configuration</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Define what your agent can and cannot do to ensure safe and appropriate interactions.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Set Boundaries?</h2>
          <p className="text-slate-300 mb-6">
            Boundaries prevent unwanted behavior, protect sensitive data, and ensure your agent operates within acceptable limits.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Types of Boundaries</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🔒 <strong>Data Access</strong> — What information can the agent read/write</li>
            <li>🛡️ <strong>Safety Limits</strong> — Actions that require confirmation</li>
            <li>⏱️ <strong>Rate Limits</strong> — How often the agent can perform actions</li>
            <li>🚫 <strong>Restricted Actions</strong> — Tasks the agent cannot do</li>
            <li>📊 <strong>Resource Limits</strong> — Token and compute constraints</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Configure Limits</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Open Agent Settings</h3>
                <p className="text-slate-400">Navigate to Configuration → Limits</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Define Restricted Actions</h3>
                <p className="text-slate-400">List actions that require approval or are blocked</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Set Data Access Rules</h3>
                <p className="text-slate-400">Configure which files and directories are accessible</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Enable Approval Requirements</h3>
                <p className="text-slate-400">Set which actions need human approval</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Boundaries Configuration Example</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Agent Boundaries

## Restricted Actions
- Cannot delete files without confirmation
- Cannot send external emails
- Cannot access financial systems
- Cannot modify system configuration

## Approval Required For
- File deletions over 1MB
- External API calls
- Sending messages to new contacts
- Executing shell commands

## Data Access
- Read: /workspace/*
- Write: /workspace/outputs/*
- No access: /system, /secrets`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-crimson">
              <strong>⚠️ Important:</strong> Always set appropriate boundaries, especially when your agent has access to sensitive systems or data.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/agent-skills" className="btn-primary">
            Next: Adding Custom Skills →
          </Link>
        </div>
      </main>
    </div>
  );
}