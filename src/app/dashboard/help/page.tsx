'use client';

import Link from 'next/link';

export default function DashboardHelp() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">💬 Get Help</h1>
      
      <div className="glass-panel p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Community Support</h2>
        <p className="text-slate-400 mb-4">
          Join our Discord community to get help from other users.
        </p>
        <a
          href="https://discord.gg/heyron"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Join Discord →
        </a>
      </div>

      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white mb-4">Documentation</h2>
        <p className="text-slate-400 mb-4">
          Check our docs for detailed guides.
        </p>
        <Link href="/faq" className="text-cyan hover:underline">
          FAQ →
        </Link>
      </div>
    </div>
  );
}