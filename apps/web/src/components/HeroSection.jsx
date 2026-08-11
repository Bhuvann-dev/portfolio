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

  // syntax token colors (kept within the violet + neutral palette)
  const kw = 'text-primary';
  const str = 'text-primary/75';
  const key = 'text-foreground/90';
  const pun = 'text-muted-foreground/70';
  const cm = 'text-muted-foreground italic';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-1 absolute -top-[15%] right-[10%] w-[38rem] h-[38rem] rounded-full bg-primary/30 blur-[120px]" />
        <div className="aurora-2 absolute -bottom-[20%] left-[6%] w-[34rem] h-[34rem] rounded-full bg-secondary/25 blur-[120px]" />
        <div className="aurora-3 absolute top-[20%] -right-[8%] w-[30rem] h-[30rem] rounded-full bg-primary/25 blur-[110px]" />
      </div>

      {/* Radial accent glow */}
      <div className="accent-glow absolute inset-0 -z-10" />

      {/* Faint grid, faded toward edges */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* Left: copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="eyebrow mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Full Stack Developer · Bangalore, India
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Hi, I'm <span className="text-primary">Bhuvan N</span>.
              <br />
              I build <span className="text-primary">scalable</span> web apps.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
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

          {/* Right: terminal / code card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* glow behind the card */}
              <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full -z-10" />

              <div className="rounded-xl border border-border bg-card/95 overflow-hidden shadow-2xl">
                {/* title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
                </div>

                {/* code */}
                <div className="p-5 font-mono text-[13px] leading-7 overflow-x-auto">
                  <div><span className={kw}>const</span> <span className="text-foreground">developer</span> <span className={pun}>= {'{'}</span></div>
                  <div className="pl-4"><span className={key}>name</span><span className={pun}>:</span> <span className={str}>"Bhuvan N"</span><span className={pun}>,</span></div>
                  <div className="pl-4"><span className={key}>role</span><span className={pun}>:</span> <span className={str}>"Full Stack Developer"</span><span className={pun}>,</span></div>
                  <div className="pl-4"><span className={key}>stack</span><span className={pun}>:</span> <span className={pun}>[</span><span className={str}>"React"</span><span className={pun}>,</span> <span className={str}>"Next.js"</span><span className={pun}>,</span> <span className={str}>"Java"</span><span className={pun}>,</span></div>
                  <div className="pl-[4.5rem]"><span className={str}>"Spring Boot"</span><span className={pun}>,</span> <span className={str}>"FastAPI"</span><span className={pun}>],</span></div>
                  <div className="pl-4"><span className={key}>location</span><span className={pun}>:</span> <span className={str}>"Bangalore, India"</span><span className={pun}>,</span></div>
                  <div className="pl-4"><span className={key}>openToWork</span><span className={pun}>:</span> <span className={kw}>true</span><span className={pun}>,</span></div>
                  <div><span className={pun}>{'}'};</span></div>
                  <div className="h-3" />
                  <div className={cm}>{'// ▸ turning ideas into products'}</div>
                  <div>
                    <span className="text-foreground">developer</span><span className={pun}>.</span><span className={kw}>ship</span><span className={pun}>();</span>
                    <span className="inline-block w-[7px] h-[15px] ml-1 bg-primary align-middle animate-blink" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
