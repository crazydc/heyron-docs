import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function UpgradeFail() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Upgrade Failed Mid-Way?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your OpenClaw upgrade didn't complete successfully. Let's get you back on track.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Might Have Gone Wrong</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Network interruption</strong> — Connection lost during download</li>
            <li><strong>Disk space</strong> — Not enough space to extract files</li>
            <li><strong>Permission issues</strong> — Not enough permissions to write files</li>
            <li><strong>Version conflict</strong> — New version incompatible with config</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Recover</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">Step 1: Check Current Version</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`openclaw --version`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Step 2: Verify Installation</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Check if OpenClaw is still working
openclaw gateway status`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Step 3: Re-run the Upgrade</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Clean and reinstall
openclaw self-update --clean

# Or force reinstall
openclaw self-update --force`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Step 4: Rollback (if needed)</h3>
          <p className="text-slate-300 mb-4">
            If the new version is broken, you can rollback:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# List available versions
openclaw versions

# Rollback to previous version
openclaw rollback`}
          </pre>
        </div>

        <div className="glass-panel p-4 mb-8 bg-mint/10 border-mint/30">
          <h3 className="text-lg font-bold text-mint mb-2">✅ Best Practice</h3>
          <p className="text-slate-300">
            Before upgrading, always backup your config: <code className="text-cyan">cp ~/.openclaw/config.yaml ~/.openclaw/config.yaml.bak</code>
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            Back to Tutorials →
          </Link>
        </div>
      </main>
    </div>
  );
}