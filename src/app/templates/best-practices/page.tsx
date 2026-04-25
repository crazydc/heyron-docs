import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BestPractices() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/templates" className="text-cyan hover:underline">← Back to Templates</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>BEST_PRACTICES.md</h1>
        <span className="badge-amber mb-8">Template</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Source-of-truth file organization rules to prevent duplicate files and chaos.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Template</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`# BEST_PRACTICES.md

## File Organization Rules

### Find Before Create
- Always search for existing files before creating new ones
- Use exact path matches when possible

### Canonical Paths
- Use consistent naming: \`YYYY-MM-DD.md\` for dated files
- Store memory in \`memory/\` folder
- Store credentials in \`.env\` (never commit)

### Completion Proof
- Always verify file writes completed
- Show final path after save operations

### No Duplicates
- Check if file exists before creating
- Use version numbers for iterative files`}
          </pre>
        </div>

        <div className="flex gap-4">
          <Link href="/templates/heartbeat-checklist" className="btn-primary">
            Next: HEARTBEAT.md →
          </Link>
        </div>
      </main>
    </div>
  );
}