import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-matte flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-2">
              <span className="gradient-text">SONIYA</span>
            </h1>
            <p className="font-mono text-soft-silver/60 text-sm tracking-[0.3em] uppercase mb-12">
              Garg
            </p>

            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                initial={{ background: 'linear-gradient(90deg, #a855f7, #ec4899, #3b82f6)' }}
              />
            </div>

            <motion.p
              className="font-mono text-xs text-soft-silver/40 mt-4 tracking-widest"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              LOADING EXPERIENCE
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
