import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import type { Project } from '../data/projects';
import LiveEmbed from './LiveEmbed';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onActivate: () => void;
}

const ProjectCard = ({ project, isActive, onActivate }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass flex flex-col gap-4 rounded-3xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    >
      {project.type === 'live' && project.liveUrl && (
        <LiveEmbed
          url={project.liveUrl}
          title={project.title}
          isActive={isActive}
          onActivate={onActivate}
        />
      )}

      <div>
        {project.type === 'case-study' && (
          <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <Lock size={12} />
            Caso de estudio privado
          </span>
        )}
        <h3 className="font-display text-xl uppercase tracking-wide text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-white/70">{project.description}</p>
        {project.type === 'case-study' && project.privateNote && (
          <p className="mt-2 text-xs italic text-white/40">{project.privateNote}</p>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gta-accent transition-opacity hover:opacity-80"
        >
          Ver repositorio →
        </a>
      )}
    </motion.article>
  );
};

export default ProjectCard;
