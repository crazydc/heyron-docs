'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function Navigation() {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // When logged in, show minimal nav
  const showMinimal = user && pathname.startsWith('/dashboard');

  if (isLoading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="text-xl font-bold text-white font-mono">
            HEYRON<span className="text-accent">.AI</span>
          </div>
        </div>
      </nav>
    );
  }

  // Logged in = minimal nav
  if (user) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-xl font-bold text-white font-mono tracking-tight">
                HEYRON<span className="text-accent">.AI</span>
              </Link>
              <span className="text-text-muted">|</span>
              <Link href="/dashboard" className="text-text-secondary hover:text-accent text-sm">
                Dashboard
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/dashboard/account" className="text-text-secondary hover:text-accent text-sm">
                Account
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('heyron-user');
                  window.location.href = '/';
                }}
                className="text-text-secondary hover:text-accent text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Logged out = full nav
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'What Is Heyron', href: '/what-is-heyron' },
    { name: 'Getting Started', href: '/getting-started' },
    { name: 'Tutorials', href: '/tutorials' },
  ];

  const moreItems = [
    { name: 'Personas', href: '/personas' },
    { name: 'Skills', href: '/skills' },
    { name: 'Templates', href: '/templates' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white font-mono tracking-tight">
              HEYRON<span className="text-accent">.AI</span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-1 mr-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-accent hover:bg-accent/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="relative inline-block">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-text-secondary hover:text-accent hover:bg-accent/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center"
                >
                  <span className="font-mono text-xs">+++</span>
                </button>
                
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-xl py-2">
                    {moreItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-text-secondary hover:bg-accent/5 hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Link href="/login" className="text-text-secondary hover:text-accent px-3 py-2 text-sm">Sign In</Link>
            <Link href="/signup" className="btn-primary px-4 py-2 text-sm">Get Started</Link>
          </div>
          
          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/login" className="text-text-secondary text-sm">Sign In</Link>
            <Link href="/signup" className="btn-primary px-3 py-1 text-sm">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}