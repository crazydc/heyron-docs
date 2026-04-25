import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { navigationItems } from '@/data/content';

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
            HEYRON<span className="text-cyan">.DOCS</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Your personal AI agent — mission control for configuration, training, and deployment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/login"
              className="btn-primary"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="btn-secondary"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'UPTIME', value: '99.9%', color: 'text-mint' },
            { label: 'ACTIVE AGENTS', value: '2.4K', color: 'text-cyan' },
            { label: 'MODEL SWITCHES', value: '15.2K', color: 'text-violet' },
            { label: 'COMMUNITY', value: '8.7K', color: 'text-amber' },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-4 text-center">
              <div className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-xs font-mono text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group glass-panel p-6 hover:border-cyan/30 transition-all duration-300"
            >
              <h2 className="text-lg font-bold text-white group-hover:text-cyan transition-colors font-mono">
                {item.name}
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Access documentation and resources →
              </p>
              <div className="mt-4 flex items-center text-cyan text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="mr-2">→</span>
                ENTER
              </div>
            </Link>
          ))}
        </div>

        {/* System Status */}
        <div className="mt-16 glass-panel p-6">
          <h3 className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-wider">System Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mint"></span>
              <span className="text-slate-400">API Gateway</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mint"></span>
              <span className="text-slate-400">Auth Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse"></span>
              <span className="text-slate-400">Database</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mint"></span>
              <span className="text-slate-400">ML Models</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-slate-500 text-sm font-mono">
            © 2026 HEYRON // MISSION CONTROL
          </p>
          <p className="text-slate-600 text-xs mt-2">
            All systems nominal
          </p>
        </footer>
      </main>
    </div>
  );
}