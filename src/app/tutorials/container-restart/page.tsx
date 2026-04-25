import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ContainerRestart() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Container Keeps Restarting?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your Docker container keeps crashing and restarting in a loop. Let's stop the cycle.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Understanding the Problem</h2>
          <p className="text-slate-300 mb-6">
            Container restart loops happen when the container starts, encounters an error, exits, and Docker restarts it — over and over.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Diagnose</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">1. Check Container Status</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`docker ps -a
docker logs container_name`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">2. Inspect the Restart Policy</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`docker inspect container_name | grep -A 10 RestartPolicy`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">3. Check Resource Limits</h3>
          <p className="text-slate-300 mb-4">
            The container might be running out of memory or CPU:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`docker stats container_name`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Common Fixes</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">Fix 1: Disable Auto-Restart</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`docker update --restart=no container_name`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Fix 2: Increase Memory Limits</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`docker update --memory=1g --memory-swap=1g container_name`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Fix 3: Check Configuration</h3>
          <p className="text-slate-300 mb-4">
            Review your docker-compose.yml or environment variables for misconfigurations.
          </p>

          <h3 className="text-xl font-bold text-cyan mb-3">Fix 4: View Exit Code</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`docker inspect container_name --format='{{.State.ExitCode}}'`}
          </pre>
        </div>

        <div className="glass-panel p-4 mb-8 bg-cyan/10 border-cyan/30">
          <h3 className="text-lg font-bold text-cyan mb-2">💡 Pro Tip</h3>
          <p className="text-slate-300">
            Use <code className="text-cyan">docker logs --tail 50 container_name</code> to see the last 50 lines and identify what's causing the crash.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/port-conflict" className="btn-primary">
            Next: Port Already in Use →
          </Link>
        </div>
      </main>
    </div>
  );
}