import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SectionTitle from './components/SectionTitle';
import ResearchCard from './components/ResearchCard';
import ProjectCard from './components/ProjectCard';
import { getContent, Language } from './data';
import { Github, Mail, MapPin, Trophy, Terminal, Award } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isDark, setIsDark] = useState(true);
  const [currentCard, setCurrentCard] = useState(0);

  // Initialize theme based on preference or default to dark
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 4); // 4 cards total
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = getContent(lang);

  // Define the rotating cards
  const heroCards = [
    {
      type: 'text',
      content: (
        <div className="text-center p-8">
          <Terminal size={48} className="text-primary-500 mx-auto mb-4" />
          <p className="font-mono text-sm text-primary-600 dark:text-primary-300">
            &lt;Developer /&gt;<br/>
            &lt;Researcher /&gt;<br/>
            &lt;Student /&gt;
          </p>
        </div>
      )
    },
    {
      type: 'image',
      src: '/images/about/1.png',
      alt: 'The Engineer'
    },
    {
      type: 'image',
      src: '/images/about/2.png',
      alt: 'Still Life with Skeleton Rig and Raspberry Pi'
    },
    {
      type: 'image',
      src: '/images/about/3.png',
      alt: '年度预测'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-primary-500/30`}>
      <Navbar lang={lang} setLang={setLang} isDark={isDark} setIsDark={setIsDark} />

      {/* --- Hero Section --- */}
      <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 z-10">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase bg-primary-500/10 rounded-full border border-primary-500/20">
            {content.personalInfo.introTag}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            <span className="block text-xl md:text-2xl font-normal text-slate-500 dark:text-slate-400 mb-2">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-600 dark:from-primary-400 dark:to-cyan-400">
              {content.personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            {content.personalInfo.title} at <span className="text-slate-800 dark:text-slate-200 font-medium">{content.personalInfo.university}</span>. 
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {content.personalInfo.stats.map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="block text-lg font-bold text-slate-900 dark:text-white">{stat.value}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <a href={`mailto:${content.personalInfo.email}`} className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary-500/20">
                <Mail size={18} /> {content.personalInfo.contactBtn}
             </a>
             <a href={content.personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-white px-6 py-3 rounded-lg font-medium transition-all border border-slate-200 dark:border-slate-700">
                <Github size={18} /> {content.personalInfo.githubBtn}
             </a>
          </div>
        </div>

        {/* Abstract Visual Representation */}
        <div className="flex-1 flex justify-center z-0 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
               {/* Rotating Cards */}
               {heroCards.map((card, index) => (
                 <div
                   key={index}
                   className={`absolute inset-0 transition-all duration-700 ${
                     currentCard === index 
                       ? 'opacity-100 scale-100' 
                       : 'opacity-0 scale-95 pointer-events-none'
                   }`}
                 >
                   {card.type === 'text' ? (
                     card.content
                   ) : (
                     <img 
                       src={card.src} 
                       alt={card.alt}
                       className="w-full h-full object-cover"
                     />
                   )}
                 </div>
               ))}
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <Award className="text-yellow-500" size={24} />
            </div>
            {/* Card indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentCard === index 
                      ? 'bg-primary-500 w-6' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Research Section --- */}
      <section id="research" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={content.sectionTitles.research}
            subtitle={content.sectionTitles.researchSubtitle}
          />
          <div className="grid grid-cols-1 gap-8">
            {content.research.map((item, index) => (
              <ResearchCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={content.sectionTitles.projects}
            subtitle={content.sectionTitles.projectsSubtitle}
          />
          <div className="grid grid-cols-1 gap-6">
            {content.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- About / Extra Section --- */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title={content.sectionTitles.about} />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {content.personalInfo.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <MapPin className="text-primary-600 dark:text-primary-500" size={20} />
                  <span>{content.personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <Mail className="text-primary-600 dark:text-primary-500" size={20} />
                  <span>{content.personalInfo.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                 <Trophy className="text-yellow-500" size={20} /> {content.sectionTitles.achievements}
               </h3>
               
               <div className="mb-6">
                 <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">{content.sectionTitles.roles}</h4>
                 <ul className="space-y-2">
                   {content.extracurricular.roles.map((role, i) => (
                     <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                       <span className="mt-2 w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0"></span>
                       {role}
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">{content.sectionTitles.sports}</h4>
                 <ul className="space-y-2">
                   {content.extracurricular.awards.map((award, i) => (
                     <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                       <span className="mt-2 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span>
                       {award}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id="contact" className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{content.sectionTitles.connect}</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${content.personalInfo.email}`} className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href={content.personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-600 text-sm">
            © {new Date().getFullYear()} {content.personalInfo.name}. All rights reserved. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;