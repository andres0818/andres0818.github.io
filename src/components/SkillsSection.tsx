import { Server, MonitorSmartphone, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

interface SkillCategory {
  title: string;
  icon: typeof Server;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Back-end',
    icon: Server,
    skills: ['C#', '.NET Core', 'Entity Framework', 'PHP (CakePHP)', 'APIs REST'],
  },
  {
    title: 'Front-end',
    icon: MonitorSmartphone,
    skills: [
      'React.js',
      'React Native',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Bases de datos',
    icon: Database,
    skills: ['SQL Server', 'PostgreSQL'],
  },
  {
    title: 'Herramientas',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Google Apps Script'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="gta-text-shadow font-display text-center text-4xl uppercase tracking-wide sm:text-5xl"
      >
        Stack
      </motion.h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {CATEGORIES.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="glass rounded-3xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg uppercase tracking-wide text-white/90">
              <category.icon size={20} className="text-gta-accent" />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skill}
                  icon={category.icon}
                  label={skill}
                  delay={skillIndex * 0.03}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
