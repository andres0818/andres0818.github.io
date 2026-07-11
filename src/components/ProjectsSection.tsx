import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [activeEmbedId, setActiveEmbedId] = useState<string | null>(null);

  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="gta-text-shadow font-display text-center text-4xl uppercase tracking-wide sm:text-5xl"
      >
        Proyectos destacados
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-4 max-w-xl text-center text-white/60"
      >
        Hacé click en "Ver demo en vivo" para interactuar con cada proyecto sin salir de esta
        página.
      </motion.p>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeEmbedId === project.id}
            onActivate={() => setActiveEmbedId(project.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
