'use client';

import Link from 'next/link';

export default function DashboardTutorials() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">📚 Tutorials</h1>
      
      <div className="glass-panel p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Learn Heyron</h2>
        <p className="text-slate-400">
          Browse our collection of tutorials to learn how to use your AI agent.
        </p>
      </div>

      <Link href="/tutorials" className="btn-primary">
        Browse All Tutorials →
      </Link>
    </div>
  );
}