import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
          <span className="font-semibold text-neutral-800 dark:text-white tracking-tight">Aether Chess</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#learn" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Learn</a>
          <a href="#play" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Play</a>
        </nav>
        <a href="#play" className="inline-flex items-center rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
          Play Now
        </a>
      </div>
    </header>
  );
}
