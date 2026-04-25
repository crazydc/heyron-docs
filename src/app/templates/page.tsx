import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { templates } from '@/data/templates';

const badgeColors: Record<string, string> = {
  cyan: 'badge-cyan',
  mint: 'badge-mint',
  amber: 'badge-amber',
  violet: 'badge-violet',
  crimson: 'badge-crimson',
};

export default function TemplatesPage() {
  // Group templates by category
  const grouped = templates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  }, {} as Record<string, typeof templates>);

  const categories = Object.keys(grouped).sort();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-violet"></span>
            TEMPLATES
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono tracking-tight">
            Template Library
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Essential configuration templates for your AI agent. Copy, customize, and deploy 
            to configure personality, workflows, and operational procedures.
          </p>
        </div>

        {/* Templates by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-mono text-slate-300 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-cyan rounded-full"></span>
              {category}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {grouped[category].map((template) => (
                <Link
                  key={template.slug}
                  href={`/templates/${template.slug}`}
                  className="glass-panel p-5 hover:scale-[1.02] transition-transform group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-white font-mono group-hover:text-cyan transition-colors">
                      {template.name}
                    </h3>
                    <span className={badgeColors[template.badge]}>
                      {template.sourceFile}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-cyan text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Template</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Stats */}
        <div className="mt-16 glass-panel p-6">
          <div className="text-center">
            <div className="text-3xl font-bold font-mono text-white">{templates.length}</div>
            <div className="text-sm font-mono text-slate-500 mt-1">TOTAL TEMPLATES</div>
          </div>
        </div>
      </main>
    </div>
  );
}