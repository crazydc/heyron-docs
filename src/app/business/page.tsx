import Navigation from '@/components/Navigation';

export default function Business() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Business Inquiries</h1>
        
        <p className="text-xl text-slate-400 mb-8">
          Interested in partnering with Heyron or using our technology in your business?
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-slate-300 mb-4">
            For business inquiries, partnerships, or custom implementations:
          </p>
          <a 
            href="mailto:business@heyron.ai"
            className="text-cyan-400 hover:text-cyan-300 underline text-lg"
          >
            business@heyron.ai
          </a>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">🏢 Enterprise Solutions</h3>
            <p className="text-slate-400 text-sm">Custom AI agents for business workflows and team collaboration</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">🔧 Custom Integrations</h3>
            <p className="text-slate-400 text-sm">Tailored connections to your existing tools and platforms</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">📊 Analytics</h3>
            <p className="text-slate-400 text-sm">Detailed usage analytics and reporting for your organization</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">💼 Reseller Program</h3>
            <p className="text-slate-400 text-sm">Partner with us to offer Heyron to your clients</p>
          </div>
        </div>
      </main>
    </div>
  );
}