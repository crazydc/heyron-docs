import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DashboardGuide() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Your Dashboard — Every Button Explained</h1>
        <span className="badge-violet mb-8">Reference</span>
        <span className="text-slate-400 ml-4">10 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Complete guide to the OpenClaw Control UI. Know your tools and take full control of your agent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Getting to Know Your Dashboard</h2>
          <p className="text-slate-300 mb-6">
            The OpenClaw dashboard is your command center. Here's what each section does and how to use it effectively.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Main Navigation</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">💬 Sessions</h3>
              <p className="text-slate-300 text-sm">Active and past conversations with your agent. Click any session to continue where you left off.</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">📁 Files</h3>
              <p className="text-slate-300 text-sm">Browse and manage all files your agent has created or can access. Drag and drop to upload.</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">⚙️ Settings</h3>
              <p className="text-slate-300 text-sm">Configure your agent's personality, memory, tools, and connections to Discord, Telegram, and other platforms.</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">🔌 Plugins</h3>
              <p className="text-slate-300 text-sm">Enable and configure plugins that extend your agent's capabilities.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Session Controls</h2>
          <div className="space-y-3 text-slate-300 mb-6">
            <div className="flex items-center gap-3">
              <span className="badge-mint">New</span>
              <span>Start a fresh conversation from scratch</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="badge-amber">Resume</span>
              <span>Continue an existing session</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="badge-crimson">Clear</span>
              <span>Delete session history (permanent!)</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">📋 Copy Context</h3>
              <p className="text-slate-300 text-sm">Copy current conversation to paste elsewhere</p>
            </div>
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">💾 Save Session</h3>
              <p className="text-slate-300 text-sm">Export conversation as a transcript</p>
            </div>
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">🔒 Lock Session</h3>
              <p className="text-slate-300 text-sm">Prevent accidental changes</p>
            </div>
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">📊 Stats</h3>
              <p className="text-slate-300 text-sm">View token usage and response times</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Status Indicators</h2>
          <div className="space-y-2 text-slate-300 mb-6">
            <p><span className="text-mint">🟢 Green</span> — Agent is online and responsive</p>
            <p><span className="text-amber">🟡 Yellow</span> — Agent is thinking or processing</p>
            <p><span className="text-crimson">🔴 Red</span> — Connection issue or agent stuck</p>
            <p><span className="text-slate-400">⚫ Gray</span> — Agent is offline</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Keyboard Shortcuts</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <div className="grid md:grid-cols-2 gap-2 text-sm font-mono">
              <div><span className="text-cyan">Ctrl+K</span> — Quick command</div>
              <div><span className="text-cyan">Ctrl+N</span> — New session</div>
              <div><span className="text-cyan">Ctrl+S</span> — Save session</div>
              <div><span className="text-cyan">Ctrl+/</span> — Show shortcuts</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/sub-agents" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/old-version" className="btn-primary">
            Next: Updated File But Agent Uses Old Version? →
          </Link>
        </div>
      </main>
    </div>
  );
}