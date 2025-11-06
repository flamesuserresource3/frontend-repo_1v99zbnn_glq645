import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white drop-shadow-sm">
            Master Chess in 3D
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">
            Strategy, education, and artistry come together. Explore openings, solve tactics, and play with a cinematic 3D experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#play" className="inline-flex items-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
              Start Playing
            </a>
            <a href="#learn" className="inline-flex items-center rounded-md bg-white/80 dark:bg-neutral-900/80 backdrop-blur border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-300">
              Learn the Basics
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950/90" />
    </section>
  );
}
