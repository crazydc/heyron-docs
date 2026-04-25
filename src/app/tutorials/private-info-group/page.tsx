import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PrivateInfoGroup() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Shared Private Info in a Group Chat</h1>
        <span className="badge-crimson mb-8">Privacy Issue</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            What to do when your agent accidentally shares private information in a group chat.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <p className="text-slate-300 mb-6">
            Your agent mentioned something it shouldn't have — a personal detail, a password, or sensitive data — in a Discord server, group chat, or public channel.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Immediate Actions</h2>
          <ol className="list-decimal list-inside space-y-3 text-slate-300 mb-6">
            <li><strong>Delete the message</strong> — If you can, remove it quickly</li>
            <li><strong>Warn the agent</strong> — Tell it to never repeat that info</li>
            <li><strong>Check what else it knows</strong> — Review the memory files</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Prevent Future Leaks</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Update your agent's SOUL.md with clear privacy rules</li>
            <li>Remove sensitive data from MEMORY.md</li>
            <li>Create a "confidential" tag for sensitive topics</li>
            <li>Set up word filters for sensitive terms</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Configure Group Chat Safety</h2>
          <p className="text-slate-300 mb-4">
            In your dashboard settings:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Set <strong>Group Privacy Mode</strong> to ON</li>
            <li>Restrict what the agent can mention in groups</li>
            <li>Enable approval for sensitive responses</li>
          </ul>

          <div className="bg-crimson/10 border border-crimson/30 rounded-lg p-4 mt-6">
            <p className="text-crimson text-sm">
              <strong>Remember:</strong> Once something is in a chat, it's potentially forever. Act fast and communicate clear boundaries.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/working-with-files" className="btn-primary">
            Next: Working with Files →
          </Link>
        </div>
      </main>
    </div>
  );
}