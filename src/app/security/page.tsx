import Navigation from '@/components/Navigation';

export default function Security() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Security & Privacy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            Your privacy and security are our top priorities. This document outlines how we protect your data.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Ownership</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>You own your data</strong> — All conversations, files, and configurations belong to you</li>
            <li><strong>Your data trains nothing</strong> — We never use your data to train other AI models</li>
            <li><strong>Private by default</strong> — Your agent runs on your private server</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Security Measures</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Encrypted connections (TLS/SSL) for all communications</li>
            <li>Secure authentication with OAuth2 and JWT tokens</li>
            <li>Regular security audits and updates</li>
            <li>Your data stored in your own private environment</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Account information (email, username)</li>
            <li>Payment information (processed securely via Stripe)</li>
            <li>Usage data for improving our service</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Your Control</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Export all your data at any time</li>
            <li>Delete your account and all associated data</li>
            <li>Choose which services to connect</li>
            <li>Control what your agent can access</li>
          </ul>
        </div>
      </main>
    </div>
  );
}