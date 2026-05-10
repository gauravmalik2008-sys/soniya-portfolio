import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const videos = [
  {
    id: 1,
    thumb: "https://img.youtube.com/vi/OZrveKA6eME/maxresdefault.jpg",
    title: "Hair Botox Treatment",
    duration: "3:42",
    url: "https://www.youtube.com/watch?v=OZrveKA6eME",
  },

  {
    id: 2,
    thumb: "https://img.youtube.com/vi/o5vSaKNIm6Q/maxresdefault.jpg",
    title: "Huge Navratri Shopping Haul ",
    duration: "5:15",
    url: "https://www.youtube.com/watch?v=o5vSaKNIm6Q",
  },

  {
    id: 3,
    thumb: "https://img.youtube.com/vi/UxM29F6V84E/maxresdefault.jpg",
    title: "Yt studio में 2 settings on कर दो ",
    duration: "2:30",
    url: "https://www.youtube.com/watch?v=UxM29F6V84E",
  },

  {
    id: 4,
    thumb: "https://img.youtube.com/vi/oejChiNoFEs/maxresdefault.jpg",
    title: "Huge Fashion Haul | Party Dresses, Birthday Dresses",
    duration: "4:10",
    url: "https://www.youtube.com/watch?v=oejChiNoFEs",
  },
];

export default function VideoShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.1);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = dir === 'left' ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="videos" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-electric-blue/70 mb-4">Video Content</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Showreel</span>
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-soft-silver/60 hover:text-white hover:glow-violet transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-soft-silver/60 hover:text-white hover:glow-blue transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[360px] snap-start group cursor-pointer"
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(video.url, "_blank")}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-4">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-matte/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={hoveredId === video.id ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.7 }}
                    className="w-14 h-14 rounded-full glass-strong flex items-center justify-center glow-violet"
                  >
                    <Play size={20} className="text-white ml-0.5" fill="white" />
                  </motion.div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-matte/80 backdrop-blur-sm font-mono text-[10px] text-soft-silver/80">
                  {video.duration}
                </div>

                {/* Trending badge */}
                {video.trending && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-glow-pink/20 to-neon-violet/20 backdrop-blur-sm border border-glow-pink/20">
                    <TrendingUp size={10} className="text-glow-pink" />
                    <span className="font-mono text-[9px] tracking-wider uppercase text-glow-pink">Trending</span>
                  </div>
                )}
              </div>

              <h3 className="font-display text-base font-semibold mb-1 group-hover:text-neon-violet transition-colors duration-300">
                {video.title}
              </h3>
              <p className="font-mono text-xs text-soft-silver/50">{video.views} views</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
