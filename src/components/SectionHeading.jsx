const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-8 max-w-3xl">
    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Section</p>
    <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    <p className="mt-4 max-w-2xl text-slate-300/90 leading-8">{subtitle}</p>
  </div>
);

export default SectionHeading;
