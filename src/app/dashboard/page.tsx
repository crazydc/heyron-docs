'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  const sections = [
    {
      icon: '🚀',
      title: 'Your Agent',
      description: 'Launch and manage your AI agent',
      href: '/dashboard/agent',
      color: 'border-cyan',
    },
    {
      icon: '⚡',
      title: 'Quickstart',
      description: 'Get up and running fast',
      href: '/dashboard/quickstart',
      color: 'border-amber',
    },
    {
      icon: '📚',
      title: 'Tutorials',
      description: 'Learn how to use your agent',
      href: '/dashboard/tutorials',
      color: 'border-violet',
    },
    {
      icon: '🗂',
      title: 'Filing Cabinet',
      description: 'Your files and resources',
      href: '/dashboard/filing-cabinet',
      color: 'border-mint',
    },
    {
      icon: '🛠',
      title: 'Fix Agent',
      description: 'Troubleshoot issues',
      href: '/dashboard/fix-agent',
      color: 'border-crimson',
    },
    {
      icon: '💬',
      title: 'Get Help',
      description: 'Community support',
      href: '/dashboard/help',
      color: 'border-cyan',
    },
    {
      icon: '⚙️',
      title: 'Account',
      description: 'Settings and subscription',
      href: '/dashboard/account',
      color: 'border-slate',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-slate-400">
          This is your Mission Control center. Choose a section to get started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={`glass-panel p-6 border-l-4 ${section.color} hover:scale-[1.02] transition-transform`}
          >
            <div className="text-3xl mb-3">{section.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
            <p className="text-slate-400 text-sm">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}