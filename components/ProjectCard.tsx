import React from 'react';
import { Project } from '../data';
import { Github, FolderGit2, Loader2 } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const isComingSoon = project.status === 'coming-soon';

  return (
    <div className={`flex flex-col md:flex-row bg-white dark:bg-slate-800/30 border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg
      ${isComingSoon 
        ? 'border-dashed border-slate-300 dark:border-slate-700 opacity-80 hover:opacity-100' 
        : 'border-slate-200 dark:border-slate-700/50 hover:border-primary-500/50 dark:hover:bg-slate-800/80'
      }
    `}>
      {/* Image/Video Preview Section - Left side on desktop */}
      {project.imageUrl && !isComingSoon && (
        <div className="md:w-80 flex-shrink-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 flex items-center justify-center">
           {project.imageUrl.endsWith('.mp4') || project.imageUrl.endsWith('.webm') ? (
             <video
               autoPlay
               loop
               muted
               playsInline
               className="w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-105"
             >
               <source src={project.imageUrl} type={project.imageUrl.endsWith('.mp4') ? 'video/mp4' : 'video/webm'} />
               您的浏览器不支持视频标签。
             </video>
           ) : (
             <img 
               src={project.imageUrl} 
               alt={project.title} 
               className="w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-105"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
               }}
             />
           )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow relative">
        {/* Status Badge */}
        {isComingSoon && (
           <div className="absolute top-4 right-4 px-2 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded border border-amber-500/20 uppercase tracking-wider flex items-center gap-1">
             <Loader2 size={12} className="animate-spin" /> Coming Soon
           </div>
        )}

        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-lg ${isComingSoon ? 'bg-slate-100 dark:bg-slate-700/50 text-slate-400' : 'bg-primary-50 dark:bg-slate-700/50 text-primary-600 dark:text-primary-400'}`}>
             <FolderGit2 size={24} />
          </div>
          <div className="flex gap-2">
            {project.github && !isComingSoon && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="View Source"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
        <p className="text-sm text-primary-600 dark:text-primary-500 mb-3 font-medium">{project.role}</p>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        {project.highlights && (
           <ul className="mb-4 space-y-2">
             {project.highlights.map((h, i) => (
               <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                 {h}
               </li>
             ))}
           </ul>
        )}

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
