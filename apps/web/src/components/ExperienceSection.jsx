import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Full Stack Development Program',
      institution: 'KodNest, Bangalore',
      date: 'Dec 2025 – Jun 2026',
      description: 'Intensive Java & Python full-stack program — data structures & algorithms, Spring Boot REST APIs, SQL, and building complete web applications end to end.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Freelance 3D / AR Artist',
      institution: 'Self-Employed, Bangalore',
      date: 'Feb 2025 – Nov 2025',
      description: 'Delivered 3D asset and AR visualization work for client projects while self-studying software engineering and full-stack web development.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: '3D Asset Generalist — Technical Art Track',
      institution: 'Technicolor Academy, Hyderabad',
      date: 'Jun 2024 – Jan 2025',
      description: 'Built procedural tools and automation in Houdini using VEX scripting; debugged complex node networks and created reusable, non-destructive pipelines.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Junior 3D Quality Assurance Specialist',
      institution: 'CharpstAR',
      date: 'Apr 2024 – Jun 2024',
      description: 'Tested augmented-reality experiences across devices, documented defects against acceptance criteria, and verified fixes with the development team.',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Sc. in Computer Science',
      institution: 'Reva University, Bangalore',
      date: '2021 – 2024',
      description: 'Undergraduate degree in computer science — the foundation in programming, data structures, and software fundamentals.',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Pre-University College',
      institution: "Alva's PU College, Vidyagiri",
      date: '2019 – 2021',
      description: 'Completed pre-university education before pursuing computer science at university.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="journey"
          title="Experience & Education"
          subtitle="My path into software — roles, training, and study"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex gap-4 md:gap-6"
            >
              {/* Rail: node + connector */}
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card border-2 border-primary/60 shrink-0">
                  <exp.icon className="w-4 h-4 text-primary" />
                </span>
                {index < experiences.length - 1 && (
                  <span className="w-px grow bg-border my-1" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 pb-8">
                <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors duration-300 group">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      {exp.date}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-border text-muted-foreground">
                      {exp.type === 'work' ? 'Work' : 'Education'}
                    </span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2.5">{exp.institution}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
