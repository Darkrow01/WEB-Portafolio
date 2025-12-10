import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Work', href:"https://www.behance.net/nicolaspasten3"},
    { name: 'Sobre mi', href:"#about"},
    { name: 'Contacto', href:"https://www.linkedin.com/in/nicolaspas-con"},
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
      <a href="/" className="block group" data-hover="true">
        {!logoError ? (
          <img 
            src="/images/logo.png" 
            alt="Nicolas Pasten Contreras Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={() => setLogoError(true)}
          />
        ) : (
          // Logo Tipográfico de Respaldo (Diseño minimalista por si falla la imagen)
          <div className="flex items-center gap-1.5 font-bold text-xl tracking-tighter cursor-pointer select-none">
            <span className="text-white">N</span>
            <span className="w-1 h-1 bg-white rounded-full mt-0.5 opacity-50"></span>
            <span className="text-white">P</span>
            <span className="w-1 h-1 bg-white rounded-full mt-0.5 opacity-50"></span>
            <span className="text-white">C</span>
          </div>
        )}
      </a>

      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
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