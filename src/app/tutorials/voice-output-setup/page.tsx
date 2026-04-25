import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function VoiceOutputSetup() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Voice Output Configuration</h1>
        <span className="badge-violet mb-8">Voice</span>
        <span className="text-slate-400 ml-4">6 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Configure your agent to respond with voice messages instead of text.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Voice Providers</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>ElevenLabs</strong> — High-quality, natural-sounding voices (recommended)</li>
            <li>• <strong>OpenAI TTS</strong> — Built-in text-to-speech</li>
            <li>• <strong>Browser TTS</strong> — Fallback option for basic voice</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Setting Up ElevenLabs</h2>
          <ol className="space-y-4 text-slate-300 mb-6">
            <li className="flex gap-3">
              <span className="text-cyan font-bold">1.</span>
              <div><strong>Get an ElevenLabs API key</strong> — Sign up at elevenlabs.io and create an API key</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">2.</span>
              <div><strong>Add API key to your agent</strong> — Store it securely in your agent's configuration</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">3.</span>
              <div><strong>Choose a voice</strong> — Select from available voices or create your own</div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan font-bold">4.</span>
              <div><strong>Enable voice responses</strong> — Configure when the agent should use voice</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Configuring Voice Behavior</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• <strong>Always voice</strong> — Respond with voice for every message</li>
            <li>• <strong>Voice when asked</strong> — Only use voice when user requests it</li>
            <li>• <strong>Smart selection</strong> — Agent decides based on content type</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Voice Settings</h2>
          <div className="bg-panel border border-border rounded-lg p-4">
            <ul className="space-y-2 text-slate-300 text-sm font-mono">
              <li>stability: 0.5 — Voice consistency (lower = more expressive)</li>
              <li>similarity_boost: 0.8 — How close to the original voice</li>
              <li>style: 0.0 — Expressiveness level (0-1)</li>
              <li>voice_id: "..." — The selected voice identifier</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/voice-input-setup" className="btn-secondary">
            ← Voice Input
          </Link>
          <Link href="/tutorials/multilingual" className="btn-primary">
            Next: Multi-Language →
          </Link>
        </div>
      </main>
    </div>
  );
}