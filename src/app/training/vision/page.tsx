import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Vision() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/training" className="text-cyan hover:underline">← Back to Training</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Module 05: Vision & Image Understanding</h1>
        <span className="badge-mint mb-8">Active</span>

        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Teach your agent to see — upload images for analysis and understanding.
        </p>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">What Your Agent Can Do</h2>
          <ul className="space-y-3 text-slate-300">
            <li>📷 <strong>Analyze images</strong> — Upload screenshots, photos, or documents for AI analysis</li>
            <li>📝 <strong>Extract text</strong> — Pull text from images (OCR) or handwritten notes</li>
            <li>🎨 <strong>Describe visuals</strong> — Get detailed descriptions of what's in an image</li>
            <li>📊 <strong>Read charts & graphs</strong> — Understand data visualizations</li>
            <li>🔍 <strong>Compare images</strong> — Find differences between two images</li>
          </ul>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How to Use Vision</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Via Discord</h3>
            <p className="text-slate-400">
              Simply upload an image in Discord and mention your bot. It will analyze the image and respond.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-cyan mb-2">Via Telegram</h3>
            <p className="text-slate-400">
              Send a photo directly to your bot in Telegram. It will automatically analyze the image.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan mb-2">Example Prompts</h3>
            <pre className="p-3 bg-void border border-border rounded-lg text-sm text-slate-300" style={{ fontFamily: 'var(--font-mono)' }}>
{`"Analyze this screenshot and tell me what UI elements are present"

"Extract all the text from this image"

"What's in this photo? Describe it in detail"

"Read the data from this chart and summarize the trends"`}
            </pre>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">📸 Creating Images (Coming Soon)</h2>
          <p className="text-slate-400">
            Image generation is not yet available directly through Heyron. However, your agent can write prompts 
            that you can use with external image generation platforms like DALL-E, Midjourney, or Leonardo.
          </p>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Next Step</h2>
          <p className="text-slate-300 mb-4">Now let's set up GitHub for file storage:</p>
          <Link href="/training/file-storage" className="btn-primary inline-block">
            Module 04: File Storage →
          </Link>
        </div>
      </main>
    </div>
  );
}