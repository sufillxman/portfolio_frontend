import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../features/projects/projectsSlice';
import SectionHeading from './SectionHeading';
import useInViewReveal from '../hooks/useInViewReveal';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.projects);
  const [ref, visible] = useInViewReveal();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [dispatch, status]);

  return (
    <section id="projects" ref={ref} className={`mt-16 rounded-[2rem] border border-slate-700/40 bg-slate-950/72 p-8 shadow-panel transition duration-700 ${visible ? 'revealed' : ''}`}>
      <SectionHeading title="Projects" subtitle="Selected work showcasing fullstack systems and modern interfaces." />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {status === 'loading' ? (
          <div className="col-span-full rounded-[1.75rem] border border-slate-700/50 bg-slate-900/80 p-8 text-center text-slate-300">
            Loading projects...
          </div>
        ) : (
          items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
