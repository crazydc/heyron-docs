'use client';

import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

const tutorialsData: Record<string, {
  title: string;
  description: string;
  badge: string;
  duration: string;
  content: {
    heading: string;
    text?: string;
    steps?: string[];
    tips?: string[];
    warning?: string;
  }[];
}> = {
  'discord-pin-fail': {
    title: 'Discord Pin Action Failed?',
    description: 'Your agent tried to pin a message in Discord but it failed. Here\'s how to fix it.',
    badge: 'Troubleshooting',
    duration: '3 min read',
    content: [
      {
        heading: 'Why Pinning Fails',
        text: 'Discord has specific permissions requirements for pinning messages. Your bot needs both "Manage Messages" permission and the ability to pin in that specific channel.',
        steps: [
          'Go to Server Settings → Roles → your bot role',
          'Ensure "Manage Messages" permission is enabled',
          'Check Channel Permissions - click the lock icon next to the channel',
          'Verify "Manage Messages" is allowed for your bot role',
          'If using a role without "Administrator", explicitly grant channel permissions'
        ]
      },
      {
        heading: 'Quick Fix',
        text: 'The fastest solution is to grant your bot Administrator permission temporarily, test pinning, then narrow down to just the needed permissions.',
        tips: [
          'Some channels have unique permission overwrites - check each channel individually',
          'The bot needs to be IN the channel to pin messages there',
          'Discord bots cannot pin messages in threads (this is a Discord limitation, not a permission issue)'
        ]
      },
      {
        heading: 'Still Not Working?',
        text: 'If permissions look correct, the issue might be with the Discord API itself. Discord occasionally has outages affecting pin operations.',
        warning: 'Note: Bots cannot pin messages in threads or in channels older than 24 hours in free Discord tiers.'
      }
    ]
  },
  'cant-pin': {
    title: 'Mission Is On, But Agent Still Can\'t Pin?',
    description: 'Your mission is enabled but the agent still can\'t pin messages. Let\'s debug this.',
    badge: 'Troubleshooting',
    duration: '4 min read',
    content: [
      {
        heading: 'Check Mission Configuration',
        text: 'Even with missions enabled, specific actions like pinning require additional setup. Verify your mission includes pin permissions.',
        steps: [
          'Open your agent configuration',
          'Find the mission that should allow pinning',
          'Check if "discord:pin" or similar action is explicitly allowed',
          'Some missions only allow read operations by default'
        ]
      },
      {
        heading: 'Permission Chain',
        text: 'There\'s a chain of permissions: Mission → Platform → Channel. All must align.',
        tips: [
          'Mission level: Does the mission allow pin actions?',
          'Platform level: Does the Discord connection have pin permissions?',
          'Channel level: Does the specific channel allow your bot to pin?',
          'All three must be enabled for pinning to work'
        ]
      },
      {
        heading: 'Debug Mode',
        text: 'Enable debug logging to see exactly why the pin action is being blocked. The logs will show which permission check is failing.',
        warning: 'If your bot is missing the "Manage Messages" permission at the server level, no mission can enable pinning.'
      }
    ]
  },
  'file-limit': {
    title: 'File Upload Size Limit?',
    description: 'Getting errors when uploading files? Here\'s how to work around file size limits.',
    badge: 'Troubleshooting',
    duration: '3 min read',
    content: [
      {
        heading: 'Understanding Limits',
        text: 'File upload limits depend on your platform and subscription. Discord has an 8MB limit for free accounts (25MB for paid), Telegram is 50MB, and web dashboards vary.',
        steps: [
          'Check your subscription tier for platform-specific limits',
          'Verify the exact file size you\'re trying to upload',
          'Compare against known platform limits',
          'If under limits, the issue may be a different error'
        ]
      },
      {
        heading: 'Workarounds',
        text: 'When you hit limits, here\'s what to do:',
        tips: [
          'Compress the file - use ZIP for documents, reduce image dimensions',
          'Split large files into smaller chunks',
          'Upload to a cloud service (Google Drive, Dropbox) and share the link',
          'For images, convert to WebP format which often reduces size significantly'
        ]
      },
      {
        heading: 'Check the Error Message',
        text: 'Different error messages mean different issues. "Payload too large" = file too big. "Unsupported format" = wrong file type.',
        warning: 'Some file types are blocked for security (executables, scripts). Check the allowed file types list.'
      }
    ]
  },
  'voice-timeout': {
    title: 'Voice Message Timeout?',
    description: 'Voice messages taking too long or timing out? Here\'s how to fix it.',
    badge: 'Troubleshooting',
    duration: '4 min read',
    content: [
      {
        heading: 'Why Voice Times Out',
        text: 'Voice message generation involves: audio processing → API call → audio generation → upload. Any step can timeout.',
        steps: [
          'Check your internet connection stability',
          'Verify the TTS service (ElevenLabs, etc.) is responding',
          'Check if the voice message is very long - longer messages take more time',
          'Look at API response times in your logs'
        ]
      },
      {
        heading: 'Fixing Timeouts',
        text: 'Try these solutions in order:',
        tips: [
          'Shorten the text - aim for under 30 seconds of audio',
          'Use a faster voice model if available',
          'Check your API key rate limits - timeouts can occur when rate limited',
          'Increase timeout settings in your configuration if exposed'
        ]
      },
      {
        heading: 'Prevention',
        text: 'Set up your agent to warn before generating very long voice messages, or split long text into multiple shorter messages.',
        warning: 'Very long voice messages (2+ minutes) are likely to timeout even with good conditions.'
      }
    ]
  },
  'cron-missing': {
    title: 'Scheduled Task Not Running?',
    description: 'Your cron job or scheduled task isn\'t firing. Let\'s get it running.',
    badge: 'Troubleshooting',
    duration: '4 min read',
    content: [
      {
        heading: 'Verify the Schedule',
        text: 'First, confirm the cron expression is correct and the schedule is what you expect.',
        steps: [
          'Check the cron expression syntax (* * * * * = every minute)',
          'Verify the timezone - are you expecting UTC but it\'s running in a different zone?',
          'Check if the task is enabled (some setups have an on/off toggle)',
          'Look at last run time in the dashboard'
        ]
      },
      {
        heading: 'Common Issues',
        text: 'The most common reasons cron tasks don\'t run:',
        tips: [
          'Gateway service was restarted - tasks may have been cleared',
          'System clock issues - check server time is accurate',
          'Task queue full - too many pending tasks',
          'Invalid cron syntax - use a cron validator to check'
        ]
      },
      {
        heading: 'Debug Steps',
        text: 'If the schedule looks correct and it\'s still not running:',
        warning: 'On free tiers, scheduled tasks may have limits. Check if you\'ve exceeded your quota.'
      },
      {
        heading: 'Manual Trigger Test',
        text: 'Try manually triggering the task to see if it works at all. If manual works but scheduled doesn\'t, the scheduler itself may have issues.'
      }
    ]
  },
  'webhook-fail': {
    title: 'Webhook Not Triggering?',
    description: 'Webhooks aren\'t firing when they should. Let\'s debug the trigger conditions.',
    badge: 'Troubleshooting',
    duration: '4 min read',
    content: [
      {
        heading: 'Check Trigger Conditions',
        text: 'Webhooks only fire when ALL conditions are met. Review your trigger setup:',
        steps: [
          'What event type is configured? (message, reaction, etc.)',
          'Are there channel/thread filters?',
          'Is there a content filter that might not be matching?',
          'Check if the webhook is actually enabled'
        ]
      },
      {
        heading: 'Webhook URL Issues',
        text: 'The webhook URL must be valid and reachable:',
        tips: [
          'Verify the URL starts with https:// (Discord requires this)',
          'Test the URL with a tool like webhook.site',
          'Check if your server accepts webhooks from unknown origins',
          'Some services need a specific verification step'
        ]
      },
      {
        heading: 'Debug Mode',
        text: 'Enable webhook logging to see each attempt and its result. Look for HTTP 4xx/5xx responses indicating the receiving server rejected the request.',
        warning: 'If your webhook URL is public, ensure you\'re not exposing sensitive data in the payload.'
      }
    ]
  },
  'api-rate-limit': {
    title: 'API Rate Limit Hit?',
    description: 'Getting rate limited by an API? Here\'s how to handle it and prevent future issues.',
    badge: 'Troubleshooting',
    duration: '4 min read',
    content: [
      {
        heading: 'Understanding Rate Limits',
        text: 'Rate limits exist to prevent abuse. Different services have different limits - OpenAI, Anthropic, and others all behave differently.',
        steps: [
          'Check which API is being rate limited (check logs)',
          'Understand the limit window (per minute, per hour, etc.)',
          'Identify if you\'re hitting limits regularly or just occasionally',
          'Check your usage patterns against documented limits'
        ]
      },
      {
        heading: 'Immediate Fixes',
        text: 'When rate limited:',
        tips: [
          'Wait for the rate limit window to reset',
          'Add a delay between requests if possible',
          'Use batch operations instead of many small calls',
          'Consider upgrading your API tier for higher limits'
        ]
      },
      {
        heading: 'Prevention',
        text: 'Long-term strategies to avoid rate limits:',
        warning: 'Never implement "retry immediately" loops - these make rate limits worse.'
      },
      {
        heading: 'Queue System',
        text: 'Implement a request queue with backoff: queue requests → process with delays → exponential backoff on 429 responses.'
      }
    ]
  },
  'model-unavailable': {
    title: 'Model Not Available?',
    description: 'The AI model you want to use isn\'t available. Let\'s find a solution.',
    badge: 'Troubleshooting',
    duration: '3 min read',
    content: [
      {
        heading: 'Why Models Become Unavailable',
        text: 'Models can be unavailable for several reasons:',
        steps: [
          'API provider deprecated or limited the model',
          'Your API key doesn\'t have access to that model tier',
          'Region restrictions - some models only available in certain regions',
          'High demand - model temporarily at capacity'
        ]
      },
      {
        heading: 'Finding Alternatives',
        text: 'When your preferred model isn\'t available:',
        tips: [
          'Check the model dropdown in your dashboard for available options',
          'OpenAI models: try gpt-4o-mini as fallback',
          'Anthropic models: try claude-3-haiku',
          'Most GPT-4 features are available in GPT-4o at lower cost'
        ]
      },
      {
        heading: 'Fix Access Issues',
        text: 'If the model should be available but isn\'t:',
        warning: 'Some models require a paid API subscription. Check your billing status.'
      },
      {
        heading: 'API Key Check',
        text: 'Verify your API key has the right tier of access. Free tier keys often have limited model access.'
      }
    ]
  },
  'session-lost': {
    title: 'Session Lost After Refresh?',
    description: 'You refreshed the page and lost your conversation. Here\'s how to recover.',
    badge: 'Troubleshooting',
    duration: '3 min read',
    content: [
      {
        heading: 'Why Sessions Are Lost',
        text: 'Session loss after refresh happens when:',
        steps: [
          'Browser cleared localStorage/sessionStorage',
          'You\'re using incognito/private mode',
          'The session storage quota was exceeded',
          'You opened the dashboard from a different URL/domain'
        ]
      },
      {
        heading: 'Prevention',
        text: 'Keep sessions persistent:',
        tips: [
          'Don\'t use incognito mode for persistent sessions',
          'Bookmark the exact dashboard URL you use',
          'Avoid clearing browser data between sessions',
          'Use the same browser/device when possible'
        ]
      },
      {
        heading: 'Recovery',
        text: 'If you\'ve lost a session but need the context: check if you can access chat history from your platform (Discord/Telegram), or ask your agent to summarize what it remembers.',
        warning: 'Sessions are tied to browser storage. There\'s no server-side recovery for lost local sessions.'
      }
    ]
  },
  'config-reset': {
    title: 'Config Reset After Restart?',
    description: 'Your agent configuration keeps resetting after restart. Let\'s fix the persistence issue.',
    badge: 'Troubleshooting',
    duration: '4 min read',
    content: [
      {
        heading: 'Why Config Resets',
        text: 'Configuration resets happen when settings aren\'t properly saved or loaded:',
        steps: [
          'Changes weren\'t saved before shutdown',
          'Configuration stored in volatile memory (RAM only)',
          'Save operation failed silently',
          'Using a configuration file that gets overwritten'
        ]
      },
      {
        heading: 'Persistent Storage',
        text: 'For configuration to survive restarts, it must be written to persistent storage.',
        tips: [
          'Ensure your gateway writes config to disk, not RAM',
          'Check config file permissions - may need write access',
          'Look for a "Save Configuration" button after making changes',
          'Some platforms require explicit save - changes may look saved but aren\'t'
        ]
      },
      {
        heading: 'Debug Steps',
        text: 'To identify the issue:',
        warning: 'If running in Docker, ensure volume mounts are configured for config persistence.'
      },
      {
        heading: 'Manual Recovery',
        text: 'You can manually edit the config file (usually JSON or YAML) and restart. Make backups before editing.'
      }
    ]
  },
  'memory-persistence': {
    title: 'Making Memory Persist Across Sessions',
    description: 'Learn how to make your agent remember information between conversations.',
    badge: 'Guide',
    duration: '5 min read',
    content: [
      {
        heading: 'How Memory Persistence Works',
        text: 'Your agent can remember information across sessions using persistent memory storage. This allows context to carry over between conversations, making interactions more meaningful.',
        steps: [
          'Enable memory persistence in your agent settings',
          'Choose between short-term (session) and long-term (persistent) memory',
          'Configure what information should be remembered',
          'Test by asking the agent to recall something from a previous session'
        ]
      },
      {
        heading: 'Memory Types',
        text: 'Understanding the different memory layers:',
        tips: [
          'Session Memory: Lasts only during the current conversation session',
          'Long-term Memory: Persists across sessions and can be searched',
          'Context Window: The current conversation context (resets on new session)',
          'Knowledge Base: Document-based information your agent can reference'
        ]
      },
      {
        heading: 'Best Practices',
        text: 'For optimal memory usage:',
        warning: 'Be mindful of storing sensitive information. Use encryption for sensitive data.'
      },
      {
        heading: 'Managing Memory',
        text: 'You can view, edit, and delete stored memories through the dashboard. Regularly review what your agent remembers to keep it relevant.'
      }
    ]
  },
  'file-upload-size': {
    title: 'Max File Upload Size Explained',
    description: 'Understanding file size limits and how to work with large files.',
    badge: 'Guide',
    duration: '3 min read',
    content: [
      {
        heading: 'File Size Limits by Platform',
        text: 'Different platforms have different upload limits. Understanding these helps you work within boundaries.',
        steps: [
          'Discord: 8MB free, 25MB paid (nitro)',
          'Telegram: 50MB maximum',
          'Web Dashboard: Varies by subscription tier',
          'API endpoints: Usually 10MB default'
        ]
      },
      {
        heading: 'Working with Large Files',
        text: 'When you need to handle files larger than limits:',
        tips: [
          'Compress images using WebP or AVIF format',
          'Split large documents into multiple parts',
          'Use cloud storage and share links instead',
          'For code files, include only relevant portions'
        ]
      },
      {
        heading: 'Checking File Size',
        text: 'Before uploading, always check your file size. Most operating systems show this in file properties.',
        warning: 'Compressed archives still count toward limits in their compressed form.'
      }
    ]
  },
  'image-vision': {
    title: 'Using Vision to Analyze Images',
    description: 'Enable your agent to see and analyze images you share.',
    badge: 'Guide',
    duration: '4 min read',
    content: [
      {
        heading: 'What is Vision?',
        text: 'Vision enables your agent to analyze and describe images. Share a screenshot, photo, or diagram and the agent can understand and discuss it.',
        steps: [
          'Ensure vision is enabled in your agent configuration',
          'Share an image directly (drag & drop or upload)',
          'Ask questions about what you shared',
          'The agent will describe, analyze, or extract information'
        ]
      },
      {
        heading: 'Use Cases',
        text: 'Vision opens up many possibilities:',
        tips: [
          'Debugging: Share error screens or code screenshots',
          'Design Review: Analyze UI mockups or logos',
          'Data Extraction: Read text from images or charts',
          'Documentation: Explain diagrams or flowcharts'
        ]
      },
      {
        heading: 'Supported Formats',
        text: 'Vision supports common image formats: PNG, JPEG, WebP, GIF, and more. For best results, use clear, well-lit images.',
        warning: 'Very large images may be automatically resized, potentially losing detail.'
      }
    ]
  },
  'vision-cost': {
    title: 'Vision API Costs and Optimization',
    description: 'Understanding vision pricing and how to reduce costs.',
    badge: 'Advanced',
    duration: '4 min read',
    content: [
      {
        heading: 'How Vision Pricing Works',
        text: 'Vision API calls are priced based on image size and the number of requests. Understanding this helps optimize usage.',
        steps: [
          'Vision is billed per image analyzed',
          'Larger images cost more than smaller ones',
          'High-resolution images have higher processing costs',
          'Batch processing may have different pricing'
        ]
      },
      {
        heading: 'Cost Optimization Tips',
        text: 'Reduce vision costs without sacrificing functionality:',
        tips: [
          'Resize large images before sharing (max 2048x2048 is usually sufficient)',
          'Use compression to reduce file size while maintaining quality',
          'Disable vision when not needed if it\'s a per-request toggle',
          'Set monthly budgets or alerts for vision usage'
        ]
      },
      {
        heading: 'Monitoring Usage',
        text: 'Track your vision API usage through the dashboard. Set up alerts when usage approaches your budget limits.',
        warning: 'Vision costs can accumulate quickly with frequent image sharing. Monitor usage regularly.'
      }
    ]
  },
  'voice-input': {
    title: 'Using Voice Input Commands',
    description: 'Control your agent using voice commands instead of typing.',
    badge: 'Guide',
    duration: '4 min read',
    content: [
      {
        heading: 'Getting Started with Voice Input',
        text: 'Voice input allows you to speak to your agent. The speech is converted to text and processed normally.',
        steps: [
          'Enable voice input in your agent settings',
          'Look for the microphone button in your chat interface',
          'Click to start recording, click again to stop',
          'Your speech will appear as text and be sent automatically'
        ]
      },
      {
        heading: 'Voice Command Patterns',
        text: 'Voice commands work best when:',
        tips: [
          'Speak clearly and at a normal pace',
          'Use simple, direct sentences',
          'Pause briefly between commands',
          'Background noise can affect accuracy'
        ]
      },
      {
        heading: 'Troubleshooting',
        text: 'If voice input isn\'t working:',
        warning: 'Voice input requires microphone permissions. Grant permission when prompted by your browser.'
      },
      {
        heading: 'Language Settings',
        text: 'Set your preferred language in settings for better recognition accuracy. Voice input supports multiple languages.'
      }
    ]
  },
  'voice-output': {
    title: 'Configuring Voice Output',
    description: 'Set up text-to-speech and choose voices for your agent.',
    badge: 'Guide',
    duration: '5 min read',
    content: [
      {
        heading: 'Enabling Voice Output',
        text: 'Your agent can respond with voice instead of text. Configure this in your agent settings.',
        steps: [
          'Go to Agent Settings → Voice Output',
          'Enable text-to-speech responses',
          'Choose your preferred voice from available options',
          'Set the default language/voice style'
        ]
      },
      {
        heading: 'Voice Options',
        text: 'Different voices have different characteristics:',
        tips: [
          'Standard voices: Free, faster, good for brief responses',
          'Premium voices: Higher quality, more natural expression',
          'Voice styles: Some voices support different emotions',
          'Language matching: Choose voices that match your language'
        ]
      },
      {
        heading: 'Controlling Voice Output',
        text: 'You can control when voice is used: always, never, or ask first. Some platforms support voice channel output for real-time responses.',
        warning: 'Voice output uses API credits. Monitor usage to avoid unexpected costs.'
      },
      {
        heading: 'Troubleshooting',
        text: 'If voice doesn\'t play: check your device volume, ensure speakers are working, and verify the audio format is supported.'
      }
    ]
  },
  'multi-language': {
    title: 'Multi-Language Support',
    description: 'Configure your agent to understand and respond in multiple languages.',
    badge: 'Guide',
    duration: '4 min read',
    content: [
      {
        heading: 'Enabling Multi-Language',
        text: 'Your agent can communicate in multiple languages. Configure the languages it should understand and respond in.',
        steps: [
          'Go to Agent Settings → Languages',
          'Add or select supported languages',
          'Set a primary (default) language',
          'The agent will auto-detect and respond in the detected language'
        ]
      },
      {
        heading: 'How It Works',
        text: 'Multi-language support uses automatic detection:',
        tips: [
          'The agent detects the language of your message',
          'It responds in the same language automatically',
          'You can also explicitly request a specific language',
          'Some languages may have limited training data'
        ]
      },
      {
        heading: 'Best Practices',
        text: 'For best multi-language experience:',
        warning: 'Complex or mixed-language requests may confuse detection. Be clear about which language you want.'
      },
      {
        heading: 'Supported Languages',
        text: 'Most major languages are supported including English, Spanish, French, German, Chinese, Japanese, Korean, and many more.'
      }
    ]
  },
  'translation': {
    title: 'Real-Time Translation with Agent',
    description: 'Use your agent as a translation tool for conversations.',
    badge: 'Guide',
    duration: '4 min read',
    content: [
      {
        heading: 'Translation Feature',
        text: 'Your agent can translate text between languages in real-time. This is useful for cross-language communication.',
        steps: [
          'Enable translation in agent settings',
          'Specify source and target languages',
          'Use commands like "translate to Spanish: [your message]"',
          'Or ask for translations of shared content'
        ]
      },
      {
        heading: 'Translation Commands',
        text: 'Simple ways to trigger translation:',
        tips: [
          '"Translate [text] to French"',
          '"What does this say in German? [attach image]"',
          '"Explain this in simple English"',
          'Set auto-translate preferences for conversations'
        ]
      },
      {
        heading: 'Accuracy Notes',
        text: 'Translation quality depends on language pairs and context. Technical terms may need clarification.',
        warning: 'Automatic translation may not be suitable for legal, medical, or critical documents. Always verify important translations.'
      }
    ]
  },
  'code-generation': {
    title: 'Code Generation Best Practices',
    description: 'Get the best results when generating code with your agent.',
    badge: 'Advanced',
    duration: '5 min read',
    content: [
      {
        heading: 'Writing Effective Prompts',
        text: 'Clear prompts generate better code. Be specific about what you need.',
        steps: [
          'Specify the programming language',
          'Describe the expected input and output',
          'Mention any specific libraries or frameworks',
          'Include any constraints or requirements'
        ]
      },
      {
        heading: 'Code Quality Tips',
        text: 'For production-ready code:',
        tips: [
          'Ask for error handling and edge cases',
          'Request comments and documentation',
          'Specify code style conventions',
          'Ask for unit tests if needed'
        ]
      },
      {
        heading: 'Iterative Generation',
        text: 'Build code incrementally: start with a skeleton, then add features. This produces better results than一次性 large requests.',
        warning: 'Always review generated code before running it. Test in a safe environment first.'
      },
      {
        heading: 'Common Issues',
        text: 'If code doesn\'t work: check for library version mismatches, missing dependencies, or environment-specific issues.'
      }
    ]
  },
  'debug-code': {
    title: 'Debugging Code with Agent',
    description: 'Use your agent to find and fix bugs in your code.',
    badge: 'Guide',
    duration: '5 min read',
    content: [
      {
        heading: 'How to Debug',
        text: 'Share your code and error messages with your agent for analysis.',
        steps: [
          'Share the relevant code sections',
          'Include the exact error message or unexpected behavior',
          'Describe what you expected to happen',
          'Mention your environment (language, OS, versions)'
        ]
      },
      {
        heading: 'Debugging Strategies',
        text: 'The agent can help with:',
        tips: [
          'Analyzing error messages and stack traces',
          'Identifying common issues (null checks, type errors)',
          'Suggesting breakpoints or logging points',
          'Reviewing code for logical errors'
        ]
      },
      {
        heading: 'Providing Context',
        text: 'Better context leads to faster fixes. Include relevant surrounding code, configuration, and steps to reproduce.',
        warning: 'For security-sensitive code, sanitize sensitive data before sharing. Don\'t share API keys or credentials.'
      },
      {
        heading: 'Verification',
        text: 'After fixes are applied, always test to verify the issue is resolved before deploying.'
      }
    ]
  },
  'refactor-code': {
    title: 'Code Refactoring with AI',
    description: 'Improve your code structure and readability with agent assistance.',
    badge: 'Advanced',
    duration: '5 min read',
    content: [
      {
        heading: 'Refactoring Basics',
        text: 'AI can help identify code that needs improvement and suggest better patterns.',
        steps: [
          'Share the code you want to improve',
          'Specify what concerns you (readability, performance, etc.)',
          'Ask for specific refactoring patterns (DRY, SOLID, etc.)',
          'Review changes before applying'
        ]
      },
      {
        heading: 'Common Refactoring Goals',
        text: 'Focus on what matters most:',
        tips: [
          'Readability: Clear variable names, shorter functions',
          'Performance: Optimizing loops, reducing redundancy',
          'Maintainability: Reducing complexity, better organization',
          'Testing: Making code more testable'
        ]
      },
      {
        heading: 'Safe Refactoring',
        text: 'Always refactor with tests in place. Request "baby steps" refactoring to keep changes manageable.',
        warning: 'Large refactors are risky. Break them into smaller, testable changes.'
      },
      {
        heading: 'Code Review',
        text: 'After refactoring, ask the agent to explain the changes so you understand what was modified.'
      }
    ]
  },
  'test-generation': {
    title: 'Auto-Generating Unit Tests',
    description: 'Generate tests automatically for your code.',
    badge: 'Advanced',
    duration: '5 min read',
    content: [
      {
        heading: 'Generating Tests',
        text: 'Your agent can analyze code and generate unit tests automatically.',
        steps: [
          'Share the code you need tests for',
          'Specify the testing framework (Jest, pytest, etc.)',
          'Indicate what edge cases to cover',
          'Review and adjust generated tests'
        ]
      },
      {
        heading: 'Test Coverage',
        text: 'Good tests cover:',
        tips: [
          'Happy path: Normal operation with valid inputs',
          'Edge cases: Empty inputs, maximum values, special characters',
          'Error cases: Invalid inputs, network failures, exceptions',
          'Boundary conditions: Just inside and outside valid ranges'
        ]
      },
      {
        heading: 'Frameworks',
        text: 'Most common frameworks are supported: Jest (JavaScript), pytest (Python), JUnit (Java), NUnit (.NET), and more.',
        warning: 'Generated tests are a starting point. Review and enhance them to ensure proper coverage.'
      },
      {
        heading: 'Running Tests',
        text: 'After generation, run the tests to verify they pass. Fix any issues that arise during test execution.'
      }
    ]
  },
  'doc-generation': {
    title: 'Auto-Generating Documentation',
    description: 'Generate documentation for your code automatically.',
    badge: 'Guide',
    duration: '4 min read',
    content: [
      {
        heading: 'Documentation Generation',
        text: 'Your agent can analyze code and create documentation from it.',
        steps: [
          'Share your code or file path',
          'Specify documentation format (README, JSDoc, etc.)',
          'Choose what to document (all code, public API, etc.)',
          'Review and refine the generated docs'
        ]
      },
      {
        heading: 'Documentation Types',
        text: 'Different formats for different needs:',
        tips: [
          'README: Overview, installation, usage examples',
          'API Docs: Function signatures, parameters, return values',
          'Inline Comments: Explanation within code',
          'Changelog: Version history and changes'
        ]
      },
      {
        heading: 'Best Practices',
        text: 'Good documentation is clear, concise, and kept up to date. Generated docs are a starting point.',
        warning: 'Code changes require documentation updates. Keep docs in sync with code.'
      },
      {
        heading: 'Maintenance',
        text: 'Regularly review and update documentation when code changes significantly.'
      }
    ]
  },
  'api-integration': {
    title: 'Integrating with External APIs',
    description: 'Connect your agent with external services and APIs.',
    badge: 'Advanced',
    duration: '6 min read',
    content: [
      {
        heading: 'API Integration Basics',
        text: 'Your agent can interact with external APIs to extend functionality.',
        steps: [
          'Identify the API you want to integrate',
          'Obtain necessary API keys or credentials',
          'Configure the API connection in your agent settings',
          'Test the connection and verify it works'
        ]
      },
      {
        heading: 'Common Integrations',
        text: 'Popular API integrations include:',
        tips: [
          'Weather APIs: Get weather data for locations',
          'Calendar APIs: Read/write calendar events',
          'Email APIs: Send or receive emails',
          'Database APIs: Store and retrieve data'
        ]
      },
      {
        heading: 'Security',
        text: 'Always protect API credentials. Never expose keys in code or conversation. Use environment variables.',
        warning: 'Store API keys securely. Rotate them periodically. Use minimal required permissions.'
      },
      {
        heading: 'Error Handling',
        text: 'APIs can fail. Build in error handling, retries, and fallback behaviors for reliable integration.'
      }
    ]
  },
  'webhook-setup': {
    title: 'Setting Up Webhooks',
    description: 'Configure webhooks to receive real-time notifications.',
    badge: 'Guide',
    duration: '5 min read',
    content: [
      {
        heading: 'What Are Webhooks?',
        text: 'Webhooks let your agent receive real-time notifications when events happen. Instead of polling, you get instant updates.',
        steps: [
          'Create a webhook endpoint in your agent configuration',
          'Set up the trigger conditions (what events to listen for)',
          'Configure the destination URL for the data',
          'Test the webhook to verify it works'
        ]
      },
      {
        heading: 'Webhook Events',
        text: 'Common events you can listen for:',
        tips: [
          'New messages in specified channels',
          'Member joins or leaves',
          'Message reactions',
          'Custom events from your applications'
        ]
      },
      {
        heading: 'Security',
        text: 'Webhook endpoints should be secured. Use HTTPS, verify signatures when available, and validate incoming data.',
        warning: 'Public webhook URLs can receive unwanted requests. Implement validation and rate limiting.'
      },
      {
        heading: 'Debugging',
        text: 'If webhooks aren\'t firing: verify the URL is correct, check trigger conditions, and review webhook logs for errors.'
      }
    ]
  }
};

