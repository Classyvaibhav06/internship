"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white font-[family-name:var(--font-outfit)]">
              Vaibhav<span className="text-amber-500">Ghoshi</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`text-sm font-bold transition-colors hover:text-amber-500 uppercase tracking-wide ${
                  pathname === link.path ? 'text-amber-500' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary py-2 px-6 ml-4">
              Let's Connect
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-amber-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 absolute w-full left-0 shadow-lg shadow-slate-900/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-bold uppercase tracking-wide ${
                  pathname === link.path ? 'text-amber-500 bg-slate-50 dark:bg-slate-900' : 'text-slate-600 dark:text-slate-300 hover:text-amber-500 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 mt-6">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-primary"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
