import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/70 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.18em] text-cyan-300">
          SUFILL X MAN
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm uppercase tracking-[0.18em] text-slate-300 transition hover:text-cyan-300">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-secondary hidden md:inline-flex">
            Connect
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] text-slate-200 transition hover:bg-slate-800/80 hover:text-cyan-300"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
