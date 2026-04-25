import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function WorkingWithFiles() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Working with Files</h1>
        <span className="badge-mint mb-8">How-To</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Where file attachments work and workarounds for images and documents.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Supported Platforms</h2>
          <p className="text-slate-300 mb-4">
            File support varies by platform. Here's the breakdown:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-2">Platform</th>
                  <th className="p-2">Images</th>
                  <th className="p-2">Documents</th>
                  <th className="p-2">Audio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-2">Telegram</td>
                  <td className="p-2 text-mint">✓</td>
                  <td className="p-2 text-mint">✓</td>
                  <td className="p-2 text-mint">✓</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-2">Discord</td>
                  <td className="p-2 text-mint">✓</td>
                  <td className="p-2 text-amber">Partial</td>
                  <td className="p-2 text-crimson">✗</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-2">Dashboard</td>
                  <td className="p-2 text-mint">✓</td>
                  <td className="p-2 text-mint">✓</td>
                  <td className="p-2 text-mint">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Sending Files to Your Agent</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Drag and drop</strong> — Most platforms support dropping files into chat</li>
            <li><strong>Attach button</strong> — Use the platform's attachment feature</li>
            <li><strong>Direct URL</strong> — Paste a link to a file your agent can access</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">When Files Don't Work</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Large files</strong> — Break into smaller chunks or compress</li>
            <li><strong>Unsupported formats</strong> — Convert to PDF or images first</li>
            <li><strong>Permission issues</strong> — Make sure the file/link is publicly accessible</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Getting Files From Your Agent</h2>
          <p className="text-slate-300 mb-4">
            Your agent will send files as attachments when:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>You ask for a generated file (images, documents)</li>
            <li>The response includes code blocks that can be saved</li>
            <li>You request a download link</li>
          </ul>

          <div className="bg-mint/10 border border-mint/30 rounded-lg p-4 mt-6">
            <p className="text-mint text-sm">
              <strong>Pro tip:</strong> For best results with images, describe what you want and your agent can generate or describe images. For documents, PDF works best across all platforms.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/prompting-pro" className="btn-primary">
            Next: Prompting Like a Pro →
          </Link>
        </div>
      </main>
    </div>
  );
}