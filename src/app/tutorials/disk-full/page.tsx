import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DiskFull() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Disk Space Full?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Your server is out of disk space. Let's free up some room.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Check Disk Usage</h2>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Check overall usage
df -h

# Check directory sizes
du -sh /*

# Find large files (over 100MB)
find / -type f -size +100M 2>/dev/null | head -20`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Common Space Hogs</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Docker</strong> — Old images and unused containers</li>
            <li><strong>Logs</strong> — Accumulated log files</li>
            <li><strong>Archives</strong> — Old backup archives</li>
            <li><strong>Downloads</strong> — Temporary files</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Free Space</h2>
          
          <h3 className="text-xl font-bold text-cyan mb-3">1. Clean Docker</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Remove unused containers and images
docker system prune -a

# Remove all unused volumes
docker volume prune`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">2. Clear Old Logs</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Find large log files
find /var/log -type f -size +50M

# Truncate logs (keeps file, clears content)
sudo truncate -s 0 /var/log/some.log`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">3. Remove Old Archives</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Check archives directory
ls -la ~/archives/

# Remove old backups
rm -rf ~/archives/old_backup_*.tar.gz`}
          </pre>

          <h3 className="text-xl font-bold text-cyan mb-3">4. Clear Package Cache</h3>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 font-mono text-sm overflow-x-auto">
{`# Ubuntu/Debian
sudo apt clean

# RHEL/CentOS
sudo yum clean all`}
          </pre>
        </div>

        <div className="glass-panel p-4 mb-8 bg-crimson/10 border-crimson/30">
          <h3 className="text-lg font-bold text-crimson mb-2">⚠️ Warning</h3>
          <p className="text-slate-300">
            Always verify what you're deleting. Some files may be needed by running services.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/upgrade-fail" className="btn-primary">
            Next: Upgrade Failed Mid-Way →
          </Link>
        </div>
      </main>
    </div>
  );
}