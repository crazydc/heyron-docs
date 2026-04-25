import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TeamSharing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Sharing with Team</h1>
        <span className="badge-mint mb-8">Collaboration</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Collaborate with your team by sharing access to your AI agent — everyone can benefit from the same assistant.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Team Sharing Options</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>👥 <strong>Full Access</strong> — Complete control over agent</li>
            <li>✉️ <strong>Chat Access</strong> — Can chat, cannot configure</li>
            <li>👁️ <strong>View Only</strong> — Observe conversations without interaction</li>
            <li>⚡ <strong>Scheduled Access</strong> — Time-limited permissions</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Permission Levels</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🔑 <strong>Owner</strong> — Full control, billing, deletion</li>
            <li>⚙️ <strong>Admin</strong> — Configuration, can manage other members</li>
            <li>✏️ <strong>Editor</strong> — Can modify settings and content</li>
            <li>💬 <strong>Member</strong> — Can use the agent</li>
            <li>👀 <strong>Guest</strong> — Limited or view-only access</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Share Access</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Open Team Settings</h3>
                <p className="text-slate-400">Settings → Team & Sharing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Invite Team Members</h3>
                <p className="text-slate-400">Click "Invite Member" and enter email addresses</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Set Permission Level</h3>
                <p className="text-slate-400">Choose access level for each member</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Send Invitations</h3>
                <p className="text-slate-400">Members receive email to accept invite</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Manage Active Members</h3>
                <p className="text-slate-400">View, modify, or remove access anytime</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Team Channels</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Share specific channels with different teams
team-marketing: #marketing-channel
team-support: #support-channel
team-dev: #dev-channel, /workspace/code

# Set channel-specific permissions
channel.setPermissions('marketing', {
  read: true,
  write: true,
  configure: false
})`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-amber">
              <strong>⚠️ Security Note:</strong> Regularly review team member access. Remove members who no longer need access and use the principle of least privilege.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/usage-stats" className="btn-primary">
            Next: Viewing Usage Statistics →
          </Link>
        </div>
      </main>
    </div>
  );
}