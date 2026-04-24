import Navigation from '@/components/Navigation';
import Section from '@/components/Section';
import { MarkdownContent } from '@/components/CodeBlock';
import { sections } from '@/data/content';

export default function Troubleshooting() {
  const section = sections.find(s => s.id === 'troubleshooting')!;

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <Section
          id={section.id}
          title={section.title}
          description={section.description}
        >
          <MarkdownContent content={section.content} />
        </Section>
      </main>
    </div>
  );
}