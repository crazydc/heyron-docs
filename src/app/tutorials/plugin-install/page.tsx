import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PluginInstall() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Installing Plugins</h1>
        <span className="badge-violet mb-8">Advanced</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Expand your agent's capabilities by installing plugins — pre-built integrations and extensions.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Are Plugins?</h2>
          <p className="text-slate-300 mb-6">
            Plugins are pre-packaged extensions that add new functionality to your agent. They can connect to services, add tools, or modify behavior.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Available Plugin Categories</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>📦 <strong>Productivity</strong> — Calendar, email, task management</li>
            <li>💬 <strong>Communication</strong> — Slack, Discord, Teams integrations</li>
            <li>☁️ <strong>Cloud Services</strong> — AWS, GCP, Azure utilities</li>
            <li>🛠️ <strong>Developer Tools</strong> — GitHub, Jira, CI/CD pipelines</li>
            <li>📊 <strong>Analytics</strong> — Data visualization and reporting</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Install a Plugin</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Browse Plugin Library</h3>
                <p className="text-slate-400">Open Settings → Plugins → Browse</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Select Plugin</h3>
                <p className="text-slate-400">Find the plugin you need and view details</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Install Plugin</h3>
                <p className="text-slate-400">Click Install and confirm permissions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Configure Settings</h3>
                <p className="text-slate-400">Set up API keys and preferences</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Enable Plugin</h3>
                <p className="text-slate-400">Toggle the plugin to active status</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Installing via Package Manager</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Install using CLI
agent plugin install github
agent plugin install slack
agent plugin install google-calendar

# List installed plugins
agent plugin list

# Update plugins
agent plugin update all`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Only install plugins from trusted sources. Review permissions before installing.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/plugin-config" className="btn-primary">
            Next: Configuring Plugins →
          </Link>
        </div>
      </main>
    </div>
  );
}