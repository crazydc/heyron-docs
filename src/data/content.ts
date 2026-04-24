export interface SectionData {
  id: string;
  title: string;
  description?: string;
  content: string;
}

export const sections: SectionData[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Set up your own private AI agent in about 15 minutes',
    content: `
## What Is Heyron?

Heyron gives you your own personal AI assistant. Think of it like Siri or Alexa — except this one is yours. You decide its personality, what it knows, how it talks, and what it helps you with. It's not a shared chatbot. It runs on your own private server. Your conversations, your data, your rules. Nobody else sees it.

## How to Get Started

### 1. Go to heyron.ai and Sign Up
Open your browser and go to heyron.ai. Click the sign-up button and create your account. It costs **$29/month** — that gets you your own private AI agent on your own server.

### 2. Check Your Email
After signing up, you'll get a welcome email with your dashboard link. It'll look something like: \`your-name.c1.heyron.ai\`. Bookmark this — it's your agent's home base.

### 3. Log Into Your Dashboard
Click the link from your email. You'll see a dashboard called **Nerve**. This is your control center.

### 4. Give Your Agent a Personality
Click **Config** on your dashboard. You'll see a personality file. This tells your agent who it is. Write in plain English: *"You are a friendly assistant who helps me with..."*

### 5. Pick a Brain (Choose a Model)
Your agent needs an AI "brain." Go to **Model** and pick one. **Kimi K2.5** is a great starting choice. You can also try Claude or GPT-4.

### 6. Connect to Discord, Telegram, or Email
Want your agent on Discord, Telegram, or even your email inbox? Go to \`connect.c1.heyron.ai\` and follow the steps.
`
  },
  {
    id: 'tutorials',
    title: 'Tutorials & Guides',
    description: 'Step-by-step modules to get the most out of your agent',
    content: `
## Make a Google Sheet

Your AI can't create the Sheet directly, but it CAN build the entire content and formulas for you:

\`\`\`
I need a monthly budget tracker spreadsheet. Give me:
1. Column headers for: Date, Category, Description, Amount, Running Total
2. A list of common budget categories (rent, groceries, utilities, etc.)
3. The formulas I need for the Running Total column
4. Step-by-step instructions for setting this up in Google Sheets
\`\`\`

## Organize Your Inbox

Your agent can't access your email, but it CAN build you a system to manage it:

\`\`\`
I'm drowning in emails. Help me create an email management system:
1. Give me 5-6 folder/label categories that work for most people
2. Write rules I can set up in Gmail to auto-sort emails
3. Give me a 10-minute daily email routine I can follow
4. Write a template response for emails I get often but don't have time to answer
\`\`\`

## Write Social Media Content

\`\`\`
Write 5 social media posts for Twitter about [topic].
The tone should be professional/casual/humorous.
Include hashtags that are specific/broad/trending.
The posts should educate/entertain/sell/build community.
\`\`\`
`
  },
  {
    id: 'api-docs',
    title: 'API Documentation',
    description: 'Technical reference for connecting your agent to external services',
    content: `
## GitHub Integration

### 1. Create Your GitHub Account
- Go to github.com
- Click "Sign up"
- Enter email, create password, choose username

### 2. Create Your Repository
- Click the "+" button (top right)
- Click "New repository"
- Repository name: \`heyron-backup\`
- Choose Private (recommended)
- Check "Add a README file"

### 3. Get a Personal Access Token
- Click your profile → Settings → Developer settings
- Click "Personal access tokens" → "Tokens (classic)"
- Note: "Agent Access"
- Expiration: "No expiration"
- Scopes: Check "repo"
- Copy the token immediately!

### 4. Give Your Agent the Token
Say: *"Connect to GitHub. My repository is at github.com/YOURUSERNAME/YOUR-REPO-NAME. My token is: ghp_abc123xyz..."*

## Image Generation Platforms

Your Agent writes prompts; these platforms generate the visuals:

- **DALL-E 3** — Best for precise, literal interpretations
- **Midjourney** — Best for artistic, stylized images  
- **Leonardo** — Good balance of control and artistry

## Audio: ElevenLabs Integration

ElevenLabs capabilities (via API):
- Text-to-Speech: high quality voices, voice cloning
- Transcription: Convert audio/video to text
`
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Join thousands of users building with Heyron',
    content: `
## Join The Den 🦝

The heyron® community Discord is called **The Den**.

When you join, start in **#new-start-here** — it's a forum with everything you need: the starting guide, announcements, tutorials, roadmap, and a welcome wall to introduce yourself.

## Need Help?

- **Ron's Office** — talk to Ron directly
- **Ron's Helpers** — community troubleshooting
- **Community Help Chat** — general discussion

## What's In The Box

- One newly hatched agent — Ready to learn you and your workflows
- Behavior-control files — SOUL.md, MEMORY.md, IDENTITY.md, TOOLS.md
- Short-term memory — Each conversation, until you close the tab
- Long-term memory capability — Daily logs and curated files
- Builtin websearch — Uses BraveAPI
- Image/document recognition — Upload images for analysis

## What You DON'T Have Yet

These modules walk you through essential attachments:

| Feature | Why It Matters | Fixed In Module |
|---------|-----------------|-----------------|
| Persistent memory | Agent forgets you when session ends | 02, 06 |
| Discord access | Browser chat only; no phone access | 03 |
| Saved work | Robust file storage | 04, 06 |
| Time-based actions | No reminders or scheduling | 07 |
`
  },
  {
    id: 'model-selection',
    title: 'Model Selection',
    description: 'Choose the right AI brain for your needs',
    content: `
## Available Models

Heyron supports multiple AI models:

### Kimi K2.5 (Recommended)
- Great starting choice
- Good balance of capability and speed
- Well-suited for general tasks

### Claude (Anthropic)
- Excellent for reasoning and analysis
- Great for complex tasks

### GPT-4 (OpenAI)
- Most capable model
- Best for advanced use cases

## Switching Models

You can switch models anytime — it's not permanent. Just go to the Model section in your dashboard and select a different model.

## Tips for Model Selection

- Start with Kimi K2.5 for everyday tasks
- Switch to Claude for complex reasoning tasks
- Use GPT-4 for advanced coding or creative work
`
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and how to resolve them',
    content: `
## Agent Doesn't Remember You

If your agent forgets you when a session ends, you need to configure persistent memory:

1. Complete Module 02 (memory setup)
2. Make sure GitHub integration is working
3. Check that SOUL.md and MEMORY.md are being saved

## Can't Connect to Discord

1. Make sure you've authorized the bot in your server
2. Check the connect.c1.heyron.ai page for status
3. Verify your bot has the correct permissions

## Slow Response Times

- Check your network connection
- Try a different model (some are faster)
- Reduce conversation history length

## Stuck? Ask the Community!

- Visit #rons-helpers in The Den
- Post in #community-help-chat
- Check existing threads for similar issues
`
  }
];

export const navigationItems = [
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'API Docs', href: '/api-docs' },
  { name: 'Community', href: '/community' },
  { name: 'Models', href: '/models' },
  { name: 'Troubleshooting', href: '/troubleshooting' },
];