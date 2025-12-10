import { Project } from '../types';
import { config } from './config';

// NICOLAS: CONFIGURACIÓN DE RUTAS DE IMÁGENES
// Las rutas que comienzan con "/" buscan el archivo directamente en la carpeta "public".
// Por ejemplo: "/images/miel.jpg" busca en "public/images/miel.jpg".

const localProjects: Project[] = [
  {
    id: 1,
    title: "Miel Gibson | Redesign",
    category: "UX Research / UI Design",
    year: "2024",
    image: "/images/miel.jpg", 
    behanceUrl: "https://www.behance.net"
  },
  {
    id: 2,
    title: "ATEMPORAL:Volumen III Interstellar",
    category: "Diseño editorial",
    year: "2023",
    image: "/images/atemporal.jpg",
    behanceUrl: "https://www.behance.net/gallery/240073551/ATEMPORAL-Volumen-III-Interstellar"
  },
  {
    id: 3,
    title: "Infografía: Hollow Knight",
    category: "Pixel art / Diseño editoral",
    year: "2025",
    image: "/images/hollow.jpg",
    behanceUrl: "https://www.behance.net/gallery/224858357/Infografia-Hollow-Knight-BRIEF"
  },
  {
    id: 4,
    title: "Brochure: 'Conoce Tokio'",
    category: "Branding / Ilustración digital",
    year: "2025",
    image: "/images/tokio.png",
    behanceUrl: "https://www.behance.net/gallery/240015611/Conoce-Tokio-Brochure"
  }
];

export const getProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localProjects);
    }, 100); 
  });
};