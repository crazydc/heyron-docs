import Navigation from '@/components/Navigation';

export default function MeetRobby() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Meet Robby</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            Robby is the founder and creator of Heyron. He's passionate about making AI accessible to everyone.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Story</h2>
          <p className="text-slate-300">
            Robby built Heyron because he believed that everyone should have access to their own personal AI assistant — one that truly understands them and respects their privacy. Unlike the big AI companies that treat your data as a product, Heyron puts you in control.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mission</h2>
          <p className="text-slate-300">
            To democratize AI by giving every person their own private, customizable AI agent that learns and grows with them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Get in Touch</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>📧 Email: robby@heyron.ai</li>
            <li>💬 Discord: The Den (Ron's Office channel)</li>
            <li>🐦 Twitter: @heyronai</li>
          </ul>
        </div>
      </main>
    </div>
  );
}