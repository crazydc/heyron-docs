import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HeartbeatChecklist() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/templates" className="text-cyan hover:underline">← Back to Templates</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>HEARTBEAT.md — Proactive Checklist</h1>
        <span className="badge-amber mb-8">Template</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A proactive checklist that runs periodically to keep systems healthy.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Heartbeat Checks

Run these checks during heartbeats (every ~30 min):

## Server Health Checks
Check ping/online status to all servers:
- tmd: tmdplex.duckdns.org:80
- mini PC: thesumblers.duckdns.org:46664

## Morning Brief (06:00-08:00)
Run full brief with:
- Memory usage per server
- Disk usage
- Docker container status
- Site availability

## Notes
- Skip if nothing needs attention
- Don't check during quiet hours (23:00-08:00) unless urgent`}
          </pre>
        </div>

        <div className="flex gap-4">
          <Link href="/templates/agents-operating-manual" className="btn-primary">
            ← AGENTS.md
          </Link>
        </div>
      </main>
    </div>
  );
}