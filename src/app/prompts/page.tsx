import Navigation from '@/components/Navigation';
import CodeBlock from '@/components/CodeBlock';

export default function Prompts() {
  const promptExamples = [
    {
      title: "Make a Google Sheet",
      prompt: `I need a monthly budget tracker spreadsheet. Give me:
1. Column headers for: Date, Category, Description, Amount, Running Total
2. A list of common budget categories (rent, groceries, utilities, etc.)
3. The formulas I need for the Running Total column
4. Step-by-step instructions for setting this up in Google Sheets`
    },
    {
      title: "Organize Your Inbox",
      prompt: `I'm drowning in emails. Help me create an email management system:
1. Give me 5-6 folder/label categories that work for most people
2. Write rules I can set up in Gmail to auto-sort emails
3. Give me a 10-minute daily email routine I can follow
4. Write a template response for emails I get often but don't have time to answer`
    },
    {
      title: "Set Up Reminders",
      prompt: `I need to remember these recurring tasks:
1. Team meeting every Monday at 10am
2. Weekly check-in with my boss Friday at 4pm
3. Gym 3x per week (Mon, Wed, Fri) at 6am
4. Review my goals every Sunday evening

Help me create a scheduling system and set reminders in my calendar.`
    },
    {
      title: "Write Social Media Content",
      prompt: `Write 5 social media posts for Twitter about [topic].
The tone should be professional/casual/humorous.
Include hashtags that are specific/broad/trending.
The posts should educate/entertain/sell/build community.`
    },
    {
      title: "Get Writing Help",
      prompt: `I need to write [email/post/article] about [topic].
The audience is [describe them].
The goal is [what should it accomplish].
Tone should be formal/casual/friendly.
Length: short/medium/detailed.
Please write it in a way that [any special instructions].`
    },
    {
      title: "Explain Something Complex",
      prompt: `Explain [complex topic] to me.
I have [no technical knowledge/some background/expert level] understanding.
Use [analogies/examples/visuals] to help me understand.
Focus on [specific aspect] most of all.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Prompts & Templates</h1>
        <p className="text-xl text-slate-400 mb-8">
          Real tasks, real instructions. Copy these prompts into your agent's chat and watch it work.
        </p>

        <div className="space-y-8">
          {promptExamples.map((example, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">{example.title}</h3>
              <CodeBlock code={example.prompt} language="bash" />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tips for Effective Prompts</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Be specific about what you want the output to include</li>
          <li>Break complex tasks into numbered steps</li>
          <li>Include context about your role or industry</li>
          <li>Specify tone (formal, casual, friendly)</li>
          <li>Mention any constraints or requirements</li>
        </ul>
      </main>
    </div>
  );
}