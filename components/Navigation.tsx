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
        {/* LOGO SVG - Convertido desde las coordenadas de divs proporcionadas */}
        {/* ViewBox calculado basado en el ancho máximo (aprox 660px) y alto (156px) */}
        <svg 
          viewBox="0 0 660 156" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
        >
          {/* shape 1: width: 215.60, height: 156, left: 0, top: 0 */}
          <rect x="0" y="0" width="215.60" height="156" fill="currentColor" />
          
          {/* shape 2: width: 144, height: 156, left: 515.60, top: 0 */}
          <rect x="515.60" y="0" width="144" height="156" fill="currentColor" />
          
          {/* shape 3: width: 12, height: 12, left: 623.60, top: 12 */}
          <rect x="623.60" y="12" width="12" height="12" fill="currentColor" />
          
          {/* shape 4: width: 24, height: 72, left: 635.60, top: 0 */}
          <rect x="635.60" y="0" width="24" height="72" fill="currentColor" />
          
          {/* shape 5: width: 180, height: 156, left: 275.60, top: 0 */}
          <rect x="275.60" y="0" width="180" height="156" fill="currentColor" />
          
          {/* shape 6: width: 36, height: 36, left: 215.60, top: 120 */}
          <rect x="215.60" y="120" width="36" height="36" fill="currentColor" />
          
          {/* shape 7: width: 36, height: 36, left: 467.60, top: 120 */}
          <rect x="467.60" y="120" width="36" height="36" fill="currentColor" />
          
          {/* shape 8: width: 54.76, height: 54.76, left: 577.71, top: 52.12 */}
          <rect x="577.71" y="52.12" width="54.76" height="54.76" fill="currentColor" />
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