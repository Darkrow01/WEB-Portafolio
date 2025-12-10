// Este archivo maneja la configuración y las claves de API
// En Vercel, define tus variables de entorno en: Settings -> Environment Variables

// Función auxiliar para obtener variables de entorno de forma segura sin romper el build
// Esto funciona tanto para Vite (import.meta.env) como para Create-React-App/Next.js (process.env)
const getEnvVar = (key: string): string => {
  try {
    // 1. Intenta modo Vite (import.meta.env)
    // Usamos 'as any' para engañar a TypeScript y evitar errores de compilación si los tipos faltan
    if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
      const val = (import.meta as any).env[key];
      if (val) return val;
    }
    
    // 2. Intenta modo Node/Create-React-App (process.env)
    if (typeof process !== 'undefined' && process.env) {
      const val = process.env[key];
      if (val) return val;
    }
  } catch (e) {
    console.warn('Error leyendo variables de entorno', e);
  }
  return '';
};

export const config = {
  // Buscamos la variable con el prefijo VITE_ (estándar moderno) o REACT_APP_ (legacy)
  apiKey: getEnvVar('VITE_API_KEY') || getEnvVar('REACT_APP_API_KEY') || '',
};

// Función de utilidad para verificar si la API Key está configurada
export const checkApiKey = () => {
  if (!config.apiKey) {
    // Es normal en el portafolio demo no tener key, así que solo retornamos false
    console.log("Modo Demo: No se detectó API Key (VITE_API_KEY)");
    return false;
  }
  return true;
};