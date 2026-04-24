'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

const tutorials = [
  // 🚀 Start Here
  { category: 'Start Here', title: 'What Your Agent Can (and Can\'t) Do', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/what-your-agent-can-do.html', description: 'Set your expectations right. Everything your agent can do out of the box.' },
  { category: 'Start Here', title: 'Overwhelmed in Week 1? A No-Tech First Win Plan', duration: '5 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/first-week-with-agent-no-tech-background.html', description: 'A practical 90-minute workflow for non-technical users to get one real result fast.' },
  { category: 'Start Here', title: 'Your First SOUL.md — Give Your Agent a Personality', duration: '5 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/your-first-soul-md.html', description: 'Give your agent a name, a voice, and a personality with ready-to-use templates.' },
  { category: 'Start Here', title: 'API Keys & Models — Choosing Your Agent\'s Brain', duration: '5 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/api-keys-and-models.html', description: 'What models are, what they cost, how to get API keys, and which model is right for you.' },
  
  // 🔌 Connect Your Agent
  { category: 'Connect Your Agent', title: 'Connect Your Agent to Discord', duration: '10 min', level: 'Intermediate', url: 'https://heyron-ai.github.io/agent-library/tutorials/connect-discord.html', description: 'Talk to your AI agent from any Discord server.' },
  { category: 'Connect Your Agent', title: 'Connect Your Agent to Telegram', duration: '5 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/connect-telegram.html', description: 'Set up your agent on Telegram in under 5 minutes.' },
  { category: 'Connect Your Agent', title: 'Connect Your Agent to Google Chat', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/google-chat-agent-setup.html', description: 'Add your heyron agent to Google Chat spaces.' },
  { category: 'Connect Your Agent', title: 'Run OpenClaw Locally', duration: '5 min', level: 'Intermediate', url: 'https://heyron-ai.github.io/agent-library/tutorials/run-openclaw-locally.html', description: 'A practical first-run guide for local OpenClaw setup.' },
  { category: 'Connect Your Agent', title: 'Set Up ElevenLabs Voice', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/elevenlabs-voice-setup.html', description: 'Configure voice for your agent.' },
  { category: 'Connect Your Agent', title: 'Send Voice Messages in Telegram', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/telegram-voice-messages-with-elevenlabs.html', description: 'Fix text-only Telegram replies with voice.' },
  
  // 🧠 Understand Your Agent
  { category: 'Understand Your Agent', title: 'How Agent Memory Works', duration: '5 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/how-memory-works.html', description: 'Why your agent "forgets" things and how to make important things stick.' },
  { category: 'Understand Your Agent', title: 'What Does My Agent Know About Me?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/what-does-my-agent-know-about-me.html', description: 'A simple privacy audit flow to verify what your agent can access.' },
  { category: 'Understand Your Agent', title: 'Is It Safe to Paste Client Data?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/is-it-safe-to-paste-client-data.html', description: 'A redaction-first workflow to protect client information.' },
  
  // 🛠️ How-To & Reference
  { category: 'How-To & Reference', title: 'Working with Files', duration: '3 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/working-with-files.html', description: 'Where file attachments work and workarounds for images and documents.' },
  { category: 'How-To & Reference', title: 'Prompting Your Agent Like a Pro', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/prompting-your-agent-like-a-pro.html', description: 'A practical guide to getting better outputs with a 4-part prompt formula.' },
  { category: 'How-To & Reference', title: 'How to Use Sub-Agents', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/how-to-use-sub-agents.html', description: 'Delegate work safely with a manager+workers pattern.' },
  { category: 'How-To & Reference', title: 'Your Dashboard — Every Button Explained', duration: '10 min', level: 'All', url: 'https://heyron-ai.github.io/agent-library/tutorials/dashboard-guide.html', description: 'Complete guide to the OpenClaw Control UI.' },
  
  // 🩹 Troubleshooting
  { category: 'Troubleshooting', title: 'Agent Burning Too Many Tokens?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/agent-burning-too-many-tokens.html', description: 'A practical workflow to reduce token burn fast.' },
  { category: 'Troubleshooting', title: 'Updated File But Agent Uses Old Version?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/updated-file-but-agent-uses-old-version.html', description: 'Fix stale-file confusion with versioning workflow.' },
  { category: 'Troubleshooting', title: 'Why Your Agent Gets Worse in Long Chats', duration: '6 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/long-chats-and-lost-work.html', description: 'Session length, bloated chats, and how to keep progress safe.' },
  { category: 'Troubleshooting', title: 'Context Limit Exceeded?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/context-limit-exceeded.html', description: 'Recover fast from oversized prompt failures.' },
  { category: 'Troubleshooting', title: 'Agent Feels Slow or Stuck?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/agent-feels-slow-or-stuck.html', description: 'A fast diagnostic checklist for laggy replies.' },
  { category: 'Troubleshooting', title: 'Seeing a 502 Error?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/fix-502-agent-not-loading.html', description: 'A practical recovery checklist for 502 failures.' },
  { category: 'Troubleshooting', title: 'My Agent Replies to Everything', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/my-agent-replies-to-everything.html', description: 'Stop over-chatty behavior in Discord.' },
  { category: 'Troubleshooting', title: 'Dashboard Blank Screen?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/dashboard-blank-screen.html', description: 'Quick isolation flow for blank dashboard pages.' },
  { category: 'Troubleshooting', title: 'Approval Required?', duration: '4 min', level: 'Beginner', url: 'https://heyron-ai.github.io/agent-library/tutorials/approval-required-explained.html', description: 'What approval prompts mean and when to approve.' },
];

const categories = [...new Set(tutorials.map(t => t.category))];

export default function Tutorials() {
  const [search, setSearch] = useState('');
  
  const filtered = tutorials.filter(t => {
    const q = search.toLowerCase();
    return t.title.toLowerCase().includes(q) || 
           t.description.toLowerCase().includes(q) ||
           t.category.toLowerCase().includes(q);
  });

  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = filtered.filter(t => t.category === cat);
    return acc;
  }, {} as Record<string, typeof tutorials>);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Tutorials Library</h1>
        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          📚 {tutorials.length} tutorials · Step-by-step guides to get the most out of your AI agent.
        </p>

        {/* Search */}
        <div className="glass-panel p-4 mb-8">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-void border border-border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-cyan focus:outline-none"
            style={{ fontFamily: 'var(--font-mono)' }}
          />
          {search && (
            <p className="text-slate-400 mt-2 text-sm">
              {filtered.length} tutorial{filtered.length !== 1 ? 's' : ''} match{filtered.length !== 1 ? '' : 'es'} "{search}"
            </p>
          )}
        </div>

        {/* Tutorial Categories */}
        {Object.entries(grouped).map(([category, items]) => (
          items.length > 0 && (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)' }}>
                {category === 'Start Here' && '🚀'}
                {category === 'Connect Your Agent' && '🔌'}
                {category === 'Understand Your Agent' && '🧠'}
                {category === 'How-To & Reference' && '🛠️'}
                {category === 'Troubleshooting' && '🩹'}
                {category}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {items.map((tutorial, i) => (
                  <a
                    key={i}
                    href={tutorial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-4 hover:border-cyan/30 transition-all duration-300"
                  >
                    <h3 className="font-bold text-white mb-1">{tutorial.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{tutorial.description}</p>
                    <div className="flex items-center gap-3 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                      <span className="text-cyan">⏱ {tutorial.duration}</span>
                      <span className={tutorial.level === 'Beginner' ? 'text-mint' : tutorial.level === 'Intermediate' ? 'text-amber' : 'text-violet'}>
                        {tutorial.level}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )
        ))}

        {filtered.length === 0 && (
          <div className="glass-panel p-8 text-center">
            <p className="text-slate-400 text-lg">No tutorials matched that search.</p>
            <p className="text-slate-500 text-sm mt-2">Try a broader keyword like Discord, memory, or files.</p>
          </div>
        )}

        {/* Original Library Link */}
        <div className="mt-12 glass-panel p-6 text-center">
          <p className="text-slate-300 mb-4">
            This is just a preview. The full library has 123+ tutorials with personas and skills.
          </p>
          <a 
            href="https://heyron-ai.github.io/agent-library/tutorials/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View Full Library →
          </a>
        </div>
      </main>
    </div>
  );
}