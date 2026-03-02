import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Reva University',
      date: '2021 - 2024',
      description: 'Focused on software engineering, data structures, algorithms, and web development. Graduated with honors.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Frontend Training',
      institution: 'Technicolor',
      date: 'Dec 2024 - Jun 2025',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality solutions.',
      color: 'from-emerald-500 to-teal-500'
    },
    // {
    //   type: 'work',
    //   icon: Briefcase,
    //   title: 'Freelance Web Developer',
    //   institution: 'Self-Employed',
    //   date: 'Jan 2022 - Present',
    //   description: 'Built custom websites and web applications for clients across various industries. Specialized in responsive design and modern frameworks.',
    //   color: 'from-purple-500 to-pink-500'
    // },
    {
      type: 'certification',
      icon: Award,
      title: 'Full Stack Web Development Certification',
      institution: 'Online Learning Platform',
      date: '2025',
      description: 'Comprehensive certification covering MERN stack, REST APIs, authentication, and deployment strategies.',
      color: 'from-orange-500 to-red-500'
    },
    {
      type: 'certification',
      icon: Award,
      title: 'React Advanced Patterns',
      institution: 'Tech Academy',
      date: '2023',
      description: 'Advanced React concepts including hooks, context API, performance optimization, and state management.',
      color: 'from-indigo-500 to-purple-500'
    }
    
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </motion.div>

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