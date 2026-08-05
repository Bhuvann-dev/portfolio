import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Radial accent glow */}
      <div className="accent-glow absolute inset-0 -z-10" />

      {/* Faint grid, faded toward edges */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-4 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p variants={item} className="eyebrow mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Full Stack Developer · Bangalore, India
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.03] tracking-tight mb-6"
          >
            Hi, I'm <span className="text-primary">Bhuvan N</span>.
            <br />
            I build <span className="text-primary">scalable</span> web apps.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I work across the whole stack — React &amp; Next.js on the front, Java/Spring Boot,
            Node and FastAPI on the back — turning ideas into clean, reliable products from database
            through to interface.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gap-2 text-base px-7 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </Button>

            <a href="/Bhuvan-N-Resume.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-7 py-6 border-2 hover:bg-primary/10 hover:border-primary"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to projects"
      >
        scroll ↓
      </motion.button>
    </section>
  );
};

export default HeroSection;
