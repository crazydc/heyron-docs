import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
          
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                OVER 1,000 EARLY ADOPTERS
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                An AI that actually does things.
              </h1>
              
              <p className="text-xl text-text-secondary max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
                Not suggestions. Not chat. <span className="text-white font-bold">Real work.</span> You ask, it does it. And it remembers everything.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <a
                  href="/signup"
                  className="btn-primary"
                >
                  Get Started · $29
                </a>
                <a
                  href="#demo"
                  className="btn-secondary"
                >
                  See the Community
                </a>
              </div>

              <p className="text-text-muted text-sm">
                No setup. No code. Ready in 2 minutes.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="relative block mb-8 md:mb-0">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
              <img 
                src="/hero.svg" 
                alt="Heyron AI" 
                className="relative w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-y border-border bg-bg-secondary/50">
          <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent font-mono">2,588+</div>
              <div className="text-text-muted text-sm">Active Agents</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent font-mono">2.1M+</div>
              <div className="text-text-muted text-sm">Conversations</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent font-mono">85,000+</div>
              <div className="text-text-muted text-sm">Messages/Day</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent font-mono">55+</div>
              <div className="text-text-muted text-sm">Days Since Launch</div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How it works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-white mb-2">Sign up and pick a name</h3>
              <p className="text-text-secondary">Your AI gets a name you choose. Sign up and go.</p>
            </div>
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-2">We set up your private AI server</h3>
              <p className="text-text-secondary">Your own dedicated instance. Private. Isolated. Just for you.</p>
            </div>
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-2">Start talking in 2 minutes</h3>
              <p className="text-text-secondary">No setup. No code. Just open the chat and go.</p>
            </div>
          </div>
        </div>

        {/* Not just chat - Real work */}
        <div className="border-t border-border bg-bg-secondary/50 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Not just chat. Real work.</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl shrink-0">🧠</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Remember my business idea from last week"</h3>
                  <p className="text-text-secondary">It does. Every conversation builds on the last. No copy-pasting context.</p>
                </div>
              </div>
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl shrink-0">📁</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Research this and save it to my workspace"</h3>
                  <p className="text-text-secondary">Searches the web, writes a full report, saves the file. You download it.</p>
                </div>
              </div>
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl shrink-0">🔒</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Here's my financial info — help me budget"</h3>
                  <p className="text-text-secondary">Your own private instance. Your data doesn't train any models. Share freely.</p>
                </div>
              </div>
              <div className="glass-panel p-6 flex gap-4">
                <div className="text-3xl shrink-0">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">"Build me a 30-day launch plan for my store"</h3>
                  <p className="text-text-secondary">Not bullet points. A real plan with timelines, tasks, and research behind it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">It&apos;s yours</h3>
              <p className="text-text-secondary text-sm">You name it. Your data stays yours. It learns your preferences, your style, how you work.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">It remembers</h3>
              <p className="text-text-secondary text-sm">Every conversation builds on the last. No repeating yourself. No starting over.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">It does work</h3>
              <p className="text-text-secondary text-sm">Not suggestions. Actual output. You ask, it does it, and saves the results to your workspace.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-2xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Simple pricing</h2>
          <p className="text-text-secondary text-center mb-8">One plan. Your own AI.</p>
          
          <div className="glass-panel p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-4 bg-accent text-bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
              One Plan
            </div>
            <div className="text-4xl font-bold text-white mb-2">$29<span className="text-text-muted text-base font-normal">/mo</span></div>
            <p className="text-text-secondary mb-6">Cancel anytime. No contracts.</p>
            
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              <li className="flex items-center gap-2 text-text-primary">
                <span className="text-success">✓</span> Your own private AI instance
              </li>
              <li className="flex items-center gap-2 text-text-primary">
                <span className="text-success">✓</span> Generous monthly usage
              </li>
              <li className="flex items-center gap-2 text-text-primary">
                <span className="text-success">✓</span> Persistent memory across sessions
              </li>
              <li className="flex items-center gap-2 text-text-primary">
                <span className="text-success">✓</span> Web search, file creation, real tools
              </li>
              <li className="flex items-center gap-2 text-text-primary">
                <span className="text-success">✓</span> Private Discord community
              </li>
            </ul>
            
            <a
              href="/signup"
              className="btn-primary"
            >
              Get Yours · $29/mo
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-text-muted text-sm">
              © 2026 Heyron. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}