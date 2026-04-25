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
  
  // ⚙️ Configuration
  { category: 'Configuration', title: 'Defining Agent Personality', duration: '5 min', level: 'Beginner', tags: ['personality', 'config'], slug: 'agent-personality', description: 'Give your AI agent a unique personality that matches your needs.' },
  { category: 'Configuration', title: 'Setting Communication Tone', duration: '4 min', level: 'Beginner', tags: ['tone', 'config'], slug: 'agent-tone', description: 'Configure how your agent communicates — casual to formal.' },
  { category: 'Configuration', title: 'Setting Agent Boundaries', duration: '5 min', level: 'Beginner', tags: ['limits', 'security', 'config'], slug: 'agent-limits', description: 'Define what your agent can and cannot do for safe operation.' },
  { category: 'Configuration', title: 'Adding Custom Skills', duration: '6 min', level: 'Intermediate', tags: ['skills', 'custom', 'advanced'], slug: 'agent-skills', description: 'Extend your agent with custom skills tailored to your needs.' },
  { category: 'Configuration', title: 'Installing Plugins', duration: '5 min', level: 'Intermediate', tags: ['plugins', 'integrations'], slug: 'plugin-install', description: 'Expand capabilities by installing plugins and integrations.' },
  { category: 'Configuration', title: 'Configuring Plugins', duration: '5 min', level: 'Intermediate', tags: ['plugins', 'config'], slug: 'plugin-config', description: 'Configure and customize installed plugins.' },
  { category: 'Configuration', title: 'Dark Mode Theme', duration: '3 min', level: 'Beginner', tags: ['theme', 'dark-mode', 'ui'], slug: 'theme-dark', description: 'Enable dark mode for comfortable viewing.' },
  { category: 'Configuration', title: 'Customizing Theme Colors', duration: '5 min', level: 'Beginner', tags: ['theme', 'colors', 'customize'], slug: 'theme-custom', description: 'Personalize your dashboard with custom colors.' },

  // 📊 Data Management
  { category: 'Data Management', title: 'Exporting Chat History', duration: '4 min', level: 'Beginner', tags: ['export', 'backup', 'data'], slug: 'export-chat', description: 'Save conversations for backup or analysis.' },
  { category: 'Data Management', title: 'Importing Data', duration: '5 min', level: 'Beginner', tags: ['import', 'data', 'migration'], slug: 'import-data', description: 'Import data, conversations, or configurations.' },

  // 🤖 AI Capabilities
  { category: 'AI Capabilities', title: 'Vision API Setup and Configuration', duration: '6 min', level: 'Beginner', tags: ['vision', 'ai', 'api'], slug: 'vision-api', description: 'Enable your agent to see and understand images using the Vision API.' },
  { category: 'AI Capabilities', title: 'Analyzing Images with Vision', duration: '5 min', level: 'Beginner', tags: ['vision', 'ai', 'images'], slug: 'vision-images', description: 'Learn how to get the most out of image analysis in your AI conversations.' },
  { category: 'AI Capabilities', title: 'Voice Input Setup Guide', duration: '5 min', level: 'Beginner', tags: ['voice', 'input', 'audio'], slug: 'voice-input-setup', description: 'Enable voice input so you can talk to your agent instead of typing.' },
  { category: 'AI Capabilities', title: 'Voice Output Configuration', duration: '6 min', level: 'Beginner', tags: ['voice', 'output', 'audio'], slug: 'voice-output-setup', description: 'Configure your agent to respond with voice messages instead of text.' },
  { category: 'AI Capabilities', title: 'Multi-Language Conversations', duration: '5 min', level: 'Beginner', tags: ['language', 'multilingual', 'translation'], slug: 'multilingual', description: 'Your agent can communicate in multiple languages.' },
  { category: 'AI Capabilities', title: 'Real-Time Translation', duration: '5 min', level: 'Beginner', tags: ['translation', 'language', 'realtime'], slug: 'translation-service', description: 'Use your agent as a real-time translator.' },
  { category: 'AI Capabilities', title: 'Generate Python Code', duration: '6 min', level: 'Beginner', tags: ['code', 'python', 'generation'], slug: 'code-gen-python', description: 'Your agent can write Python code for you.' },
  { category: 'AI Capabilities', title: 'Generate JavaScript Code', duration: '6 min', level: 'Beginner', tags: ['code', 'javascript', 'generation'], slug: 'code-gen-javascript', description: 'Your agent can write JavaScript code for Node.js, browsers, and frameworks.' },
  { category: 'AI Capabilities', title: 'Debug Code with Agent', duration: '6 min', level: 'Beginner', tags: ['code', 'debug', 'troubleshooting'], slug: 'code-debug', description: 'Paste your code and error messages to get help debugging.' },
  { category: 'AI Capabilities', title: 'Refactor Code Efficiently', duration: '5 min', level: 'Intermediate', tags: ['code', 'refactor', 'clean'], slug: 'code-refactor', description: 'Improve your code quality with cleaner, faster, more maintainable code.' },
  { category: 'AI Capabilities', title: 'Generate Python Tests', duration: '5 min', level: 'Beginner', tags: ['testing', 'python', 'pytest'], slug: 'test-py', description: 'Generate unit tests and integration tests for your Python code.' },
  { category: 'AI Capabilities', title: 'Generate JavaScript Tests', duration: '5 min', level: 'Beginner', tags: ['testing', 'javascript', 'jest'], slug: 'test-js', description: 'Generate tests for your JavaScript, TypeScript, React, and Node.js code.' },
  { category: 'AI Capabilities', title: 'Generate Markdown Docs', duration: '4 min', level: 'Beginner', tags: ['documentation', 'markdown', 'readme'], slug: 'doc-markdown', description: 'Your agent can create professional documentation in Markdown format.' },
  { category: 'AI Capabilities', title: 'Managing API Keys Securely', duration: '6 min', level: 'Beginner', tags: ['security', 'api', 'keys'], slug: 'api-keys', description: 'Learn how to store and manage API keys securely for your AI agent.' },
  { category: 'AI Capabilities', title: 'Debug Webhook Issues', duration: '5 min', level: 'Intermediate', tags: ['webhooks', 'debugging', 'api'], slug: 'webhook-debug', description: 'Diagnose and fix webhook-related problems with your agent.' },
  
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
  { category: 'Troubleshooting', title: 'Runtime Health 502 (Server Side)', duration: '4 min', level: 'Beginner', tags: ['errors', 'server'], slug: 'runtime-502', description: 'Fix 502 Bad Gateway errors when your agent tries to run.' },
  { category: 'Troubleshooting', title: 'Gateway Token Mismatch', duration: '4 min', level: 'Beginner', tags: ['auth', 'gateway'], slug: 'token-mismatch', description: 'Fix authentication token mismatches with the gateway.' },
  { category: 'Troubleshooting', title: 'Origin Not Allowed (Control UI)', duration: '4 min', level: 'Beginner', tags: ['cors', 'dashboard'], slug: 'origin-not-allowed', description: 'Fix CORS errors when accessing the Control UI.' },
  { category: 'Troubleshooting', title: 'Pairing Required / Unauthorized', duration: '4 min', level: 'Beginner', tags: ['auth', 'pairing'], slug: 'pairing-required', description: 'Fix device pairing and authorization issues.' },
  { category: 'Troubleshooting', title: 'Module 2: Agent Error (No Reply)', duration: '4 min', level: 'Beginner', tags: ['agent', 'module'], slug: 'module-error', description: 'Debug when your agent fails to respond.' },
  { category: 'Troubleshooting', title: '#help Moved? Where to Get Support Now', duration: '3 min', level: 'Beginner', tags: ['support', 'help'], slug: 'support-moved', description: 'Find where to get help when #help moves or disappears.' },
  { category: 'Troubleshooting', title: 'Agent Can\'t Read Discord Channels?', duration: '4 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'discord-channels', description: 'Fix guild/channel ID mixups.' },
  { category: 'Troubleshooting', title: 'Bot Can Read But Can\'t Reply in Discord?', duration: '4 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'discord-cant-reply', description: 'Isolate send-permission issues.' },
  { category: 'Troubleshooting', title: 'Where Did My Files Go?', duration: '4 min', level: 'Beginner', tags: ['files', 'debugging'], slug: 'files-missing', description: 'Find missing outputs and verify write location.' },
  { category: 'Troubleshooting', title: 'Agent Says "Permission Denied" Saving Files?', duration: '4 min', level: 'Beginner', tags: ['files', 'permissions'], slug: 'permission-denied', description: 'Fix write-failure loops.' },
  { category: 'Troubleshooting', title: 'Agent Deleted Files by Mistake?', duration: '4 min', level: 'Beginner', tags: ['files', 'recovery'], slug: 'deleted-files', description: 'Contain damage and recover safely.' },
  { category: 'Troubleshooting', title: 'Agent Keeps Asking the Same Question?', duration: '4 min', level: 'Beginner', tags: ['behavior', 'debugging'], slug: 'same-question', description: 'Break repeated clarifying-question loops.' },
  { category: 'Troubleshooting', title: 'Heartbeat Keeps Repeating Old Tasks?', duration: '4 min', level: 'Beginner', tags: ['heartbeat', 'automation'], slug: 'heartbeat-repeat', description: 'Fix repetitive heartbeat behavior.' },
  { category: 'Troubleshooting', title: 'Is This a Different Bot? (DM vs Channel)', duration: '4 min', level: 'Beginner', tags: ['discord', 'context'], slug: 'different-bot', description: 'Fix confusion where DM works but server feels different.' },
  { category: 'Troubleshooting', title: 'Dashboard vs Discord: Why Context Doesn\'t Carry', duration: '4 min', level: 'Beginner', tags: ['discord', 'memory'], slug: 'context-no-carry', description: 'Fix "it forgot everything" confusion.' },
  { category: 'Troubleshooting', title: 'Did I Create a Second Agent by Accident?', duration: '4 min', level: 'Beginner', tags: ['identity', 'debugging'], slug: 'second-agent', description: 'Verify when bot name or settings look wrong.' },
  { category: 'Troubleshooting', title: 'Agent Edited the Wrong File?', duration: '4 min', level: 'Beginner', tags: ['files', 'recovery'], slug: 'agent-edited-wrong-file', description: 'Oops. Your agent modified the wrong file. Here\'s how to recover and prevent it from happening again.' },
  { category: 'Troubleshooting', title: 'Agent Memory Growing Unbounded?', duration: '4 min', level: 'Beginner', tags: ['memory', 'performance'], slug: 'memory-leak', description: 'Your agent\'s memory keeps growing. Here\'s how to control it.' },
  { category: 'Troubleshooting', title: 'Tool Execution Timeout?', duration: '4 min', level: 'Beginner', tags: ['tools', 'performance'], slug: 'tool-timeout', description: 'A tool took too long to execute. Here\'s how to handle it.' },
  { category: 'Troubleshooting', title: 'Running Multiple Agents?', duration: '5 min', level: 'Intermediate', tags: ['multi-agent', 'setup'], slug: 'multi-agent', description: 'How to run and manage multiple agents in parallel.' },
  { category: 'Troubleshooting', title: 'Git Backup Failed?', duration: '4 min', level: 'Beginner', tags: ['git', 'backup'], slug: 'backup-fail', description: 'Your automatic Git backup isn\'t working. Let\'s fix it.' },
  { category: 'Troubleshooting', title: 'DNS Resolution Failing?', duration: '4 min', level: 'Beginner', tags: ['dns', 'network'], slug: 'dns-issue', description: 'Your agent can\'t resolve domain names. Let\'s get DNS working.' },
  { category: 'Troubleshooting', title: 'SSL Certificate Error?', duration: '4 min', level: 'Beginner', tags: ['ssl', 'security'], slug: 'ssl-error', description: 'Your agent is having trouble with SSL/TLS certificates.' },
  { category: 'Troubleshooting', title: 'Container Keeps Restarting?', duration: '5 min', level: 'Intermediate', tags: ['docker', 'containers'], slug: 'container-restart', description: 'Your Docker container keeps crashing in a loop.' },
  { category: 'Troubleshooting', title: 'Port Already in Use?', duration: '4 min', level: 'Beginner', tags: ['ports', 'network'], slug: 'port-conflict', description: 'Another process is using the port your agent needs.' },
  { category: 'Troubleshooting', title: 'Disk Space Full?', duration: '5 min', level: 'Beginner', tags: ['disk', 'storage'], slug: 'disk-full', description: 'Your server is out of disk space. Let\'s free up some room.' },
  { category: 'Troubleshooting', title: 'Upgrade Failed Mid-Way?', duration: '5 min', level: 'Beginner', tags: ['upgrade', 'update'], slug: 'upgrade-fail', description: 'Your OpenClaw upgrade didn\'t complete successfully.' },
  { category: 'Troubleshooting', title: 'Agent Says It Saw Your Image (But It Didn\'t)?', duration: '4 min', level: 'Beginner', tags: ['images', 'hallucination'], slug: 'image-hallucination', description: 'Image hallucination is when your agent describes details in an image that aren\'t there.' },
  { category: 'Troubleshooting', title: 'Starting Fresh Without Pasting Your Entire Old Chat', duration: '4 min', level: 'Beginner', tags: ['sessions', 'productivity'], slug: 'restart-fresh', description: 'You need a fresh session but don\'t want to re-type everything. Here\'s how to carry forward only what matters.' },
  { category: 'Troubleshooting', title: '"Meet [Agent]" Opened OpenClaw Dashboard?', duration: '3 min', level: 'Beginner', tags: ['dashboard', 'explanation'], slug: 'meet-agent', description: 'You clicked "Meet [Your Agent]" and ended up at the dashboard instead of a chat. Here\'s what\'s happening.' },
  { category: 'Troubleshooting', title: 'Discord Channel Access Not Working', duration: '4 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'discord-wrong-channel', description: 'Your bot can\'t see or access the Discord channel you want it to.' },
  { category: 'Troubleshooting', title: 'Discord Bot Typing... Then Nothing?', duration: '4 min', level: 'Beginner', tags: ['discord', 'debugging'], slug: 'typing-nothing', description: 'The bot shows typing but goes silent. Fix the typing-then-silent loop.' },
  { category: 'Troubleshooting', title: 'Discord Developer Says "Verify Email"', duration: '4 min', level: 'Beginner', tags: ['discord', 'developer'], slug: 'discord-email', description: 'Discord is blocking your bot application due to unverified email.' },
  { category: 'Troubleshooting', title: 'GitHub File Doesn\'t Match Workspace?', duration: '4 min', level: 'Beginner', tags: ['github', 'files'], slug: 'github-mismatch', description: 'You see a different version on GitHub than in your local workspace.' },
  { category: 'Troubleshooting', title: 'Discord Pin Action Failed?', duration: '3 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'discord-pin-fail', description: 'Your agent tried to pin a message in Discord but it failed. Here\'s how to fix it.' },
  { category: 'Troubleshooting', title: 'Mission Is On, But Agent Still Can\'t Pin?', duration: '4 min', level: 'Beginner', tags: ['discord', 'permissions'], slug: 'cant-pin', description: 'Your mission is enabled but the agent still can\'t pin messages. Let\'s debug this.' },
  { category: 'Troubleshooting', title: 'File Upload Size Limit?', duration: '3 min', level: 'Beginner', tags: ['files', 'limits'], slug: 'file-limit', description: 'Getting errors when uploading files? Here\'s how to work around file size limits.' },
  { category: 'Troubleshooting', title: 'Voice Message Timeout?', duration: '4 min', level: 'Beginner', tags: ['voice', 'timeout'], slug: 'voice-timeout', description: 'Voice messages taking too long or timing out? Here\'s how to fix it.' },
  { category: 'Troubleshooting', title: 'Scheduled Task Not Running?', duration: '4 min', level: 'Beginner', tags: ['cron', 'automation'], slug: 'cron-missing', description: 'Your cron job or scheduled task isn\'t firing. Let\'s get it running.' },
  { category: 'Troubleshooting', title: 'Webhook Not Triggering?', duration: '4 min', level: 'Beginner', tags: ['webhooks', 'automation'], slug: 'webhook-fail', description: 'Webhooks aren\'t firing when they should. Let\'s debug the trigger conditions.' },
  { category: 'Troubleshooting', title: 'API Rate Limit Hit?', duration: '4 min', level: 'Beginner', tags: ['api', 'limits'], slug: 'api-rate-limit', description: 'Getting rate limited by an API? Here\'s how to handle it and prevent future issues.' },
  { category: 'Troubleshooting', title: 'Model Not Available?', duration: '3 min', level: 'Beginner', tags: ['models', 'api'], slug: 'model-unavailable', description: 'The AI model you want to use isn\'t available. Let\'s find a solution.' },
  { category: 'Troubleshooting', title: 'Session Lost After Refresh?', duration: '3 min', level: 'Beginner', tags: ['sessions', 'browser'], slug: 'session-lost', description: 'You refreshed the page and lost your conversation. Here\'s how to recover.' },
  { category: 'Troubleshooting', title: 'Config Reset After Restart?', duration: '4 min', level: 'Beginner', tags: ['config', 'persistence'], slug: 'config-reset', description: 'Your agent configuration keeps resetting after restart. Let\'s fix the persistence issue.' },

  // 📱 Mobile & Security
  { category: 'Mobile & Security', title: 'Mobile Access Guide', duration: '4 min', level: 'Beginner', tags: ['mobile', 'ios', 'android', 'telegram'], slug: 'mobile-access', description: 'Access your agent on the go with mobile devices.' },
  { category: 'Mobile & Security', title: 'Two-Factor Authentication', duration: '5 min', level: 'Beginner', tags: ['security', '2fa', 'authentication'], slug: 'two-factor', description: 'Add extra security with two-factor authentication.' },
  { category: 'Mobile & Security', title: 'Sharing with Team', duration: '5 min', level: 'Beginner', tags: ['team', 'sharing', 'collaboration'], slug: 'team-sharing', description: 'Collaborate with your team by sharing access.' },

  // 💰 Account & Billing
  { category: 'Account & Billing', title: 'Viewing Usage Statistics', duration: '4 min', level: 'Beginner', tags: ['usage', 'stats', 'analytics'], slug: 'usage-stats', description: 'Track conversations, tokens, and performance metrics.' },
  { category: 'Account & Billing', title: 'Managing Billing', duration: '5 min', level: 'Beginner', tags: ['billing', 'subscription', 'payment'], slug: 'billing-manage', description: 'Manage your subscription and payment methods.' },

  // Additional tutorials
  { category: 'How-To', title: 'Batch Processing Multiple Files', duration: '5 min', level: 'Intermediate', tags: ['batch', 'files', 'automation'], slug: 'batch-processing', description: 'Process multiple files in one go with batch operations.' },
  { category: 'How-To', title: 'Cant Access My Computer Files', duration: '4 min', level: 'Beginner', tags: ['files', 'access', 'computer'], slug: 'cant-access-files', description: 'Your agent cant access files on your computer. Heres how to fix it.' },
  { category: 'Troubleshooting', title: 'Channel Responses Very Slow', duration: '4 min', level: 'Beginner', tags: ['discord', 'slow', 'performance'], slug: 'channel-slow', description: 'Discord channel responses are taking forever. Lets speed things up.' },
  { category: 'Concepts', title: 'Understanding Context Window Limits', duration: '5 min', level: 'Intermediate', tags: ['context', 'limits', 'tokens'], slug: 'context-window', description: 'Learn about context windows and how to manage them effectively.' },
  { category: 'How-To', title: 'Creating Custom Prompt Templates', duration: '5 min', level: 'Intermediate', tags: ['prompts', 'templates', 'custom'], slug: 'custom-prompt', description: 'Create reusable prompt templates for common tasks.' },
  { category: 'Troubleshooting', title: 'I Couldnt Send You a DM in #help', duration: '3 min', level: 'Beginner', tags: ['discord', 'dm', 'support'], slug: 'dm-failed', description: 'Fix Discord DM privacy settings so support can reach you.' },
  { category: 'Troubleshooting', title: 'DM Not Receiving Responses', duration: '4 min', level: 'Beginner', tags: ['discord', 'dm', 'responses'], slug: 'dm-not-receiving', description: 'Your bot isnt responding to DMs. Lets fix that.' },
  { category: 'Troubleshooting', title: 'Agent Keeps Creating Duplicate Files', duration: '4 min', level: 'Beginner', tags: ['files', 'duplicates', 'organization'], slug: 'duplicate-files', description: 'Stop your agent from creating duplicate files.' },
  { category: 'Troubleshooting', title: 'HEARTBEAT.md Errors', duration: '4 min', level: 'Beginner', tags: ['heartbeat', 'errors', 'automation'], slug: 'heartbeat-errors', description: 'Your heartbeat configuration has errors. Heres how to fix them.' },
  { category: 'Concepts', title: 'Setting Max Tokens to Control Response Length', duration: '4 min', level: 'Beginner', tags: ['tokens', 'limits', 'control'], slug: 'max-tokens', description: 'Control how long your agent responses are.' },
  { category: 'Troubleshooting', title: 'Mention Notifications Missed', duration: '4 min', level: 'Beginner', tags: ['discord', 'mentions', 'notifications'], slug: 'mention-notifications', description: 'Youre not getting pinged when mentioned. Lets fix notifications.' },
  { category: 'Concepts', title: 'How to Switch Models Mid-Conversation', duration: '4 min', level: 'Intermediate', tags: ['models', 'switching', 'conversation'], slug: 'model-switch', description: 'Switch between AI models without losing context.' },
  { category: 'How-To', title: 'Open Better Support Tickets', duration: '3 min', level: 'Beginner', tags: ['support', 'tickets', 'help'], slug: 'open-support', description: 'Get faster help by writing better support tickets.' },
  { category: 'Troubleshooting', title: 'Agent Keeps Changing Too Much', duration: '4 min', level: 'Beginner', tags: ['editing', 'changes', 'control'], slug: 'over-editing', description: 'Your agent is over-editing files. Heres how to scope it down.' },
  { category: 'Troubleshooting', title: 'Getting Rate Limited', duration: '4 min', level: 'Beginner', tags: ['rate-limit', 'api', 'throttling'], slug: 'rate-limit', description: 'Handle rate limits when calling APIs.' },
  { category: 'Automation', title: 'Automating Recurring Tasks', duration: '5 min', level: 'Intermediate', tags: ['automation', 'recurring', 'tasks'], slug: 'recurring-tasks', description: 'Set up automated recurring tasks and workflows.' },
  { category: 'Automation', title: 'Setting Up Scheduled Reminders', duration: '5 min', level: 'Beginner', tags: ['reminders', 'scheduling', 'automation'], slug: 'scheduled-reminders', description: 'Never forget important tasks with scheduled reminders.' },
  { category: 'Troubleshooting', title: 'Security Hardening Broke Your Agent', duration: '4 min', level: 'Intermediate', tags: ['security', 'hardening', 'broken'], slug: 'security-broke', description: 'Recover from over-restrictive security settings.' },
  { category: 'Troubleshooting', title: 'Sentinel Value OPENCLAW_REDACTED Error', duration: '4 min', level: 'Beginner', tags: ['sentinel', 'redacted', 'error'], slug: 'sentinel-error', description: 'Fix the redacted placeholder error in your config.' },
  { category: 'Troubleshooting', title: 'Fixed It, But Still Seeing the Old Error', duration: '4 min', level: 'Beginner', tags: ['stale', 'error', 'cache'], slug: 'stale-error', description: 'You fixed the issue but it still shows the old error.' },
  { category: 'Concepts', title: 'Editing System Prompt Effectively', duration: '5 min', level: 'Intermediate', tags: ['system-prompt', 'instructions', 'custom'], slug: 'system-prompt', description: 'Learn how to write effective system prompts.' },
  { category: 'Concepts', title: 'Adjusting Temperature for Creativity', duration: '4 min', level: 'Beginner', tags: ['temperature', 'creativity', 'control'], slug: 'temperature-setting', description: 'Control creativity vs accuracy with temperature settings.' },
  { category: 'Concepts', title: 'Calculate Estimated Token Usage', duration: '4 min', level: 'Beginner', tags: ['tokens', 'estimation', 'cost'], slug: 'token-calc', description: 'Estimate token usage and costs for your conversations.' },
  { category: 'Troubleshooting', title: 'Why Tools Suddenly Disappeared', duration: '4 min', level: 'Beginner', tags: ['tools', 'missing', 'permissions'], slug: 'tools-disappeared', description: 'Your tools are missing. Heres how to bring them back.' },
  { category: 'Troubleshooting', title: 'Voice Message Notifications Not Working', duration: '4 min', level: 'Beginner', tags: ['voice', 'notifications', 'telegram'], slug: 'voice-notifications', description: 'Voice message notifications are not working.' },
  { category: 'Troubleshooting', title: 'Agent Replies in the Wrong Language', duration: '4 min', level: 'Beginner', tags: ['language', 'translation', 'control'], slug: 'wrong-language', description: 'Your agent keeps replying in the wrong language.' },
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