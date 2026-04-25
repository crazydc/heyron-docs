import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DMNotReceiving() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>DM Not Receiving Responses</h1>
        <span className="badge-crimson mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You sent a direct message but aren't getting a response. This could be a privacy, permission, or connection issue.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Possible Causes</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Privacy settings</strong> — You blocked DMs from bots</li>
            <li>• <strong>Server restrictions</strong> — Bot only works in servers</li>
            <li>• <strong>Not added to DM</strong> — You need to add the bot to a server</li>
            <li>• <strong>Connection issue</strong> — Bot is offline or disconnected</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Check Discord Privacy Settings</h3>
              <p className="text-slate-400 text-sm mb-2">
                User Settings → Privacy & Safety → Allow direct messages from server members.
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`Settings → Privacy & Safety → 
Server Member Defaults → Allow DMs`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Add Bot to a Server</h3>
              <p className="text-slate-400 text-sm">
                Many bots only respond when invited to a server. Ask an admin to add the bot or use the bot's invite link.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Check If Bot is Online</h3>
              <p className="text-slate-400 text-sm">
                Look for the bot in your server. If it shows as offline or has a red dot, it may be experiencing issues.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">4. Unblock the Bot</h3>
              <p className="text-slate-400 text-sm">
                User Settings → Privacy & Safety → Blocked Users. Make sure the bot isn't in your blocked list.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">For Telegram</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Start a chat with the bot using /start</li>
            <li>• Ensure you haven't blocked the bot</li>
            <li>• Check if bot has privacy mode enabled (ask admin to disable)</li>
            <li>• Try unmuting the bot chat</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/mention-notifications" className="btn-primary">
            ← Mention Notifications
          </Link>
          <Link href="/tutorials/channel-slow" className="btn-primary">
            Next: Channel Responses Slow →
          </Link>
        </div>
      </main>
    </div>
  );
}