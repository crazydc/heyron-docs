import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CustomPrompt() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Creating Custom Prompt Templates</h1>
        <span className="badge-mint mb-8">Customization</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Create reusable prompt templates for common tasks. Save time and ensure consistency.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Use Templates?</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Consistency</strong> — Same quality every time</li>
            <li>• <strong>Efficiency</strong> — Don't rewrite the same instructions</li>
            <li>• <strong>Best practices</strong> — Encode your preferences once</li>
            <li>• <strong>Sharing</strong> — Templates can be shared with others</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Create Templates</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 1: Save a Prompt</h3>
              <p className="text-slate-400 text-sm mb-2">
                Create and save for later use:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Save this as my code review template:
Review the code for:
1. Bugs and logic errors
2. Security vulnerabilities
3. Performance issues
4. Code style violations

Format results as a table."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 2: Define Placeholders</h3>
              <p className="text-slate-400 text-sm mb-2">
                Use variables in templates:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Create a template called 'summarize' that
summarizes {{TOPIC}} in {{NUM}} bullet points,
focusing on {{FOCUS}}."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 3: Store in Prompts File</h3>
              <p className="text-slate-400 text-sm">
                Save to ~/.openclaw/workspace/prompts/ for easy access:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Create a file called 'code-review.md' in the
prompts folder with the following template..."`}
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Using Templates</h2>
          <pre className="p-3 bg-void border border-border rounded text-sm text-slate-400 mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Use my code review template on file.py"
"Apply the summarize template to this article"
"Run the weekly-report template"`}
          </pre>
          <p className="text-slate-300">
            Templates can be combined and modified as needed.
          </p>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Example Templates</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Code Review</strong> — Systematic code analysis</li>
            <li>• <strong>Meeting Summary</strong> — Extract key points and action items</li>
            <li>• <strong>Blog Post Brief</strong> — Outline for content creation</li>
            <li>• <strong>Bug Report</strong> — Structured issue documentation</li>
            <li>• <strong>Release Notes</strong> — Changelog from git commits</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/recurring-tasks" className="btn-primary">
            ← Recurring Tasks
          </Link>
          <Link href="/tutorials" className="btn-primary">
            All Tutorials →
          </Link>
        </div>
      </main>
    </div>
  );
}