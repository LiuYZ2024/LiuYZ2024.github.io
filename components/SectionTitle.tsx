import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
      </h2>
      {subtitle && <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;