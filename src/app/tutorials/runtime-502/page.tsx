import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Runtime502() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Runtime Health 502 (Server Side)</h1>
        <span className="badge-red mb-8">Server Error</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            You're seeing a 502 Bad Gateway error when your agent tries to run. This usually means the server couldn't reach the runtime.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Causes a 502 Error</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Runtime crashed</strong> — The agent runtime process stopped unexpectedly</li>
            <li><strong>Gateway timeout</strong> — The server took too long to respond</li>
            <li><strong>Memory exhausted</strong> — The server ran out of available memory</li>
            <li><strong>Port conflict</strong> — Another process is using the required port</li>
            <li><strong>Reverse proxy issue</strong> — Nginx or similar proxy misconfiguration</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Check Server Status</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Is the OpenClaw gateway service running?</li>
            <li>Check if Docker containers are running: <code className="text-cyan">docker ps</code></li>
            <li>Look for any error logs in the dashboard</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Restart the Gateway</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Run <code className="text-cyan">openclaw gateway restart</code></li>
            <li>Or restart the Docker stack: <code className="text-cyan">docker-compose restart</code></li>
            <li>Wait 30 seconds for services to fully initialize</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Check Resources</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Check memory usage: <code className="text-cyan">free -h</code></li>
            <li>Check disk space: <code className="text-cyan">df -h</code></li>
            <li>Ensure the server isn't under heavy load</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 4: Check Port Conflicts</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Check if port 3000 (or your configured port) is in use:</li>
            <li><code className="text-cyan">lsof -i :3000</code> or <code className="text-cyan">netstat -tulpn | grep 3000</code></li>
            <li>Stop any conflicting services or reconfigure OpenClaw</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Preventive Measures</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Enable auto-restart in your Docker Compose config</li>
            <li>Set up monitoring alerts for service downtime</li>
            <li>Keep resources (RAM, CPU) with headroom</li>
            <li>Consider a health check cron job</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Still Getting 502?</h2>
          <p className="text-slate-300 mb-4">
            If the error persists after all steps:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Check Docker logs: <code className="text-cyan">docker logs [container-id]</code></li>
            <li>Review the gateway config for misconfigured upstream URLs</li>
            <li>Try a full server reboot if nothing else works</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/token-mismatch" className="btn-primary">
            Next: Gateway Token Mismatch →
          </Link>
        </div>
      </main>
    </div>
  );
}