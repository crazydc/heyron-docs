'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const dashboardNav = [
  { name: '🚀 Your Agent', href: '/dashboard/agent', icon: '🚀' },
  { name: '⚡ Quickstart', href: '/dashboard/quickstart', icon: '⚡' },
  { name: '📚 Tutorials', href: '/dashboard/tutorials', icon: '📚' },
  { name: '🗂 Filing Cabinet', href: '/dashboard/filing-cabinet', icon: '🗂' },
  { name: '🛠 Fix Agent', href: '/dashboard/fix-agent', icon: '🛠' },
  { name: '💬 Get Help', href: '/dashboard/help', icon: '💬' },
  { name: '⚙️ Account', href: '/dashboard/account', icon: '⚙️' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-panel/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-slate-400 hover:text-white lg:hidden"
              >
                <span className="text-2xl">☰</span>
              </button>
              <Link href="/dashboard" className="text-xl font-bold text-white font-mono">
                MISSION<span className="text-cyan">CONTROL</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">{user.email}</span>
              <button
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                className="text-sm text-slate-400 hover:text-cyan"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-panel border-r border-border z-40 transform transition-transform lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="p-4 space-y-2">
          {dashboardNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-cyan/10 text-cyan border border-cyan/20'
                  : 'text-slate-300 hover:bg-surface hover:text-white'
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}