import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function VisionImages() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Analyzing Images with Vision</h1>
        <span className="badge-cyan mb-8">AI Vision</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Learn how to get the most out of image analysis in your AI conversations.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-300 mb-4">
            Simply attach or share an image with your agent. The Vision API will analyze the visual content and respond to questions about it.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Common Use Cases</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Screenshot analysis</strong> — Debug errors, review UI designs</li>
            <li>• <strong>Document extraction</strong> — Pull text from photos, receipts, invoices</li>
            <li>• <strong>Code review</strong> — Analyze architecture diagrams</li>
            <li>• <strong>Content moderation</strong> — Check images for policy violations</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Ask specific questions</strong> — "What error message appears?" is better than "What is this?"</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Provide context</strong> — Tell the agent what you're trying to accomplish</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Use high-quality images</strong> — Blurry images lead to inaccurate responses</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Example Prompts</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"What errors are shown in this screenshot?"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Extract all the data from this table in the image."</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300 font-mono text-sm">"What UI improvements would you suggest for this design?"</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/vision-api" className="btn-secondary">
            ← Vision API Setup
          </Link>
          <Link href="/tutorials/voice-input-setup" className="btn-primary">
            Next: Voice Input →
          </Link>
        </div>
      </main>
    </div>
  );
}