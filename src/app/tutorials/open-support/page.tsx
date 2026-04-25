import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function OpenSupport() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Open Better Support Tickets</h1>
        <span className="badge-mint mb-8">Best Practices</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Getting stuck? Here's how to write support tickets that get fast, useful responses. Clear tickets = faster fixes.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Perfect Support Ticket</h2>
          
          <h3 className="text-xl font-semibold text-cyan mb-3">1. One Issue Per Ticket</h3>
          <p className="text-slate-300 mb-4">
            Don't bundle multiple problems together:
          </p>
          <div className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
            <p className="text-red-400 mb-2">❌ "My agent is broken - it won't read files, keeps making errors, and is slow"</p>
            <p className="text-green-400">✅ "Agent can't read files - gets permission denied on /project"</p>
          </div>

          <h3 className="text-xl font-semibold text-cyan mb-3">2. Include the Error Message</h3>
          <p className="text-slate-300 mb-4">
            Copy the exact error text:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`Error: "permission denied" 
When: Running read tool on /project/src/index.js
Full message: [paste exact error]`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">3. Describe What You Expected</h3>
          <p className="text-slate-300 mb-4">
            Clearly state what should have happened:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`Expected: File content displayed
Actually happened: "permission denied" error
Works in: Different file in same directory`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">4. List Steps to Reproduce</h3>
          <p className="text-slate-300 mb-4">
            Numbered steps help a lot:
          </p>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`1. Ask agent to read /project/src/index.js
2. Agent responds with permission denied
3. Tried with different file - same error
4. Checked file permissions - they're correct`}
          </pre>

          <h3 className="text-xl font-semibold text-cyan mb-3">5. Include Environment Info</h3>
          <p className="text-slate-300 mb-4">
            Help reproduce the issue:
          </p>
          <ul className="space-y-2 text-slate-300 mb-4 ml-4">
            <li>• OS (Linux/Windows/macOS)</li>
            <li>• Agent version or profile name</li>
            <li>• Model being used</li>
            <li>• Gateway version if applicable</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ticket Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`**Summary**: [1 sentence describing the issue]

**Error message**: [exact error text]

**Expected behavior**: [what should have happened]

**Steps to reproduce**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Environment**:
- OS: [your OS]
- Agent/Profile: [name]
- Model: [model name]

**What I've tried**: [any troubleshooting you've done]`}
          </pre>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            ← All Tutorials
          </Link>
          <Link href="/tutorials/first-week-no-tech" className="btn-primary">
            Start Here →
          </Link>
        </div>
      </main>
    </div>
  );
}