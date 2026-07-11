import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrés-pérez0818',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/andres0818',
    icon: GithubIcon,
  },
  {
    label: 'Email',
    href: 'mailto:c.andres.perez.h@gmail.com',
    icon: Mail,
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="relative mx-auto max-w-3xl px-6 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="gta-text-shadow font-display text-4xl uppercase tracking-wide sm:text-5xl"
      >
        Hablemos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-white/60"
      >
        ¿Tenés un proyecto o una posición donde pueda aportar? Escribime.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {CONTACT_LINKS.map(({ label, href, icon: Icon }) => {
          const isExternal = href.startsWith('http');
          return (
            <a
              key={label}
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(5,255,0,0.3)]"
            >
              <Icon size={16} className="text-gta-accent" />
              {label}
            </a>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ContactSection;
