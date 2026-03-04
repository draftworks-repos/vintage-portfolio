
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-white/10 group-hover:border-red-500/30 transition-colors pointer-events-none"></div>
          <img 
            src="https://picsum.photos/seed/editor/800/1000?grayscale" 
            alt="The Editor" 
            className="w-full grayscale brightness-75 filter contrast-125"
          />
          <div className="absolute top-4 right-4 bg-red-600 px-2 py-1 font-mono text-[10px] text-white">
            REC ●
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-heading text-7xl uppercase leading-none">
            THE ARCHIVAL <br /> <span className="italic font-serif normal-case text-white/40">Philosophy</span>
          </h3>
          <p className="font-serif text-2xl text-white/80 leading-relaxed">
            "Digital is perfect. Perfect is boring. I search for the noise in the signal, 
             the dust on the lens, and the rhythm that only human hands can carve."
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <h5 className="font-mono text-xs text-red-500 uppercase">Specialization</h5>
              <ul className="font-mono text-sm space-y-1 text-white/60">
                <li>_ANALOGUE COLOR</li>
                <li>_TEXTURE DESIGN</li>
                <li>_STORY PACING</li>
                <li>_SOUND SCULPTING</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-mono text-xs text-red-500 uppercase">Hardware</h5>
              <ul className="font-mono text-sm space-y-1 text-white/60">
                <li>_PANASONIC AG-1980</li>
                <li>_SONY PVM MONITORS</li>
                <li>_VHS MASTER DECK</li>
                <li>_CUSTOM GLITCH BOXES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
