import React from 'react';

export default function CallToAction() {
  return (
    <section id="play" className="py-20 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Ready to make your next move?</h3>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">Jump into a quick match or explore interactive lessons designed to elevate your game.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">Quick Match</a>
            <a href="#learn" className="inline-flex items-center rounded-md bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white hover:bg-white/90 dark:hover:bg-neutral-800/90">Browse Lessons</a>
          </div>
        </div>
      </div>
    </section>
  );
}
