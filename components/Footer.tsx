
import React from 'react';
import { Mail, ArrowUpRight, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="space-y-6">
            <h4 className="font-mono text-xs text-red-500 uppercase tracking-widest">WANT TO COLLABORATE?</h4>
            <a 
              href="mailto:work@reelvintage.com" 
              className="font-heading text-6xl md:text-8xl uppercase hover:text-red-500 transition-colors flex items-center gap-4 group"
            >
              LET'S TALK <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>
          
          <div className="space-y-8 md:text-right">
             <div className="space-y-2">
               <p className="font-mono text-xs opacity-40 uppercase">HQ / LONDON, UK</p>
               <p className="font-mono text-xs opacity-40 uppercase">GMT +0</p>
             </div>
             <div className="flex gap-6 md:justify-end">
               <Instagram className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
               <Twitter className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
               <Youtube className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
             </div>
          </div>
        </div>

        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] opacity-30 uppercase">
          <p>© REEL_VINTAGE 1991-2024. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <p>Built with Passion and Static Noise.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
