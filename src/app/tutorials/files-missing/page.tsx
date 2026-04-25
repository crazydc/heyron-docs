import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function FilesMissing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Where Did My Files Go?</h1>
        <span className="badge-amber mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            The bot said it saved a file, but you can't find it. Here's how to locate your files and understand where they go.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Where Files Actually Go</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Workspace directory</strong> — Files are saved to your OpenClaw workspace</li>
            <li><strong>File system</strong> — Not in Discord or Telegram, but in the actual server storage</li>
            <li><strong>Relative paths</strong> — Check the workspace root by default</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Find Your Files</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Method 1: Ask the Bot</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Ask: "Where did you save that file?"</li>
            <li>Ask: "Show me the file path"</li>
            <li>The bot should tell you the exact location</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Method 2: Check the Dashboard</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Open the OpenClaw dashboard</li>
            <li>Look for a Files or Workspace section</li>
            <li>Browse the file tree</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Method 3: SSH Into the Server</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>SSH into your mini PC or server</li>
            <li>Navigate to the workspace directory</li>
            <li>Use <code className="text-cyan">ls -la</code> to list files</li>
            <li>Common location: <code className="text-cyan">/root/.openclaw/workspace</code></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Why Files Might Be Missing</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Wrong directory</strong> — The bot wrote to a different folder than expected</li>
            <li><strong>Permission issues</strong> — Write failed silently</li>
            <li><strong>Different workspace</strong> — If running multiple instances, check which one</li>
            <li><strong>File not created</strong> — The operation may have failed</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Always Find Files</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            <li>Use absolute paths like <code className="text-cyan">/root/.openclaw/workspace/filename.txt</code></li>
            <li>Ask the bot to confirm the full path after writing</li>
            <li>Keep important files in the workspace root</li>
            <li>Use consistent naming like <code className="text-cyan">MEMORY.md</code>, <code className="text-cyan">TODO.md</code></li>
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Quick Commands</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li><code className="text-cyan">ls</code> — List files in current directory</li>
            <li><code className="text-cyan">pwd</code> — Show current directory</li>
            <li><code className="text-cyan">find . -name "*.md"</code> — Find all markdown files</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/github-mismatch" className="btn-primary">
            Next: GitHub File Doesn't Match →
          </Link>
        </div>
      </main>
    </div>
  );
}