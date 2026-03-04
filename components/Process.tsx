
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-24 text-center">
          <h2 className="font-heading text-8xl uppercase tracking-tighter">THE <span className="text-red-500 underline decoration-1 underline-offset-8">LAB</span></h2>
          <p className="font-mono text-xs opacity-40 mt-4 tracking-widest uppercase">TECHNICAL WORKFLOW SPECIFICATION v.2.4</p>
        </div>

        <div className="space-y-32">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className="font-heading text-[10rem] leading-none opacity-10 select-none mb-[-2rem] md:mb-[-4rem]">
                  {step.number}
                </div>
                <h3 className="font-heading text-6xl uppercase mb-6 relative z-10">{step.title}</h3>
                <p className="font-serif text-xl text-white/50 max-w-md mx-auto md:mx-0 leading-relaxed italic">
                  {step.description}
                </p>
              </div>
              <div className="flex-1 w-full aspect-video bg-neutral-900 border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={`https://picsum.photos/seed/${step.number}/800/450?grayscale`} 
                  className="w-full h-full object-cover mix-blend-screen opacity-30"
                  alt="Process visual"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                     <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;
