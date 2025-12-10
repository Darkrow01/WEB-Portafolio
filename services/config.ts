// Este archivo maneja la configuración y las claves de API
// En Vercel, define tus variables de entorno en: Settings -> Environment Variables

export const config = {
  // Manejo seguro de variables de entorno para Vite (import.meta.env)
  // El uso de 'as any' evita errores de TypeScript si los tipos no están definidos
  apiKey: (import.meta as any).env?.VITE_API_KEY || '',
  
  // URL base por si te conectas a un backend propio
  apiUrl: (import.meta as any).env?.VITE_API_URL || 'http://localhost:3000/api',
};

// Función de utilidad para verificar si la API Key está configurada
export const checkApiKey = () => {
  if (!config.apiKey) {
    // Es normal en el portafolio demo no tener key, así que solo retornamos false
    return false;
  }
  return true;
};