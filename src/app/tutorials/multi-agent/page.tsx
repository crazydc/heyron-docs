import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MultiAgent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Running Multiple Agents?</h1>
        <span className="badge-violet mb-8">How-To & Reference</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Need to run multiple agents in parallel? Here's how to set that up.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Multi-Agent Setup</h2>
          <p className="text-slate-300 mb-6">
            OpenClaw supports running multiple agents for different purposes. This is useful when you need:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Different agents for different Discord servers</li>
            <li>Specialized agents for specific tasks</li>
            <li>Separation of production and development agents</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Set It Up</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">Step 1: Create Multiple Configurations</h3>
          <p className="text-slate-300 mb-4">
            Each agent needs its own configuration file:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# agent-primary.yaml
name: Primary Agent
channels:
  - discord:123456789

# agent-secondary.yaml  
name: Secondary Agent
channels:
  - discord:987654321`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Step 2: Run Each Agent</h3>
          <p className="text-slate-300 mb-4">
            Start each agent with its own config:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`openclaw start --config agent-primary.yaml
openclaw start --config agent-secondary.yaml`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Step 3: Use Different Ports</h3>
          <p className="text-slate-300 mb-4">
            Each agent needs its own port to avoid conflicts:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# agent-primary.yaml
gateway:
  port: 31000

# agent-secondary.yaml
gateway:
  port: 31001`}
          </pre>
        </div>

        <div className="glass-panel p-4 mb-8 bg-amber/10 border-amber/30">
          <h3 className="text-lg font-bold text-amber mb-2">⚠️ Resource Consideration</h3>
          <p className="text-slate-300">
            Each agent uses API tokens and system resources. Monitor your usage to avoid unexpected costs.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/sub-agents" className="btn-primary">
            Next: How to Use Sub-Agents →
          </Link>
        </div>
      </main>
    </div>
  );
}