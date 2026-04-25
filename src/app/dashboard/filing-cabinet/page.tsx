'use client';

export default function DashboardFilingCabinet() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">🗂 Filing Cabinet</h1>
      
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white mb-4">Your Files</h2>
        <p className="text-slate-400">
          Your agent&apos;s files and resources will appear here. Upload files to get started.
        </p>
        
        <div className="mt-6 p-8 border-2 border-dashed border-border rounded-lg text-center">
          <p className="text-slate-500">📁 Drag & drop files here</p>
          <p className="text-slate-600 text-sm mt-2">or click to browse</p>
        </div>
      </div>
    </div>
  );
}