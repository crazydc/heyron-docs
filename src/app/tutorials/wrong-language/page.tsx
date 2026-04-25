import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function WrongLanguage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Agent Replies in the Wrong Language?</h1>
        <span className="badge-yellow mb-8">Common Issue</span>
        <span className="text-slate-400 ml-4">2 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The agent keeps responding in a language you don't understand. Here's how to set the right language.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">How to Fix It</h2>
          
          <div className="space-y-6 mb-6">
            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">1. Tell It Directly</h3>
              <p className="text-slate-400 text-sm">
                Say: "Please respond in English" (or your preferred language). The agent will adjust.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">2. Update USER.md</h3>
              <p className="text-slate-400 text-sm">
                Add your preferred language to <code className="bg-void px-2 py-1 rounded">~/.openclaw/workspace/USER.md</code> so the agent remembers.
              </p>
            </div>

            <div className="bg-panel border border-border rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">3. Specify in Your Request</h3>
              <p className="text-slate-400 text-sm">
                Include the language in your prompt: "Write this in [language]" or "Reply in [language]".
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>The agent detected multiple languages in the conversation</li>
            <li>Your USER.md doesn't specify a preference</li>
            <li>Some content was in another language</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/first-soul-md" className="btn-primary">
            Related: Creating SOUL.md →
          </Link>
        </div>
      </main>
    </div>
  );
}