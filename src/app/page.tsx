import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="text-center px-6 py-12 md:py-16">
          <div className="max-w-xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border text-text-secondary text-sm mb-7" style={{backgroundColor: '#182230'}}>
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              Over 1,000 early adopters
            </div>
            
            {/* Mascot/Logo */}
            <img 
              src="https://heyron.ai/icon.png" 
              alt="Heyron" 
              className="w-20 h-20 mx-auto mb-6 rounded-xl border-2 border-border"
            />
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              An AI that actually <span className="text-accent">does things.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Not suggestions. Not chat. <strong className="text-white font-semibold">Real work.</strong> You ask, it does it. And it remembers everything.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a href="#demo" className="btn-secondary">
                See the Community
              </a>
              <a href="/signup" className="btn-primary">
                Get Started · $29/mo
              </a>
            </div>
            
            <p className="text-text-muted text-sm mb-6">
              No setup. No code. Ready in 2 minutes.
            </p>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-3 text-text-muted text-sm">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-raccoon-mid border-2 border-bg-primary flex items-center justify-center text-white text-xs font-semibold">JD</div>
                <div className="w-7 h-7 rounded-full bg-raccoon-mid border-2 border-bg-primary flex items-center justify-center text-white text-xs font-semibold">MK</div>
                <div className="w-7 h-7 rounded-full bg-raccoon-mid border-2 border-bg-primary flex items-center justify-center text-white text-xs font-semibold">AL</div>
                <div className="w-7 h-7 rounded-full bg-raccoon-mid border-2 border-bg-primary flex items-center justify-center text-white text-xs font-semibold">+</div>
              </div>
              <span>1,000+ early adopters</span>
            </div>
          </div>
        </section>

        {/* Beta Notice */}
        <section className="px-6 py-2">
          <div className="max-w-xl mx-auto">
            <div className="bg-amber/10 border border-amber/30 rounded-xl p-5 flex gap-4 items-start">
              <div className="text-2xl">🚧</div>
              <div>
                <h3 className="text-amber font-bold text-sm mb-1">We&apos;re in beta</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Heyron is live and growing fast — but we&apos;re still building. You may hit rough edges, slow responses, or the occasional bug. That&apos;s the tradeoff: you get in early, at the ground floor, while we make it great. Our team fixes issues daily and your feedback shapes what we build next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="bg-bg-secondary px-6 py-16">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">How it works</h2>
            
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-raccoon-mid flex items-center justify-center text-white text-sm font-bold shrink-0">1</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Sign up and pick a name</h4>
                  <p className="text-text-secondary text-sm">Your AI gets a name you choose. Sign up and go.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-raccoon-mid flex items-center justify-center text-white text-sm font-bold shrink-0">2</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">We set up your private AI server</h4>
                  <p className="text-text-secondary text-sm">Your own dedicated instance. Private. Isolated. Just for you.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-raccoon-mid flex items-center justify-center text-white text-sm font-bold shrink-0">3</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Start talking in 2 minutes</h4>
                  <p className="text-text-secondary text-sm">No setup. No code. Just open the chat and go.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section - Stats */}
        <section id="demo" className="bg-bg-secondary px-6 py-16">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Your new friends are already here.</h2>
              <p className="text-text-secondary text-sm">A growing community of people building with AI agents — updated live.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 text-center">
                <div className="text-4xl font-extrabold text-accent mb-1">2,526+</div>
                <div className="text-text-secondary text-xs uppercase tracking-wide">Active Agents</div>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 text-center">
                <div className="text-4xl font-extrabold text-accent mb-1">2.1M+</div>
                <div className="text-text-secondary text-xs uppercase tracking-wide">Conversations</div>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 text-center">
                <div className="text-4xl font-extrabold text-accent mb-1">85,000/day</div>
                <div className="text-text-secondary text-xs uppercase tracking-wide">Messages</div>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 text-center">
                <div className="text-4xl font-extrabold text-accent mb-1">109.0B+</div>
                <div className="text-text-secondary text-xs uppercase tracking-wide">Tokens Processed</div>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 text-center">
                <div className="text-4xl font-extrabold text-accent mb-1">56 days</div>
                <div className="text-text-secondary text-xs uppercase tracking-wide">Since Launch</div>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 text-center">
                <div className="text-4xl font-extrabold text-accent mb-1">47+</div>
                <div className="text-text-secondary text-xs uppercase tracking-wide">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-6 py-16">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Not just chat. Real work.</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <div className="text-2xl mb-3">🧠</div>
                <h4 className="text-white font-semibold mb-2">&quot;Remember my business idea from last week&quot;</h4>
                <p className="text-text-secondary text-sm">It does. Every conversation builds on the last. No copy-pasting context.</p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <div className="text-2xl mb-3">📁</div>
                <h4 className="text-white font-semibold mb-2">&quot;Research this and save it to my workspace&quot;</h4>
                <p className="text-text-secondary text-sm">Searches the web, writes a full report, saves the file. You download it.</p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <div className="text-2xl mb-3">🔒</div>
                <h4 className="text-white font-semibold mb-2">&quot;Here&apos;s my financial info — help me budget&quot;</h4>
                <p className="text-text-secondary text-sm">Your own private instance. Your data doesn&apos;t train any models. Share freely.</p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="text-white font-semibold mb-2">&quot;Build me a 30-day launch plan for my store&quot;</h4>
                <p className="text-text-secondary text-sm">Not bullet points. A real plan with timelines, tasks, and research behind it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Points Section */}
        <section className="bg-bg-secondary px-6 py-16">
          <div className="max-w-xl mx-auto">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">It&apos;s yours</h3>
                <p className="text-text-secondary text-sm">You name it. Your data stays yours. It learns your preferences, your style, how you work.</p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">It remembers</h3>
                <p className="text-text-secondary text-sm">Every conversation builds on the last. No repeating yourself. No starting over.</p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">It does work</h3>
                <p className="text-text-secondary text-sm">Not suggestions. Actual output. You ask, it does it, and saves the results to your workspace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-6 py-16">
          <div className="max-w-sm mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Simple pricing</h2>
              <p className="text-text-secondary text-sm">One plan. Your own AI.</p>
            </div>
            
            <div className="bg-gradient-to-b from-accent/10 to-bg-card border border-accent rounded-xl p-7 relative">
              <div className="absolute -top-3 right-4 bg-accent text-bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase">One Plan</div>
              <h3 className="text-lg font-semibold text-white mb-1">Monthly</h3>
              <div className="text-5xl font-extrabold text-white mb-1">$29<span className="text-text-muted text-base font-normal">/mo</span></div>
              <p className="text-text-secondary text-sm mb-5">Cancel anytime. No contracts.</p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Your own private AI instance
                </li>
                <li className="flex items-center gap-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Generous monthly usage
                </li>
                <li className="flex items-center gap-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Persistent memory across sessions
                </li>
                <li className="flex items-center gap-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Web search, file creation, real tools
                </li>
                <li className="flex items-center gap-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Private Discord community
                </li>
              </ul>
              
              <a href="/signup" className="btn-primary w-full">Get Yours · $29/mo</a>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="bg-bg-secondary px-6 py-16">
          <div className="max-w-sm mx-auto">
            <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#5865f2] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Private community included</h3>
              <p className="text-text-secondary text-sm mb-5">Every member gets access to our private Discord. 1,000+ people building with their own AI. Share what you&apos;re making, get help, see what others are doing.</p>
              <a href="/signup" className="btn-primary w-full max-w-xs" style={{ backgroundColor: '#5865f2' }}>Get Started</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Questions</h2>
            
            <div className="space-y-3">
              <details className="group bg-bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between w-full p-4 text-white font-semibold cursor-pointer">
                  How is this different from ChatGPT?
                  <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-text-secondary text-sm">
                  <p>ChatGPT is shared. Everyone talks to the same model, and it forgets you between sessions. This is your own private AI instance — it remembers every conversation, creates real files you can download, searches the web, and saves work to your personal workspace. It&apos;s not a chatbot. It&apos;s a worker.</p>
                </div>
              </details>
              
              <details className="group bg-bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between w-full p-4 text-white font-semibold cursor-pointer">
                  Can&apos;t I just use ChatGPT Plus and a notes app?
                  <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-text-secondary text-sm">
                  <p>You could. But you&apos;d spend your time copy-pasting context, re-explaining your situation, organizing files yourself, and hoping the AI remembers what you told it. With Heyron, context is automatic — your AI already knows your projects, your preferences, and your history. It picks up right where you left off.</p>
                </div>
              </details>
              
              <details className="group bg-bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between w-full p-4 text-white font-semibold cursor-pointer">
                  Do I need to be technical?
                  <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-text-secondary text-sm">
                  <p>No. You talk to it like a person. We handle all the infrastructure. You sign up, name your AI, and start chatting in under 2 minutes.</p>
                </div>
              </details>
              
              <details className="group bg-bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between w-full p-4 text-white font-semibold cursor-pointer">
                  Is my data private?
                  <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-text-secondary text-sm">
                  <p>Yes. Your instance is completely isolated on its own server. Your conversations and files don&apos;t train any models and aren&apos;t shared with anyone. It&apos;s just yours.</p>
                </div>
              </details>
              
              <details className="group bg-bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between w-full p-4 text-white font-semibold cursor-pointer">
                  What happens after I pay?
                  <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-text-secondary text-sm">
                  <p>We spin up your private AI in about 2 minutes. You name it, start a conversation, and you&apos;re off. You also get access to our private Discord community where other members share what they&apos;re building.</p>
                </div>
              </details>
              
              <details className="group bg-bg-card border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between w-full p-4 text-white font-semibold cursor-pointer">
                  Can I cancel?
                  <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-text-secondary text-sm">
                  <p>Anytime. No contracts. You can manage your subscription and export your data at heyron.ai/account.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="https://heyron.ai/icon.png" alt="Heyron" className="w-6 h-6 rounded" />
              <span className="text-text-secondary font-bold">heyron</span>
            </div>
            <div className="flex justify-center gap-5 mb-4">
              <a href="mailto:robby@heyron.ai" className="text-text-muted hover:text-text-secondary text-sm">Contact</a>
              <a href="https://heyron.ai/terms" className="text-text-muted hover:text-text-secondary text-sm">Privacy</a>
              <a href="https://heyron.ai/terms" className="text-text-muted hover:text-text-secondary text-sm">Terms</a>
            </div>
            <p className="text-text-muted text-xs">© 2026 Heyron. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}