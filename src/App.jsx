import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <footer className="py-8 border-t border-black/5 dark:border-white/10 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} Aether Chess. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
