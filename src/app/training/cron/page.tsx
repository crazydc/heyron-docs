import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Cron() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/training" className="text-cyan hover:underline">← Back to Training</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 07: Cron & Scheduling</h1>
        <span className="badge-mint mb-8">Active</span>

        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Set up time-based actions, reminders, and automation for your agent.
        </p>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">What You Can Do With Scheduling</h2>
          <ul className="space-y-3 text-slate-300">
            <li>⏰ <strong>Daily reminders</strong> — "Remind me to check my email every morning"</li>
            <li>📅 <strong>Weekly summaries</strong> — "Send me a summary of my week every Friday"</li>
            <li>🔄 <strong>Automated tasks</strong> — "Check my GitHub issues every hour"</li>
            <li>🌅 <strong> Morning briefings</strong> — "Give me a news update every morning at 8am"</li>
            <li>🌙 <strong>End-of-day tasks</strong> — "Archive my notes every evening"</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How to Set Up Scheduling</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 1: Enable Scheduling</h3>
            <p className="text-slate-400">
              Go to your Nerve dashboard → Config → Enable Cron jobs. This gives your agent permission to run tasks on a schedule.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Step 2: Tell Your Agent When to Act</h3>
            <p className="text-slate-400 mb-2">Use natural language or cron format:</p>
            <pre className="p-3 bg-void border border-border rounded-lg text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Every morning at 8am, summarize my emails"

"Check my GitHub repo every hour"

"At 6pm every day, remind me to plan tomorrow's tasks"

"Cron: 0 9 * * 1-5 -> Give me a daily briefing"`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan mb-2">Step 3: Manage Scheduled Tasks</h3>
            <p className="text-slate-400">
              You can view, edit, and delete scheduled tasks in your Nerve dashboard under the "Cron" section.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Cron Format Reference</h2>
          <p className="text-slate-400 mb-4">Cron jobs use this format: <code className="text-cyan">minute hour day month weekday</code></p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-white font-mono">Field</th>
                  <th className="text-left py-2 text-white font-mono">Values</th>
                  <th className="text-left py-2 text-white font-mono">Example</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-border/50">
                  <td className="py-2 font-mono">Minute</td>
                  <td className="py-2 font-mono">0-59</td>
                  <td className="py-2 font-mono">0 = top of hour</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 font-mono">Hour</td>
                  <td className="py-2 font-mono">0-23</td>
                  <td className="py-2 font-mono">9 = 9am</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 font-mono">Day</td>
                  <td className="py-2 font-mono">1-31</td>
                  <td className="py-2 font-mono">15 = 15th of month</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 font-mono">Month</td>
                  <td className="py-2 font-mono">1-12</td>
                  <td className="py-2 font-mono">* = every month</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">Weekday</td>
                  <td className="py-2 font-mono">0-6</td>
                  <td className="py-2 font-mono">0 = Sunday, 1 = Monday</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-cyan mt-6 mb-2">Common Examples</h3>
          <pre className="p-3 bg-void border border-border rounded-lg text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
{`0 8 * * 1-5   # Weekday mornings at 8am
0 9 * * *      # Every day at 9am
0 18 * * 5     # Every Friday at 6pm
*/15 * * * *   # Every 15 minutes
0 0 1 * *      # First of every month`}
          </pre>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-2xl font-bold text-white mb-4">🎉 Congratulations!</h2>
          <p className="text-slate-300 mb-4">You've completed all the core training modules!</p>
          <p className="text-slate-400 mb-4">Your agent can now:</p>
          <ul className="space-y-2 text-slate-300 mb-4">
            <li>✅ Remember you across sessions</li>
            <li>✅ Respond in Discord</li>
            <li>✅ Save files to GitHub</li>
            <li>✅ See and analyze images</li>
            <li>✅ Send and receive emails</li>
            <li>✅ Run on a schedule</li>
          </ul>
          <p className="text-cyan">You now have a fully-featured AI assistant! 🚀</p>
        </div>
      </main>
    </div>
  );
}