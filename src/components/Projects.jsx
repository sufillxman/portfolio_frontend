import { useEffect, useState } from 'react';
import axios from 'axios';
import SectionHeading from './SectionHeading';
import useInViewReveal from '../hooks/useInViewReveal';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, visible] = useInViewReveal();

  useEffect(() => {
    // Live env variable use kar rahe hain
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
    
    axios.get(`${apiUrl}/api/projects/`)
      .then(response => {
        setProjectsData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" ref={ref} className={`mt-16 rounded-[2rem] border border-slate-700/40 bg-slate-950/72 p-8 shadow-panel transition duration-700 ${visible ? 'revealed' : ''}`}>
      <SectionHeading title="Projects" subtitle="Selected work showcasing fullstack systems and modern interfaces." />
      
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full rounded-[1.75rem] border border-slate-700/50 bg-slate-900/80 p-8 text-center text-slate-300">
            Loading backend data...
          </div>
        ) : projectsData.length > 0 ? (
          projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center text-slate-400">
            No projects found in the database.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;