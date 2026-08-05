import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, index, onOpenGallery }) => {
  const Icon = project.icon;
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);
  const shots = project.screenshots || [];
  const hasGallery = shots.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative flex flex-col bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Banner: screenshot gallery cover if available, else gradient + icon */}
      {hasGallery ? (
        <button
          type="button"
          onClick={() => onOpenGallery?.(project)}
          className="relative h-40 overflow-hidden block w-full"
          aria-label={`View ${project.title} screenshots`}
        >
          <img
            src={shots[0]}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground bg-background/85 px-3 py-1.5 rounded-full border border-border">
              <Images className="w-4 h-4" />
              View {shots.length} screenshots
            </span>
          </div>
          <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 text-xs font-medium text-white bg-black/55 px-2 py-1 rounded-full backdrop-blur-sm">
            <Images className="w-3 h-3" />
            {shots.length}
          </span>
          {project.status && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-background/85 text-foreground border border-white/20 backdrop-blur-sm">
              {project.status}
            </span>
          )}
        </button>
      ) : (
        <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient || 'from-primary/70 to-secondary/70'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            {Icon && (
              <Icon className="w-16 h-16 text-white/90 transition-transform duration-500 group-hover:scale-110" />
            )}
          </div>
          {project.status && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-background/85 text-foreground border border-white/20 backdrop-blur-sm">
              {project.status}
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1 gap-2"
              onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-2"
              onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          )}
          {!hasLinks && (
            <p className="text-sm text-muted-foreground italic py-1">
              Repository coming soon
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
