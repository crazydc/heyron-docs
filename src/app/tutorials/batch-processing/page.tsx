import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BatchProcessing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Processing Multiple Files in One Go</h1>
        <span className="badge-mint mb-8">Features</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Need to process many files at once? Here's how to batch process efficiently.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">When to Use Batch Processing</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Multiple files</strong> — Analyze, summarize, or edit several files</li>
            <li>• <strong>Repeated tasks</strong> — Apply the same operation to many items</li>
            <li>• <strong>Bulk operations</strong> — Find patterns across many documents</li>
            <li>• <strong>Efficiency</strong> — Save time vs. one-by-one processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Batch Process</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 1: List All Files</h3>
              <p className="text-slate-400 text-sm mb-2">
                Simply list what you want processed:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Process these files: /path/to/file1.txt,
/path/to/file2.txt, /path/to/file3.txt.
For each one, summarize the key points."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 2: Use Wildcards</h3>
              <p className="text-slate-400 text-sm mb-2">
                Process all matching files:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Find all .json files in /data and summarize them."
"Analyze all .py files in /src directory."`}
              </pre>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Method 3: Provide File List</h3>
              <p className="text-slate-400 text-sm">
                Create a file with paths, then reference it:
              </p>
              <pre className="p-3 bg-void border border-border rounded text-xs text-slate-400 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Process all files listed in filelist.txt
in the order they appear."`}
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Batch Processing Tips</h2>
          <ul className="space-y-2 text-slate-300">
            <li>✓ <strong>Be specific about output format</strong> — "Give me a table with columns X, Y, Z"</li>
            <li>✓ <strong>Consider rate limits</strong> — Very large batches may hit limits</li>
            <li>✓ <strong>Set expectations</strong> — Tell the AI how to handle errors</li>
            <li>✓ <strong>Use sub-agents</strong> — For huge batches, spawn parallel agents</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Example Use Cases</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Summarize 20 meeting notes into one report</li>
            <li>• Extract all email addresses from 50 text files</li>
            <li>• Find bugs across all Python files in a project</li>
            <li>• Translate 10 documents to Spanish</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/token-calc" className="btn-primary">
            ← Token Calculator
          </Link>
          <Link href="/tutorials/scheduled-reminders" className="btn-primary">
            Next: Scheduled Reminders →
          </Link>
        </div>
      </main>
    </div>
  );
}