export default function TutorialPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const tutorial = tutorialsData[slug];
  
  if (!tutorial) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-24">
          <div className="glass-panel p-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
              Tutorial Not Found
            </h1>
            <p className="text-slate-400 mb-6">
              The tutorial "{slug}" doesn&apos;t exist or hasn&apos;t been created yet.
            </p>
            <Link href="/tutorials" className="btn-primary">
              ← Back to Tutorials
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  const getBadgeClass = (badge: string) => {
    switch (badge) {
      case 'Troubleshooting': return 'badge-amber';
      case 'Guide': return 'badge-cyan';
      case 'Security': return 'badge-crimson';
      case 'Advanced': return 'badge-violet';
      default: return 'badge-mint';
    }
  };
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Link href="/tutorials" className="text-cyan hover:underline">← Back to Tutorials</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          {tutorial.title}
        </h1>
        <span className={`${getBadgeClass(tutorial.badge)} mb-8`}>{tutorial.badge}</span>
        <span className="text-slate-400 ml-4">{tutorial.duration}</span>

        <div className="glass-panel p-6 mb-8">
          <p className="text-xl text-slate-300 mb-8">
            {tutorial.description}
          </p>
          
          {tutorial.content.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                {section.heading}
              </h2>
              
              {section.text && (
                <p className="text-slate-300 mb-4">{section.text}</p>
              )}
              
              {section.steps && section.steps.length > 0 && (
                <div className="bg-void border border-border rounded-lg p-4 mb-4">
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    {section.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
              
              {section.tips && section.tips.length > 0 && (
                <div className="space-y-2 mb-4">
                  {section.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-cyan">💡</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {section.warning && (
                <div className="p-4 bg-crimson/10 border border-crimson/30 rounded-lg mb-4">
                  <p className="text-crimson">
                    <strong className="text-white">⚠️ Warning:</strong> {section.warning}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link href="/tutorials" className="btn-secondary">
            ← All Tutorials
          </Link>
          <Link href="/troubleshooting" className="btn-primary">
            More Troubleshooting →
          </Link>
        </div>
      </main>
    </div>
  );
}