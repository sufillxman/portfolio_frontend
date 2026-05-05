import SectionHeading from './SectionHeading';
import useInViewReveal from '../hooks/useInViewReveal';

const About = () => {
  const [ref, visible] = useInViewReveal();

  return (
    <section id="about" ref={ref} className={`mt-16 rounded-[2rem] border border-slate-700/40 bg-slate-950/72 p-8 shadow-panel transition duration-700 ${visible ? 'revealed' : ''}`}>
      <SectionHeading title="About me" subtitle="Real automation, strong code, live results." />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-slate-300">
          <p>
            I am <strong>Sufill X Man (Manknojiya Sufiyan)</strong>, an AI + Web + API Fullstack Developer on a mission to ship modern portfolio products by 2026.
          </p>
          <p>
            My journey began with BCA and expanded into real-world automation solutions for billing, inventory, and user-centric admin systems.
            I build with Django REST Framework, React, Tailwind, and scale the backend with clean API architecture.
          </p>
          <p>
            I bring a strong product mindset to every project: fast performance, dark-mode polish, responsive design, and seamless data flow between frontend and backend.
          </p>
        </div>

        <div className="glass-card rounded-[1.75rem] border border-cyan-500/10 p-6 shadow-glow">
          <h3 className="mb-4 text-xl font-semibold text-white">Core strengths</h3>
          <ul className="space-y-3 text-slate-300">
            <li>Headless CMS architecture with Django + DRF</li>
            <li>Automation-focused backend and RESTful APIs</li>
            <li>Pixel-perfect, responsive UI with Tailwind / Bootstrap</li>
            <li>Contact flow and client-ready project delivery</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
