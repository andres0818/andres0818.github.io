import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center"
    >
      <div className="santos-glow fixed inset-0 -z-10 blur-3xl" aria-hidden="true" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gta-accent"
      >
        Desarrollador Full Stack
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="gta-text-shadow font-display text-5xl uppercase leading-none tracking-wide sm:text-7xl md:text-8xl"
      >
        Andrés Pérez
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 max-w-xl text-lg text-white/70 sm:text-xl"
      >
        .NET &amp; C# · React / React Native — construyo backend, web y app móvil de punta a punta.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass mt-10 max-w-2xl rounded-3xl p-6 text-left shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:p-8"
      >
        <p className="text-white/80">
          Con <strong className="text-white">+3 años</strong> entregando software empresarial de
          punta a punta. Mi base es el ecosistema{' '}
          <strong className="text-white">.NET (C#, Razor, APIs REST)</strong> y{' '}
          <strong className="text-white">SQL</strong>, que combino con{' '}
          <strong className="text-white">React.js</strong> y{' '}
          <strong className="text-white">React Native</strong> para cubrir el ciclo completo de
          producto. Me adapto igual de bien a equipos de desarrollo grandes o chicos que a sacar
          un proyecto adelante de forma autónoma cuando la situación lo requiere.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          type="button"
          onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
          className="rounded-full bg-gta-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(5,255,0,0.4)] transition-transform hover:scale-105"
        >
          Ver proyectos
        </button>
        <button
          type="button"
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="glass rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105"
        >
          Contactame
        </button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 text-white/50"
        aria-hidden="true"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
