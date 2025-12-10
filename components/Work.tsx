import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, ImageOff } from 'lucide-react';
import { getProjects } from '../services/projectService';

const Work: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  // Resetear el estado de error cuando cambiamos de proyecto (hover)
  useEffect(() => {
    setImageError(false);
  }, [hoveredProject]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" className="py-20 px-6 md:px-20 relative" onMouseMove={handleMouseMove} ref={listRef}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-bold tracking-widest text-secondary uppercase mb-16 border-b border-gray-800 pb-4"
      >
        Trabajos seleccionados
      </motion.h2>

      <div className="flex flex-col">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-gray-800 hover:opacity-100 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            data-hover="true"
          >
            <div className="z-10 flex flex-col md:flex-row md:items-baseline gap-4 group-hover:translate-x-4 transition-transform duration-500 ease-out">
              <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                {project.title}
              </h3>
              <span className="text-gray-500 text-sm uppercase tracking-wider">{project.category}</span>
            </div>
            
            <div className="z-10 flex items-center gap-4 mt-4 md:mt-0 group-hover:-translate-x-4 transition-transform duration-500 ease-out">
              <span className="text-gray-500 font-mono">{project.year}</span>
              <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Floating Preview Image */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            className="pointer-events-none fixed z-20 hidden md:block w-[400px] h-[300px] overflow-hidden rounded-lg shadow-2xl border border-white/10"
            style={{
              left: 0,
              top: 0,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x + 20, // Offset from cursor
              y: mousePosition.y - 150 
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {/* Si hay URL válida y no hay error, mostramos la imagen. Si no, mostramos un cuadro gris. */}
            {hoveredProject.image && !imageError ? (
              <img 
                src={hoveredProject.image} 
                alt={hoveredProject.title} 
                className="w-full h-full object-cover grayscale contrast-125 bg-surface"
                onError={(e) => {
                  console.error(`❌ Error cargando imagen: ${hoveredProject.image}`);
                  setImageError(true);
                }}
              />
            ) : (
              <div className="w-full h-full bg-[#111] flex flex-col items-center justify-center text-gray-500 gap-2">
                <ImageOff size={32} strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest font-medium">Sin vista previa</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;