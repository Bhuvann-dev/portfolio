import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative flex flex-col bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Gradient banner with icon */}
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
