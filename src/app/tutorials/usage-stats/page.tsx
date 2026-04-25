import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function UsageStats() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Viewing Usage Statistics</h1>
        <span className="badge-mint mb-8">Analytics</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Track how your agent is being used — monitor conversations, token usage, and performance metrics.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Available Statistics</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>💬 <strong>Conversation Metrics</strong> — Total chats, messages, duration</li>
            <li>🪙 <strong>Token Usage</strong> — Tokens consumed per conversation</li>
            <li>⏱️ <strong>Response Times</strong> — Average latency and speed</li>
            <li>📊 <strong>Feature Usage</strong> — Which tools are most used</li>
            <li>👥 <strong>User Activity</strong> — Active users and engagement</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Accessing Statistics</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Open Dashboard</h3>
                <p className="text-slate-404">Navigate to the main dashboard</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">View Analytics Section</h3>
                <p className="text-slate-400">Click "Analytics" or "Usage" in the sidebar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Select Time Range</h3>
                <p className="text-slate-400">Choose daily, weekly, monthly, or custom range</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Export Reports</h3>
                <p className="text-slate-400">Download data as CSV or PDF</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Key Metrics Explained</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-cyan mb-1">~85%</div>
              <div className="text-sm text-slate-400">Token Utilization</div>
              <p className="text-xs text-slate-500 mt-2">Target efficient token use without over-generating</p>
            </div>
            <div className="bg-panel border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-mint mb-1">1.2s</div>
              <div className="text-sm text-slate-400">Avg Response Time</div>
              <p className="text-xs text-slate-500 mt-2">Time from message sent to response received</p>
            </div>
            <div className="bg-panel border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-amber mb-1">42</div>
              <div className="text-sm text-slate-400">Daily Active Users</div>
              <p className="text-xs text-slate-500 mt-2">Unique users engaging per day</p>
            </div>
            <div className="bg-panel border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-violet mb-1">156</div>
              <div className="text-sm text-slate-400">Tool Executions</div>
              <p className="text-xs text-slate-500 mt-2">Tools run per day on average</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Usage API</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Query usage stats via API
curl -X GET "https://api.agent.com/usage" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d "range=7d&metrics=tokens,response_time"

# Response includes JSON with all metrics`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Set up usage alerts to notify you when token consumption exceeds thresholds.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/billing-manage" className="btn-primary">
            Next: Managing Billing →
          </Link>
        </div>
      </main>
    </div>
  );
}