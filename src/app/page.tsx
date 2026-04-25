import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="text-center px-4 py-20 md:py-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            OVER 1,000 EARLY ADOPTERS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            An AI that actually does things.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Not suggestions. Not chat. <span className="text-white font-bold">Real work.</span> You ask, it does it. And it remembers everything.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/signup"
              className="px-6 py-3 bg-cyan text-void font-bold rounded-lg hover:bg-cyan/90 transition-colors"
            >
              Get Started · $29
            </a>
            <a
              href="#demo"
              className="px-6 py-3 border border-slate-600 text-white font-bold rounded-lg hover:bg-surface transition-colors"
            >
              See the Community
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            No setup. No code. Ready in 2 minutes.
          </p>
        </div>

        {/* Stats */}
        <div className="border-y border-[#1C222B] bg-[#0F141C]/50">
          <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan">2,588+</div>
              <div className="text-slate-500 text-sm">Active Agents</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan">2.1M+</div>
              <div className="text-slate-500 text-sm">Conversations</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan">85,000+</div>
              <div className="text-slate-500 text-sm">Messages/Day</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan">55+</div>
              <div className="text-slate-500 text-sm">Days Since Launch</div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How it works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-cyan text-4xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-white mb-2">Sign up and pick a name</h3>
              <p className="text-slate-400">Your AI gets a name you choose. Sign up and go.</p>
            </div>
            <div className="text-center">
              <div className="text-cyan text-4xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-2">We set up your private AI server</h3>
              <p className="text-slate-400">Your own dedicated instance. Private. Isolated. Just for you.</p>
            </div>
            <div className="text-center">
              <div className="text-cyan text-4xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-2">Start talking in 2 minutes</h3>
              <p className="text-slate-400">No setup. No code. Just open the chat and go.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-[#1C222B] bg-[#0F141C]/50 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Not just chat. Real work.</h2>
            
            <div className="space-y-8">
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl">🧠</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Remember my business idea from last week"</h3>
                  <p className="text-slate-400">It does. Every conversation builds on the last. No copy-pasting context.</p>
                </div>
              </div>
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl">📁</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Research this and save it to my workspace"</h3>
                  <p className="text-slate-400">Searches the web, writes a full report, saves the file. You download it.</p>
                </div>
              </div>
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl">🔒</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Here's my financial info — help me budget"</h3>
                  <p className="text-slate-400">Your own private instance. Your data doesn't train any models. Share freely.</p>
                </div>
              </div>
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Build me a 30-day launch plan for my store"</h3>
                  <p className="text-slate-400">Not bullet points. A real plan with timelines, tasks, and research behind it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-2xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Simple pricing</h2>
          <p className="text-slate-400 text-center mb-8">One plan. Your own AI.</p>
          
          <div className="glass-panel p-8 text-center">
            <div className="text-sm text-slate-500 mb-2">One Plan</div>
            <div className="text-4xl font-bold text-white mb-2">$29/mo</div>
            <p className="text-slate-400 mb-6">Cancel anytime. No contracts.</p>
            
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              <li className="flex items-center gap-2 text-slate-300">
                <span className="text-mint">✓</span> Your own private AI instance
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="text-mint">✓</span> Generous monthly usage
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="text-mint">✓</span> Persistent memory across sessions
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="text-mint">✓</span> Web search, file creation, real tools
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="text-mint">✓</span> Private Discord community
              </li>
            </ul>
            
            <a
              href="/signup"
              className="inline-block w-full py-3 bg-cyan text-void font-bold rounded-lg hover:bg-cyan/90 transition-colors"
            >
              Get Yours · $29/mo
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1C222B] py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm">
              © 2026 Heyron. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}