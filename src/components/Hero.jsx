import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto z-10"
      >
        <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-semibold text-brand-400 uppercase tracking-wider">
          v2.0 is now live
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          The Future of <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            Intelligent Files.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop serving stale content. FluxFile creates living documents that update in real-time as your database changes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg shadow-lg shadow-brand-500/20"
          >
            Start Building
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors"
          >
            Read Documentation
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;