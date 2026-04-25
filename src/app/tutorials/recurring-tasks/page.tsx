import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RecurringTasks() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Automating Recurring Tasks</h1>
        <span className="badge-mint mb-8">Automation</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Set up tasks that run automatically on a schedule. Great for routine maintenance and monitoring.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Common Recurring Tasks</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Daily reports</strong> — Summarize activity, generate stats</li>
            <li>• <strong>Backups</strong> — Automatic file/system backups</li>
            <li>• <strong>Health checks</strong> — Monitor servers, services, APIs</li>
            <li>• <strong>Cleanup</strong> — Remove old files, clear logs</li>
            <li>• <strong>Monitoring</strong> — Check prices, status, notifications</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Set Up Recurring Tasks</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 1: Cron Jobs</h3>
              <p className="text-slate-400 text-sm mb-2">
                Use cron syntax for flexible scheduling:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Run 'check server health' every day at 6am."
"Execute backup script every Sunday at 2am."
"Generate report every Monday at 9am."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 2: Heartbeat Tasks</h3>
              <p className="text-slate-400 text-sm mb-2">
                Regular check-ins during active sessions:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Every time you check in, verify the
docker containers are running."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 3: Event Triggers</h3>
              <p className="text-slate-400 text-sm">
                Run tasks when specific events occur:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`"When new files are added to /uploads,
run them through the processor."`}
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Setting Up a Recurring Task</h2>
          <ol className="space-y-3 text-slate-300">
            <li>1. <strong>Define the task</strong> — What needs to happen?</li>
            <li>2. <strong>Set the schedule</strong> — When and how often?</li>
            <li>3. <strong>Specify action</strong> — What should run?</li>
            <li>4. <strong>Set notification</strong> — Where to report results?</li>
          </ol>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Example Recurring Tasks</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• "Every hour, check if the web server is responding"</li>
            <li>• "Daily at midnight, rotate the logs"</li>
            <li>• "Every Monday, generate a weekly summary report"</li>
            <li>• "Every 5 minutes, check for new submissions"</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/scheduled-reminders" className="btn-primary">
            ← Scheduled Reminders
          </Link>
          <Link href="/tutorials/custom-prompt" className="btn-primary">
            Next: Custom Prompts →
          </Link>
        </div>
      </main>
    </div>
  );
}