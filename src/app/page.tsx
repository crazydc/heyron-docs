import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { navigationItems } from '@/data/content';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            heyron<span className="text-cyan-400">.docs</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Your personal AI agent — documentation, guides, and everything you need to get started.
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 hover:bg-slate-800 transition-all group"
            >
              <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 mb-2">
                {item.name}
              </h2>
              <p className="text-slate-400 text-sm">
                Click to view full documentation →
              </p>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://heyron.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors"
            >
              heyron.ai →
            </a>
            <a
              href="https://discord.gg/heyron"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
            >
              Join The Den →
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>Built with heyron — Your Personal AI Agent</p>
          <p className="text-sm mt-2">© 2026 heyron. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}