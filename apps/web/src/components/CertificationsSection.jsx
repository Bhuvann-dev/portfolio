import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Full Stack Development',
      issuer: 'KodNest',
      date: 'Jun 2026',
      accent: 'from-yellow-500/80 to-amber-600/80',
      file: '/certificates/kodnest-full-stack-development.pdf',
    },
    {
      title: 'Applied AI Foundations',
      issuer: 'OpenAI Academy',
      date: 'Jul 2026',
      accent: 'from-teal-500/80 to-emerald-600/80',
      file: '/certificates/openai-applied-ai-foundations.pdf',
    },
    {
      title: 'Agents and Workflows',
      issuer: 'OpenAI Academy',
      date: 'Jul 2026',
      accent: 'from-violet-500/80 to-indigo-600/80',
      file: '/certificates/openai-agents-and-workflows.pdf',
    },
    {
      title: 'AI Foundations',
      issuer: 'OpenAI Academy',
      date: 'Jul 2026',
      accent: 'from-sky-500/80 to-cyan-600/80',
      file: '/certificates/openai-ai-foundations.pdf',
    },
    {
      title: 'Claude Code in Action',
      issuer: 'Anthropic',
      date: '2026',
      accent: 'from-green-600/80 to-lime-700/80',
      file: '/certificates/anthropic-claude-code-in-action.pdf',
    },
    {
      title: 'Introduction to Claude Cowork',
      issuer: 'Anthropic',
      date: '2026',
      accent: 'from-slate-500/80 to-indigo-500/80',
      file: '/certificates/anthropic-intro-to-claude-cowork.pdf',
    },
    {
      title: '3D Asset Generalist',
      issuer: 'Technicolor Academy',
      date: 'Jan 2025',
      accent: 'from-pink-500/80 to-rose-600/80',
      file: '/certificates/technicolor-3d-asset-generalist.pdf',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Courses and programs I've completed on my path into software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative flex flex-col bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.accent}`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{cert.date}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View Certificate
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
