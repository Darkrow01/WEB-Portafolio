// Este archivo maneja la configuración y las claves de API
// En Vercel, define tus variables de entorno en: Settings -> Environment Variables

export const config = {
  // En aplicaciones Vite/React modernas, las variables expuestas al cliente deben empezar con VITE_
  // Si usas Create React App, usa REACT_APP_API_KEY
  apiKey: import.meta.env.VITE_API_KEY || process.env.REACT_APP_API_KEY || '',
  
  // URL base por si te conectas a un backend propio
  apiUrl: process.env.VITE_API_URL || 'http://localhost:3000/api',
};

// Función de utilidad para verificar si la API Key está configurada
export const checkApiKey = () => {
  if (!config.apiKey) {
    console.warn('API Key no encontrada. Asegúrate de configurarla en Vercel.');
    return false;
  }
  return true;
};
