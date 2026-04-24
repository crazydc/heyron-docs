import Navigation from '@/components/Navigation';

export default function WhatIsHeyron() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">What Is Heyron?</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            Heyron gives you your own personal AI assistant. Think of it like Siri or Alexa — except this one is yours. 
            You decide its personality, what it knows, how it talks, and what it helps you with.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Your Private AI Agent</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>It's not a shared chatbot — it runs on your own private server</li>
            <li>Your conversations, your data, your rules — nobody else sees it</li>
            <li>You can connect it to Discord, Telegram, email, or other apps</li>
            <li>Teach it to sound like you, help with your specific work, or just be a really good assistant</li>
            <li>You don't need to know how to code — if you can type a text message, you can use this</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Who Is This For?</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Want an AI that's actually yours — not shared with millions</li>
            <li>Need help writing, organizing, or thinking through problems</li>
            <li>Want your AI available in Discord, Telegram, email, or your own dashboard</li>
            <li>Don't want to worry about your data being sold or used to train other AIs</li>
            <li>Like the idea of a tool that learns who you are and helps better over time</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h3 className="font-bold text-white mb-2">🤖 Your Own AI</h3>
              <p className="text-slate-400 text-sm">Personalized to your needs, running on your private server</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h3 className="font-bold text-white mb-2">🔗 Multi-Platform</h3>
              <p className="text-slate-400 text-sm">Connect to Discord, Telegram, Email and more</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h3 className="font-bold text-white mb-2">🧠 Memory</h3>
              <p className="text-slate-400 text-sm">Long-term memory that remembers you and your preferences</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h3 className="font-bold text-white mb-2">🔒 Private & Secure</h3>
              <p className="text-slate-400 text-sm">Your data never trains other AI models</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}