import React from 'react';
import { motion } from 'framer-motion';
import { Figma, PenTool, Image, LayoutTemplate } from 'lucide-react';

const About: React.FC = () => {
  const tools = [
    { name: 'Figma', icon: <Figma size={20} /> },
    { name: 'Adobe Photoshop', icon: <Image size={20} /> },
    { name: 'Adobe Illustrator', icon: <PenTool size={20} /> },
    { name: 'Adobe InDesign', icon: <LayoutTemplate size={20} /> },
    { name: 'Prototyping', icon: null },
    { name: 'Wireframing', icon: null },
    { name: 'User Research', icon: null },
    { name: 'HTML/CSS', icon: null },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Col: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-8">
            Sobre mi
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-8">
            Hola, soy <span className="text-white font-medium">Nicolas Pasten Contreras</span>. 
            Como estudiante de último año de Diseño UX/UI, me apasiona transformar problemas complejos en interfaces simples y elegantes.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Mi enfoque combina la investigación profunda del usuario con un diseño visual meticuloso. Creo firmemente que el buen diseño no solo se ve bien, sino que funciona a la perfección para quien lo usa.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Actualmente busco oportunidades para aplicar mis habilidades en equipos creativos y desafiantes.
          </p>
        </motion.div>

        {/* Right Col: Skills & Tools */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-8">
            Herramientas & Habilidades
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors duration-300 cursor-default group"
              >
                {tool.icon && <span className="group-hover:scale-110 transition-transform">{tool.icon}</span>}
                <span className="text-sm font-medium uppercase tracking-wide">{tool.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-gray-800 bg-[#0f0f0f]">
            <h3 className="text-xl text-white font-medium mb-4">Aptitudes</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Pensamiento Crítico y Resolución de Problemas</li>
              <li>Trabajo en Equipo y Comunicación Efectiva</li>
              <li>Adaptabilidad y Aprendizaje Continuo</li>
              <li>Atención al Detalle (Pixel Perfect)</li>
              <li>Metodologías Ágiles (Scrum básico)</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;