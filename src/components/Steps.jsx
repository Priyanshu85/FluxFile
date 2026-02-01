import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: "01", title: "Upload", desc: "Drag and drop your files directly into the FluxFile dashboard." },
  { step: "02", title: "Transform", desc: "Apply dynamic filters and transformations in real-time." },
  { step: "03", title: "Export", desc: "Download your processed files instantly in multiple formats." }
];

export default function Steps() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-8xl font-black text-slate-800/40 absolute -top-10 -left-4 z-0">
                {s.step}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
