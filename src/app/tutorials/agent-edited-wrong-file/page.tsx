import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AgentEditedWrongFile() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Edited the Wrong File?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Oops. Your agent modified the wrong file. Here's how to recover and prevent it from happening again.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Happened</h2>
          <p className="text-slate-300 mb-6">
            Your agent tried to help by editing a file, but either chose the wrong file entirely or made unintended changes to the right one. This usually happens when:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Multiple files have similar names</li>
            <li>The agent couldn't find the exact file you meant</li>
            <li>Your instructions were slightly ambiguous</li>
            <li>The agent made "helpful" changes you didn't ask for</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Immediate Recovery</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Check Git History</h3>
              <p className="text-slate-300 text-sm">If you use Git, run <code className="text-cyan">git diff</code> or <code className="text-cyan">git status</code> to see exactly what changed. Then <code className="text-cyan">git checkout -- filename</code> to restore.</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Ask the Agent to Undo</h3>
              <p className="text-slate-300 text-sm">Simply say "Please undo your last change to [filename]" — if it remembers what it did, it can revert.</p>
            </div>
            
            <div className="bg-void border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Restore from Backup</h3>
              <p className="text-slate-300 text-sm">If you have backups, restore the correct version. Always keep backups of important files!</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">How to Prevent This</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Use absolute paths</strong> — Say "/home/user/project/src/config.js" not just "config.js"</li>
            <li><strong className="text-white">Confirm before editing</strong> — "Show me what you plan to change first"</li>
            <li><strong className="text-white">Be specific about content</strong> — "Change lines 5-10, not the whole file"</li>
            <li><strong className="text-white">Disable auto-save</strong> — Set the agent to ask before saving any changes</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Safe Edit Workflow</h2>
          <div className="bg-void border border-border rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li>Ask agent: "What is the exact path to [filename]?"</li>
              <li>Verify it's the right file by asking for a snippet</li>
              <li>Say: "Show me the changes you plan to make before making them"</li>
              <li>After approval: "Please make those changes now"</li>
              <li>Verify the result matches what you expected</li>
            </ol>
          </div>

          <div className="mt-6 p-4 bg-crimson/10 border border-crimson/30 rounded-lg">
            <p className="text-crimson">
              <strong className="text-white">⚠️ Warning:</strong> Always review changes before accepting them. A quick "show me first" can save hours of recovery work.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/old-version" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/image-hallucination" className="btn-primary">
            Next: Agent Says It Saw Your Image (But It Didn't)? →
          </Link>
        </div>
      </main>
    </div>
  );
}