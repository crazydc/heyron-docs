import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DiscordWrongChannel() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Discord Channel Access Not Working</h1>
        <span className="badge-cyan mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your bot can't see or access the Discord channel you want it to. Here's how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Wrong channel ID</strong> — You may have pasted the wrong channel ID</li>
            <li><strong>Bot not in server</strong> — The bot needs to be invited to the Discord server</li>
            <li><strong>Missing permissions</strong> — The bot doesn't have Read Messages permission</li>
            <li><strong>Channel is private</strong> — The channel requires additional role access</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Verify the Bot is in Your Server</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Go to your Discord server settings</li>
            <li>Check the member list — look for your bot</li>
            <li>If not visible, re-invite the bot using the OAuth link</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Check Channel Permissions</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Right-click the channel → Edit Channel</li>
            <li>Go to Permissions → Advanced Permissions</li>
            <li>Ensure the bot role has <strong>Read Messages</strong> enabled</li>
            <li>Check @everyone role if needed</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Verify the Channel ID</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Enable Developer Mode in Discord (User Settings → Advanced)</li>
            <li>Right-click the channel → Copy ID</li>
            <li>Make sure you're using the <strong>Channel ID</strong>, not the Message ID or Server ID</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Checklist</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>✅ Bot is in the Discord server</li>
            <li>✅ Bot has Read Messages permission on the channel</li>
            <li>✅ Channel ID is correct (18-digit number)</li>
            <li>✅ Channel is not hidden behind role requirements</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/discord-cant-reply" className="btn-primary">
            Next: Bot Can't Reply →
          </Link>
        </div>
      </main>
    </div>
  );
}