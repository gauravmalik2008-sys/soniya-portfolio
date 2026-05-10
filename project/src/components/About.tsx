import { motion } from 'framer-motion';
import { MapPin, Ruler, Sparkles, Camera, Palette, Dumbbell, Globe, Music } from 'lucide-react';
import { useInView } from '../hooks/useInView'; 
import Model from '../assets/Model.jpg'

const specialties = [
  { icon: Camera, label: 'High Fashion' },
  { icon: Palette, label: 'Editorial' },
  { icon: Dumbbell, label: 'Fitness' },
  { icon: Globe, label: 'Travel' },
  { icon: Music, label: 'Music Videos' },
  { icon: Sparkles, label: 'Beauty' },
];

const tags = [
  'Runway Expert', 'Brand Strategist', 'Content Creator', 'Fitness Enthusiast',
  'World Traveler', 'Skincare Founder', 'Philanthropist', 'Trendsetter',
];

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-electric-blue/70 mb-4">The Story</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="gradient-text">About</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
              <img
                src={Model}
                alt="Soniya Garg"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/5 rounded-3xl" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-4 md:right-0 glass rounded-2xl p-5 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={12} className="text-neon-violet" />
                <span className="font-mono text-[10px] tracking-wider uppercase text-soft-silver/60">Based in</span>
              </div>
              <p className="font-display text-lg font-semibold">Noida, India</p>
            </motion.div>

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -left-4 md:left-0 glass rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <Ruler size={14} className="text-electric-blue" />
                <div>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-soft-silver/40">Height</p>
                  <p className="font-semibold text-sm">5'4" / 156cm</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Soniya <span className="gradient-text italic">Garg</span>
            </h3>

            <div className="space-y-4 text-soft-silver/60 leading-relaxed mb-8">
              <p>
Soniya Garg is a fashion, beauty, and lifestyle creator known for blending modern style with authentic digital storytelling. From fashion hauls and beauty transformations to lifestyle content and brand collaborations, she has built a strong presence across Instagram and YouTube with content that connects naturally with her audience.

          </p>
              <p>
                With a growing digital community and collaborations across fashion and beauty brands, Soniya brings creativity, confidence, and a strong visual identity to every project combining influencer culture with a premium fashion-forward aesthetic.    
              </p>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-soft-silver/30 mb-4">Specialties</p>
              <div className="grid grid-cols-3 gap-3">
                {specialties.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="glass rounded-xl p-3 text-center group hover:glow-violet transition-all duration-300 cursor-default"
                  >
                    <spec.icon size={18} className="mx-auto mb-2 text-neon-violet/50 group-hover:text-neon-violet transition-colors" />
                    <p className="font-mono text-[10px] tracking-wider uppercase text-soft-silver/60 group-hover:text-white transition-colors">{spec.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-soft-silver/30 mb-4">Identity</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full glass font-mono text-[10px] tracking-wider text-soft-silver/50 hover:text-white hover:border-neon-violet/30 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
