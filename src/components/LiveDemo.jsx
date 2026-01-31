import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

const codeSnippets = [
  { id: 1, content: '{\n  "status": "pending",\n  "users": 142,\n  "last_update": "10:00 AM"\n}' },
  { id: 2, content: '{\n  "status": "processing",\n  "users": 145,\n  "last_update": "10:01 AM"\n}' },
  { id: 3, content: '{\n  "status": "active",\n  "users": 156,\n  "last_update": "10:02 AM"\n}' },
  { id: 4, content: '{\n  "status": "completed",\n  "users": 189,\n  "last_update": "10:05 AM"\n}' }
];

const LiveDemo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="demo" className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Live updates, zero latency.</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            FluxFile hooks directly into your database events. When a record changes, the file served to your users updates instantly. No page reloads required.
          </p>
          <ul className="space-y-4">
            {['WebSocket powered connections', 'Diff-based patching', 'End-to-end encryption'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="text-brand-500 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
            {/* Window Chrome */}
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/50">
              <div className="bg-slate-900/50 p-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs text-slate-500 font-mono">api/status.json</div>
                <RefreshCw className={`w-4 h-4 text-slate-600 ${index % 2 === 0 ? 'animate-spin' : ''}`} />
              </div>
              
              <div className="p-6 font-mono text-sm min-h-[200px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-brand-100"
                  >
                    <code>{codeSnippets[index].content}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-slate-700/30 rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;