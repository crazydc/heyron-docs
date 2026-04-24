import Navigation from '@/components/Navigation';

export default function Resources() {
  const resources = [
    { title: "Heyron Official Site", url: "https://heyron.ai", description: "Main product website" },
    { title: "The Den Discord", url: "https://discord.gg/heyron", description: "Community support" },
    { title: "GitHub", url: "https://github.com/heyronai", description: "Developer resources" },
    { title: "Twitter", url: "https://twitter.com/heyronai", description: "Latest updates" },
    { title: "YouTube", url: "https://youtube.com/@heyronai", description: "Video tutorials" }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Resources</h1>
        <p className="text-xl text-slate-400 mb-8">
          External links and learning resources.
        </p>

        <div className="grid gap-4">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-500 transition-colors"
            >
              <h3 className="font-bold text-white">{resource.title}</h3>
              <p className="text-slate-400 text-sm">{resource.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}