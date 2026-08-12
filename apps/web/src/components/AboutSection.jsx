import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, TrendingUp, Award, Zap, Target } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const AboutSection = () => {
  const [stats, setStats] = useState({ years: 0, projects: 0, technologies: 0 });

  useEffect(() => {
    const target = { years: 1.5, projects: 4, technologies: 20 };
    const steps = 50;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const p = current / steps;
      setStats({
        years: Math.floor(target.years * p),
        projects: Math.floor(target.projects * p),
        technologies: Math.floor(target.technologies * p),
      });
      if (current >= steps) {
        setStats(target);
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const skillAreas = [
    { icon: Code2, title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { icon: Server, title: 'Backend', skills: ['Java', 'Spring Boot', 'Node.js', 'FastAPI'] },
    { icon: Database, title: 'Databases & DevOps', skills: ['PostgreSQL', 'MongoDB', 'Firestore', 'Docker'] },
  ];

  const tile = 'rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40';
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="about me" title="About Me" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(150px,auto)]">
          {/* Lead narrative — big anchor tile */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.5 }}
            className={`${tile} md:col-span-2 md:row-span-2 flex flex-col justify-center`}
          >
            <p className="eyebrow mb-4"><span className="text-primary/50">{'//'}</span> full-stack, end to end</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              I turn ideas into products — from database to interface.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I build complete web applications across the stack: React &amp; Next.js on the front,
              Java/Spring Boot, Node and FastAPI on the back. I came into software from a technical-art
              background — writing scripts and automation tools in a production pipeline — and that mix
              of problem-solving and craft shapes everything I ship.
            </p>
          </motion.div>

          {/* Stat: Years */}
          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.05 }} className={`${tile} flex flex-col justify-between`}>
            <TrendingUp className="w-6 h-6 text-primary" />
            <div>
              <div className="font-display text-4xl font-bold text-foreground">{stats.years}+</div>
              <div className="text-sm text-muted-foreground">Years building</div>
            </div>
          </motion.div>

          {/* Stat: Projects */}
          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }} className={`${tile} flex flex-col justify-between`}>
            <Award className="w-6 h-6 text-primary" />
            <div>
              <div className="font-display text-4xl font-bold text-foreground">{stats.projects}+</div>
              <div className="text-sm text-muted-foreground">Projects shipped</div>
            </div>
          </motion.div>

          {/* Stat: Technologies — accent tile */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl md:col-span-2 p-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-between shadow-lg shadow-primary/20"
          >
            <div>
              <div className="font-display text-5xl font-bold">{stats.technologies}+</div>
              <div className="text-sm font-medium opacity-90">Technologies used</div>
            </div>
            <Zap className="w-12 h-12 opacity-80" />
          </motion.div>

          {/* Skill areas */}
          {skillAreas.map((area, i) => (
            <motion.div
              key={area.title}
              {...reveal}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
              className={`${tile} group`}
            >
              <area.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-display font-bold text-foreground mb-3">{area.title}</h4>
              <div className="flex flex-wrap gap-1.5">
                {area.skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Mission */}
          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.35 }} className={`${tile} flex flex-col justify-center`}>
            <Target className="w-6 h-6 text-primary mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              On a mission to build scalable, user-friendly apps that solve real problems — with clean,
              maintainable code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
