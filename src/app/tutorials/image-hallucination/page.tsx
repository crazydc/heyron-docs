import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ImageHallucination() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Says It Saw Your Image (But It Didn't)?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Image hallucination is when your agent describes details in an image that aren't there. Here's why it happens and how to handle it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What Is Image Hallucination?</h2>
          <p className="text-slate-300 mb-6">
            Large Language Models that process images can sometimes "fill in gaps" with plausible-sounding details they didn't actually see. This is called hallucination — the model guesses what might be there rather than admitting it doesn't know.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Why It Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Low-quality images</strong> — Blurry or dark images lead to guessing</li>
            <li><strong className="text-white">Ambiguous content</strong> — Abstract images leave room for interpretation</li>
            <li><strong className="text-white">Model limitations</strong> — Even the best models sometimes confabulate</li>
            <li><strong className="text-white">Over-confident training</strong> — Models are trained to sound certain</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Verify What the Agent Actually Saw</h2>
          <div className="bg-void border border-border rounded-lg p-4 mb-6">
            <p className="text-slate-300 mb-3">Ask follow-up questions that force specificity:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>"Exactly what colors did you see in the image?"</li>
              <li>"How many people were in the photo? Describe their positions."</li>
              <li>"What text, if any, appeared in the image?"</li>
              <li>"Is this something you saw, or are you guessing?"</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Best Practices for Image Analysis</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li><strong className="text-white">Use high-quality images</strong> — Clear, well-lit photos get better results</li>
            <li><strong className="text-white">Ask specific questions</strong> — "What color is the car?" not "What's in this image?"</li>
            <li><strong className="text-white">Verify key details</strong> — Double-check any facts you need to be accurate</li>
            <li><strong className="text-white">Cross-reference</strong> — Ask the agent to point out what it's uncertain about</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">If You Suspect Hallucination</h2>
          <div className="bg-void border border-border rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li>Ask: "Are you certain about that, or is it a guess?"</li>
              <li>Request: "Describe the image again, focusing only on what you're 100% sure about"</li>
              <li>If critical, re-upload with: "Please analyze this again carefully"</li>
              <li>Consider: Try a different model if image analysis is crucial to your use case</li>
            </ol>
          </div>

          <div className="mt-6 p-4 bg-cyan/10 border border-cyan/30 rounded-lg">
            <p className="text-cyan">
              <strong className="text-white">💡 Note:</strong> Hallucination in image analysis is a known limitation of current AI models. Always verify important details independently when accuracy matters.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/agent-edited-wrong-file" className="btn-secondary">
            ← Previous
          </Link>
          <Link href="/tutorials/long-chats" className="btn-primary">
            Next: Why Your Agent Gets Worse in Long Chats →
          </Link>
        </div>
      </main>
    </div>
  );
}