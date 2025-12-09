import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl"
      >
        <h2 className="text-secondary text-lg md:text-xl font-medium mb-4 tracking-widest uppercase">
          Nicolas Pasten Contreras
        </h2>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
          UX/UI<br />
          DESIGNER<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            PORTFOLIO
          </span>
        </h1>
        <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed mt-8">
          Estudiante de último año enfocado en crear experiencias digitales intuitivas, modernas y funcionales.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-20 flex items-center gap-4"
      >
        <span className="text-sm uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;