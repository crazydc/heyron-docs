import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function SupportMoved() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>#help Moved? Where to Get Support Now</h1>
        <span className="badge-cyan mb-8">Support</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The #help channel moved or you can't find support. Here's where to get help now.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Where to Find Support</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Option 1: Discord Community</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Join the official OpenClaw Discord server</li>
            <li>Look for the #support or #help channel</li>
            <li>Search existing threads for your issue first</li>
            <li>Post a new thread with your problem</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Option 2: GitHub Issues</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Go to the OpenClaw GitHub repository</li>
            <li>Search existing issues</li>
            <li>Create a new issue with details</li>
            <li>Include logs, steps to reproduce, and environment</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Option 3: Dashboard Help</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the OpenClaw Control UI</li>
            <li>Click the "Help" or "?" button</li>
            <li>Search the built-in documentation</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Option 4: Direct Message</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Message a maintainer directly (if you know who to contact)</li>
            <li>Check the documentation for support contacts</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Before Posting</h2>
          <p className="text-slate-300 mb-4">
            Save time by gathering this information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Error message</strong> — Exact text of any error</li>
            <li><strong>Steps to reproduce</strong> — What were you doing?</li>
            <li><strong>Environment</strong> — OS, Docker version, browser</li>
            <li><strong>Logs</strong> — Relevant logs from the dashboard</li>
            <li><strong>Screenshots</strong> — Helpful for UI issues</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Check These First</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>This tutorials page — many common issues are documented here</li>
            <li>The OpenClaw documentation site</li>
            <li>Recent GitHub issues — your bug might already be reported</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/replies-everything" className="btn-primary">
            Next: My Agent Replies to Everything →
          </Link>
        </div>
      </main>
    </div>
  );
}