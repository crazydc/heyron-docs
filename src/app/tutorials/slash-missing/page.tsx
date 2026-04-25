import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SlashMissing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Discord Slash Commands Missing?</h1>
        <span className="badge-cyan mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The "/" commands aren't appearing in Discord. Here's how to get them registered.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Slash Commands Don't Appear</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Commands not synced</strong> — The bot hasn't registered commands with Discord yet</li>
            <li><strong>Missing permissions</strong> — Bot needs Use Application Commands permission</li>
            <li><strong>Command scope issues</strong> — Commands may only be available in certain channels</li>
            <li><strong>Server cache</strong> — Discord needs to refresh command cache</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Force Command Sync</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the OpenClaw dashboard</li>
            <li>Go to Discord settings</li>
            <li>Look for "Sync Commands" or "Register Commands"</li>
            <li>Click to force re-sync with Discord</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Check Bot Permissions</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Server Settings → Roles → Bot role</li>
            <li>Ensure <strong>Use Application Commands</strong> is enabled</li>
            <li>Also check <strong>Manage Server</strong> may be needed for initial setup</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Refresh Discord</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Type "/" in the message box — this triggers command loading</li>
            <li>Try restarting the Discord client</li>
            <li>Mobile app may need to be force-closed and reopened</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 4: Re-invite the Bot</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Sometimes a fresh invite fixes registration issues</li>
            <li>Generate a new OAuth invite link</li>
            <li>Make sure to grant <strong>Application Commands</strong> scope</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Standard Slash Commands</h2>
          <p className="text-slate-300 mb-4">
            These are the default commands your bot should have:
          </p>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li><code className="text-cyan">/new</code> - Start a fresh conversation</li>
            <li><code className="text-cyan">/help</code> - Get help with commands</li>
            <li><code className="text-cyan">/status</code> - Check bot status</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Still No Commands?</h2>
          <p className="text-slate-300 mb-4">
            If commands still don't appear after trying all steps:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Check Discord's developer mode is off (can cause conflicts)</li>
            <li>Verify the bot is online (green status)</li>
            <li>Try in a different channel</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/discord-email" className="btn-primary">
            Next: Discord Email Verify →
          </Link>
        </div>
      </main>
    </div>
  );
}