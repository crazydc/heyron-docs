import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ThemeDark() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Dark Mode Theme</h1>
        <span className="badge-mint mb-8">Customization</span>
        <span className="text-slate-400 ml-4">3 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Enable dark mode for a comfortable viewing experience, especially useful for late-night sessions.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Dark Mode?</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🌙 <strong>Reduced Eye Strain</strong> — Easier on the eyes in low-light conditions</li>
            <li>🔋 <strong>Battery Saving</strong> — Uses less power on OLED displays</li>
            <li>✨ <strong>Modern Look</strong> — Sleek, professional appearance</li>
            <li>🎯 <strong>Focus Enhancement</strong> — Less visual distraction</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Enable Dark Mode</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Open Settings</h3>
                <p className="text-slate-400">Click the gear icon in the dashboard</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Navigate to Appearance</h3>
                <p className="text-slate-400">Find the Appearance or Theme section</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Select Dark Mode</h3>
                <p className="text-slate-400">Toggle Dark Mode or select Dark theme</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Confirm Changes</h3>
                <p className="text-slate-400">The interface will immediately update</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Keyboard Shortcut</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Quick toggle
Ctrl + Shift + D (Windows/Linux)
Cmd + Shift + D (Mac)`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Dark mode respects your system preference by default. Enable manual override if you want a specific theme regardless of system settings.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/theme-custom" className="btn-primary">
            Next: Customizing Theme Colors →
          </Link>
        </div>
      </main>
    </div>
  );
}