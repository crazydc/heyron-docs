import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AgentSkills() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Adding Custom Skills</h1>
        <span className="badge-violet mb-8">Advanced</span>
        <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Extend your agent's capabilities with custom skills — specialized abilities tailored to your specific needs.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Are Custom Skills?</h2>
          <p className="text-slate-300 mb-6">
            Custom skills are modular capabilities that add specific functionality to your agent. They can range from simple behaviors to complex workflows.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Skill Types</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🔧 <strong>Tool Skills</strong> — Add new tools the agent can use</li>
            <li>📝 <strong>Prompt Skills</strong> — Customize response patterns</li>
            <li>🔄 <strong>Automation Skills</strong> — Automate recurring tasks</li>
            <li>🌐 <strong>Integration Skills</strong> — Connect to external services</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Add a Custom Skill</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Create Skills Directory</h3>
                <p className="text-slate-400">Create a <code className="text-cyan">skills/</code> folder in your workspace</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Write Skill Definition</h3>
                <p className="text-slate-400">Create a SKILL.md file with the skill logic</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Define Trigger Conditions</h3>
                <p className="text-slate-400">Set when this skill should activate</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Register with Agent</h3>
                <p className="text-slate-400">Add the skill to your agent's configuration</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Test the Skill</h3>
                <p className="text-slate-400">Verify the skill works as expected</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Skill Definition Example</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# SKILL.md - Code Reviewer

## Description
Reviews code changes and provides feedback

## Triggers
- When files with .js, .ts, .py extensions are modified
- When commit message contains "review"

## Actions
1. Read the modified files
2. Analyze code for issues
3. Provide constructive feedback
4. Suggest improvements

## Output Format
- Summary of findings
- Severity levels (info, warning, error)
- Suggested fixes`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Start with simple skills and combine them into more complex workflows as you get comfortable.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/plugin-install" className="btn-primary">
            Next: Installing Plugins →
          </Link>
        </div>
      </main>
    </div>
  );
}