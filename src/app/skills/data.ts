export interface SkillData {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  badge: 'cyan' | 'mint' | 'amber' | 'violet' | 'crimson';
  icon: string;
  installation: {
    steps: string[];
    config: { key: string; description: string; default?: string }[];
  };
  usage: {
    description: string;
    examples: { command: string; description: string }[];
  };
}

export const skillsData: Record<string, SkillData> = {
  'human-writing': {
    slug: 'human-writing',
    name: 'Human Writing',
    description: 'Natural, engaging content creation that sounds like a real person',
    longDescription: 'The Human Writing skill transforms AI-generated content into natural, engaging prose that resonates with readers. It removes robotic patterns, adds personality, and ensures your content feels authentic.',
    category: 'Development',
    badge: 'cyan',
    icon: '✍️',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Human Writing" and click Install',
        'Configure the tone settings (casual, professional, friendly)',
      ],
      config: [
        { key: 'tone', description: 'Writing tone: casual, professional, or friendly', default: 'professional' },
        { key: 'first_person', description: 'Enable first-person perspective', default: 'true' },
        { key: 'contractions', description: 'Use contractions (I\'m, don\'t, etc.)', default: 'true' },
      ],
    },
    usage: {
      description: 'Apply human writing to any text by prefixing with the skill trigger:',
      examples: [
        { command: '!human-write: Transform this into natural prose', description: 'Convert formal text to conversational' },
        { command: '!human-write --tone casual: Make this sound friendly', description: 'Adjust writing tone' },
        { command: '!human-write --first-person: Rewrite in first person', description: 'Convert to personal perspective' },
      ],
    },
  },
  'code-review': {
    slug: 'code-review',
    name: 'Code Review',
    description: 'Analyze and improve code quality with best practices',
    longDescription: 'The Code Review skill provides comprehensive code analysis, identifying bugs, security issues, performance problems, and style inconsistencies. It suggests improvements and explains complex concepts.',
    category: 'Development',
    badge: 'violet',
    icon: '🔍',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Code Review" and click Install',
        'Select your primary languages for optimized rules',
      ],
      config: [
        { key: 'languages', description: 'Primary languages to review (comma-separated)', default: 'javascript,typescript,python' },
        { key: 'strictness', description: 'Review strictness: lenient, standard, or strict', default: 'standard' },
        { key: 'include_security', description: 'Include security vulnerability checks', default: 'true' },
      ],
    },
    usage: {
      description: 'Review code by pasting it after the skill trigger or attaching files:',
      examples: [
        { command: '!code-review: [paste your code here]', description: 'Full code review with suggestions' },
        { command: '!code-review --security: [code]', description: 'Focus on security issues only' },
        { command: '!code-review --language python: [code]', description: 'Specify language for better analysis' },
      ],
    },
  },
  'data-analysis': {
    slug: 'data-analysis',
    name: 'Data Analysis',
    description: 'Extract insights and patterns from structured data',
    longDescription: 'The Data Analysis skill processes CSV, JSON, and spreadsheet data to find trends, correlations, and anomalies. It generates visualizations and provides statistical summaries.',
    category: 'Automation',
    badge: 'violet',
    icon: '📊',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Data Analysis" and click Install',
        'Configure data processing preferences',
      ],
      config: [
        { key: 'max_rows', description: 'Maximum rows to process', default: '10000' },
        { key: 'visualizations', description: 'Enable chart generation', default: 'true' },
        { key: 'statistical_analysis', description: 'Include statistical tests', default: 'true' },
      ],
    },
    usage: {
      description: 'Analyze data by uploading files or pasting structured data:',
      examples: [
        { command: '!analyze: [upload CSV or paste data]', description: 'Generate comprehensive analysis' },
        { command: '!analyze --trends: [data]', description: 'Focus on trend identification' },
        { command: '!analyze --correlations: [data]', description: 'Find correlations between variables' },
      ],
    },
  },
  'image-generation': {
    slug: 'image-generation',
    name: 'Image Generation',
    description: 'Create images from text descriptions using AI',
    longDescription: 'The Image Generation skill transforms your ideas into visuals using state-of-the-art AI image generation. Describe what you want, and Heyron will create it.',
    category: 'Creative',
    badge: 'amber',
    icon: '🎨',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Image Generation" and click Install',
        'Connect your preferred image generation provider',
      ],
      config: [
        { key: 'provider', description: 'Image generation provider', default: 'auto' },
        { key: 'default_style', description: 'Default style: realistic, artistic, or abstract', default: 'realistic' },
        { key: 'default_size', description: 'Default image dimensions', default: '1024x1024' },
      ],
    },
    usage: {
      description: 'Generate images by describing what you want to create:',
      examples: [
        { command: '!generate: A serene mountain lake at sunset', description: 'Create image from description' },
        { command: '!generate --style abstract: Geometric patterns in blue', description: 'Specify art style' },
        { command: '!generate --size 1920x1080: Futuristic cityscape', description: 'Set custom dimensions' },
      ],
    },
  },
  'research-assistant': {
    slug: 'research-assistant',
    name: 'Research Assistant',
    description: 'Web research and information gathering made easy',
    longDescription: 'The Research Assistant skill searches the web, summarizes articles, and compiles comprehensive reports on any topic. It finds credible sources and presents information clearly.',
    category: 'Automation',
    badge: 'cyan',
    icon: '🔬',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Research Assistant" and click Install',
        'Configure search preferences and source credibility',
      ],
      config: [
        { key: 'max_sources', description: 'Maximum sources to cite', default: '10' },
        { key: 'search_engine', description: 'Preferred search engine', default: 'auto' },
        { key: 'include_wikipedia', description: 'Include Wikipedia as a source', default: 'false' },
      ],
    },
    usage: {
      description: 'Research topics by asking questions or providing research prompts:',
      examples: [
        { command: '!research: Latest developments in quantum computing', description: 'Comprehensive research report' },
        { command: '!research --brief: Climate change impact on oceans', description: 'Quick summary of key points' },
        { command: '!research --sources: Benefits of meditation', description: 'Research with cited sources' },
      ],
    },
  },
  'meeting-notes': {
    slug: 'meeting-notes',
    name: 'Meeting Notes',
    description: 'Capture and summarize meeting discussions automatically',
    longDescription: 'The Meeting Notes skill transcribes and summarizes meeting discussions, identifying key decisions, action items, and important discussion points. Perfect for keeping everyone aligned.',
    category: 'Productivity',
    badge: 'cyan',
    icon: '📝',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Meeting Notes" and click Install',
        'Connect your calendar integration for auto-capture',
      ],
      config: [
        { key: 'auto_transcribe', description: 'Auto-transcribe from joined calls', default: 'true' },
        { key: 'format', description: 'Output format: markdown, google-docs, or plain', default: 'markdown' },
        { key: 'action_items', description: 'Automatically extract action items', default: 'true' },
      ],
    },
    usage: {
      description: 'Generate meeting notes from transcripts or by describing the meeting:',
      examples: [
        { command: '!notes: [paste transcript or describe meeting]', description: 'Generate structured notes' },
        { command: '!notes --action-items: [meeting details]', description: 'Focus on action items only' },
        { command: '!notes --decisions: [meeting details]', description: 'Extract key decisions only' },
      ],
    },
  },
  'social-media': {
    slug: 'social-media',
    name: 'Social Media',
    description: 'Create engaging posts for all social platforms',
    longDescription: 'The Social Media skill helps you craft perfect posts for Twitter/X, LinkedIn, Instagram, and more. It adapts tone, length, and format for each platform while maintaining your voice.',
    category: 'Creative',
    badge: 'mint',
    icon: '📱',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Social Media" and click Install',
        'Connect your social media accounts (optional)',
      ],
      config: [
        { key: 'default_platform', description: 'Primary platform for posts', default: 'twitter' },
        { key: 'auto_hashtag', description: 'Automatically generate relevant hashtags', default: 'true' },
        { key: 'max_length', description: 'Maximum characters per post', default: '280' },
      ],
    },
    usage: {
      description: 'Generate social posts by describing what you want to share:',
      examples: [
        { command: '!social: Just launched our new product!', description: 'Generate platform-optimized post' },
        { command: '!social --platform linkedin: Hiring new developers', description: 'Generate for specific platform' },
        { command: '!social --thread: My 5 favorite productivity tips', description: 'Create a Twitter thread' },
      ],
    },
  },
  'email-compose': {
    slug: 'email-compose',
    name: 'Email Compose',
    description: 'Draft professional emails quickly and effectively',
    longDescription: 'The Email Compose skill helps you write clear, professional emails for any situation. From quick updates to formal proposals, it adapts your message to the right tone and audience.',
    category: 'Productivity',
    badge: 'mint',
    icon: '✉️',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Email Compose" and click Install',
        'Set your default signature and email style preferences',
      ],
      config: [
        { key: 'default_tone', description: 'Default tone: formal, casual, or friendly', default: 'professional' },
        { key: 'include_signature', description: 'Include your signature in emails', default: 'true' },
        { key: 'auto_subject', description: 'Generate subject lines automatically', default: 'true' },
      ],
    },
    usage: {
      description: 'Compose emails by describing what you need to communicate:',
      examples: [
        { command: '!email: Request a meeting with the marketing team', description: 'Generate professional email' },
        { command: '!email --follow-up: About our last conversation', description: 'Write follow-up email' },
        { command: '!email --formal: Proposal for partnership', description: 'Generate formal business email' },
      ],
    },
  },
  'spreadsheet-help': {
    slug: 'spreadsheet-help',
    name: 'Spreadsheet Help',
    description: 'Formulas, charts, and data manipulation assistance',
    longDescription: 'The Spreadsheet Help skill assists with Excel, Google Sheets, and CSV files. It creates formulas, builds charts, structures data, and automates repetitive tasks.',
    category: 'Productivity',
    badge: 'amber',
    icon: '📊',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Spreadsheet Help" and click Install',
        'Configure default spreadsheet application preferences',
      ],
      config: [
        { key: 'default_app', description: 'Default application: excel or google-sheets', default: 'excel' },
        { key: 'formulas', description: 'Enable formula generation', default: 'true' },
        { key: 'charts', description: 'Enable chart creation', default: 'true' },
      ],
    },
    usage: {
      description: 'Get spreadsheet help by describing what you need:',
      examples: [
        { command: '!sheet: Create a formula to sum column A', description: 'Generate specific formula' },
        { command: '!sheet --chart: Sales data by month', description: 'Create chart from data' },
        { command: '!sheet --vlookup: Match customer IDs to names', description: 'Complex formula assistance' },
      ],
    },
  },
  'document-summary': {
    slug: 'document-summary',
    name: 'Document Summary',
    description: 'Quickly digest long documents into key points',
    longDescription: 'The Document Summary skill quickly extracts key information from long documents, articles, and reports. It provides concise summaries while preserving critical details and action items.',
    category: 'Communication',
    badge: 'violet',
    icon: '📄',
    installation: {
      steps: [
        'Navigate to your Heyron dashboard',
        'Go to Skills → Available',
        'Find "Document Summary" and click Install',
        'Configure summary length preferences',
      ],
      config: [
        { key: 'summary_length', description: 'Summary length: brief, standard, or detailed', default: 'standard' },
        { key: 'extract_key_points', description: 'Extract numbered key points', default: 'true' },
        { key: 'include_quotes', description: 'Include important quotes from document', default: 'false' },
      ],
    },
    usage: {
      description: 'Summarize documents by uploading files or pasting text:',
      examples: [
        { command: '!summarize: [paste document or upload PDF]', description: 'Generate document summary' },
        { command: '!summarize --brief: [document]', description: 'Create brief summary' },
        { command: '!summarize --key-points: [document]', description: 'Extract numbered key points only' },
      ],
    },
  },
};

export function getSkillData(slug: string): SkillData | undefined {
  return skillsData[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(skillsData);
}