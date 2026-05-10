import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    id: 1,
    name: 'Marco Bellini',
    role: 'Creative Director, Vogue Italia',
    text: 'Soniya brings an extraordinary energy to every shoot. She doesn\'t just model — she transforms the entire atmosphere. One of the most compelling talents of her generation.',
    avatar: 'MB',
  },
  {
    id: 2,
    name: 'Sophie Laurent',
    role: 'Brand Director, Chanel Beauty',
    text: 'Working with Soniya on the Chanel Beauty campaign was a masterclass in professionalism and artistry. She understands brand DNA intuitively and elevates every frame.',
    avatar: 'SL',
  },
  {
    id: 3,
    name: 'James Rodriguez',
    role: 'Photographer, Harper\'s Bazaar',
    text: 'In twenty years of fashion photography, I\'ve never worked with someone who commands the lens like Soniya. She makes my job effortless and the results extraordinary.',
    avatar: 'JR',
  },
  {
    id: 4,
    name: 'Yuki Tanaka',
    role: 'Designer, Comme des Garcons',
    text: 'Soniya embodies the future of fashion. She bridges the gap between traditional haute couture and the digital age with grace and authenticity.',
    avatar: 'YT',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useInView(0.1);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-neon-violet/70 mb-4">What They Say</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Testimonials</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -5 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 md:p-12 text-center perspective-1000"
            >
              <Quote size={32} className="mx-auto mb-6 text-neon-violet/20" />

              <p className="font-display text-lg md:text-xl leading-relaxed text-soft-silver/80 mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon-violet to-glow-pink p-[1.5px]">
                  <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center">
                    <span className="font-mono text-xs font-semibold">{testimonials[current].avatar}</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{testimonials[current].name}</p>
                  <p className="font-mono text-[10px] tracking-wider text-soft-silver/40">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-soft-silver/60 hover:text-white hover:glow-violet transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-neon-violet glow-violet' : 'bg-soft-silver/20 hover:bg-soft-silver/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-soft-silver/60 hover:text-white hover:glow-violet transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
