import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ScheduledReminders() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Setting Up Scheduled Reminders</h1>
        <span className="badge-mint mb-8">Automation</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Want the AI to remind you about something at a specific time? Here's how to set that up.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How to Schedule a Reminder</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 1: Simple One-Time Reminder</h3>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Remind me in 20 minutes to check the oven."
"Remind me at 3pm today to call the doctor."
"Set a reminder for tomorrow 9am."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 2: Cron Job (Repeating)</h3>
              <p className="text-slate-400 text-sm mb-2">
                Set up regular reminders:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Remind me every Monday at 9am to review
the weekend reports."

"Set up a daily reminder at 6pm to
shut down the server."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 3: Conditional Reminders</h3>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Remind me in 2 hours IF I haven't finished
writing the report yet."`}
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Reminder Delivery</h2>
          <p className="text-slate-300 mb-4">
            Reminders are delivered via your connected channels:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Telegram</strong> — Direct message to your bot</li>
            <li>• <strong>Discord</strong> — DM or mention in channel</li>
            <li>• <strong>Email</strong> — If email integration is set up</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Managing Reminders</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>List reminders:</strong> "Show my active reminders"</li>
            <li>• <strong>Cancel:</strong> "Cancel the reminder for 3pm"</li>
            <li>• <strong>Edit:</strong> "Change my Monday reminder to 10am"</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Example Reminders</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• "In 30 minutes, remind me to check the laundry"</li>
            <li>• "Every day at 6pm, remind me to backup the server"</li>
            <li>• "Remind me on Friday at 2pm to review the project status"</li>
            <li>• "Alert me in 1 hour if the build hasn't completed"</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/batch-processing" className="btn-primary">
            ← Batch Processing
          </Link>
          <Link href="/tutorials/recurring-tasks" className="btn-primary">
            Next: Recurring Tasks →
          </Link>
        </div>
      </main>
    </div>
  );
}