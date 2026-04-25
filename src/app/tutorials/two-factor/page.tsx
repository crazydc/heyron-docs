import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TwoFactor() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Two-Factor Authentication</h1>
        <span className="badge-amber mb-8">Security</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Add an extra layer of security to your account with two-factor authentication (2FA).
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why Enable 2FA?</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🛡️ <strong>Enhanced Security</strong> — Protect against unauthorized access</li>
            <li>🔐 <strong>Account Recovery</strong> — Additional verification method</li>
            <li>⚠️ <strong>Breach Protection</strong> — Even if password is compromised</li>
            <li>📱 <strong>Peace of Mind</strong> — Know your account is secure</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">2FA Methods</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>📱 <strong>Authenticator App</strong> — Google Authenticator, Authy, 1Password</li>
            <li>📧 <strong>Email Verification</strong> — Code sent to your email</li>
            <li>💬 <strong>SMS Verification</strong> — Code sent via text message</li>
            <li>🔑 <strong>Hardware Key</strong> — YubiKey or similar security keys</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Enable 2FA</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Access Security Settings</h3>
                <p className="text-slate-400">Settings → Security → Two-Factor Authentication</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">Choose Method</h3>
                <p className="text-slate-400">Select your preferred 2FA method</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Scan QR Code</h3>
                <p className="text-slate-400">Use authenticator app to scan the displayed QR code</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Enter Verification Code</h3>
                <p className="text-slate-400">Type the 6-digit code from your authenticator app</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Save Backup Codes</h3>
                <p className="text-slate-400">Store backup codes in a secure location</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Backup Codes</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Example backup codes (save these securely!)
abcd-1234-efgh-5678
ijkl-9012-mnop-3456
qrst-7890-uvwx-1234

# Each code can only be used once`}
          </pre>

          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-crimson">
              <strong>⚠️ Important:</strong> Save your backup codes in a secure location (password manager). You'll need them if you lose access to your authenticator device.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/team-sharing" className="btn-primary">
            Next: Sharing with Team →
          </Link>
        </div>
      </main>
    </div>
  );
}