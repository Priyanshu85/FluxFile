import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import LiveDemo from './components/LiveDemo';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-blue-500/30 font-sans">
      <Navbar />
      <Hero />
      <Steps />
      <Features />
      <LiveDemo />
      <Pricing />
      
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Ready to transform your files?</h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl">
            Get Started for Free
          </button>
        </div>
      </section>
      
      <footer className="py-12 border-t border-slate-900 bg-slate-950 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} FluxFile. Open source with love.</p>
      </footer>
    </div>
  );
}

export default App;