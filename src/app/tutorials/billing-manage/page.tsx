import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BillingManage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Managing Billing</h1>
        <span className="badge-amber mb-8">Account</span>
        <span className="text-slate-400 ml-4">5 min read</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Manage your subscription, payment methods, and billing information — keep your account running smoothly.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Subscription Plans</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>🆓 <strong>Free</strong> — Basic features, limited usage</li>
            <li>⚡ <strong>Pro</strong> — Full features, higher limits</li>
            <li>🚀 <strong>Team</strong> — Multiple users, admin controls</li>
            <li>🏢 <strong>Enterprise</strong> — Custom limits, dedicated support</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Billing Features</h2>
          <ul className="space-y-3 text-slate-300 mb-6">
            <li>💳 <strong>Payment Methods</strong> — Credit cards, PayPal, bank transfer</li>
            <li>📄 <strong>Invoices</strong> — Download monthly invoices</li>
            <li>📊 <strong>Usage Tracking</strong> — Monitor spending in real-time</li>
            <li>🔔 <strong>Alerts</strong> — Notify before hitting limits</li>
            <li>📦 <strong>Credits</strong> — Prepay for discounts</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Steps to Manage Billing</h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="badge-cyan">1</div>
              <div>
                <h3 className="font-bold text-white">Access Billing</h3>
                <p className="text-slate-400">Settings → Billing & Subscription</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">2</div>
              <div>
                <h3 className="font-bold text-white">View Current Plan</h3>
                <p className="text-slate-400">See your current plan and usage</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">3</div>
              <div>
                <h3 className="font-bold text-white">Upgrade or Downgrade</h3>
                <p className="text-slate-400">Change your plan as needed</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">4</div>
              <div>
                <h3 className="font-bold text-white">Manage Payment Methods</h3>
                <p className="text-slate-400">Add, remove, or update payment info</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge-cyan">5</div>
              <div>
                <h3 className="font-bold text-white">Download Invoices</h3>
                <p className="text-slate-400">Access billing history and receipts</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Updating Payment Method</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Add new payment method
1. Click "Payment Methods"
2. Click "Add Payment Method"
3. Enter card details or connect PayPal
4. Set as default payment method
5. Verify with small test charge

# Alternative: Use billing CLI
agent billing add-card --number 4111111111111111 \
  --expiry 12/25 --cvc 123`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Understanding Your Bill</h2>
          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300 mb-2">
              Your bill typically includes:
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-1">
              <li>Base subscription fee</li>
              <li>Additional usage beyond plan limits</li>
              <li>Team member seats (if applicable)</li>
              <li>Premium features or add-ons</li>
            </ul>
          </div>

          <div className="bg-panel border border-border rounded-lg p-4 mt-4">
            <p className="text-amber">
              <strong>💡 Tip:</strong> Enable auto-reload credits to avoid service interruption. The system will automatically add credits when balance is low.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/tutorials" className="btn-primary">
            Back to All Tutorials →
          </Link>
        </div>
      </main>
    </div>
  );
}