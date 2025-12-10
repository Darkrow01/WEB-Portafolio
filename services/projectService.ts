import { Project } from '../types';
import { config } from './config';

// Simulamos una base de datos local
// En el futuro, puedes reemplazar esto con una llamada fetch() usando config.apiKey
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
  // Aquí podrías usar la API Key para autenticarte si fuera necesario
  // console.log("Usando API Key:", config.apiKey);

  // Simulamos un pequeño retraso de red (opcional)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localProjects);
    }, 100); 
  });
};