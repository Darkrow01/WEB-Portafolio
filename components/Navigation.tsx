import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Work', href:"https://www.behance.net/nicolaspasten3", external: true },
    { name: 'Sobre mi', href:"#about", external: false },
    { name: 'Contacto', href:"https://www.linkedin.com/in/nicolaspas-con", external: true },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full flex justify-between items-center z-40 text-white transition-all duration-300 ${
        isScrolled 
          ? 'py-4 px-6 md:px-20 bg-black/30 backdrop-blur-md border-b border-white/5 shadow-sm' 
          : 'py-6 px-6 md:py-10 md:px-20 mix-blend-difference'
      }`}
    >
      <a href="/" className="block group text-white" data-hover="true" aria-label="Inicio">
        {/* LOGO SVG INLINE - Optimizado para control de color y nitidez */}
        <svg 
          viewBox="0 0 659.6 156" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          fill="currentColor"
        >
          <g>
            <polygon points="215.6 0 179.6 0 167.6 0 131.6 0 131.6 12 155.6 12 155.6 24 167.6 24 167.6 96 155.6 96 155.6 84 143.6 84 143.6 72 131.6 72 131.6 48 119.6 48 119.6 36 107.6 36 107.6 24 95.6 24 95.6 12 84 12 84 0 0 0 0 12 22.6 12 22.6 24 35.6 24 35.6 132 23.6 132 23.6 144 0 144 0 156 84 156 84 144 59.6 144 59.6 132 47.6 132 47.6 36 59.6 36 59.6 48 71.6 48 71.6 72 83.6 72 83.6 84 95.6 84 95.6 96 107.6 96 107.6 108 119.6 108 119.6 132 131.6 132 131.6 144 143.6 144 143.6 156 179.6 156 179.6 144 179.6 132 179.6 108 179.6 24 191.6 24 191.6 12 215.6 12 215.6 0"/>
            <polygon points="563.6 0 563.6 12 539.6 12 539.6 24 527.6 24 527.6 36 515.6 36 515.6 120 527.6 120 527.6 132 539.6 132 539.6 144 563.6 144 563.6 156 623.6 156 623.6 144 647.6 144 647.6 132 659.6 132 659.6 120 659.6 96 647.6 96 647.6 120 635.6 120 623.6 120 623.6 132 611.6 132 611.6 144 587.6 144 587.6 132 575.6 132 575.6 120 563.6 120 563.6 36 575.6 36 575.6 24 587.6 24 587.6 12 623.6 12 623.6 0 563.6 0"/>
            <rect x="623.6" y="12" width="12" height="12"/>
            <polygon points="647.6 0 647.6 24 635.6 24 635.6 36 635.6 48 647.6 48 647.6 72 659.6 72 659.6 36 659.6 24 659.6 0 647.6 0"/>
            <path d="M443.6,0h-168v12h12v12h12v108h-12v12h-12v12h108v-12h-24v-12h-12v-48h96v-12h12V12h-12V0ZM407.6,60v12h-60V12h60v12h12v36h-12Z"/>
            <rect x="215.6" y="120" width="36" height="36"/>
            <rect x="467.6" y="120" width="36" height="36"/>
            <path d="M630.89,79.16c-13.88-.42-25.04-11.57-25.46-25.46l-.04-1.29c-.01-.39-.59-.39-.6,0l-.04,1.29c-.42,13.88-11.57,25.04-25.46,25.46l-1.29.04c-.39.01-.39.59,0,.6l1.29.04c13.88.42,25.04,11.57,25.46,25.46l.04,1.29c.01.39.59.39.6,0l.04-1.29c.42-13.88,11.57-25.04,25.46-25.46l1.29-.04c.39-.01.39-.59,0-.6l-1.29-.04Z"/>
          </g>
        </svg>
      </a>

      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="text-sm font-medium uppercase tracking-widest hover:text-gray-300 transition-colors"
              data-hover="true"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;