import SectionHeading from './SectionHeading';
import useInViewReveal from '../hooks/useInViewReveal';

const categories = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Python', 'Django', 'Django REST Framework', 'API Design', 'MySQL'],
  },
  {
    title: 'Tools & Flow',
    items: ['Redux Toolkit', 'Git', 'Postman', 'VS Code', 'Figma', 'Agile development'],
  },
  {
    title: 'Creative',
    items: ['Video Editing', 'Graphic Design', 'Digital Marketing'],
  },
];

const Skills = () => {
  const [ref, visible] = useInViewReveal();

  return (
    <section id="skills" ref={ref} className={`mt-16 rounded-[2rem] border border-slate-700/40 bg-slate-950/72 p-8 shadow-panel transition duration-700 ${visible ? 'revealed' : ''}`}>
      <SectionHeading title="Tech Stack" subtitle="Tools and strengths I use to ship every project." />
      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((category) => (
          <article key={category.title} className="glass-card rounded-[1.75rem] border border-slate-700/30 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">{category.title}</h3>
            <ul className="grid gap-3 text-slate-300 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-700/50 bg-slate-900/80 px-4 py-3 text-sm transition hover:border-cyan-400/50 hover:bg-slate-800/90">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
