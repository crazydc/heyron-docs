import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { getSkillData, getAllSlugs } from '../data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkillData(slug);
  
  if (!skill) {
    return { title: 'Skill Not Found - Heyron' };
  }
  
  return {
    title: `${skill.name} - Heyron Skills`,
    description: skill.description,
  };
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkillData(slug);

  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-void">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm font-mono text-muted">
            <li><a href="/skills" className="hover:text-cyan transition-colors">Skills</a></li>
            <li>/</li>
            <li><span className="text-white">{skill.category}</span></li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{skill.icon}</span>
            <span className={`badge-${skill.badge}`}>{skill.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tight">
            {skill.name}
          </h1>
          <p className="text-xl text-muted">{skill.description}</p>
        </header>

        {/* Long Description */}
        <section className="glass-panel p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4 font-mono">Overview</h2>
          <p className="text-slate-300 leading-relaxed">{skill.longDescription}</p>
        </section>

        {/* Installation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono">Installation</h2>
          
          <div className="glass-panel p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Setup Steps</h3>
            <ol className="space-y-3">
              {skill.installation.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan/20 text-cyan text-sm font-mono flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-slate-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Configuration Options</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Config Key</th>
                    <th className="text-left">Description</th>
                    <th className="text-left">Default</th>
                  </tr>
                </thead>
                <tbody>
                  {skill.installation.config.map((config) => (
                    <tr key={config.key}>
                      <td>
                        <code className="text-cyan font-mono text-sm">{config.key}</code>
                      </td>
                      <td className="text-slate-300 text-sm">{config.description}</td>
                      <td>
                        <code className="text-muted font-mono text-sm">{config.default}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono">Usage Examples</h2>
          
          <div className="glass-panel p-6 mb-4">
            <p className="text-slate-300 mb-6">{skill.usage.description}</p>
            
            <div className="space-y-4">
              {skill.usage.examples.map((example, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <code className="block text-cyan font-mono text-sm mb-2">
                    {example.command}
                  </code>
                  <p className="text-muted text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 border-l-2 border-l-amber">
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <span className="text-amber">💡</span> Pro Tip
            </h4>
            <p className="text-slate-400 text-sm">
              You can combine multiple options! Try something like: 
              <code className="mx-2 text-cyan font-mono">
                !{skill.slug.split('-')[0]} --detailed --sources
              </code>
              for enhanced output.
            </p>
          </div>
        </section>

        {/* Navigation Footer */}
        <nav className="flex flex-wrap gap-4 pt-8 border-t border-border">
          <a href="/skills" className="btn-secondary">
            ← Back to Skills Library
          </a>
          {getAllSlugs().map((s, i) => {
            const otherSkill = getSkillData(s);
            if (s === slug || !otherSkill) return null;
            const currentIndex = getAllSlugs().indexOf(slug);
            const isNext = getAllSlugs().indexOf(s) === currentIndex + 1;
            const isPrev = getAllSlugs().indexOf(s) === currentIndex - 1;
            if (!isNext && !isPrev) return null;
            return (
              <a 
                key={s} 
                href={`/skills/${s}`}
                className={`btn-primary ${isNext ? 'ml-auto' : ''}`}
              >
                {isNext ? `${otherSkill.name} →` : `← ${otherSkill.name}`}
              </a>
            );
          })}
        </nav>
      </main>
    </div>
  );
}