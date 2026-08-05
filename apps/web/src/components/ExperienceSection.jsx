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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Freelance 3D / AR Artist',
      institution: 'Self-Employed, Bangalore',
      date: 'Feb 2025 – Nov 2025',
      description: 'Delivered 3D asset and AR visualization work for client projects while self-studying software engineering and full-stack web development.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: '3D Asset Generalist — Technical Art Track',
      institution: 'Technicolor Academy, Hyderabad',
      date: 'Jun 2024 – Jan 2025',
      description: 'Built procedural tools and automation in Houdini using VEX scripting; debugged complex node networks and created reusable, non-destructive pipelines.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Junior 3D Quality Assurance Specialist',
      institution: 'CharpstAR',
      date: 'Apr 2024 – Jun 2024',
      description: 'Tested augmented-reality experiences across devices, documented defects against acceptance criteria, and verified fixes with the development team.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Sc. in Computer Science',
      institution: 'Reva University, Bangalore',
      date: '2021 – 2024',
      description: 'Undergraduate degree in computer science — the foundation in programming, data structures, and software fundamentals.',
      color: 'from-sky-500 to-blue-500'
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Pre-University College',
      institution: "Alva's PU College, Vidyagiri",
      date: '2019 – 2021',
      description: 'Completed pre-university education before pursuing computer science at university.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="journey"
          title="Experience & Education"
          subtitle="My journey in technology and continuous learning"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} flex-shrink-0`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <span className="text-sm text-muted-foreground font-medium">
                            {exp.date}
                          </span>
                        </div>
                        <p className="text-primary font-medium mb-3">
                          {exp.institution}
                        </p>
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;