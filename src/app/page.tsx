import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import Section from '@/components/Section';
import { MarkdownContent } from '@/components/CodeBlock';
import { sections, navigationItems } from '@/data/content';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="flex">
        <Sidebar sections={sections.map(s => ({ id: s.id, title: s.title }))} />
        
        <main className="flex-1 md:ml-64 pt-16">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                heyron<span className="text-cyan-400">.docs</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Your personal AI agent — documentation, guides, and everything you need to get started.
              </p>
            </div>

            {/* Content Sections */}
            {sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                title={section.title}
                description={section.description}
              >
                <MarkdownContent content={section.content} />
              </Section>
            ))}

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500">
              <p>Built with heyron — Your Personal AI Agent</p>
              <p className="text-sm mt-2">© 2026 heyron. All rights reserved.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}