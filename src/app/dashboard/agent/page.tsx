'use client';

import Link from 'next/link';

export default function DashboardAgent() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">🚀 Your Agent</h1>
      
      <div className="glass-panel p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Agent Status</h2>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-mint animate-pulse"></span>
          <span className="text-slate-300">Online and ready</span>
        </div>
        <p className="text-slate-400 mb-4">
          Your AI agent is connected and waiting for your commands.
        </p>
        <a
          href="https://heyron.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Open Agent →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass-panel p-6">
          <h3 className="font-bold text-white mb-2">New User?</h3>
          <p className="text-slate-400 text-sm mb-4">
            If you&apos;re new, complete the launchpad to get started.
          </p>
          <Link href="/launchpad" className="text-cyan hover:underline">
            Go to Launchpad →
          </Link>
        </div>
        <div className="glass-panel p-6">
          <h3 className="font-bold text-white mb-2">Returning User?</h3>
          <p className="text-slate-400 text-sm mb-4">
            Your agent remembers your preferences and previous conversations.
          </p>
          <span className="text-mint text-sm">✓ Memory active</span>
        </div>
      </div>
    </div>
  );
}