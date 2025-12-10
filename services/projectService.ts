import { Project } from '../types';
import { config } from './config';

// NICOLAS: Actualización de rutas.
// Si tus imágenes están en 'src/images/', usamos esa ruta.

const localProjects: Project[] = [
  {
    id: 1,
    title: "Miel Gibson | Redesign",
    category: "UX Research / UI Design",
    year: "2024",
    image: "/src/images/miel.jpg", 
    behanceUrl: "https://www.behance.net"
  },
  {
    id: 2,
    title: "ATEMPORAL:Volumen III Interstellar",
    category: "Diseño editorial",
    year: "2023",
    image: "/src/images/atemporal.jpg",
    behanceUrl: "https://www.behance.net/gallery/240073551/ATEMPORAL-Volumen-III-Interstellar"
  },
  {
    id: 3,
    title: "Infografía: Hollow Knight",
    category: "Pixel art / Diseño editoral",
    year: "2025",
    image: "/src/images/hollow.jpg",
    behanceUrl: "https://www.behance.net/gallery/224858357/Infografia-Hollow-Knight-BRIEF"
  },
  {
    id: 4,
    title: "Brochure: 'Conoce Tokio'",
    category: "Branding / Ilustración digital",
    year: "2025",
    // Corregido a .png
    image: "/src/images/tokio.png",
    behanceUrl: "https://www.behance.net/gallery/240015611/Conoce-Tokio-Brochure"
  }
];

export const getProjects = async (): Promise<Project[]> => {
  console.log("Cargando proyectos...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localProjects);
    }, 100); 
  });
};