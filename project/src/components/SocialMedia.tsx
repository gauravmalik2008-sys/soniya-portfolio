import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Heart, MessageCircle, Users, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import insta1 from '../assets/insta1.png'
import insta2 from '../assets/insta2.png'
import insta3 from '../assets/insta3.png'
import insta4 from '../assets/insta4.png'
import insta5 from '../assets/insta5.png'
import insta6 from '../assets/insta6.png'
import ytube1 from '../assets/ytube1.png'
import ytube2 from '../assets/ytube2.png'
import ytube3 from '../assets/ytube3.png'

const igPosts = [
  { id: 1, src: insta1, likes: '24.5K', comments: '892' },
  { id: 2, src: insta2, likes: '31.2K', comments: '1.1K' },
  { id: 3, src: insta3, likes: '18.7K', comments: '645' },
  { id: 4, src: insta4, likes: '42.1K', comments: '2.3K' },
  { id: 5, src: insta5, likes: '27.8K', comments: '980' },
  { id: 6, src: insta6, likes: '35.4K', comments: '1.5K' },
];

const ytVideos = [
  { id: 1, title: 'Yt studio में 2 settings on कर दो | बस 10 दिन में चैनल monetize होगा || Subscribe kaise Badhaye view', views: '2.4M', thumb: ytube1},
  { id: 2, title: 'REVEALING HOW MUCH MONEY I MADE AS AN INFLUENCER', views: '5.1M', thumb: ytube2},
  { id: 3, title: 'MY CAREER JOURNEY IN INDIA: Full job history and previous salaries.', views: '1.8M', thumb: ytube3},
];

function FollowerCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView(0.3);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const format = (n: number) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toString();
  };

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl md:text-4xl font-bold gradient-text">{format(count)}</p>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-soft-silver/40 mt-1">{label}</p>
    </div>
  );
}

export default function SocialMedia() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="social" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-glow-pink/70 mb-4">Digital Presence</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Social</span>
          </h2>
        </motion.div>

        {/* Follower counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="glass rounded-2xl p-6 text-center group hover:glow-pink transition-all duration-500">
            <Instagram size={24} className="mx-auto mb-3 text-glow-pink/60 group-hover:text-glow-pink transition-colors" />
            <FollowerCounter target={62000} label="Instagram Followers" />
          </div>
          <div className="glass rounded-2xl p-6 text-center group hover:glow-blue transition-all duration-500">
            <Youtube size={24} className="mx-auto mb-3 text-red-400/60 group-hover:text-red-400 transition-colors" />
            <FollowerCounter target={1064} label="YouTube Subscribers" />
          </div>
          <div className="glass rounded-2xl p-6 text-center group hover:glow-violet transition-all duration-500">
            <Users size={24} className="mx-auto mb-3 text-neon-violet/60 group-hover:text-neon-violet transition-colors" />
            <FollowerCounter target={3000000} label="Instagram Reach" />
          </div>
          <div className="glass rounded-2xl p-6 text-center group hover:glow-violet transition-all duration-500">
            <Eye size={24} className="mx-auto mb-3 text-electric-blue/60 group-hover:text-electric-blue transition-colors" />
            <FollowerCounter target={4500000} label="Total Views" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Instagram mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-glow-pink via-neon-violet to-electric-blue p-[2px]">
                <div className="w-full h-full rounded-full bg-matte flex items-center justify-center">
                  <span className="font-display text-lg font-bold gradient-text">SG</span>
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm">@exploringmywithin</p>
                <p className="font-mono text-[10px] text-soft-silver/40 tracking-wider">69K followers</p>
              </div>
              <a  href="https://instagram.com/exploringmywithin"  target="_blank"  rel="noopener noreferrer"  className="ml-auto px-4 py-1.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20 font-mono text-[10px] tracking-wider text-electric-blue hover:bg-electric-blue/20 transition-all duration-300 cursor-pointer"
>
  Follow
</a>  
            </div>

            <div className="grid grid-cols-3 gap-1.5 rounded-xl overflow-hidden">
              {igPosts.map((post) => (
                <div key={post.id} className="relative aspect-square group cursor-pointer overflow-hidden">
                  <img src={post.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-matte/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <span className="flex items-center gap-1 font-mono text-xs"><Heart size={12} /> {post.likes}</span>
                    <span className="flex items-center gap-1 font-mono text-xs"><MessageCircle size={12} /> {post.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* YouTube mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center">
                <Youtube size={24} className="text-red-400" />
              </div>
              <div>
                <p className="font-semibold text-sm">Tweedysony</p>
                <p className="font-mono text-[10px] text-soft-silver/40 tracking-wider">1.99k subscribers</p>
              </div>
              <a  href="https://www.youtube.com/@tweedysony3767"  target="_blank"  rel="noopener noreferrer"  className="ml-auto px-4 py-1.5 rounded-lg bg-red-400/10 border border-red-400/20 font-mono text-[10px] tracking-wider text-red-400 hover:bg-red-400/20 transition-all duration-300 cursor-pointer">
  Subscribe
</a>
            </div>

            <div className="space-y-4">
              {ytVideos.map((video) => (
                <div key={video.id} className="flex gap-4 group cursor-pointer">
                  <div className="relative w-40 flex-shrink-0 rounded-lg overflow-hidden aspect-video">
                    <img src={video.thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center bg-matte/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 py-1">
                    <p className="font-medium text-sm group-hover:text-neon-violet transition-colors line-clamp-2">{video.title}</p>
                    <p className="font-mono text-[10px] text-soft-silver/40 mt-1">{video.views} views</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
