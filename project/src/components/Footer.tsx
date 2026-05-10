import { motion } from 'framer-motion';
import { Instagram, Youtube, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold tracking-wider">
              <span className="gradient-text">SONIYA</span>
              <span className="text-soft-silver/40 font-light ml-2 text-lg">GARG</span>
            </h3>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-soft-silver/20 mt-2">
              Fashion Model & Digital Creator
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, color: 'hover:text-glow-pink hover:glow-pink', label: 'Instagram' },
              { icon: Youtube, color: 'hover:text-red-400 hover:glow-blue', label: 'YouTube' },
            ].map(({ icon: Icon, color, label }) => (
              <a
                key={label}
                href="#social"
                className={`w-10 h-10 rounded-full glass flex items-center justify-center text-soft-silver/30 ${color} transition-all duration-300`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-[10px] tracking-wider text-soft-silver/20 text-center md:text-right">
            &copy; 2026 Soniya Garg. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-1">
          <span className="font-mono text-[10px] text-soft-silver/15">Crafted with</span>
          <Heart size={10} className="text-glow-pink/30" fill="currentColor" />
          <span className="font-mono text-[10px] text-soft-silver/15">in Milan</span>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-soft-silver/40 hover:text-white hover:glow-violet transition-all duration-300 z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
