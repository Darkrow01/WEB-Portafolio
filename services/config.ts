// Este archivo maneja la configuración y las claves de API
// En Vercel, define tus variables de entorno en: Settings -> Environment Variables

const ai = new GoogleGenAI({ apiKey: import.meta,env.VITE_API_KEY})

// Función de utilidad para verificar si la API Key está configurada
export const checkApiKey = () => {
  if (!config.apiKey) {
    console.warn('API Key no encontrada. Asegúrate de configurarla en Vercel.');
    return false;
  }
  return true;
};