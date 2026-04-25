import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DifferentBot() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Is This a Different Bot? (DM vs Channel)</h1>
        <span className="badge-mint mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The bot works differently in DMs compared to server channels. It's not a different bot — it's how Discord handles contexts.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why DM Feels Different</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Separate memory</strong> — DM conversations have their own history</li>
            <li><strong>Different permissions</strong> — DM permissions work differently</li>
            <li><strong>No server context</strong> — The bot can't access server roles/permissions in DMs</li>
            <li><strong>Fresh session</strong> — Starting a DM is like a new conversation</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Understanding the Difference</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">In Server Channels:</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Has access to server roles and permissions</li>
            <li>Can see channel-specific settings</li>
            <li>Memory persists within that channel</li>
            <li>Can use slash commands registered for the server</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">In Direct Messages:</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Limited to user-level permissions only</li>
            <li>Fresh conversation by default</li>
            <li>May have different command availability</li>
            <li>More restrictive on file handling</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Make Them Feel the Same</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Option 1: Use the Same Memory File</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Ask the bot to reference a shared MEMORY.md file</li>
            <li>Put important context in files it can read</li>
            <li>The bot will pull from files regardless of channel</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Option 2: Share Context When Switching</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>When moving from DM to channel, summarize what you discussed</li>
            <li>Use "Remember that..." to transfer context</li>
            <li>The bot will save important info to files</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Option 3: Configure Both</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Ensure both DM and server channels are configured in the dashboard</li>
            <li>Check that permissions are set correctly for both</li>
            <li>This ensures consistent behavior</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Tips</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>💡 The bot IS the same — it's just the context that's different</li>
            <li>💡 Files persist across both DM and server</li>
            <li>💡 You can paste context from DM into channel to transfer</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/context-no-carry" className="btn-primary">
            Next: Dashboard vs Discord Context →
          </Link>
        </div>
      </main>
    </div>
  );
}