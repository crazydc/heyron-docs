import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function VoiceNotifications() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Voice Message Notifications Not Working</h1>
        <span className="badge-crimson mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're not receiving notifications for voice messages in Discord or Telegram. Here's how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Voice Notifications May Not Work</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Server permissions</strong> — Bot lacks permission to mention you</li>
            <li>• <strong>Notification settings</strong> — Your channel/server notifications are muted</li>
            <li>• <strong>Role mentions</strong> — Your role isn't mentioned directly</li>
            <li>• <strong>DM restrictions</strong> — The bot can't DM you</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Check Discord Notification Settings</h3>
              <p className="text-slate-400 text-sm mb-2">
                Go to Server Settings → Notifications and ensure:
              </p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                <li>Server notifications are enabled</li>
                <li>Your specific channel isn't muted</li>
                <li>"All messages" or @mentions is selected</li>
              </ul>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Verify Bot Permissions</h3>
              <p className="text-slate-400 text-sm mb-2">
                The bot needs these permissions:
              </p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                <li>Read Messages (or Read Message History)</li>
                <li>Send Messages</li>
                <li>Mention @everyone, @here, or roles</li>
              </ul>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Check Your Discord Privacy Settings</h3>
              <p className="text-slate-400 text-sm">
                Discord User Settings → Notifications → ensure "Server Notifications" allows DMs from server members.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">4. For Telegram, Check Bot Privacy Mode</h3>
              <p className="text-slate-400 text-sm">
                If the bot is in privacy mode, it may not see messages unless mentioned. Ask the admin to disable privacy mode or add the bot to groups where you need notifications.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Checklist</h2>
          <ul className="space-y-2 text-slate-300">
            <li>✓ Server/channel notifications enabled</li>
            <li>✓ Bot has mention permissions</li>
            <li>✓ You're not blocked/muted by the bot</li>
            <li>✓ Your Discord allows DMs from server members</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/mention-notifications" className="btn-primary">
            Next: Mention Notifications →
          </Link>
        </div>
      </main>
    </div>
  );
}