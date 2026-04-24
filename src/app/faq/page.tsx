import Navigation from '@/components/Navigation';

export default function FAQ() {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How much does Heyron cost?",
          a: "Heyron costs $29/month. This gives you your own private AI agent on your own server."
        },
        {
          q: "Do I need to know how to code?",
          a: "No! If you can type a text message, you can use Heyron. The setup process is designed to be beginner-friendly."
        },
        {
          q: "How long does setup take?",
          a: "About 15 minutes from start to having a working AI agent."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "Is my data private?",
          a: "Yes. Your conversations and data are private. Heyron never uses your data to train other AI models."
        },
        {
          q: "Where does my data live?",
          a: "Your agent runs on your own private server. You have full control over your data."
        },
        {
          q: "Can Heyron access my files?",
          a: "Only if you explicitly connect it to services like Google Drive or give it access to specific folders."
        }
      ]
    },
    {
      category: "Features",
      questions: [
        {
          q: "What platforms can I connect to?",
          a: "Discord, Telegram, Email, and more. You can connect multiple platforms simultaneously."
        },
        {
          q: "Can I customize my agent's personality?",
          a: "Absolutely! You can define who your agent is, how it talks, and what it knows about you."
        },
        {
          q: "Can I switch AI models?",
          a: "Yes. You can switch between different models (Claude, GPT-4, Kimi, etc.) anytime from your dashboard."
        }
      ]
    },
    {
      category: "Billing",
      questions: [
        {
          q: "How do I cancel my subscription?",
          a: "You can cancel anytime from your dashboard at your-name.c1.heyron.ai"
        },
        {
          q: "Is there a free trial?",
          a: "Currently there's no free trial, but you can cancel anytime if it doesn't work for you."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h1>
        
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => (
                <div key={qIndex} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">Q: {item.q}</h3>
                  <p className="text-slate-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}