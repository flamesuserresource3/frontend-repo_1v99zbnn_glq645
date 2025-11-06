import React from 'react';
import { Brain, Puzzle, Play, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Lessons',
    desc: 'Bite-sized modules that build intuition from openings to endgames.'
  },
  {
    icon: Puzzle,
    title: 'Daily Puzzles',
    desc: 'Sharpen your tactics with curated challenges and progress tracking.'
  },
  {
    icon: Play,
    title: 'Play vs AI',
    desc: 'Adaptive opponents that match your level and keep you improving.'
  },
  {
    icon: Shield,
    title: 'Fair & Secure',
    desc: 'Anti-cheat measures and safe accounts to protect your journey.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Why you'll love it</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">A minimalist, artistic chess experience designed for learning and play.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
