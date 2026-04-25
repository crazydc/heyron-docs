import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ElevenLabsVoice() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Set Up ElevenLabs Voice for Your Agent</h1>
        <span className="badge-amber mb-8">Voice Setup</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Configure ElevenLabs voice synthesis so your agent can speak to you.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why ElevenLabs?</h2>
          <p className="text-slate-300 mb-6">
            ElevenLabs provides high-quality voice synthesis with natural-sounding speech. Your agent can use it to read messages aloud, narrate content, or just sound more human.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Get Your ElevenLabs API Key</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Sign up at <a href="https://elevenlabs.io" target="_blank" className="text-cyan hover:underline">elevenlabs.io</a></li>
            <li>Go to your Profile → API Keys</li>
            <li>Copy your API key (keep it secret!)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Configure in Dashboard</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open your Nerve dashboard</li>
            <li>Navigate to <strong>Settings → Voice</strong></li>
            <li>Paste your ElevenLabs API key</li>
            <li>Choose a voice from the dropdown</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Test Voice Output</h2>
          <p className="text-slate-300 mb-4">
            Most platforms support voice output. Send a message to your agent and ask it to read something aloud, or look for a voice toggle in your chat interface.
          </p>

          <div className="bg-mint/10 border border-mint/30 rounded-lg p-4 mt-6">
            <p className="text-mint text-sm">
              <strong>Tip:</strong> Choose a voice that matches your agent's personality. "Rachel" is great for professional agents, "Josh" works well for casual ones.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/telegram-voice" className="btn-primary">
            Next: Voice in Telegram →
          </Link>
        </div>
      </main>
    </div>
  );
}