import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function FileBestPractices() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Stop File Chaos with BEST_PRACTICES.md</h1>
        <span className="badge-mint mb-8">Productivity</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Create a BEST_PRACTICES.md file in your project to tell the agent exactly how you want it to handle files. No more guessing.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Is BEST_PRACTICES.md?</h2>
          <p className="text-slate-300 mb-6">
            It's a special file the agent reads when working in your project. It tells the agent your preferred file structure, naming conventions, and rules.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">How to Create It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Step 1: Create the File</h3>
              <p className="text-slate-400 text-sm">
                Create <code className="bg-void px-2 py-1 rounded">BEST_PRACTICES.md</code> in your project root directory.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Step 2: Add Your Rules</h3>
              <p className="text-slate-400 text-sm">
                Include sections for: file structure, naming conventions, coding style, what to avoid, etc.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Step 3: The Agent Reads It</h3>
              <p className="text-slate-400 text-sm">
                When the agent works in your project, it automatically reads this file first.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Example Template</h2>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 overflow-x-auto text-sm">
{`# Best Practices for This Project

## File Structure
- Keep all components in /src/components/
- Put utilities in /src/lib/
- Keep tests next to the files they test

## Naming Conventions
- Use kebab-case for filenames: \`my-component.tsx\`
- Use PascalCase for React components: \`MyComponent\`
- Use camelCase for variables and functions

## Code Style
- Use 2 spaces for indentation
- Always add TypeScript types
- Export default for main component in each file

## What to Avoid
- Don't create duplicate files
- Don't use inline styles - use Tailwind classes
- Don't add console.log statements`}
          </pre>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/working-with-files" className="btn-primary">
            Related: Working with Files →
          </Link>
        </div>
      </main>
    </div>
  );
}