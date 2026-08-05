import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiRedis,
  SiPostman,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandVscode } from 'react-icons/tb';
import SectionHeading from '@/components/SectionHeading';

const TechStackSection = () => {
  const techCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', Icon: SiNextdotjs, themed: true },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-emerald-500 to-teal-500',
      technologies: [
        { name: 'Java', Icon: FaJava, color: '#E76F00' },
        { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
        { name: 'Express', Icon: SiExpress, themed: true },
        { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
        { name: 'Cloud Firestore', Icon: SiFirebase, color: '#F57C00' },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'Git', Icon: SiGit, color: '#F05032' },
        { name: 'GitHub', Icon: SiGithub, themed: true },
        { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
        { name: 'Redis', Icon: SiRedis, color: '#FF4438' },
        { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
        { name: 'VS Code', Icon: TbBrandVscode, color: '#007ACC' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="stack"
          title="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border hover:border-primary/50 hover:bg-muted transition-colors duration-300 cursor-pointer group"
                  >
                    <tech.Icon
                      className={`w-7 h-7 flex-shrink-0 transition-transform duration-300 group-hover:scale-125 ${
                        tech.themed ? 'text-foreground' : ''
                      }`}
                      style={tech.themed ? undefined : { color: tech.color }}
                      aria-hidden="true"
                    />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
