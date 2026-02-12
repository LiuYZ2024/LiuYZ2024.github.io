import React from 'react';
import { Research } from '../data';
import { ExternalLink, Star, Hourglass } from 'lucide-react';

const ResearchCard: React.FC<{ item: Research; index: number }> = ({ item, index }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group relative">
        
      {/* Image/Video Preview Section - Left side on desktop */}
      {item.imageUrl && (
        <div className="md:w-96 flex-shrink-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
           {item.imageUrl.endsWith('.mp4') || item.imageUrl.endsWith('.webm') ? (
             <video
               autoPlay
               loop
               muted
               playsInline
               className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
             >
               <source src={item.imageUrl} type={item.imageUrl.endsWith('.mp4') ? 'video/mp4' : 'video/webm'} />
               您的浏览器不支持视频标签。
             </video>
           ) : (
             <img 
               src={item.imageUrl} 
               alt={item.title} 
               className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
               }}
             />
           )}
        </div>
      )}

      <div className="p-6 flex-1 relative">
        {/* Decorative gradient blob */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all"></div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {item.publication && (
              <span className="px-2 py-1 text-xs font-semibold bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded border border-primary-500/20">
                {item.publication}
              </span>
            )}
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Star size={12} className="text-yellow-500" /> {item.role}
            </span>
            {item.status && (
              <span className="px-2 py-1 text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded border border-amber-500/20 flex items-center gap-1">
                 <Hourglass size={10} /> {item.status}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {item.title}
          </h3>
        </div>
        {item.link && (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>

      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
        {item.description}
      </p>

      <div className="mb-4">
        <ul className="space-y-2">
          {item.contributions.map((contrib, idx) => (
            <li key={idx} className="text-slate-500 dark:text-slate-400 text-sm flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
              <span>{contrib}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {item.tags.map((tag, i) => (
          <span key={i} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/50 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
            #{tag}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ResearchCard;
