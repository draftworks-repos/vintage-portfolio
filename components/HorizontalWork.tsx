
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';

const HorizontalWork: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} id="work" className="relative h-[400vh] bg-neutral-900">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-12">
          {/* Section Title Card */}
          <div className="min-w-[40vw] h-[60vh] flex flex-col justify-center gap-6 pr-20">
            <h3 className="font-heading text-8xl leading-none uppercase">
              SELECTED <br /> <span className="text-red-500">PROJECTS</span>
            </h3>
            <p className="font-mono text-sm text-white/40 max-w-sm">
              FROM GRAINY 8MM TEXTURES TO CRUNCHY VHS GLITCHES. EVERY FRAME IS PURPOSEFUL.
            </p>
          </div>

          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="min-w-[60vw] h-[60vh] group relative overflow-hidden bg-neutral-800">
              {/* Film Strip Border Aesthetic */}
              <div className="absolute inset-y-0 left-0 w-8 border-r border-white/10 flex flex-col justify-around py-4 opacity-30">
                {[...Array(6)].map((_, i) => (
                   <div key={i} className="w-4 h-6 border border-white/40 mx-auto rounded-sm"></div>
                ))}
              </div>
              
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>

              <div className="absolute bottom-8 left-12 right-8 flex justify-between items-end">
                <div className="space-y-1">
                   <p className="font-mono text-[10px] text-red-500 uppercase tracking-widest">{item.category} // {item.year}</p>
                   <h4 className="font-heading text-6xl leading-none uppercase">{item.title}</h4>
                </div>
                <div className="font-mono text-[10px] uppercase text-white/40 tracking-tighter">
                  CLIENT: {item.client}
                </div>
              </div>
            </div>
          ))}

          {/* End Spacer */}
          <div className="min-w-[20vw]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalWork;
