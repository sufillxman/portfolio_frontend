const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sufill-x-man/' },
  { label: 'GitHub', href: 'https://github.com/sufillxman' },
  { label: 'Instagram', href: 'https://instagram.com/sufilldigital/' },
];

const Footer = () => (
  <footer className="border-t border-slate-800/70 bg-slate-950/80 py-10 px-5 text-slate-400 backdrop-blur-xl md:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Sufill X Man</p>
        <p className="mt-3 text-slate-400">AI + Web + API Fullstack Developer — built with React, Tailwind, Redux Toolkit, Django, and DRF.</p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-sm text-slate-300 transition hover:text-cyan-300">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
