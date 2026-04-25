import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RepliesEverything() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>My Agent Replies to Everything</h1>
        <span className="badge-amber mb-8">Behavior</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your Discord bot is replying to every message, even when not mentioned. Here's how to fix over-chatty behavior.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Wrong mention mode</strong> — Bot is set to reply to all messages</li>
            <li><strong>Prefix too broad</strong> — Bot responds to common prefixes</li>
            <li><strong>Activity set to all</strong> — Bot watches all channels</li>
            <li><strong>Prompt instructions</strong> — Agent is told to respond to everything</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check Mention Settings</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open Discord settings in OpenClaw dashboard</li>
            <li>Look for "Mention Mode" or "Reply Mode"</li>
            <li>Change from "All Messages" to:</li>
            <ul className="list-disc list-inside ml-6 space-y-1 text-slate-400">
              <li><strong>Mentions only</strong> — Only when @mentioned</li>
              <li><strong>Commands only</strong> — Only slash commands</li>
              <li><strong>Prefix</strong> — Only when a prefix is used</li>
            </ul>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Restrict Channel Access</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Go to Discord → Channel settings in OpenClaw</li>
            <li>Specify which channels the bot should watch</li>
            <li>Remove channels where you don't want replies</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Update Prompt</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open your agent's SOUL.md or config</li>
            <li>Find instructions about when to respond</li>
            <li>Add something like:</li>
            <li className="text-slate-400 ml-4">"Only respond when explicitly asked or @mentioned. Do not respond to casual conversation unless invited."</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 4: Restart the Session</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Use <code className="text-cyan">/new</code> in Discord to start fresh</li>
            <li>The agent will pick up new settings on next start</li>
            <li>Test with a casual message to confirm fix</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Toggle</h2>
          <p className="text-slate-300 mb-4">
            Most common fix:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Dashboard → Discord Settings → "Bot should reply to"</li>
            <li>Change from "Every message" to "When @mentioned"</li>
            <li>Save and restart Discord connection</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/blank-screen" className="btn-primary">
            Next: Dashboard Blank Screen →
          </Link>
        </div>
      </main>
    </div>
  );
}