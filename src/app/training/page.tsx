import Navigation from '@/components/Navigation';

export default function Training() {
  const tutorials = [
    {
      title: "Module 01: Getting Started",
      description: "Set up your agent in about 15 minutes",
      status: "Active"
    },
    {
      title: "Module 02: Memory & Personality",
      description: "Configure your agent's memory and behavior",
      status: "Active"
    },
    {
      title: "Module 03: Discord Integration",
      description: "Connect your agent to Discord",
      status: "Active"
    },
    {
      title: "Module 04: File Storage",
      description: "Set up robust file storage with GitHub",
      status: "Active"
    },
    {
      title: "Module 05: Advanced Features",
      description: "Time-based actions, reminders, and automation",
      status: "Coming Soon"
    },
    {
      title: "Module 06: Deep Integration",
      description: "Advanced integrations and custom workflows",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Training & Tutorials</h1>
        <p className="text-xl text-slate-400 mb-8">
          Step-by-step modules built by the heyron community. Work through them at your own pace.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{tutorial.title}</h3>
                <span className={`px-2 py-1 rounded text-xs ${
                  tutorial.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {tutorial.status}
                </span>
              </div>
              <p className="text-slate-400">{tutorial.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Community Resources</h2>
        <ul className="space-y-2 text-slate-300">
          <li>📚 <strong>Written Guides</strong> — Community-built walkthroughs</li>
          <li>🎬 <strong>Video Tutorials</strong> — Coming soon</li>
          <li>💬 <strong>The Den</strong> — Join our Discord community for real-time help</li>
        </ul>
      </main>
    </div>
  );
}