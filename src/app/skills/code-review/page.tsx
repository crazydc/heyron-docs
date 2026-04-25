import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CodeReview() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/skills" className="text-cyan hover:underline">← Back to Skills</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Code Review</h1>
        <span className="badge-cyan mb-8">Skill</span>
        <span className="text-slate-400 ml-4">Thorough & constructive</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Thorough, constructive code reviews that help you write better software.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">What It Does</h2>
          <ul className="space-y-2 text-slate-300 mb-6">
            <li>• Reviews code for bugs and edge cases</li>
            <li>• Checks for security vulnerabilities</li>
            <li>• Suggests performance improvements</li>
            <li>• Ensures code follows best practices</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
          <pre className="p-4 bg-void border border-border rounded-lg text-sm text-slate-300 mb-6 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
{`# Install the code-review skill
Tell your agent: "Install the code-review skill from the agent library"`}
          </pre>

          <h2 className="text-2xl font-bold text-white mb-4">Usage Examples</h2>
          <div className="bg-panel border border-border rounded-lg p-4 mb-4">
            <p className="text-slate-300 font-mono text-sm">"Review this function for memory leaks"</p>
          </div>
          <div className="bg-panel border border-border rounded-lg p-4">
            <p className="text-slate-300 font-mono text-sm">"Check this PR for security issues"</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/skills/human-writing" className="btn-primary">
            Next: Human Writing →
          </Link>
        </div>
      </main>
    </div>
  );
}