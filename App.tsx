import React, { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="bg-background min-h-screen text-primary selection:bg-white selection:text-black overflow-hidden">
      {!isMobile && <CustomCursor />}
      
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Footer />
      </div>
    </main>
  );
}

export default App;