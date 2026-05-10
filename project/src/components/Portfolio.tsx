import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Briefcase, Space } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { label: 'Brands', value: 48, suffix: '+', icon: Briefcase },
  { label: 'Campaigns', value: 120, suffix: '+', icon: Star },
];



const brands = ['Fabindia', 'W for Woman', 'Sugar Cosmetics', 'Nykaa', 'Kay Beauty', 'Louis Vuitton', 'Soch '];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView(0.3);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function Portfolio() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-glow-pink/70 mb-4">Career Highlights</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Portfolio</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 md:p-8 text-center group hover:glow-violet transition-all duration-500"
            >
              <stat.icon size={24} className="mx-auto mb-4 text-neon-violet/60 group-hover:text-neon-violet transition-colors" />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-soft-silver/50 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Brands marquee */}
        <div className="mb-24 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-soft-silver/30 text-center mb-8">Brands I\'ve Worked With</p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-matte to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-matte to-transparent z-10" />
              <div className="flex animate-[scroll_20s_linear_infinite]">
                {[...brands, ...brands].map((brand, i) => (
                  <span
                    key={`${brand}-${i}`}
                    className="flex-shrink-0 mx-8 font-display text-2xl md:text-3xl font-light text-soft-silver/20 hover:text-soft-silver/60 transition-colors duration-300 cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
}
