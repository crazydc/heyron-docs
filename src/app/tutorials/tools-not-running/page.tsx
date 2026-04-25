import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ToolsNotRunning() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Chat Works, But Tools Don't Run?</h1>
        <span className="badge-crimson mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The agent responds to messages but never executes tools (read, write, exec, etc.). Here's how to get tools running.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Tools disabled</strong> — Tools were explicitly turned off in the config</li>
            <li>• <strong>Missing permissions</strong> — Agent lacks permission to execute tools</li>
            <li>• <strong>Model limitation</strong> — Current model doesn't support tool calls</li>
            <li>• <strong>Tool schema mismatch</strong> — Tools not registered properly</li>
            <li>• <strong>Security profile</strong> — Hardened profile blocks tool execution</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">Step 1: Check Tool Status</h3>
          <p className="text-slate-300 mb-4">
            Ask the agent what tools are available:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"What tools do you have access to right now? List them all."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 2: Enable Tools Explicitly</h3>
          <p className="text-slate-300 mb-4">
            Request tools be enabled:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Enable all available tools. I want you to use read, write, and exec to complete this task."`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 3: Check Permissions</h3>
          <p className="text-slate-300 mb-4">
            Verify your agent has execution permissions:
          </p>
          <ul className="space-y-2 text-slate-300 mb-4 ml-4">
            <li>• Check agent config for tool permissions</li>
            <li>• Review security profile settings</li>
            <li>• Ensure API key has tool execution rights</li>
          </ul>

          <h3 className="text-xl font-semibold text-cyan mb-3">Step 4: Force Tool Use</h3>
          <p className="text-slate-300 mb-4">
            Be explicit about requiring tool execution:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`"You MUST use tools to complete this. Do not ask me to do it manually. Read the file at [path] and tell me what you find."`}
          </pre>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Diagnostics</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Does the agent acknowledge tool calls in its response?</li>
            <li>• Are tools listed but fail when triggered?</li>
            <li>• Check the gateway logs for tool execution errors</li>
            <li>• Verify the skill/agent config has tools enabled</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/tools-disappeared" className="btn-primary">
            Next: Tools Disappeared →
          </Link>
        </div>
      </main>
    </div>
  );
}