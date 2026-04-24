import Navigation from '@/components/Navigation';

export default function Love() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Etsy Shop Owner",
      quote: "Heyron has completely transformed how I manage my business. My AI assistant handles customer inquiries and helps with product listings!"
    },
    {
      name: "James L.",
      role: "Software Developer",
      quote: "Finally an AI solution that respects my privacy. The ability to run it on my own server is a game-changer."
    },
    {
      name: "Emily R.",
      role: "Content Creator",
      quote: "My Heyron agent helps me brainstorm content ideas and schedules posts. It's like having a personal assistant 24/7."
    },
    {
      name: "Michael T.",
      role: "Entrepreneur",
      quote: "The community support in The Den is incredible. Whenever I have a question, someone is always there to help."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-6">Love from the Community 💙</h1>
        <p className="text-xl text-slate-400 mb-8">
          See what Heyron users are saying about their experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <p className="text-slate-300 italic mb-4">"{testimonial.quote}"</p>
              <div className="border-t border-slate-700 pt-4">
                <h3 className="font-bold text-white">{testimonial.name}</h3>
                <p className="text-cyan-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Share your Heyron story!</p>
          <a 
            href="mailto:love@heyron.ai"
            className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors"
          >
            Submit Testimonial →
          </a>
        </div>
      </main>
    </div>
  );
}