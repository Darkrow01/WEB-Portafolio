import React from 'react';

export const ProjectArt: React.FC<{ id: number }> = ({ id }) => {
  switch (id) {
    case 1: // Miel Gibson
      return (
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover bg-neutral-900">
          <rect width="800" height="600" fill="#171717"/>
          <circle cx="400" cy="300" r="200" fill="url(#paint0_radial_miel)" fillOpacity="0.3"/>
          <path d="M400 200L486.603 250V350L400 400L313.397 350V250L400 200Z" stroke="#F59E0B" strokeWidth="4"/>
          <text x="400" y="520" fontFamily="sans-serif" fontSize="24" textAnchor="middle" fill="#555" letterSpacing="0.2em">MIEL GIBSON</text>
          <defs>
            <radialGradient id="paint0_radial_miel" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 300) rotate(90) scale(200)">
              <stop stopColor="#F59E0B"/>
              <stop offset="1" stopColor="#171717" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      );
    case 2: // Atemporal
      return (
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover bg-slate-900">
          <rect width="800" height="600" fill="#0F172A"/>
          <circle cx="600" cy="100" r="2" fill="white" fillOpacity="0.6"/>
          <circle cx="100" cy="500" r="2" fill="white" fillOpacity="0.4"/>
          <circle cx="700" cy="450" r="3" fill="white" fillOpacity="0.5"/>
          <circle cx="200" cy="150" r="1" fill="white" fillOpacity="0.8"/>
          <circle cx="400" cy="300" r="180" fill="url(#paint0_radial_atemporal)" fillOpacity="0.2"/>
          <circle cx="400" cy="300" r="100" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="8 8" strokeOpacity="0.3"/>
          <circle cx="400" cy="300" r="140" stroke="#E2E8F0" strokeWidth="1" strokeOpacity="0.1"/>
          <text x="400" y="520" fontFamily="sans-serif" fontSize="24" textAnchor="middle" fill="#64748B" letterSpacing="0.2em">INTERSTELLAR</text>
          <defs>
            <radialGradient id="paint0_radial_atemporal" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 300) rotate(90) scale(180)">
              <stop stopColor="#38BDF8"/>
              <stop offset="1" stopColor="#0F172A" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      );
    case 3: // Hollow Knight
      return (
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover bg-gray-900">
          <rect width="800" height="600" fill="#111827"/>
          <rect width="800" height="600" fill="url(#paint0_linear_hollow)" fillOpacity="0.2"/>
          <path d="M400 250C400 250 350 300 350 350C350 380 370 400 400 400C430 400 450 380 450 350C450 300 400 250 400 250Z" stroke="white" strokeWidth="2" strokeOpacity="0.8"/>
          <circle cx="385" cy="340" r="8" fill="white"/>
          <circle cx="415" cy="340" r="8" fill="white"/>
          <text x="400" y="520" fontFamily="sans-serif" fontSize="24" textAnchor="middle" fill="#9CA3AF" letterSpacing="0.2em">HOLLOW KNIGHT</text>
          <defs>
            <linearGradient id="paint0_linear_hollow" x1="400" y1="0" x2="400" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" stopOpacity="0"/>
              <stop offset="1" stopColor="#1E3A8A"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 4: // Tokio
      return (
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover bg-zinc-900">
          <rect width="800" height="600" fill="#18181B"/>
          <circle cx="400" cy="300" r="120" fill="#DC2626"/>
          <rect x="0" y="0" width="800" height="600" fill="url(#noise)" fillOpacity="0.05"/>
          <text x="400" y="520" fontFamily="sans-serif" fontSize="24" textAnchor="middle" fill="#555" letterSpacing="0.2em">TOKIO BROCHURE</text>
          <defs>
            <filter id='noise'>
              <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch'/>
            </filter>
          </defs>
          <rect width='100%' height='100%' filter='url(#noise)' opacity='0.05'/>
        </svg>
      );
    default:
      return (
        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-gray-500">
           <span className="text-xs uppercase tracking-widest font-medium">No Preview</span>
        </div>
      );
  }
};
