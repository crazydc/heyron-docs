'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

const tutorials = [
  // 🚀 Start Here
  { category: 'Start Here', title: 'What Your Agent Can (and Can\'t) Do', duration: '4 min', level: 'Beginner', tags: ['basics', 'expectations'], slug: 'what-your-agent-can-do', description: 'Set your expectations right. Everything your agent can do out of the box.' },
  { category: 'Start Here', title: 'Overwhelmed in Week 1? A No-Tech First Win Plan', duration: '5 min', level: 'Beginner', tags: ['beginners', 'quickstart'], slug: 'first-week-no-tech', description: 'A practical 90-minute workflow for non-technical users to get one real result fast.' },
  { category: 'Start Here', title: 'Your First SOUL.md — Give Your Agent a Personality', duration: '5 min', level: 'Beginner', tags: ['personality', 'memory'], slug: 'first-soul-md', description: 'Give your agent a name, a voice, and a personality with ready-to-use templates.' },
  { category: 'Start Here', title: 'API Keys & Models — Choosing Your Agent\'s Brain', duration: '5 min', level: 'Beginner', tags: ['models', 'api'], slug: 'api-keys-models', description: 'What models are, what they cost, how to get API keys, and which model is right for you.' },
  { category: 'Start Here', title: 'Agent Burning Too Many Tokens?', duration: '4 min', level: 'Beginner', tags: ['tokens', 'optimization'], slug: 'burning-tokens', description: 'A practical workflow to reduce token burn fast.' },
  
  // 🔌 Connect Your Agent
  { category: 'Connect Your Agent', title: 'Connect Your Agent to Discord', duration: '10 min', level: 'Intermediate', tags: ['discord', 'chat'], slug: 'connect-discord', description: 'Talk to your AI agent from any Discord server.' },
  { category: 'Connect Your Agent', title: 'Connect Your Agent to Telegram', duration: '5 min', level: 'Beginner', tags: ['telegram', 'chat'], slug: 'connect-telegram', description: 'Set up your agent on Telegram in under 5 minutes.' },
  { category: 'Connect Your Agent', title: 'Connect Your Agent to Google Chat', duration: '4 min', level: 'Beginner', tags: ['google', 'chat'], slug: 'google-chat', description: 'Add your heyron agent to Google Chat spaces.' },
  { category: 'Connect Your Agent', title: 'Run OpenClaw Locally', duration: '5 min', level: 'Intermediate', tags: ['local', 'setup'], slug: 'run-locally', description: 'A practical first-run guide for local OpenClaw setup.' },
  { category: 'Connect Your Agent', title: 'Set Up ElevenLabs Voice', duration: '4 min', level: 'Beginner', tags: ['voice', 'elevenlabs'], slug: 'elevenlabs-voice', description: 'Configure voice for your agent.' },
  { category: 'Connect Your Agent', title: 'Send Voice Messages in Telegram', duration: '4 min', level: 'Beginner', tags: ['voice', 'telegram'], slug: 'telegram-voice', description: 'Fix text-only Telegram replies with voice.' },
  { category: 'Connect Your Agent', title: 'Chrome Extension Remote Gateway', duration: '4 min', level: 'Intermediate', tags: ['chrome', 'remote'], slug: 'chrome-remote', description: 'Setup for remote browser control.' },
  
  // 🧠 Understand Your Agent
  { category: 'Understand Your Agent', title: 'How Agent Memory Works', duration: '5 min', level: 'Beginner', tags: ['memory', 'concepts'], slug: 'memory-works', description: 'Why your agent "forgets" things and how to make important things stick.' },
  { category: 'Understand Your Agent', title: 'What Does My Agent Know About Me?', duration: '4 min', level: 'Beginner', tags: ['privacy', 'security'], slug: 'privacy-audit', description: 'A simple privacy audit flow to verify what your agent can access.' },
  { category: 'Understand Your Agent', title: 'Is It Safe to Paste Client Data?', duration: '4 min', level: 'Beginner', tags: ['privacy', 'security'], slug: 'client-data', description: 'A redaction-first workflow to protect client information.' },
  { category: 'Understand Your Agent', title: 'Agent Shared Private Info in Group Chat?', duration: '4 min', level: 'Beginner', tags: ['privacy', 'discord'], slug: 'private-info-group', description: 'Containment and prevention for accidental data leakage.' },
  
  // 🛠️ How-To & Reference
  { category: 'How-To & Reference', title: 'Working with Files', duration: '3 min', level: 'Beginner', tags: ['files', 'media'], slug: 'working-with-files', description: 'Where file attachments work and workarounds for images and documents.' },
  { category: 'How-To & Reference', title: 'Prompting Your Agent Like a Pro', duration: '4 min', level: 'Beginner', tags: ['prompts', 'tips'], slug: 'prompting-pro', description: 'A practical guide to getting better outputs with a 4-part prompt formula.' },
  { category: 'How-To & Reference', title: 'How to Use Sub-Agents', duration: '4 min', level: 'Beginner', tags: ['subagents', 'advanced'], slug: 'sub-agents', description: 'Delegate work safely with a manager+workers pattern.' },
  { category: 'How-To & Reference', title: 'Your Dashboard — Every Button Explained', duration: '10 min', level: 'All', tags: ['dashboard', 'reference'], slug: 'dashboard-guide', description: 'Complete guide to the OpenClaw Control UI.' },
  { category: 'How-To & Reference', title: 'Stop File Chaos with BEST_PRACTICES.md', duration: '4 min', level: 'Beginner', tags: ['files', 'organization'], slug: 'file-best-practices', description: 'Use a single source-of-truth file workflow.' },
  
  // 🩹 Troubleshooting
  { category: 'Troubleshooting', title: 'Updated File But Agent Uses Old Version?', duration: '4 min', level: 'Beginner', tags: ['files', 'memory'], slug: 'old-version', description: 'Fix stale-file confusion with versioning workflow.' },
  { category: 'Troubleshooting', title: 'Why Your Agent Gets Worse in Long Chats', duration: '6 min', level: 'Beginner', tags: ['memory', 'context'], slug: 'long-chats', description: 'Session length, bloated chats, and how to keep progress safe.' },
  { category: 'Troubleshooting', title: 'Context Limit Exceeded?', duration: '4 min', level: 'Beginner', tags: ['context', 'errors'], slug: 'context-limit', description: 'Recover fast from oversized prompt failures.' },
  { category: 'Troubleshooting', title: 'Agent Feels Slow or Stuck?', duration: '4 min', level: 'Beginner', tags: ['performance', 'debugging'], slug: 'slow-stuck', description: 'A fast diagnostic checklist for laggy replies.' },
  { category: 'Troubleshooting', title: 'Seeing a 502 Error?', duration: '4 min', level: 'Beginner', tags: ['errors', 'server'], slug: '502-error', description: 'A practical recovery checklist for 502 failures.' },
  { category: 'Troubleshooting', title: 'My Agent Replies to Everything', duration: '4 min', level: 'Beginner', tags: ['discord', 'behavior'], slug: 'replies-everything', description: 'Stop over-chatty behavior in Discord.' },
  { category: 'Troubleshooting', title: 'Dashboard Blank Screen?', duration: '4 min', level: 'Beginner', tags: ['dashboard', 'debugging'], slug: 'blank-screen', description: 'Quick isolation flow for blank dashboard pages.' },
  { category: 'Troubleshooting', title: 'Approval Required?', duration: '4 min', level: 'Beginner', tags: ['approval', 'security'], slug: 'approval-required', description: 'What approval prompts mean and when to approve.' },
  { category: 'Troubleshooting', title: 'Approval Keeps Coming Back?', duration: '4 min', level: 'Beginner', tags: ['approval', 'debugging'], slug: 'approval-loop', description: 'Fix repeated approval loops.' },
  { category: 'Troubleshooting', title: 'Chat Works, But Tools Don\'t Run?', duration: '4 min', level: 'Beginner', tags: ['tools', 'debugging'], slug: 'tools-not-running', description: 'Fix execution-layer freeze loops.' },
  { category: 'Troubleshooting', title: 'Used /new and Now Your Bot Won\'t Respond?', duration: '4 min', level: 'Beginner', tags: ['discord', 'reset'], slug: 'new-not-responding', description: 'Fast recovery flow for post-reset silence.' },
  { category: 'Troubleshooting', title: 'Discord Slash Commands Missing?', duration: '4 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'slash-missing', description: 'Recovery checklist for when "/" commands don\'t appear.' },
  { category: 'Troubleshooting', title: 'Agent Can\'t Read Discord Channels?', duration: '4 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'discord-channels', description: 'Fix guild/channel ID mixups.' },
  { category: 'Troubleshooting', title: 'Bot Can Read But Can\'t Reply in Discord?', duration: '4 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'discord-cant-reply', description: 'Isolate send-permission issues.' },
  { category: 'Troubleshooting', title: 'Discord Bot Typing... Then Nothing?', duration: '4 min', level: 'Beginner', tags: ['discord', 'debugging'], slug: 'typing-nothing', description: 'Fix typing-then-silent loop.' },
  { category: 'Troubleshooting', title: 'Where Did My Files Go?', duration: '4 min', level: 'Beginner', tags: ['files', 'debugging'], slug: 'files-missing', description: 'Find missing outputs and verify write location.' },
  { category: 'Troubleshooting', title: 'Agent Says "Permission Denied" Saving Files?', duration: '4 min', level: 'Beginner', tags: ['files', 'permissions'], slug: 'permission-denied', description: 'Fix write-failure loops.' },
  { category: 'Troubleshooting', title: 'Agent Deleted Files by Mistake?', duration: '4 min', level: 'Beginner', tags: ['files', 'recovery'], slug: 'deleted-files', description: 'Contain damage and recover safely.' },
  { category: 'Troubleshooting', title: 'Agent Keeps Asking the Same Question?', duration: '4 min', level: 'Beginner', tags: ['behavior', 'debugging'], slug: 'same-question', description: 'Break repeated clarifying-question loops.' },
  { category: 'Troubleshooting', title: 'Heartbeat Keeps Repeating Old Tasks?', duration: '4 min', level: 'Beginner', tags: ['heartbeat', 'automation'], slug: 'heartbeat-repeat', description: 'Fix repetitive heartbeat behavior.' },
  { category: 'Troubleshooting', title: 'Is This a Different Bot? (DM vs Channel)', duration: '4 min', level: 'Beginner', tags: ['discord', 'context'], slug: 'different-bot', description: 'Fix confusion where DM works but server feels different.' },
  { category: 'Troubleshooting', title: 'Dashboard vs Discord: Why Context Doesn\'t Carry', duration: '4 min', level: 'Beginner', tags: ['discord', 'memory'], slug: 'context-no-carry', description: 'Fix "it forgot everything" confusion.' },
  { category: 'Troubleshooting', title: 'Did I Create a Second Agent by Accident?', duration: '4 min', level: 'Beginner', tags: ['identity', 'debugging'], slug: 'second-agent', description: 'Verify when bot name or settings look wrong.' },
];

const categories = [...new Set(tutorials.map(t => t.category))];
const allTags = [...new Set(tutorials.flatMap(t => t.tags))].sort();

export default function Tutorials() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const filtered = tutorials.filter(t => {
    const q = search.toLowerCase();
    const matchesSearch = !q || t.title.toLowerCase().includes(q) || 
           t.description.toLowerCase().includes(q) ||
           t.category.toLowerCase().includes(q);
    const matchesCategory = !selectedCategory || t.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => t.tags.includes(tag));
    return matchesSearch && matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Tutorials Library</h1>
        <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
          📚 {tutorials.length} tutorials · Step-by-step guides to get the most out of your AI agent.
        </p>

        {/* Search */}
        <div className="glass-panel p-4 mb-6">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-void border border-border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-cyan focus:outline-none"
            style={{ fontFamily: 'var(--font-mono)' }}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === null 
                ? 'bg-cyan text-void' 
                : 'bg-surface text-slate-300 hover:bg-panel'
            }`}
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-cyan text-void' 
                  : 'bg-surface text-slate-300 hover:bg-panel'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {cat === 'Start Here' && '🚀'} {cat}
            </button>
          ))}
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-slate-500 text-sm self-center mr-2">Tags:</span>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${
                selectedTags.includes(tag)
                  ? 'bg-violet text-white'
                  : 'bg-surface/50 text-slate-400 hover:text-white'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {selectedTags.includes(tag) ? '✓' : '+'} {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="px-2 py-1 rounded-md text-xs text-crimson hover:bg-crimson/10"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Clear all
            </button>
          )}
        </div>

        {/* Results Count */}
        {(selectedCategory || selectedTags.length > 0 || search) && (
          <div className="mb-4 text-sm" style={{ color: 'var(--muted)' }}>
            Showing {filtered.length} of {tutorials.length} tutorials
            <button onClick={clearFilters} className="text-cyan ml-2 hover:underline">
              Reset filters
            </button>
          </div>
        )}

        {/* Tutorial Grid - INTERNAL LINKS */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {filtered.map((tutorial, i) => (
            <Link
              key={i}
              href={`/tutorials/${tutorial.slug}`}
              className="glass-panel p-4 hover:border-cyan/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white flex-1">{tutorial.title}</h3>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  tutorial.level === 'Beginner' ? 'bg-mint/20 text-mint' : 
                  tutorial.level === 'Intermediate' ? 'bg-amber/20 text-amber' : 'bg-violet/20 text-violet'
                }`}>
                  {tutorial.level}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-3">{tutorial.description}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-cyan text-xs" style={{ fontFamily: 'var(--font-mono)' }}>⏱ {tutorial.duration}</span>
                {tutorial.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs text-slate-500 bg-surface/50 px-1.5 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass-panel p-8 text-center mb-8">
            <p className="text-slate-400 text-lg">No tutorials matched your filters.</p>
            <button onClick={clearFilters} className="btn-primary mt-4">Clear Filters</button>
          </div>
        )}

        {/* Coming Soon Note */}
        <div className="glass-panel p-6 text-center">
          <p className="text-slate-300">
            📚 More tutorials being added regularly. {tutorials.length} tutorials currently available.
          </p>
        </div>
      </main>
    </div>
  );
}