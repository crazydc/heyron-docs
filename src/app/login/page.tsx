'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - any email works, password ignored
    if (email) {
      login(email);
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--void)' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-white font-mono">
            HEYRON<span className="text-cyan">.DOCS</span>
          </Link>
        </div>

        {/* Login Form */}
        <div className="glass-panel p-8">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-panel border border-border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-panel border border-border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan"
                placeholder="••••••••"
              />
              <p className="text-xs text-slate-500 mt-2">Password not required for demo</p>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-cyan hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-slate-400 hover:text-cyan">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}