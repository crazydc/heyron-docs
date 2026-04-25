import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function WhatYourAgentCanDo() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>What Your Agent Can (and Can't) Do</h1>
        <span className="badge-mint mb-8">Start Here</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Set your expectations right. Everything your agent can do out of the box.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Your Agent Can Do</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>💬 <strong>Chat with you</strong> — in Discord, Telegram, Signal, and more</li>
            <li>🔍 <strong>Research</strong> — search the web and summarize findings</li>
            <li>📝 <strong>Write & draft</strong> — emails, posts, code, documents</li>
            <li>🧠 <strong>Remember context</strong> — within each conversation</li>
            <li>📂 <strong>Work with files</strong> — read, write, and organize</li>
            <li>🖼️ <strong>See images</strong> — analyze screenshots and photos</li>
            <li>⏰ <strong>Schedule tasks</strong> — with cron and reminders</li>
            <li>📧 <strong>Send emails</strong> — via AgentMail or Gmail</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">What Your Agent Can't Do</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🚫 <strong>Access other conversations</strong> — Discord ≠ Telegram ≠ Dashboard</li>
            <li>🚫 <strong>Remember everything forever</strong> — needs memory files for long-term recall</li>
            <li>🚫 <strong>Post to social media automatically</strong> — needs API connections</li>
            <li>🚫 <strong>Access paid content</strong> — behind paywalls need special handling</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">The Key Insight</h2>
          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              Your agent works best as a <strong>guided operator</strong>: you define goal + constraints, it executes the repeatable parts. It's not a magic autopilot — it's a powerful teammate.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/first-week-no-tech" className="btn-primary">
            Next: Week 1 Plan →
          </Link>
        </div>
      </main>
    </div>
  );
}