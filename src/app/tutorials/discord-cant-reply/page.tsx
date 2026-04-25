import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DiscordCantReply() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Bot Can Read But Can't Reply in Discord?</h1>
        <span className="badge-cyan mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The bot can see messages but stays silent. This is a permissions issue — here's how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <p className="text-slate-300 mb-6">
            Your bot is successfully reading the channel (you can see it in the member list), but it never responds to messages. This means the bot has <strong>Read</strong> permission but is missing <strong>Send Messages</strong> permission.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check Channel-Specific Permissions</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Right-click the channel → Edit Channel</li>
            <li>Go to <strong>Permissions</strong> tab</li>
            <li>Check the bot's role or user permissions</li>
            <li>Ensure <strong>Send Messages</strong> is enabled</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Check Server-Wide Role Permissions</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Server Settings → Roles</li>
            <li>Find your bot's role</li>
            <li>Enable <strong>Send Messages</strong> and <strong>Send Messages in Threads</strong></li>
            <li>Make sure the role is positioned above the bot in the list</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Verify Bot Has Necessary Permissions</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Server Settings → Integrations</li>
            <li>Find your bot</li>
            <li>Check that it has these permissions:</li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>📝 Send Messages</li>
              <li>📝 Send Messages in Threads</li>
              <li>📝 Use Application Commands</li>
              <li>💬 Read Message History</li>
            </ul>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Permission Checklist</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>✅ Send Messages - Required for replies</li>
            <li>✅ Send Messages in Threads - For thread conversations</li>
            <li>✅ Read Message History - For context</li>
            <li>✅ Use Application Commands - For slash commands</li>
            <li>✅ Embed Links - For rich message formatting</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Common Gotchas</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Channel overwrites</strong> — Channel-specific permissions override server roles</li>
            <li><strong>Admin bot role</strong> — Sometimes simpler to give bot Admin temporarily, then dial back</li>
            <li><strong>Position ordering</strong> — Bot role must be above @everyone in the roles list</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/typing-nothing" className="btn-primary">
            Next: Bot Typing Then Nothing →
          </Link>
        </div>
      </main>
    </div>
  );
}