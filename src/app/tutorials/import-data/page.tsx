import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ImportData() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Importing Data</h1>
        <span className="badge-mint mb-8">Data Management</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Import existing data, conversations, or configurations from other systems into your agent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Can Be Imported?</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>💬 <strong>Chat History</strong> — Previous conversations from other platforms</li>
            <li>📁 <strong>Files & Documents</strong> — PDFs, text, code files</li>
            <li>⚙️ <strong>Configurations</strong> — Agent settings from backups</li>
            <li>🧠 <strong>Memory Files</strong> — Context and knowledge bases</li>
            <li>🔑 <strong>API Keys</strong> — Credentials from other systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Supported Import Formats</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>📄 <strong>JSON</strong> — Structured data with full metadata</li>
            <li>📝 <strong>Markdown</strong> — Text and documents</li>
            <li>📦 <strong>ZIP Archives</strong> — Bulk file imports</li>
            <li>📋 <strong>CSV</strong> — Tabular data and spreadsheets</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Import Data</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Prepare Your Data</h3>
                <p className="text-slate-400">Format your data according to supported formats</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Open Import Wizard</h3>
                <p className="text-slate-400">Settings → Data → Import</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Select Import Type</h3>
                <p className="text-slate-400">Choose what kind of data you're importing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Upload File</h3>
                <p className="text-slate-400">Drag and drop or browse to select files</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Review & Confirm</h3>
                <p className="text-slate-400">Verify import preview and complete the process</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Import via CLI</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Import chat history
agent import --file chats.json --type conversation

# Import knowledge base
agent import --file docs/ --type memory --merge

# Import configuration
agent import --file config-backup.json --type config`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-amber">
              <strong>⚠️ Note:</strong> Large imports may take time to process. Check import size limits in Settings → Data → Import Limits.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/mobile-access" className="btn-primary">
            Next: Mobile Access Guide →
          </Link>
        </div>
      </main>
    </div>
  );
}