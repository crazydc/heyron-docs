import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ThemeCustom() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Customizing Theme Colors</h1>
        <span className="badge-mint mb-8">Customization</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Personalize your dashboard with custom colors to match your brand or preferences.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">CSS Variables for Theming</h2>
          <p className="text-slate-300 mb-6">
            The interface uses CSS custom properties (variables) that can be customized to change colors throughout the application.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Available Theme Variables</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>⚫ <code className="text-cyan">--void</code> — Main background color</li>
            <li>🔵 <code className="text-cyan">--cyan</code> — Primary accent color</li>
            <li>🟢 <code className="text-cyan">--mint</code> — Success/safe color</li>
            <li>🟡 <code className="text-cyan">--amber</code> — Warning color</li>
            <li>🟣 <code className="text-cyan">--violet</code> — Secondary accent</li>
            <li>🔴 <code className="text-cyan">--crimson</code> — Error/danger color</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Customize Colors</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Access Theme Settings</h3>
                <p className="text-slate-400">Settings → Appearance → Custom Colors</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Choose Color Picker</h3>
                <p className="text-slate-400">Click on any color swatch to open the picker</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Select Your Colors</h3>
                <p className="text-slate-400">Pick colors or enter hex values</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Preview Changes</h3>
                <p className="text-slate-400">See live preview of your theme</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Save Theme</h3>
                <p className="text-slate-400">Apply and save your custom theme</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Custom CSS Example</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`/* Custom theme via CSS variables */
:root {
  --void: #0a0a0f;
  --cyan: #00d4ff;
  --mint: #00ffa3;
  --amber: #ffb800;
  --violet: #b366ff;
  --crimson: #ff3366;
}

/* Apply to your custom CSS file and load in settings */`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300">
              <strong>💡 Tip:</strong> Test your custom colors in both light and dark contexts. Some colors may need adjustment depending on the base theme.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/export-chat" className="btn-primary">
            Next: Exporting Chat History →
          </Link>
        </div>
      </main>
    </div>
  );
}