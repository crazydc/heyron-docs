import Navigation from '@/components/Navigation';
import Link from 'next/link';

const categories = [
  {
    name: 'Personal Life',
    personas: [
      { slug: 'personal-assistant', name: 'Personal Assistant', color: 'cyan', description: 'Your organized digital helper for everyday life' },
    ]
  },
  {
    name: 'Productivity',
    personas: [
      { slug: 'business-pro', name: 'Business Pro', color: 'violet', description: 'Executive-level productivity and project management' },
    ]
  },
  {
    name: 'Creative',
    personas: [
      { slug: 'creative-writer', name: 'Creative Writer', color: 'mint', description: 'Imaginative storytelling and content creation' },
    ]
  },
  {
    name: 'Marketing',
    personas: [
      { slug: 'marketing-expert', name: 'Marketing Expert', color: 'amber', description: 'Strategic marketing and campaign optimization' },
    ]
  },
  {
    name: 'Development',
    personas: [
      { slug: 'developer', name: 'Developer', color: 'cyan', description: 'Technical coding assistance and software engineering' },
    ]
  },
  {
    name: 'Business',
    personas: [
      { slug: 'real-estate-agent', name: 'Real Estate Agent', color: 'violet', description: 'Property market expertise and client management' },
    ]
  },
  {
    name: 'Finance',
    personas: [
      { slug: 'finance-advisor', name: 'Finance Advisor', color: 'mint', description: 'Financial planning and investment guidance' },
    ]
  },
  {
    name: 'Education',
    personas: [
      { slug: 'teacher-tutor', name: 'Teacher Tutor', color: 'amber', description: 'Personalized learning and academic support' },
    ]
  },
  {
    name: 'Health & Wellness',
    personas: [
      { slug: 'fitness-coach', name: 'Fitness Coach', color: 'crimson', description: 'Training programs and wellness motivation' },
      { slug: 'health-wellness', name: 'Health & Wellness', color: 'mint', description: 'Holistic health guidance and lifestyle support' },
    ]
  },
  {
    name: 'Freelance',
    personas: [
      { slug: 'freelance-writer', name: 'Freelance Writer', color: 'violet', description: 'Professional writing services and client work' },
    ]
  },
  {
    name: 'Automation',
    personas: [
      { slug: 'automation-expert', name: 'Automation Expert', color: 'cyan', description: 'Workflow automation and efficiency consulting' },
    ]
  }
];

const badgeColors: Record<string, string> = {
  cyan: 'badge-cyan',
  violet: 'badge-violet',
  mint: 'badge-mint',
  amber: 'badge-amber',
  crimson: 'badge-crimson',
};

export default function Personas() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tight">
            Agent Personas
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Specialized AI agents designed for specific tasks and industries. 
            Each persona comes with unique traits, expertise, and example prompts.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-bold text-white mb-6 font-mono tracking-tight border-b border-border pb-2">
                {category.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.personas.map((persona) => (
                  <Link
                    key={persona.slug}
                    href={`/personas/${persona.slug}`}
                    className="glass-panel p-6 hover:scale-[1.02] transition-transform cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={badgeColors[persona.color]}>PERSONA</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                      {persona.name}
                    </h3>
                    <p className="text-muted text-sm">
                      {persona.description}
                    </p>
                    <div className="mt-4 flex items-center text-cyan text-sm font-medium">
                      <span>View details</span>
                      <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 glass-panel p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-mono">Create Your Own Persona</h2>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            Each persona is defined by a SOUL.md file that shapes its personality, 
            expertise, and communication style. Copy any persona template to create your own.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/getting-started" className="btn-primary">
              Get Started
            </Link>
            <Link href="/docs" className="btn-secondary">
              Documentation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}