
import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Video Placeholder or Grainy Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0c0c0c]">
        <img 
          src="https://picsum.photos/seed/hero/1920/1080?grayscale" 
          alt="Vintage background" 
          className="w-full h-full object-cover opacity-20 filter contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c]"></div>
      </div>

      <div className="relative z-10 space-y-4">
        <h2 className="font-mono text-red-500 text-xs md:text-sm tracking-[0.3em] uppercase opacity-80 animate-pulse">
          // ESTABLISHED MCMXCI
        </h2>
        <h1 className="font-heading text-8xl md:text-[12rem] leading-none tracking-tighter uppercase">
          MASTERING <br /> THE CUT
        </h1>
        <p className="font-serif italic text-xl md:text-3xl text-white/60 max-w-2xl mx-auto">
          Crafting stories through the lens of analog imperfection.
        </p>
      </div>

      <div className="absolute bottom-12 left-12 font-mono text-[10px] leading-relaxed tracking-widest text-white/40 uppercase hidden lg:block">
        ISO 400 <br />
        1/48 SHUTTER <br />
        F/1.4 DEPTH
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2 group cursor-pointer">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
          <Play size={16} fill="currentColor" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">SHOWREEL 2024</span>
      </div>
    </section>
  );
};

export default Hero;
