import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PluginConfig() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Configuring Plugins</h1>
        <span className="badge-violet mb-8">Advanced</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Learn how to configure and customize installed plugins to match your workflow needs.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Configuration Options</h2>
          <p className="text-slate-300 mb-6">
            Each plugin has unique configuration options. Common settings include API credentials, behavior toggles, and integration settings.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Common Configuration Fields</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🔑 <strong>API Keys</strong> — Authentication credentials</li>
            <li>⚙️ <strong>Behavior Settings</strong> — How the plugin behaves</li>
            <li>🔔 <strong>Notifications</strong> — Alert preferences</li>
            <li>📋 <strong>Default Options</strong> — Pre-configured values</li>
            <li>🔒 <strong>Permissions</strong> — Access control settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Configure a Plugin</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Access Plugin Settings</h3>
                <p className="text-slate-400">Navigate to Settings → Plugins → [Plugin Name]</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Enter API Credentials</h3>
                <p className="text-slate-400">Add required API keys and tokens</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Configure Options</h3>
                <p className="text-slate-400">Set behavior preferences and defaults</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Test Connection</h3>
                <p className="text-slate-400">Verify the plugin can connect to the service</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Save Configuration</h3>
                <p className="text-slate-400">Apply changes and restart if needed</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Configuration File Example</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# plugins/github/config.json
{
  "apiKey": "ghp_xxxxxxxxxxxx",
  "defaultRepo": "my-org/*",
  "notifications": {
    "pullRequests": true,
    "issues": true,
    "releases": false
  },
  "permissions": {
    "read": true,
    "write": true,
    "admin": false
  },
  "webhookUrl": "https://agent.example.com/webhooks/github"
}`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-amber">
              <strong>⚠️ Security Note:</strong> Never commit API keys to version control. Use environment variables or secret management services.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/theme-dark" className="btn-primary">
            Next: Dark Mode Theme →
          </Link>
        </div>
      </main>
    </div>
  );
}