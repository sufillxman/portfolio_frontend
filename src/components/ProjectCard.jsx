import { useEffect, useRef } from 'react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <article ref={cardRef} className="glass-card rounded-[1.75rem] border border-slate-700/30 p-6 shadow-glow transition-all duration-500 hover:shadow-2xl will-change-transform cursor-pointer">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
          Featured
        </span>
        <span className="text-xs text-slate-400">{new Date(project.created_at).getFullYear() || '2026'}</span>
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mb-5 text-slate-300 leading-7">{project.description}</p>
      <div className="mb-5 flex flex-wrap gap-2 text-xs text-slate-200/90">
        {project.tech_stack.split(',').map((tech) => (
          <span key={tech} className="rounded-full bg-slate-800/80 px-3 py-1 transition hover:bg-cyan-500/20 hover:text-cyan-300">
            {tech.trim()}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a href={project.github_link || '#'} target="_blank" rel="noreferrer" className="btn-secondary w-full text-center sm:w-auto">
          GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;