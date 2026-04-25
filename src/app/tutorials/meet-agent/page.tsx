import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MeetAgent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>"Meet [Agent]" Opened OpenClaw Dashboard?</h1>
        <span className="badge-cyan mb-8">Explanation</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You clicked "Meet [Your Agent]" or a similar link and ended up at the OpenClaw dashboard instead of a chat. Here's what's happening.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What You Expected</h2>
          <p className="text-slate-300 mb-6">
            You probably wanted to start chatting with your agent directly — a conversation interface where you can type messages and get responses.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">What You Got Instead</h2>
          <p className="text-slate-300 mb-6">
            The OpenClaw dashboard — a control panel where you configure settings, manage sessions, and control your agent's behavior. It's powerful, but not the chat interface you were looking for.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Different entry points</strong> — "Meet [Agent]" goes to dashboard, not chat</li>
            <li><strong className="text-white">No direct chat link</strong> — The app may not have a public chat URL yet</li>
            <li><strong className="text-white">You need to be logged in</strong> — Chat requires authentication</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Actually Chat</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <h3 className="font-bold text-white mb-3">The Right Way to Chat:</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li><strong className="text-white">Via Discord</strong> — Add the bot to a server and mention it or DM it</li>
              <li><strong className="text-white">Via Telegram</strong> — Start a chat with your bot on Telegram</li>
              <li><strong className="text-white">Via Dashboard</strong> — Click "Sessions" in the dashboard, then select or create a session</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Finding Your Chat Interface</h2>
          <div className="space-y-3 text-slate-300">
            <p><strong className="text-white">Discord:</strong> Invite your agent bot to a server. Then mention it in a channel like <code className="text-cyan">@your-agent</code> or DM it directly.</p>
            <p><strong className="text-white">Telegram:</strong> Open Telegram and search for your agent's bot username. Start a new chat there.</p>
            <p><strong className="text-white">Dashboard:</strong> Navigate to Sessions → Click on a session → The chat interface will appear.</p>
          </div>

          <div className="mt-6 p-4 bg-cyan/10 border border-cyan/30 rounded-lg">
            <p className="text-cyan">
              <strong className="text-white">💡 Tip:</strong> Bookmark your preferred chat platform (Discord or Telegram). That's the fastest way to reach your agent.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/new-not-responding" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/approval-required" className="btn-primary">
            Next: Why Your Agent Says "Approval Required" →
          </Link>
        </div>
      </main>
    </div>
  );
}