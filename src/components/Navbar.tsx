import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavLink {
  id: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'skills', label: 'Stack' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass fixed left-0 right-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => handleNavClick('inicio')}
          className="font-display text-xl tracking-wide text-white"
        >
          AP<span className="text-gta-accent">.</span>
        </button>

        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider text-white/60 transition-colors hover:text-white',
                  activeId === link.id && 'text-gta-accent',
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-1 overflow-hidden px-6 pb-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    'block w-full py-2 text-left text-sm font-medium uppercase tracking-wider text-white/60',
                    activeId === link.id && 'text-gta-accent',
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
