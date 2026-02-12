import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Moon, Sun, Languages } from 'lucide-react';
import { getContent, Language } from '../data';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  isDark: boolean;
  setIsDark: (d: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const content = getContent(lang);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.navigation.about, href: '#about' },
    { name: content.navigation.research, href: '#research' },
    { name: content.navigation.projects, href: '#projects' },
    { name: content.navigation.contact, href: '#contact' },
  ];

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-wider">
              {content.personalInfo.name}<span className="text-primary-600 dark:text-primary-500">.dev</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-700 pl-6">
              <button 
                onClick={toggleLang}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors font-medium text-sm flex items-center gap-1"
                title="Switch Language"
              >
                <Languages size={18} />
                <span>{lang === 'en' ? 'CN' : 'EN'}</span>
              </button>
              
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                title="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a 
                href={content.personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="text-slate-600 dark:text-slate-300"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
             <button 
                onClick={() => { toggleLang(); setIsOpen(false); }}
                className="w-full text-left text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Switch to {lang === 'en' ? 'Chinese' : 'English'}
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;