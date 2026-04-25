import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DiscordEmail() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Discord Developer Says "Verify Email"</h1>
        <span className="badge-violet mb-8">Troubleshooting</span>
        <span className="text-slate-400 ml-4">4 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Discord is blocking your bot application because your account needs email verification. Here's how to fix it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Why This Happens</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li><strong>Unverified email</strong> — Your Discord account doesn't have a verified email address</li>
            <li><strong>New account</strong> — Discord requires account age before creating bots</li>
            <li><strong>Server restrictions</strong> — Your account is flagged for additional verification</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">How to Fix</h2>
          
          <h3 className="text-xl font-bold text-white mb-3">Step 1: Verify Your Email on Discord</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Go to <strong>User Settings</strong> (gear icon)</li>
            <li>Click <strong>Account</strong></li>
            <li>Under <strong>Email</strong>, add and verify your email address</li>
            <li>Check your inbox for the verification code</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 2: Enable Two-Factor Authentication</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Discord often requires 2FA for developer actions</li>
            <li>Go to User Settings → Account → Two-Factor Authentication</li>
            <li>Enable 2FA using an authenticator app</li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-3">Step 3: Wait for Account Age</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>New Discord accounts have restrictions</li>
            <li>Typically need to wait 1-2 weeks after account creation</li>
            <li>Verified email + 2FA helps accelerate this</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Requirements Summary</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>✅ Verified email address on your Discord account</li>
            <li>✅ Two-Factor Authentication enabled</li>
            <li>✅ Account is at least a few days old</li>
            <li>✅ No active sanctions or restrictions on your account</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">If Still Blocked</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Check <a href="https://disboard.org" className="text-cyan hover:underline">Discord Status</a> for any outages</li>
            <li>Try using a different browser or incognito mode</li>
            <li>Contact Discord support through the developer portal</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials/different-bot" className="btn-primary">
            Next: Different Bot (DM vs Channel) →
          </Link>
        </div>
      </main>
    </div>
  );
}