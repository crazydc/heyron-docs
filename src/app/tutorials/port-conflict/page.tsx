import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PortConflict() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Port Already in Use?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Another process is using the port your agent needs. Let's free it up.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What is a Port Conflict?</h2>
          <p className="text-slate-300 mb-6">
            Each service needs a unique port number. If two services try to use the same port, one will fail to start.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Find What's Using the Port</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">Linux</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Find process using port 31000
sudo lsof -i :31000
# or
sudo netstat -tulpn | grep 31000`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">macOS</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`lsof -i :31000`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">Option 1: Stop the Conflicting Process</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Kill by PID (replace PID with the number you found)
kill PID`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Option 2: Use a Different Port</h3>
          <p className="text-slate-300 mb-4">
            Change your agent's port in the config:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# In your config
gateway:
  port: 31001  # Use a different port`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">Option 3: Check for Running Docker Containers</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`docker ps
# Stop the conflicting container
docker stop container_name`}
          </pre>
        </div>

        <div className="glass-panel p-4 mb-8 bg-mint/10 border-mint/30">
          <h3 className="text-lg font-bold text-mint mb-2">✅ Common Ports</h3>
          <p className="text-slate-300">
            These ports are commonly used — avoid them: 80, 443, 3000, 3306, 5432, 6379, 8080, 8443
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/disk-full" className="btn-primary">
            Next: Disk Space Full →
          </Link>
        </div>
      </main>
    </div>
  );
}