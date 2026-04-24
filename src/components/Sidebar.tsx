'use client';

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

interface SidebarProps {
  sections: Section[];
}

export default function Sidebar({ sections }: SidebarProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 md:hidden bg-cyan-500 text-white p-3 rounded-full shadow-lg"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-16 bottom-0 w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto
        transform transition-transform duration-300 z-30
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            On This Page
          </h3>
          <nav className="space-y-1">
            {sections.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-3 py-2 rounded-md text-sm transition-colors
                  ${activeSection === id 
                    ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'}
                `}
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}