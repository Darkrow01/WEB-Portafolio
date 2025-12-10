import { Project } from '../types';
import { config } from './config';

// Simulamos una base de datos local
const localProjects: Project[] = [
  {
    id: 1,
    title: "Miel Gibson | Redesign",
    category: "UX Research / UI Design",
    year: "2024",
    image: "/images/miel-gibson.jpg", 
    behanceUrl: "https://www.behance.net"
  },
  {
    id: 2,
    title: "ATEMPORAL:Volumen III Interstellar",
    category: "Diseño editorial",
    year: "2023",
    image: "/images/banking-app.jpg",
    behanceUrl: "https://www.behance.net/gallery/240073551/ATEMPORAL-Volumen-III-Interstellar"
  },
  {
    id: 3,
    title: "Infografía: Hollow Knight",
    category: "Pixel art / Diseño editoral",
    year: "2025",
    image: "/images/hollow-knight.jpg",
    behanceUrl: "https://www.behance.net/gallery/224858357/Infografia-Hollow-Knight-BRIEF"
  },
  {
    id: 4,
    title: "Brochure: 'Conoce Tokio'",
    category: "Branding / Ilustración digital",
    year: "2025",
    image: "/images/tokyo-brochure.jpg",
    behanceUrl: "https://www.behance.net/gallery/240015611/Conoce-Tokio-Brochure"
  }
];

export const getProjects = async (): Promise<Project[]> => {
  // NOTA PARA NICOLAS: 
  // Esta función NO usa la API Key actualmente, usa los datos de arriba.
  // Si la página se ve, es que todo está bien.
  console.log("Cargando proyectos locales...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localProjects);
    }, 100); 
  });
};