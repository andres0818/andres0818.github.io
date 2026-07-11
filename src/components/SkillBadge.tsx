import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const SkillBadge = ({ icon: Icon, label, delay = 0 }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:text-white hover:shadow-[0_0_20px_rgba(5,255,0,0.25)]"
    >
      <Icon size={16} className="text-gta-accent" />
      {label}
    </motion.div>
  );
};

export default SkillBadge;
