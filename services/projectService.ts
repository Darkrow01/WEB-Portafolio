import { Project } from '../types';

// NICOLAS: INSTRUCCIONES PARA DROPBOX
// 1. Sube tu imagen a Dropbox.
// 2. Dale a "Compartir" -> "Copiar vínculo" (Copy Link).
// 3. Pega ese vínculo tal cual en el campo 'image' abajo.
// 4. La función 'formatDropboxUrl' se encarga de convertirlo automáticamente para que funcione en la web.

const formatDropboxUrl = (url: string): string => {
  if (!url) return '';
  // Si es un link de dropbox, forzamos la descarga directa (raw=1) para que funcione como imagen
  if (url.includes('dropbox.com')) {
    return url.replace('dl=0', 'raw=1');
  }
  return url;
};

const localProjects: Project[] = [
  {
    id: 1,
    title: "Miel Gibson | Redesign",
    category: "UX Research / UI Design",
    year: "2024",
    // PEGA AQUI TU LINK DE DROPBOX ENTRE LAS COMILLAS
    image: formatDropboxUrl("https://www.dropbox.com/scl/fi/25zysv2kc9f3rlo811ru7/01.-Portada.jpg?rlkey=fs1h2654ocnirt9axitjgxkuh&st=78x6fc6b&raw=0"), 
    behanceUrl: "https://www.behance.net/gallery/240223035/UX-Miel-Gibson?"
  },
  {
    id: 2,
    title: "ATEMPORAL:Volumen III Interstellar",
    category: "Diseño editorial",
    year: "2023",
    // PEGA AQUI TU LINK DE DROPBOX
    image: formatDropboxUrl("https://www.dropbox.com/scl/fi/q503b965m7l4txy5z0hhv/cover-book-mockup-on-armchair-v2-front-view-Recuperado.jpg?rlkey=ci03i3mpvjlk2636lqvd4xihj&st=ko02pry6&raw=1"),
    behanceUrl: "https://www.behance.net/gallery/240073551/ATEMPORAL-Volumen-III-Interstellar"
  },
  {
    id: 3,
    title: "Infografía: Hollow Knight",
    category: "Pixel art / Diseño editoral",
    year: "2025",
    // PEGA AQUI TU LINK DE DROPBOX
    image: formatDropboxUrl("https://www.dropbox.com/scl/fi/v9icayoj3usf84a1wwc6u/Mesa-de-trabajo-1-copia.png?rlkey=hs4ue42are7sbljga02og3q2w&st=2psq6sj0&raw=1"),
    behanceUrl: "https://www.behance.net/gallery/224858357/Infografia-Hollow-Knight-BRIEF"
  },
  {
    id: 4,
    title: "Brochure: 'Conoce Tokio'",
    category: "Branding / Ilustración digital",
    year: "2025",
    // PEGA AQUI TU LINK DE DROPBOX
    image: formatDropboxUrl("https://www.dropbox.com/scl/fi/fttady4tf6pdbtyzqldsl/Mesa-de-trabajo-1-2x-100.jpg?rlkey=j5rsbdrobn1dt2wq3creir53b&st=0xylzblj&raw=1"),
    behanceUrl: "https://www.behance.net/gallery/240015611/Conoce-Tokio-Brochure"
  },
  {
    id: 5,
    title: "Vivo Duoc",
    category: "UX Research",
    year: "2024",
    // PEGA AQUI TU LINK DE DROPBOX PARA VIVO DUOC
    image: formatDropboxUrl("https://www.dropbox.com/scl/fi/scoe2vv0w4ly154lk9fqf/17.jpg?rlkey=iyt3ix9k8pt7d7r7gb32r7ag6&st=impn2i07&raw=1"),
    behanceUrl: "https://www.behance.net/gallery/236925563/UX-Rearch-Duoc-UC"
  }
];

export const getProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localProjects);
    }, 100); 
  });
};