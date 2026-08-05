import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Download, Maximize2 } from 'lucide-react';

const certifications = [
  {
    title: 'Full Stack Development',
    issuer: 'KodNest',
    date: 'Jun 2026',
    accent: 'from-yellow-500/80 to-amber-600/80',
    image: '/certificates/kodnest-full-stack-development.jpg',
    pdf: '/certificates/kodnest-full-stack-development.pdf',
  },
  {
    title: 'Applied AI Foundations',
    issuer: 'OpenAI Academy',
    date: 'Jul 2026',
    accent: 'from-teal-500/80 to-emerald-600/80',
    image: '/certificates/openai-applied-ai-foundations.jpg',
    pdf: '/certificates/openai-applied-ai-foundations.pdf',
  },
  {
    title: 'Agents and Workflows',
    issuer: 'OpenAI Academy',
    date: 'Jul 2026',
    accent: 'from-violet-500/80 to-indigo-600/80',
    image: '/certificates/openai-agents-and-workflows.jpg',
    pdf: '/certificates/openai-agents-and-workflows.pdf',
  },
  {
    title: 'AI Foundations',
    issuer: 'OpenAI Academy',
    date: 'Jul 2026',
    accent: 'from-sky-500/80 to-cyan-600/80',
    image: '/certificates/openai-ai-foundations.jpg',
    pdf: '/certificates/openai-ai-foundations.pdf',
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2026',
    accent: 'from-green-600/80 to-lime-700/80',
    image: '/certificates/anthropic-claude-code-in-action.jpg',
    pdf: '/certificates/anthropic-claude-code-in-action.pdf',
  },
  {
    title: 'Introduction to Claude Cowork',
    issuer: 'Anthropic',
    date: '2026',
    accent: 'from-slate-500/80 to-indigo-500/80',
    image: '/certificates/anthropic-intro-to-claude-cowork.jpg',
    pdf: '/certificates/anthropic-intro-to-claude-cowork.pdf',
  },
  {
    title: '3D Asset Generalist',
    issuer: 'Technicolor Academy',
    date: 'Jan 2025',
    accent: 'from-pink-500/80 to-rose-600/80',
    image: '/certificates/technicolor-3d-asset-generalist.jpg',
    pdf: '/certificates/technicolor-3d-asset-generalist.pdf',
  },
];

const CertificationsSection = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    if (active) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

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
            Courses and programs I've completed on my path into software — click any to view
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActive(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative flex flex-col text-left bg-card/60 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`View ${cert.title} certificate`}
            >
              {/* Certificate thumbnail */}
              <div className="relative overflow-hidden bg-muted/40">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  loading="lazy"
                  className="w-full aspect-[7/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground bg-background/80 px-3 py-1.5 rounded-full border border-border">
                    <Maximize2 className="w-3.5 h-3.5" />
                    View
                  </span>
                </div>
                <span className={`absolute top-2 left-2 p-1.5 rounded-md bg-gradient-to-br ${cert.accent}`}>
                  <Award className="w-4 h-4 text-white" />
                </span>
              </div>

              {/* Card details */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap mt-0.5">{cert.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} certificate`}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white truncate">{active.title}</h3>
                  <p className="text-sm text-white/70">{active.issuer} · {active.date}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={active.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="p-2 rounded-lg text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Certificate image */}
              <img
                src={active.image}
                alt={`${active.title} certificate from ${active.issuer}`}
                className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain bg-white/5"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
