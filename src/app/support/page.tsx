import Navigation from '@/components/Navigation';

export default function Support() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Support</h1>
        <p className="text-xl text-slate-400 mb-8">
          Need help? Here's how to get support for your Heyron agent.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-3">💬 Community Support</h2>
            <p className="text-slate-400 mb-4">Get help from the Heyron community</p>
            <a 
              href="/the-den"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Join The Den →
            </a>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-3">📧 Email Support</h2>
            <p className="text-slate-400 mb-4">Contact the team directly</p>
            <a 
              href="mailto:support@heyron.ai"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              support@heyron.ai
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting Common Issues</h2>
        
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">🔴 Agent Doesn't Remember Me</h3>
            <p className="text-slate-400">
              Make sure persistent memory is configured. Complete Module 02 and verify GitHub integration is working.
            </p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">🔴 Can't Connect to Discord</h3>
            <p className="text-slate-400">
              Check that you've authorized the bot in your server and that it has the correct permissions.
            </p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">🔴 Slow Response Times</h3>
            <p className="text-slate-400">
              Check your network connection, try a different model, or reduce conversation history length.
            </p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-2">🔴 Agent Gives Wrong Responses</h3>
            <p className="text-slate-400">
              Review and update the personality file in Config. Be specific about your expectations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}