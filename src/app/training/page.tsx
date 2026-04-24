import Navigation from '@/components/Navigation';
import Link from 'next/link';

const modules = [
  {
    id: 'module-01',
    title: "Module 01: Start Here",
    description: "What's in the box — understand your new agent",
    status: "Active",
    href: "/getting-started"
  },
  {
    id: 'module-02',
    title: "Module 02: Memory & Personality",
    description: "Configure your agent's memory and behavior",
    status: "Active",
    href: "/training/memory-personality"
  },
  {
    id: 'module-03',
    title: "Module 03: Discord Integration",
    description: "Connect your agent to Discord",
    status: "Active",
    href: "/training/discord-integration"
  },
  {
    id: 'module-04',
    title: "Module 04: File Storage",
    description: "Set up GitHub for file storage",
    status: "Active",
    href: "/training/file-storage"
  },
  {
    id: 'module-05',
    title: "Module 05: Vision",
    description: "Teach your agent to see and analyze images",
    status: "Active",
    href: "/training/vision"
  },
  {
    id: 'module-06',
    title: "Module 06: Saved Work",
    description: "Backup and preserve your agent's work",
    status: "Active",
    href: "/training/saved-work"
  },
  {
    id: 'module-07',
    title: "Module 07: Cron & Scheduling",
    description: "Set up time-based actions and reminders",
    status: "Active",
    href: "/training/cron"
  },
  {
    id: 'module-08',
    title: "Module 08: AgentMail",
    description: "Give your agent its own email inbox",
    status: "Active",
    href: "/training/agentmail"
  }
];

export default function Training() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Training & Tutorials</h1>
        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Step-by-step modules to build your AI partner. Skip nothing — this is your unboxing sequence.
        </p>

        <div className="glass-panel p-4 mb-8">
          <p className="text-sm text-slate-400">
            🚧 <strong>Beta Software:</strong> Heyron is actively being built. Things change fast. 
            Stuck? Ask in the <a href="https://discord.gg/clawd" target="_blank" className="text-cyan hover:underline">Heyron Discord</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => (
            module.href ? (
              <Link
                key={module.id}
                href={module.href}
                className="glass-panel p-6 hover:border-cyan/30 transition-all duration-300 block"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>{module.title}</h3>
                  <span className={module.status === 'Active' ? 'badge-mint' : 'badge-amber'}>
                    {module.status}
                  </span>
                </div>
                <p className="text-slate-400">{module.description}</p>
              </Link>
            ) : (
              <div
                key={module.id}
                className="glass-panel p-6 opacity-60"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>{module.title}</h3>
                  <span className="badge-amber">{module.status}</span>
                </div>
                <p className="text-slate-400">{module.description}</p>
              </div>
            )
          ))}
        </div>

        <div className="glass-panel p-6 mt-12">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>💡 The Cricut Analogy</h2>
          <p className="text-slate-300 mb-4">
            When you unboxed your Cricut, you couldn't immediately make a project. You had to download software, 
            pair the machine, and attach tools. Heyron is the same.
          </p>
          <p className="text-slate-300">
            <strong>Skip these modules, and Day 1 work disappears. Complete them, and you have a partner that remembers, saves, and improves over time.</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Community Resources</h2>
        <ul className="space-y-2 text-slate-300">
          <li>📚 <strong>Written Guides</strong> — Community-built walkthroughs</li>
          <li>🎬 <strong>Video Tutorials</strong> — Coming soon</li>
          <li>💬 <strong>The Den</strong> — <Link href="/community" className="text-cyan hover:underline">Join our Discord community</Link> for real-time help</li>
        </ul>
      </main>
    </div>
  );
}