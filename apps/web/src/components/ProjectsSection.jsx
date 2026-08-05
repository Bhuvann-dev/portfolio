import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSearch, Building2, GitPullRequest, Users, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'ResumeIQ — AI Resume Analyzer',
    description:
      'Upload a resume, get an ATS-readiness score with concrete fixes, and download an interview-ready version in under two minutes. AI feedback is categorized Critical / Warning / Suggestion, and weak bullets are rewritten using only your real facts.',
    icon: FileSearch,
    gradient: 'from-emerald-500/80 to-teal-600/80',
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis + Celery', 'OpenAI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Bhuvann-dev/ResumeIQ',
    status: 'In Development',
    screenshots: [
      '/projects/ResumeIQ/1.png',
      '/projects/ResumeIQ/2.png',
      '/projects/ResumeIQ/3.png',
      '/projects/ResumeIQ/4.png',
      '/projects/ResumeIQ/5.png',
      '/projects/ResumeIQ/6.png',
      '/projects/ResumeIQ/7.png',
    ],
  },
  {
    title: 'PG Manager — Rent & Tenant Platform',
    description:
      'A private, phone-friendly control panel for paying-guest and hostel owners: rooms and bed occupancy, per-tenant rent ledgers, secure ID storage, Excel bulk-import, and one-tap WhatsApp reminders. Multi-owner data isolation enforced by Firestore security rules.',
    icon: Building2,
    gradient: 'from-amber-500/80 to-orange-600/80',
    techStack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Firebase', 'Cloud Firestore'],
    liveUrl: 'https://pg-manager-nu.vercel.app/',
    githubUrl: 'https://github.com/Bhuvann-dev/pg-manager',
    status: 'Live',
    screenshots: [
      '/projects/pg/1.png',
      '/projects/pg/2.png',
      '/projects/pg/3.png',
      '/projects/pg/4.png',
      '/projects/pg/5.png',
      '/projects/pg/6.png',
      '/projects/pg/7.png',
      '/projects/pg/8.png',
    ],
  },
  {
    title: 'GitHub Code Review Agent',
    description:
      'An AI-assisted CLI that reviews a public GitHub pull request — reads the changed TypeScript, and returns structured, evidence-based findings so reviewers can build context on a diff faster. Built around a pre-registered fixture set to measure precision honestly.',
    icon: GitPullRequest,
    gradient: 'from-violet-500/80 to-purple-600/80',
    techStack: ['TypeScript', 'Node.js', 'AI / LLM', 'CLI'],
    liveUrl: null,
    githubUrl: null,
    status: 'In Progress',
  },
  {
    title: 'BuildHub — Beginner-Friendly Teams',
    description:
      'A welcoming way for newcomers to find a project worth joining, meet kind teammates, and turn small contributions into a portfolio they are proud to share. Frontend experience focused on approachable, non-intimidating collaboration.',
    icon: Users,
    gradient: 'from-sky-500/80 to-blue-600/80',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: null,
    githubUrl: null,
    status: 'Frontend Prototype',
    screenshots: [
      '/projects/buildhub/1.png',
      '/projects/buildhub/2.png',
      '/projects/buildhub/3.png',
      '/projects/buildhub/4.png',
    ],
  },
];

const ProjectsSection = () => {
  const [gallery, setGallery] = useState(null); // { project, index }
  const [paused, setPaused] = useState(false);

  const openGallery = (project) => {
    setGallery({ project, index: 0 });
    setPaused(false);
  };
  const closeGallery = () => setGallery(null);

  const step = useCallback((dir) => {
    setGallery((g) => {
      if (!g) return g;
      const n = g.project.screenshots.length;
      return { ...g, index: (g.index + dir + n) % n };
    });
  }, []);

  // Keyboard navigation + scroll lock
  useEffect(() => {
    if (!gallery) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [gallery, step]);

  // Auto-advance (pauses on hover)
  useEffect(() => {
    if (!gallery || paused) return;
    const t = setInterval(() => step(1), 4000);
    return () => clearInterval(t);
  }, [gallery, paused, step]);

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work — click a screenshot to open the gallery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} onOpenGallery={openGallery} />
          ))}
        </div>
      </div>

      {/* Slideshow lightbox */}
      <AnimatePresence>
        {gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm"
            onClick={closeGallery}
            role="dialog"
            aria-modal="true"
            aria-label={`${gallery.project.title} screenshots`}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white truncate">{gallery.project.title}</h3>
                  <p className="text-sm text-white/70">
                    {gallery.index + 1} / {gallery.project.screenshots.length}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeGallery}
                  aria-label="Close"
                  className="p-2 rounded-lg text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image + arrows */}
              <div className="relative">
                <motion.img
                  key={gallery.index}
                  src={gallery.project.screenshots[gallery.index]}
                  alt={`${gallery.project.title} screenshot ${gallery.index + 1}`}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-auto rounded-lg shadow-2xl max-h-[75vh] object-contain bg-white/5"
                />

                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-white bg-black/50 hover:bg-black/70 border border-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-white bg-black/50 hover:bg-black/70 border border-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {gallery.project.screenshots.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setGallery((g) => ({ ...g, index: i }))}
                    aria-label={`Go to screenshot ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === gallery.index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
