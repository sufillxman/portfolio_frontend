import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { fetchResumeApi } from '../services/api';

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResumeApi()
      .then((data) => {
        setResume(data[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        setError('Unable to load resume data.');
        setLoading(false);
        console.error(err);
      });
  }, []);

  return (
    <section id="resume" className="mt-20 rounded-[2rem] border border-slate-700/40 bg-slate-950/72 p-8 shadow-panel transition duration-700 revealed">
      <SectionHeading title="Resume" subtitle="A snapshot of my skills, education, and achievements as a fullstack developer." />

      {loading && (
        <div className="rounded-3xl border border-slate-700/50 bg-slate-900/80 p-8 text-slate-300">
          Loading resume...
        </div>
      )}

      {error && (
        <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-8 text-rose-200">
          {error}
        </div>
      )}

      {resume && (
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-card rounded-[1.75rem] border border-cyan-500/10 bg-slate-900/80 p-8 shadow-glow">
            <h3 className="mb-4 text-xl font-semibold text-white">About me</h3>
            <p className="text-slate-300 leading-7">{resume.summary}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/90 p-4 text-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Name</p>
                <p className="mt-2 font-semibold text-white">{resume.name}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4 text-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Role</p>
                <p className="mt-2 font-semibold text-white">{resume.role}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4 text-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Email</p>
                <p className="mt-2 font-semibold text-white">{resume.email}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4 text-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Phone</p>
                <p className="mt-2 font-semibold text-white">{resume.phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-[1.75rem] border border-cyan-500/10 bg-slate-900/80 p-8 shadow-glow">
              <h3 className="mb-4 text-xl font-semibold text-white">Top skills</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {resume.skills.map((skill) => (
                  <span key={skill} className="rounded-3xl border border-slate-700/40 bg-slate-950/90 px-4 py-3 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[1.75rem] border border-cyan-500/10 bg-slate-900/80 p-8 shadow-glow">
              <h3 className="mb-4 text-xl font-semibold text-white">Education</h3>
              <ul className="space-y-3 text-slate-300">
                {resume.education.map((item) => (
                  <li key={item} className="rounded-3xl border border-slate-700/40 bg-slate-950/90 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-[1.75rem] border border-cyan-500/10 bg-slate-900/80 p-8 shadow-glow">
              <h3 className="mb-4 text-xl font-semibold text-white">Highlights</h3>
              <ul className="space-y-3 text-slate-300">
                {resume.highlights.map((item) => (
                  <li key={item} className="rounded-3xl border border-slate-700/40 bg-slate-950/90 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
