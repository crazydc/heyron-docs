import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-6 py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            OPERATIONAL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono tracking-tighter">
            Meet Your<span className="text-cyan"> AI Agent</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Your personal AI assistant — configure, train, and deploy agents that work the way you do.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/signup"
              className="px-8 py-3 bg-cyan text-void font-bold rounded-lg hover:bg-cyan/90 transition-colors"
            >
              Get Started — Free
            </a>
            <a
              href="/login"
              className="px-8 py-3 bg-panel border border-border text-white font-bold rounded-lg hover:bg-surface transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Powerful Agents</h3>
            <p className="text-slate-400">Create AI agents with custom personalities and skills</p>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-white mb-2">Connect Anywhere</h3>
            <p className="text-slate-400">Discord, Telegram, and more — your agent everywhere</p>
          </div>
          <div className="glass-panel p-6 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-white mb-2">Memory That Works</h3>
            <p className="text-slate-400">Your agent remembers what matters</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Ready to meet your AI agent?</p>
          <a
            href="/signup"
            className="text-cyan hover:underline"
          >
            Create your free account →
          </a>
        </div>
      </main>
    </div>
  );
}