import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Instagram, Youtube, ChevronDown, Play, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.jpg';

const taglines = [
  'Fashion Model',
  'Digital Creator',
  'Brand Icon',
  'UGC Creator',
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[taglineIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.substring(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  return (
  <section
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
  }}
>
  {/* Dark cinematic overlay */}
  <div className="absolute inset-0 bg-black/55" />

      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-bg" />
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-soft-silver/50 mb-6">
            Fashion Model & Influencer & UGC Creator
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4"
        >
          <span className="gradient-text">Soniya</span>
          <br />
          <span className="text-white/90 font-light italic">Garg</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="h-8 mb-10"
        >
          <span className="font-mono text-sm md:text-base tracking-[0.2em] text-soft-silver/70">
            {displayText}
            <span className="animate-blink border-r-2 border-neon-violet ml-0.5">&nbsp;</span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#gallery"
            className="group relative px-8 py-3.5 rounded-full font-mono text-xs tracking-[0.2em] uppercase overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-glow-pink opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[1px] bg-matte rounded-full" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              Explore Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#videos"
            className="group flex items-center gap-3 px-8 py-3.5 rounded-full glass hover:glass-strong transition-all duration-300 font-mono text-xs tracking-[0.2em] uppercase text-soft-silver/80 hover:text-white"
          >
            <Play size={14} className="text-neon-violet" />
            Watch Videos
          </a>
        </motion.div>

        {/* Social buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Instagram, label: 'Instagram', color: 'hover:text-glow-pink' },
            { icon: Youtube, label: 'YouTube', color: 'hover:text-red-400' },
          ].map(({ icon: Icon, label, color }) => (
            <a
              key={label}
              href="#social"
              className={`group flex items-center gap-2 px-4 py-2 rounded-full glass text-soft-silver/50 ${color} hover:text-white transition-all duration-300`}
            >
              <Icon size={16} />
              <span className="font-mono text-[10px] tracking-widest uppercase hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-soft-silver/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-soft-silver/30" />
        </motion.div>
      </motion.div>

      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-neon-violet/30 to-transparent" />
        <span className="font-mono text-[9px] tracking-widest text-soft-silver/20 rotate-90 origin-center">2026</span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-electric-blue/30 to-transparent" />
      </div>
    </section>
  );
}
