
import React from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference p-6 flex justify-between items-center font-mono">
      <div className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity cursor-pointer">
        REEL_VINTAGE [0.1]
      </div>
      <div className="hidden md:flex space-x-8 text-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-red-500 transition-colors uppercase"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="text-xs border border-white/20 px-2 py-1 uppercase opacity-50">
        Status: ONLINE / REC
      </div>
    </nav>
  );
};

export default Navbar;
