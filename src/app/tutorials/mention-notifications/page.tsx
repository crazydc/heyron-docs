import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MentionNotifications() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Mention Notifications Missed</h1>
        <span className="badge-amber mb-8">Notifications</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're being mentioned but not receiving notifications. This is usually a permission or settings issue.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Causes</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Missing permissions</strong> — Bot can't mention you</li>
            <li>• <strong>Muted channel</strong> — Channel-specific mute</li>
            <li>• <strong>Role not set up</strong> — You need a role to be mentioned</li>
            <li>• <strong>Notification level</strong> — Only @everyone triggers notifications</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Enable Mention Notifications</h3>
              <p className="text-slate-400 text-sm">
                In Discord: User Settings → Notifications → "Server Notifications" → Enable. Make sure "Notify for @mentions" is selected.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Get a Mentionable Role</h3>
              <p className="text-slate-400 text-sm">
                Ask an admin to give you a role that's set as mentionable. You can't be mentioned without a role or @everyone.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Check Channel Permissions</h3>
              <p className="text-slate-400 text-sm">
                Server Settings → Channels → Your Channel → Permissions. Ensure you have "Read Messages" and the bot can "Mention @everyone".
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">4. Unmute the Channel</h3>
              <p className="text-slate-400 text-sm">
                Right-click the channel in Discord → Unmute Channel. Also check if you've muted the server.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">For Admins</h2>
          <p className="text-slate-300 mb-4">
            If members aren't getting notifications:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Enable "Mention @everyone, @here" permission for the bot</li>
            <li>Set up roles as mentionable (Server Settings → Roles)</li>
            <li>Ensure notification settings allow mentions</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/voice-notifications" className="btn-primary">
            ← Voice Notifications
          </Link>
          <Link href="/tutorials/dm-not-receiving" className="btn-primary">
            Next: DM Not Receiving →
          </Link>
        </div>
      </main>
    </div>
  );
}