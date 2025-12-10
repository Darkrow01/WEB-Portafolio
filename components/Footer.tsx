import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 md:px-20 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
      <div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          LET'S WORK<br />TOGETHER
        </h2>
        <a 
          href="mailto:nicolaspastencontreras@gmail.com" 
          className="text-xl text-gray-400 hover:text-white underline underline-offset-8 decoration-gray-700 hover:decoration-white transition-all"
          data-hover="true"
        >
          nicolaspastencontreras@gmail.com
        </a>
      </div>

      <div className="flex flex-col items-start md:items-end gap-4">
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/nicolas-pasten-contreras-a9a114254" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors group" data-hover="true">
            <div 
              className="w-6 h-6 bg-current" 
              style={{ 
                maskImage: 'url(/images/linkedin.svg)', 
                WebkitMaskImage: 'url(/images/linkedin.svg)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
              }} 
            />
          </a>
          <a href="https://www.behance.net/nicolaspasten3" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors group" data-hover="true">
            <div 
              className="w-6 h-6 bg-current" 
              style={{ 
                maskImage: 'url(/images/behance.svg)', 
                WebkitMaskImage: 'url(/images/behance.svg)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
              }} 
            />
          </a>
          <a href="https://www.instagram.com/so.fvcking.dead" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors" data-hover="true">
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          © {new Date().getFullYear()} Nicolas Pasten Contreras. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;