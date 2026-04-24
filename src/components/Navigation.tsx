'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'What Is Heyron', href: '/what-is-heyron' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Training', href: '/training' },
  { name: 'Prompts', href: '/prompts' },
  { name: 'The Den', href: '/the-den' },
];

const moreItems = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Support', href: '/support' },
  { name: 'AI Terms', href: '/ai-terms' },
  { name: 'Meet Robby', href: '/meet-robby' },
  { name: 'Security', href: '/security' },
  { name: 'Business', href: '/business' },
  { name: 'Resources', href: '/resources' },
  { name: 'Love', href: '/love' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-panel/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white font-mono tracking-tight">
              HEYRON<span className="text-cyan">.DOCS</span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan hover:bg-cyan/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* More dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="text-slate-400 hover:text-cyan hover:bg-cyan/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center"
                >
                  <span className="font-mono text-xs">+++</span>
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {moreOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-panel/95 backdrop-blur-md border border-border rounded-xl shadow-2xl py-2">
                    {moreItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-slate-400 hover:bg-cyan/5 hover:text-cyan transition-colors"
                        onClick={() => setMoreOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-cyan p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-panel/95 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-cyan hover:bg-cyan/5 block px-3 py-2 rounded-lg text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-border pt-2 mt-2">
              <span className="block px-3 py-2 text-xs text-slate-500 font-mono">+++ MORE</span>
              {moreItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan hover:bg-cyan/5 block px-3 py-2 rounded-lg text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}