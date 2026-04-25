import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TelegramVoice() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Send Voice Messages in Telegram with ElevenLabs</h1>
        <span className="badge-amber mb-8">Voice Setup</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Enable your agent to send voice messages instead of text in Telegram.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Voice in Telegram?</h2>
          <p className="text-slate-300 mb-6">
            Voice messages feel more personal and can be listened to on the go. Your agent can narrate summaries, read notifications, or just sound more natural.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>ElevenLabs API key configured (see previous tutorial)</li>
            <li>Your agent connected to Telegram</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Enable Voice in Settings</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open your Nerve dashboard</li>
            <li>Go to <strong>Channels → Telegram</strong></li>
            <li>Toggle <strong>Voice Output</strong> to ON</li>
            <li>Select your preferred voice</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Request Voice Responses</h2>
          <p className="text-slate-300 mb-4">
            By default, your agent will send text. To get voice:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Ask: "Read this out loud" or "Send as voice"</li>
            <li>Or update your agent's SOUL.md to prefer voice for certain message types</li>
          </ul>

          <div className="bg-amber/10 border border-amber/30 rounded-lg p-4 mt-6">
            <p className="text-amber text-sm">
              <strong>Note:</strong> Voice messages use ElevenLabs credits. Longer responses = more credits. Keep responses concise for voice.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/privacy-audit" className="btn-primary">
            Next: Privacy Audit →
          </Link>
        </div>
      </main>
    </div>
  );
}