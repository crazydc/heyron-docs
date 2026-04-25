import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RunLocally() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Run OpenClaw Locally</h1>
        <span className="badge-amber mb-8">Setup</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            A practical first-run guide for running OpenClaw on your own machine instead of the hosted version.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Run Locally?</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Full control over your data</li>
            <li>No token limits or usage constraints</li>
            <li>Access to local resources (files, APIs)</li>
            <li>Custom plugins and extensions</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Node.js 18+ installed</li>
            <li>Git installed</li>
            <li>API keys for your preferred model (OpenAI, Anthropic, etc.)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Clone the Repository</h2>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`git clone https://github.com/openclaw/openclaw.git
cd openclaw`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Install Dependencies</h2>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`npm install`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Configure Environment</h2>
          <p className="text-slate-300 mb-4">
            Copy the example environment file and add your API keys:
          </p>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`cp .env.example .env
# Edit .env with your preferred editor`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Step 4: Start the Gateway</h2>
          <pre className="bg-void border border-border rounded-lg p-4 text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`npm run gateway`}
          </pre>

          <div className="bg-mint/10 border border-mint/30 rounded-lg p-4 mt-6">
            <p className="text-mint text-sm">
              <strong>Success!</strong> The gateway should now be running at http://localhost:3100. Open your browser to complete setup.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/elevenlabs-voice" className="btn-primary">
            Next: ElevenLabs Voice →
          </Link>
        </div>
      </main>
    </div>
  );
}