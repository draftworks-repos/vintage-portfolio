
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Clapperboard } from 'lucide-react';

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="reviews" ref={containerRef} className="py-48 bg-[#0c0c0c] relative overflow-hidden">
      {/* Background Cinematic Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-red-900/10 blur-[150px] rounded-full"></div>
      
      <motion.div style={{ y }} className="max-w-4xl mx-auto px-6 text-center space-y-32">
        <div className="space-y-4">
          <Clapperboard className="w-12 h-12 mx-auto text-red-500 opacity-50 mb-8" />
          <h2 className="font-heading text-5xl opacity-40 uppercase tracking-[0.4em]">REVIEWS & CREDITS</h2>
        </div>

        <div className="space-y-32">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="space-y-8">
              <p className="font-serif text-3xl md:text-5xl italic text-white/90 leading-tight">
                "{t.quote}"
              </p>
              <div className="space-y-1">
                <h4 className="font-heading text-2xl uppercase tracking-widest">{t.name}</h4>
                <p className="font-mono text-[10px] text-red-500 opacity-60 uppercase">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-32 opacity-20 font-mono text-xs space-y-4 uppercase tracking-[0.2em]">
          <p>STARRING: THE EDITORIAL SUITE</p>
          <p>PRODUCED BY: COFFEE & ADRENALINE</p>
          <p>DISTRIBUTED BY: DIGITAL DREAMS LTD</p>
          <div className="pt-12 text-[8px] animate-pulse">NO ANIMALS WERE HARMED IN THE PRODUCTION OF THESE CUTS</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
