import Navigation from '@/components/Navigation';
import Link from 'next/link';

const modules = [
  {
    id: 'module-01',
    title: "Module 01: Getting Started",
    description: "Set up your agent in about 15 minutes",
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
    description: "Set up robust file storage with GitHub",
    status: "Active",
    href: "/training/file-storage"
  },
  {
    id: 'module-05',
    title: "Module 05: Advanced Features",
    description: "Time-based actions, reminders, and automation",
    status: "Coming Soon",
    href: null
  },
  {
    id: 'module-06',
    title: "Module 06: Deep Integration",
    description: "Advanced integrations and custom workflows",
    status: "Coming Soon",
    href: null
  }
];

export default function Training() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-mono)' }}>Training & Tutorials</h1>
        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Step-by-step modules built by the heyron community. Work through them at your own pace.
        </p>

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