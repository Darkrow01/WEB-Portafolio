import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 md:px-20 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
      <div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          LET'S WORK<br />TOGETHER
        </h2>
        <a 
          href="mailto:nicolas.pasten@example.com" 
          className="text-xl text-gray-400 hover:text-white underline underline-offset-8 decoration-gray-700 hover:decoration-white transition-all"
          data-hover="true"
        >
          nicolas.pasten@email.com
        </a>
      </div>

      <div className="flex flex-col items-start md:items-end gap-4">
        <div className="flex gap-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors" data-hover="true">
            <Linkedin size={24} />
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors" data-hover="true">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="lucide lucide-behance"
            >
              <path d="M22 7h-7v2h7V7Zm-5.83 5.34c0-1.44-1.1-2.34-2.87-2.34-1.9 0-3.15 1.4-3.15 3.37 0 1.94 1.25 3.44 3.4 3.44 1.63 0 2.63-.88 2.85-2.12h-1.6c-.16.5-.56.81-1.22.81-.72 0-1.22-.5-1.25-1.31h4.22c0-.38.03-.78.03-1.06 0-.31-.03-.63-.03-.78Zm-2.87-1.06c.66 0 1.12.37 1.19 1.12h-2.31c.09-.75.63-1.12 1.12-1.12ZM7.72 14.84H4.59v-2.03h2.94c1.19 0 1.69-.53 1.69-1.41 0-.91-.66-1.34-1.63-1.34H4.59V8.4h2.84c1.03 0 1.53-.47 1.53-1.19 0-.84-.59-1.22-1.5-1.22H2.5v12.5h5.56c1.5 0 2.47-.69 2.47-2.06 0-1.16-.78-1.59-1.78-1.59h-.03Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors" data-hover="true">
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