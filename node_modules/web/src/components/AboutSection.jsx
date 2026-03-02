import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, TrendingUp, Award, Zap } from 'lucide-react';

const AboutSection = () => {
  const [stats, setStats] = useState({
    years: 0,
    projects: 0,
    technologies: 0
  });

  useEffect(() => {
    const targetStats = { years: 3, projects: 15, technologies: 20 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        years: Math.floor(targetStats.years * progress),
        projects: Math.floor(targetStats.projects * progress),
        technologies: Math.floor(targetStats.technologies * progress)
      });

      if (currentStep >= steps) {
        setStats(targetStats);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const skillAreas = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'REST APIs'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      skills: ['MongoDB', 'MySQL'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const statsData = [
    { label: 'Years Learning', value: stats.years, icon: TrendingUp },
    { label: 'Projects Built', value: stats.projects, icon: Award },
    { label: 'Technologies Used', value: stats.technologies, icon: Zap }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Full Stack Developer with a passion for creating innovative web solutions.
            My journey in web development has equipped me with a diverse skill set and a problem-solving mindset.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}+
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <area.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {area.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Goal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            My Mission
          </h3>
          <p className="text-lg text-muted-foreground">
            Building scalable and user-friendly web applications that solve real-world problems
            and deliver exceptional user experiences through clean, maintainable code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;