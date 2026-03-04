
import { PortfolioItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'WORK', href: '#work' },
  { label: 'PROCESS', href: '#process' },
  { label: 'ABOUT', href: '#about' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'CONTACT', href: '#contact' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "NEON DREAMS",
    category: "Music Video",
    year: "1994",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    client: "SynthWave Records"
  },
  {
    id: 2,
    title: "URBAN SOLITUDE",
    category: "Short Film",
    year: "1988",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    client: "Independent Arts"
  },
  {
    id: 3,
    title: "CHROME HORIZON",
    category: "Commercial",
    year: "1991",
    imageUrl: "https://images.unsplash.com/photo-1500462859194-885860bb8124?auto=format&fit=crop&q=80&w=1200",
    client: "Retro Motors Co."
  },
  {
    id: 4,
    title: "ANALOG PULSE",
    category: "Documentary",
    year: "1992",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200",
    client: "Broadcast One"
  },
  {
    id: 5,
    title: "VELVET NIGHTS",
    category: "Visualizer",
    year: "1985",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200",
    client: "Nightlife Collective"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "DIGITAL INGESTION",
    description: "Decoding raw data. Every frame is scrutinized for its hidden soul. We move from bits to narrative bricks."
  },
  {
    number: "02",
    title: "THE ROUGH CUT",
    description: "Finding the pulse. Rhythm is everything. We slice the fat until the story starts to bleed truth."
  },
  {
    number: "03",
    title: "ANALOG TEXTURING",
    description: "Adding the grit. We re-run digital signals through vintage hardware to find that unique chromatic aberration."
  },
  {
    number: "04",
    title: "FINAL MASTERING",
    description: "Sound design and final grade. The last layer of varnish on a moving painting."
  }
];

export const TESTIMONIALS = [
  {
    name: "SARAH JENKINS",
    role: "Director, Neon Studio",
    quote: "Working with Reel Vintage is like stepping back into the golden age of cinema with a modern brain."
  },
  {
    name: "MARCUS THORNE",
    role: "Producer, Synth Records",
    quote: "They don't just edit; they curate the atmosphere. The glitch aesthetic is second to none."
  },
  {
    name: "ELARA VANCE",
    role: "Creative Lead, Horizon",
    quote: "The only editor who understands that noise is a feature, not a bug."
  }
];
