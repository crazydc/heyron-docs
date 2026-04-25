'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function DashboardAccount() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">⚙️ Account</h1>
      
      <div className="glass-panel p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Profile</h2>
        <div className="space-y-3 text-slate-300">
          <p><span className="text-slate-500">Name:</span> {user?.name}</p>
          <p><span className="text-slate-500">Email:</span> {user?.email}</p>
        </div>
      </div>

      <div className="glass-panel p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Subscription</h2>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-mint/20 text-mint rounded-full text-sm">Free Plan</span>
        </div>
        <p className="text-slate-400 mb-4">
          Upgrade to unlock premium features.
        </p>
        <button className="btn-primary">
          Upgrade →
        </button>
      </div>

      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white mb-4">Usage</h2>
        <div className="space-y-3 text-slate-300">
          <p><span className="text-slate-500">Conversations:</span> 127</p>
          <p><span className="text-slate-500">Tokens used:</span> 1.2M</p>
        </div>
      </div>
    </div>
  );
}