'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const steps = [
  {
    number: 1,
    title: 'Quickstart',
    description: 'Learn the basics of setting up your AI agent',
    icon: '⚡',
  },
  {
    number: 2,
    title: 'Run First Task',
    description: 'Complete your first task with your agent',
    icon: '🎯',
  },
  {
    number: 3,
    title: 'Join Discord',
    description: 'Connect with the community for help',
    icon: '💬',
  },
];

export default function Launchpad() {
  const { user, completeOnboarding } = useAuth();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (!user) {
      router.push('/signup');
    } else if (!user.isNewUser) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (!user || !user.isNewUser) {
    return null;
  }

  const handleComplete = () => {
    completeOnboarding();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet text-sm font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-violet animate-pulse"></span>
            LAUNCHPAD
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Let&apos;s Get Started!
          </h1>
          <p className="text-xl text-slate-400">
            Follow these steps to launch your AI agent
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`glass-panel p-6 cursor-pointer transition-all ${
                currentStep === step.number
                  ? 'border-violet border-l-4'
                  : 'opacity-50 hover:opacity-75'
              }`}
              onClick={() => setCurrentStep(step.number)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet/20 flex items-center justify-center text-violet font-bold text-xl">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{step.icon}</span>
                    <h2 className="text-xl font-bold text-white">{step.title}</h2>
                  </div>
                  <p className="text-slate-400 mt-1">{step.description}</p>
                </div>
              </div>

              {currentStep === step.number && (
                <div className="mt-6 pt-6 border-t border-border">
                  {step.number === 1 && (
                    <div className="space-y-4">
                      <p className="text-slate-300">
                        First, you&apos;ll need to set up your agent. Here&apos;s how:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-slate-300">
                        <li>Get an API key from OpenRouter</li>
                        <li>Connect your agent to a channel (Discord/Telegram)</li>
                        <li>Create your first SOUL.md for personality</li>
                      </ol>
                      <Link href="/getting-started" className="btn-primary inline-block mt-4">
                        Go to Quickstart →
                      </Link>
                    </div>
                  )}
                  {step.number === 2 && (
                    <div className="space-y-4">
                      <p className="text-slate-300">
                        Try asking your agent something simple:
                      </p>
                      <div className="bg-panel border border-border rounded-lg p-4">
                        <p className="text-slate-300 font-mono text-sm">
                          &quot;Hello! What can you help me with?&quot;
                        </p>
                      </div>
                      <p className="text-slate-400 text-sm">
                        Head to your connected chat and say hello!
                      </p>
                    </div>
                  )}
                  {step.number === 3 && (
                    <div className="space-y-4">
                      <p className="text-slate-300">
                        Join our Discord community for tips and help:
                      </p>
                      <a
                        href="https://discord.gg/heyron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                      >
                        Join Discord →
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Complete Button */}
        <div className="text-center">
          <button onClick={handleComplete} className="btn-primary px-8 py-3">
            Complete Setup → Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}