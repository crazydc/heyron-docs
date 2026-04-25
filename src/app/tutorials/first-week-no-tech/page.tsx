import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function FirstWeekNoTech() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Overwhelmed in Week 1? A No-Tech First Win Plan</h1>
        <span className="badge-mint mb-8">Start Here</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A practical 90-minute workflow for non-technical users to get one real result fast.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <p className="text-slate-300 mb-6">
            If Heyron feels like "I thought AI would do it all" and now you're drowning in setup tabs, this guide gets you back to momentum in under 90 minutes.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">The 90-Minute First Win Sprint</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🎯 <strong>Pick one tiny outcome</strong> — draft one email, not "launch my business"</li>
            <li>📱 <strong>Use one channel</strong> — Discord OR dashboard, not both at once</li>
            <li>🧠 <strong>Use one model pair</strong> — primary + fallback only</li>
            <li>📝 <strong>Give plain-language constraints</strong> — no jargon, no code unless asked</li>
            <li>✅ <strong>Require proof at every step</strong> — "show exact file/path/output"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Prompt Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`I'm non-technical. Help me get one quick win.

Goal: [single specific outcome]
Constraints:
- Explain like I'm new (no jargon)
- One step at a time
- Don't ask me to install anything unless required
- After each step: tell me what changed and how to verify it
- If blocked: give 2 options (fast workaround vs proper fix)

Start with Step 1 only.`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">When It Starts Spiraling</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Stop opening new tabs. Keep one active thread.</li>
            <li>• Ban vague asks. Replace "build my MVP" with a single deliverable.</li>
            <li>• Demand UI reality checks.</li>
            <li>• Checkpoint frequently — save outputs every 10-15 minutes.</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/first-soul-md" className="btn-primary">
            Next: Your First SOUL.md →
          </Link>
        </div>
      </main>
    </div>
  );
}