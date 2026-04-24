import Navigation from '@/components/Navigation';

export default function TheDen() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">The Den 🦝</h1>
        <p className="text-xl text-slate-400 mb-8">
          The heyron community Discord is called The Den. It's the place to get help, share your projects, and connect with other users.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Join The Den</h2>
          <a 
            href="https://discord.gg/heyron" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.475-1.627-.842-5.033-3.578-13.698a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Discord
          </a>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Getting Started in The Den</h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-300 mb-8">
          <li><strong>#new-start-here</strong> — Start here for the starting guide, announcements, tutorials, and roadmap</li>
          <li><strong>Welcome wall</strong> — Introduce yourself and meet the community</li>
          <li><strong>The Offices</strong> — For direct help from the team</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mb-4">Key Channels</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">🔧 Ron's Helpers</h3>
            <p className="text-slate-400 text-sm">Community troubleshooting and peer support</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">💬 Community Help Chat</h3>
            <p className="text-slate-400 text-sm">General discussion and questions</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">📢 Announcements</h3>
            <p className="text-slate-400 text-sm">Latest news and updates from the team</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
            <h3 className="font-bold text-white mb-2">🚀 Show & Tell</h3>
            <p className="text-slate-400 text-sm">Share your projects and get feedback</p>
          </div>
        </div>
      </main>
    </div>
  );
}