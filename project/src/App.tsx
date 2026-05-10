import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';
import Portfolio from './components/Portfolio';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MusicToggle() {
  const [on, setOn] = useState(false);

  return (
    <button
      onClick={() => setOn(!on)}
      className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full glass flex items-center justify-center text-soft-silver/30 hover:text-white transition-all duration-300 group"
      title={on ? 'Mute ambient' : 'Play ambient'}
    >
      <div className="flex items-end gap-[2px] h-3.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-[2px] rounded-full transition-all duration-300 ${
              on ? 'bg-neon-violet/60' : 'bg-soft-silver/20'
            }`}
            style={{
              height: on ? `${8 + i * 4}px` : '3px',
            }}
          />
        ))}
      </div>
    </button>
  );
}

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      {loaded && (
        <>
          <CursorGlow />
          <Particles />
          <Navbar />
          <MusicToggle />

          <main className="relative z-10">
            <Hero />
            <SectionDivider />
            <Gallery />
            <SectionDivider />
            <VideoShowcase />
            <SectionDivider />
            <Portfolio />
            <SectionDivider />
            <SocialMedia />
            <SectionDivider />
            <About />
            <SectionDivider />
            {/*<Testimonials />*/}
            <SectionDivider />
            <Contact />
          <Footer />
          </main>
        </>
      )}
    </>
  );
}
