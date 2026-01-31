import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveDemo from './components/LiveDemo';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-brand-500/30">
      <Navbar />
      <Hero />
      <LiveDemo />
      
      <footer className="py-12 border-t border-slate-900 bg-slate-950 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} FluxFile Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;