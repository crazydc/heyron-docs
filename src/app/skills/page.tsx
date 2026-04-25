import Navigation from '@/components/Navigation';

const skillCategories = {
  Productivity: [
    { slug: 'meeting-notes', name: 'Meeting Notes', description: 'Capture and summarize meeting discussions', badge: 'cyan' },
    { slug: 'email-compose', name: 'Email Compose', description: 'Draft professional emails quickly', badge: 'mint' },
    { slug: 'spreadsheet-help', name: 'Spreadsheet Help', description: 'Formulas, charts, and data manipulation', badge: 'amber' },
  ],
  Development: [
    { slug: 'code-review', name: 'Code Review', description: 'Analyze and improve code quality', badge: 'violet' },
    { slug: 'human-writing', name: 'Human Writing', description: 'Natural, engaging content creation', badge: 'cyan' },
  ],
  Creative: [
    { slug: 'image-generation', name: 'Image Generation', description: 'Create images from descriptions', badge: 'amber' },
    { slug: 'social-media', name: 'Social Media', description: 'Engaging posts for all platforms', badge: 'mint' },
  ],
  Automation: [
    { slug: 'data-analysis', name: 'Data Analysis', description: 'Insights and patterns from data', badge: 'violet' },
    { slug: 'research-assistant', name: 'Research Assistant', description: 'Web research and information gathering', badge: 'cyan' },
  ],
  Communication: [
    { slug: 'document-summary', name: 'Document Summary', description: 'Quickly digest long documents', badge: 'violet' },
  ],
};

const allSkills = Object.values(skillCategories).flat();

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-void">
      <Navigation />
      <main className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="badge-cyan mb-4">Documentation</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tight">
            Skills Library
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Specialized AI capabilities you can enable for your assistant. Each skill is designed for specific tasks.
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <section key={category}>
              <h2 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan"></span>
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <a
                    key={skill.slug}
                    href={`/skills/${skill.slug}`}
                    className="glass-panel p-5 block group hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-white group-hover:text-cyan transition-colors">
                        {skill.name}
                      </h3>
                      <span className={`badge-${skill.badge}`}>
                        {category.toLowerCase()}
                      </span>
                    </div>
                    <p className="text-muted text-sm">{skill.description}</p>
                    <div className="mt-4 flex items-center text-cyan text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      View docs →
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 glass-panel p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="metric text-cyan">{allSkills.length}</div>
              <div className="metric-label">Total Skills</div>
            </div>
            <div>
              <div className="metric text-mint">{Object.keys(skillCategories).length}</div>
              <div className="metric-label">Categories</div>
            </div>
            <div>
              <div className="metric text-violet">5</div>
              <div className="metric-label">Badge Types</div>
            </div>
            <div>
              <div className="metric text-amber">100%</div>
              <div className="metric-label">Customizable</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}