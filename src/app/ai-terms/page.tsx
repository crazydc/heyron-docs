import Navigation from '@/components/Navigation';

export default function AITerms() {
  const terms = [
    { term: "AI Model", definition: "The underlying AI brain that powers your agent (e.g., Claude, GPT-4, Kimi)" },
    { term: "Personality File", definition: "A configuration file that defines your agent's character, tone, and knowledge" },
    { term: "Memory", definition: "Your agent's ability to remember past conversations and information" },
    { term: "Nerve", definition: "The Heyron dashboard where you configure and manage your agent" },
    { term: "The Den", definition: "The Heyron community Discord server" },
    { term: "Agent", definition: "Your personal AI assistant that runs on your private server" },
    { term: "Prompt", definition: "Instructions you give to your AI agent to perform tasks" },
    { term: "Token", definition: "A measure of text processed by the AI (used for billing and context)" },
    { term: "API", definition: "Application Programming Interface - how your agent connects to external services" },
    { term: "Webhook", definition: "Automated messages sent from one app to another" }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">AI Terms & Tools</h1>
        <p className="text-xl text-slate-400 mb-8">
          Glossary of terms and tools used in the Heyron ecosystem.
        </p>

        <div className="grid gap-4">
          {terms.map((item, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <h3 className="font-bold text-cyan-400">{item.term}</h3>
              <p className="text-slate-300 mt-1">{item.definition}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}