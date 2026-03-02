import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
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
        
        <div className="flex gap-3">
          <Button
            variant="default"
            size="sm"
            className="flex-1 gap-2"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;