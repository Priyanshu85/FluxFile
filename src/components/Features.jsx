import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Instant Processing",
    desc: "Lightning fast file manipulation powered by Vite's HMR and optimized React logic.",
    icon: "⚡"
  },
  {
    title: "Secure by Design",
    desc: "All file transformations happen locally in your browser. Your data never leaves your machine.",
    icon: "🛡️"
  },
  {
    title: "Modern UI",
    desc: "Crafted with Tailwind CSS for a seamless, responsive experience across all devices.",
    icon: "🎨"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Built for the modern web
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            FluxFile combines speed, security, and aesthetics to provide the ultimate file management toolkit.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
