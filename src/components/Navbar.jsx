import React from 'react';
import { Link } from 'react-router-dom';
import { FileCode2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <FileCode2 className="text-brand-500 w-8 h-8" />
        <span className="text-xl font-bold tracking-tight">FluxFile</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#demo" className="hover:text-white transition-colors">How it Works</a>
        <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
      </div>
      <Link
        to="/pricing"
        className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2 rounded-full font-medium transition-all text-sm"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
