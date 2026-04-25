import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function VisionAPI() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Vision API Setup and Configuration</h1>
        <span className="badge-cyan mb-8">AI Vision</span>
        <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Enable your agent to see and understand images using the Vision API.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What is the Vision API?</h2>
          <p className="text-slate-300 mb-4">
            The Vision API allows your AI agent to analyze images, screenshots, and photos to provide descriptions, extract text, and answer questions about visual content.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Supported Models</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>gpt-4o</strong> — Most capable, supports images</li>
            <li>• <strong>gpt-4o-mini</strong> — Fast and cost-effective vision</li>
            <li>• <strong>claude-3-5-sonnet</strong> — Excellent image analysis</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Setup Steps</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Ensure you have a vision-capable model</strong> — Not all models support image analysis. Check your model selection.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Configure your API key</strong> — Ensure your API key has vision capabilities enabled.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Test with an image</strong> — Send an image to your agent and ask "What do you see?"</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Tips for Best Results</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• Use clear, well-lit images for accurate analysis</li>
            <li>• Include context in your prompt ("What does this screenshot show?")</li>
            <li>• For OCR tasks, specify "extract all text" in your request</li>
            <li>• Check image size limits (typically 20MB max)</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/vision-images" className="btn-primary">
            Next: Analyzing Images →
          </Link>
        </div>
      </main>
    </div>
  );
}