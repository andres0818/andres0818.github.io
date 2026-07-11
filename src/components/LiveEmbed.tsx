import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

interface LiveEmbedProps {
  url: string;
  title: string;
  isActive: boolean;
  onActivate: () => void;
}

const LiveEmbed = ({ url, title, isActive, onActivate }: LiveEmbedProps) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/60">
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.iframe
            key="iframe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={url}
            title={title}
            loading="lazy"
            className="h-full w-full"
          />
        ) : (
          <motion.button
            key="poster"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onActivate}
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-santos-purple/20 via-black to-santos-pink/10 text-white/80 transition-colors hover:text-white"
          >
            <span className="glass flex h-14 w-14 items-center justify-center rounded-full">
              <Play size={22} className="ml-1 text-gta-accent" />
            </span>
            <span className="text-sm font-medium uppercase tracking-wider">
              Ver demo en vivo
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs text-white/70 backdrop-blur-md transition-colors hover:text-white"
      >
        <ExternalLink size={12} />
        Abrir en pestaña nueva
      </a>
    </div>
  );
};

export default LiveEmbed;
