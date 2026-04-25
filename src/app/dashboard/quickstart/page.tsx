'use client';

import Link from 'next/link';

export default function DashboardQuickstart() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">⚡ Quickstart</h1>
      
      <div className="glass-panel p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Get Started Fast</h2>
        <p className="text-slate-400 mb-4">
          Follow these steps to set up your AI agent in minutes.
        </p>
        
        <ol className="list-decimal list-inside space-y-3 text-slate-300">
          <li>Get an API key from <a href="https://openrouter.ai" target="_blank" className="text-cyan hover:underline">OpenRouter</a></li>
          <li>Connect to Discord or Telegram</li>
          <li>Create your first SOUL.md personality file</li>
          <li>Start chatting with your agent!</li>
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/getting-started" className="glass-panel p-6 hover:border-cyan border border-transparent transition-colors">
          <h3 className="font-bold text-white mb-2">📖 Full Guide</h3>
          <p className="text-slate-400 text-sm">Detailed documentation</p>
        </Link>
        <Link href="https://github.com/crazydc/heyron-quickstart" className="glass-panel p-6 hover:border-cyan border border-transparent transition-colors">
          <h3 className="font-bold text-white mb-2">📦 Quickstart Repo</h3>
          <p className="text-slate-400 text-sm">Clone from GitHub</p>
        </Link>
      </div>
    </div>
  );
}