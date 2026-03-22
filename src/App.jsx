import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Footer from './components/ui/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return (
    <div className="bg-background min-h-screen text-text selection:bg-primary/20 selection:text-text font-body overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
