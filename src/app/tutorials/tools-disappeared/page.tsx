import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ToolsDisappeared() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Why Tools Suddenly Disappeared?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your agent had tools but now they're gone. This usually happens suddenly after a config change or session issue. Let's get them back.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Profile switch</strong> — You switched to a profile with fewer tools</li>
            <li>• <strong>Skill disabled</strong> — A skill providing tools was disabled</li>
            <li>• <strong>Session reset</strong> — Session restarted without tool initialization</li>
            <li>• <strong>Config change</strong> — Gateway or agent config was modified</li>
            <li>• <strong>Model change</strong> — New model doesn't support tool calling</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Check Available Tools</h3>
          <p className="text-slate-300 mb-4">
            Ask what's currently available:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"What tools are currently registered? List every tool you have access to."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Check Active Profile</h3>
          <p className="text-slate-300 mb-4">
            Verify which profile is active:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"What profile am I using? Show me the active profile name and its permissions."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Enable Tools</h3>
          <p className="text-slate-300 mb-4">
            Request tools be re-enabled:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Enable all available tools. I need read, write, exec, and other file/system tools."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Restart the Agent</h3>
          <p className="text-slate-300 mb-4">
            If tools are gone due to session issues:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Restart the agent session with full tool access. Re-initialize all tools from the default skill set."`}
          </pre>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prevention</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Note which profile provides the tools you need</li>
            <li>• Check skill status after any config changes</li>
            <li>• Keep a known-working profile as backup</li>
            <li>• Verify tool access at start of important sessions</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/tools-not-running" className="btn-primary">
            Next: Tools Not Running →
          </Link>
        </div>
      </main>
    </div>
  );
}