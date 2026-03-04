
import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HorizontalWork from './components/HorizontalWork';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="relative selection:bg-red-500 selection:text-white bg-[#0c0c0c]">
        <Navbar />
        
        <Hero />
        
        {/* Marquee/Ticker Effect */}
        <div className="w-full py-4 bg-red-600 overflow-hidden flex whitespace-nowrap font-mono text-[10px] tracking-widest text-white uppercase select-none">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-8 px-4 animate-marquee">
              <span>Now Loading: Analog Archive // Vol. 04</span>
              <span>★</span>
              <span>Status: Perfect Imperfection</span>
              <span>★</span>
              <span>Frame Rate: 24FPS Locked</span>
              <span>★</span>
            </div>
          ))}
        </div>

        <HorizontalWork />

        <Process />

        {/* Visual Interstitial Section */}
        <section className="h-[60vh] flex flex-col items-center justify-center bg-black border-y border-white/5 overflow-hidden">
          <div className="text-center space-y-2 opacity-20 relative">
              <div className="font-heading text-[12rem] tracking-tighter leading-none select-none">STATIC</div>
              <div className="font-mono text-xs tracking-[1em] ml-[1em]">NO SIGNAL FOUND // ERR_404</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          </div>
        </section>

        <About />

        <Testimonials />
        
        <Footer />

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </main>
    </ReactLenis>
  );
}

export default App;
