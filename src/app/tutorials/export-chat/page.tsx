import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ExportChat() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Exporting Chat History</h1>
        <span className="badge-mint mb-8">Data Management</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Save your conversations for backup, analysis, or importing into other tools.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Export Chat History?</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>💾 <strong>Backup</strong> — Preserve important conversations</li>
            <li>📊 <strong>Analysis</strong> — Review conversation patterns</li>
            <li>🔄 <strong>Migration</strong> — Transfer to another system</li>
            <li>📝 <strong>Documentation</strong> — Archive useful exchanges</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Export Formats</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>📄 <strong>JSON</strong> — Full data with metadata</li>
            <li>📝 <strong>Markdown</strong> — Human-readable text</li>
            <li>📑 <strong>HTML</strong> — Visual representation</li>
            <li>📃 <strong>Plain Text</strong> — Simple transcript</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Export</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Open Conversation</h3>
                <p className="text-slate-400">Navigate to the chat you want to export</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Access Export Options</h3>
                <p className="text-slate-400">Click the menu (⋮) icon → Export</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Select Format</h3>
                <p className="text-slate-400">Choose your preferred export format</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Download File</h3>
                <p className="text-slate-400">Save the exported file to your device</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Bulk Export via CLI</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Export all chats
agent export --all --format json --output ./exports/

# Export specific date range
agent export --from 2024-01-01 --to 2024-03-31 --format markdown

# Export specific conversation
agent export --conversation abc123 --format html`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Schedule regular exports to maintain backups. Set up automated exports using cron jobs.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/import-data" className="btn-primary">
            Next: Importing Data →
          </Link>
        </div>
      </main>
    </div>
  );
}