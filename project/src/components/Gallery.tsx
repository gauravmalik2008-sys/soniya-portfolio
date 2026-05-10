import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import Model1 from '../assets/Model1.jpg'
import Model2 from '../assets/Model2.jpg'
import Model3 from '../assets/Model3.jpg'
import Model4 from '../assets/Model4.jpg'
import Model5 from '../assets/Model5.jpg'
import Model6 from '../assets/Model6.jpg'
import Model7 from '../assets/Model7.jpg'
import Model8 from '../assets/Model8.jpg'
import Model9 from '../assets/Model9.jpg'
import Model10 from '../assets/Model10.jpg'
import Model11 from '../assets/Model11.jpg'
import Model12 from '../assets/Model12.jpg' 

const categories = ['All', 'Fashion', 'Lifestyle', 'Editorial', 'Fitness', 'Travel'];

const images = [
 { id: 1, src: Model1, category: 'Fashion', title: 'Ethnic Elegance', aspect: 'tall' },
  { id: 2, src: Model2, category: 'Lifestyle', title: 'Golden Threads', aspect: 'tall' },
  { id: 3, src: Model3, category: 'Editorial', title: 'Traditional Beauty', aspect: 'tall' },
  { id: 4, src: Model4, category: 'Fashion', title: 'Radiant Pose', aspect: 'normal' },
  { id: 5, src: Model5, category: 'Lifestyle', title: 'Modern Edge', aspect: 'normal' },
  { id: 6, src: Model6, category: 'Fashion', title: 'Statement Look', aspect: 'wide' },
  { id: 7, src: Model7, category: 'Editorial', title: 'Vibrant Style', aspect: 'tall' },
  { id: 8, src: Model8, category: 'Lifestyle', title: 'Poised Elegance', aspect: 'wide' },
  { id: 9, src: Model9, category: 'Fashion', title: 'Bold Expression', aspect: 'normal' },
  { id: 10, src: Model10, category: 'Lifestyle', title: 'Contemporary Chic', aspect: 'tall' },
  { id: 11, src: Model11, category: 'Editorial', title: 'Signature Style', aspect: 'normal' },
  { id: 12, src: Model12, category: 'Fashion', title: 'Timeless Grace', aspect: 'wide' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.1);

  const filtered = activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-neon-violet/70 mb-4">Curated Collection</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Gallery</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-neon-violet/20 to-glow-pink/20 text-white border border-neon-violet/30 glow-violet'
                  : 'glass text-soft-silver/60 hover:text-white hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid group relative cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setLightbox(img.id)}
              >
                <div className={`relative overflow-hidden rounded-2xl ${
                  img.aspect === 'tall' ? 'aspect-[3/4]' : img.aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                }`}>
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-matte/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-500" />

                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neon-violet/80 mb-1">{img.category}</p>
                    <p className="font-display text-lg font-semibold">{img.title}</p>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                      <ZoomIn size={14} className="text-white/70" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-matte/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images.find((img) => img.id === lightbox)?.src || ''}
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
