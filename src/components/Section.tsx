import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  description?: string;
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        {description && (
          <p className="text-slate-400 text-lg">{description}</p>
        )}
      </div>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
}