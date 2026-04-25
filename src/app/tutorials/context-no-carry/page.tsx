import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ContextNoCarry() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Dashboard vs Discord: Why Context Doesn't Carry</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You had a great conversation in the dashboard, but when you switch to Discord, the bot doesn't remember anything. Here's why.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Context Doesn't Carry</h2>
          <p className="text-slate-300 mb-6">
            The dashboard and Discord are <strong>separate conversation sessions</strong>. Each platform starts with its own context window. Here's how it works:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Separate sessions</strong> — Dashboard chat and Discord chat are different conversations</li>
            <li><strong>No automatic sync</strong> — What happens in one doesn't automatically transfer to the other</li>
            <li><strong>Each has its own history</strong> — They maintain separate message histories</li>
            <li><strong>File memory is shared</strong> — Things saved to files ARE remembered across platforms</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">The Memory Hierarchy</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Platform-Specific (Doesn't Carry):</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Chat message history</li>
            <li>Recent context window</li>
            <li>Temporary conversation flow</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Shared (Carries Across Platforms):</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Files in your workspace (MEMORY.md, etc.)</li>
            <li>Agent configuration (SOUL.md, USER.md)</li>
            <li>Permanent knowledge bases</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Transfer Context</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Method 1: Save to File</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Ask the bot: "Save this to MEMORY.md"</li>
            <li>The bot will write important context to a file</li>
            <li>Next session (any platform) can read from that file</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Method 2: Paste Context</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Copy relevant messages from one platform</li>
            <li>Paste them at the start of the other platform's chat</li>
            <li>Add context like "Here's what we discussed earlier..."</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Method 3: Use a Summary</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Ask the bot to summarize the conversation before switching</li>
            <li>Say: "Give me a summary of what we've done so far"</li>
            <li>Use that summary as context in the new platform</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Best Practice</h2>
          <p className="text-slate-300 mb-4">
            Keep important information in files like <code className="text-cyan">MEMORY.md</code> or <code className="text-cyan">BEST_PRACTICES.md</code>. These are automatically read at the start of every session, regardless of platform.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/second-agent" className="btn-primary">
            Next: Did I Create a Second Agent? →
          </Link>
        </div>
      </main>
    </div>
  );
}