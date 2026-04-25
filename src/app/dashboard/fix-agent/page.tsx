'use client';

import Link from 'next/link';

export default function DashboardFixAgent() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">🛠 Fix Agent</h1>
      
      <div className="glass-panel p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Troubleshooting</h2>
        <p className="text-slate-400">
          Having issues? Try these common fixes.
        </p>
      </div>

      <Link href="/troubleshooting" className="btn-primary">
        Go to Troubleshooting →
      </Link>
    </div>
  );
}