import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function VoiceInputSetup() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Voice Input Setup Guide</h1>
        <span className="badge-violet mb-8">Voice</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Enable voice input so you can talk to your agent instead of typing.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• A supported platform (Telegram, Discord with voice permissions)</li>
            <li>• Microphone access on your device</li>
            <li>• Voice messages enabled in your channel settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Setup Steps</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Check platform support</strong> — Voice input works best in Telegram. Discord requires additional permissions.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Grant microphone permissions</strong> — Your browser or app needs mic access to record voice messages.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Send a voice message</strong> — Hold the microphone button and speak. Release to send.</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Wait for transcription</strong> — The agent will receive your audio, transcribe it, and respond.</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Voice not being recognized?</strong> — Check microphone volume and clarity</li>
            <li>• <strong>Slow transcription?</strong> — Audio processing takes time, especially with longer messages</li>
            <li>• <strong>Permission denied?</strong> — Ensure the bot has permission to access voice channels (Discord)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Tips for Voice Input</h2>
          <ul className="space-y-3 text-slate-300">
            <li>• Speak clearly and at a normal pace</li>
            <li>• Keep messages under 2 minutes for fastest processing</li>
            <li>• Use headphones to avoid echo</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/vision-images" className="btn-secondary">
            ← Analyzing Images
          </Link>
          <Link href="/tutorials/voice-output-setup" className="btn-primary">
            Next: Voice Output →
          </Link>
        </div>
      </main>
    </div>
  );
}