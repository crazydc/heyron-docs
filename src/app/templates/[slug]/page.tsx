import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { templates, getTemplateBySlug } from '@/data/templates';

export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  
  if (!template) {
    notFound();
  }

  const badgeColors: Record<string, string> = {
    cyan: 'badge-cyan',
    mint: 'badge-mint',
    amber: 'badge-amber',
    violet: 'badge-violet',
    crimson: 'badge-crimson',
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/templates" 
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-cyan transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Templates
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={badgeColors[template.badge]}>
              {template.sourceFile}
            </span>
            <span className="text-sm font-mono text-slate-500">
              {template.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono tracking-tight">
            {template.name}
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            {template.description}
          </p>
        </div>

        {/* Template Content */}
        <div className="glass-panel p-6 mb-8">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700">
            <h2 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              Template Content
            </h2>
            <button
              onClick={() => navigator.clipboard.writeText(template.content)}
              className="btn-secondary text-xs"
            >
              Copy All
            </button>
          </div>
          
          <pre className="bg-void border border-slate-700 rounded-lg p-4 overflow-x-auto text-sm font-mono text-slate-300 whitespace-pre-wrap">
            {template.content}
          </pre>
        </div>

        {/* Usage Instructions */}
        <div className="glass-panel p-6">
          <h2 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4">
            How to Use
          </h2>
          
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan font-mono">01</span>
              <span>Copy the template content above</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan font-mono">02</span>
              <span>Save it as <code className="text-amber font-mono bg-slate-800 px-2 py-0.5 rounded">{template.sourceFile}</code> in your workspace root</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan font-mono">03</span>
              <span>Customize the content to match your needs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan font-mono">04</span>
              <span>The agent will automatically pick up the configuration on next session</span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <Link href="/templates" className="btn-primary">
              View All Templates
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}