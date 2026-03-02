import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bhuvan N - Full Stack Developer </title>
        <meta
          name="description"
          content="Bhuvan N is a Full Stack Developer specializing in building scalable and modern web applications using React, Node.js, and cutting-edge technologies."
        />
        <meta
          name="keywords"
          content="Bhuvan N, Full Stack Developer, Web Developer, React Developer, Node.js, JavaScript, Portfolio, Web Applications, Frontend Developer, Backend Developer"
        />
        <meta name="author" content="Bhuvan N" />
        <meta property="og:title" content="Bhuvan N - Full Stack Developer" />
        <meta
          property="og:description"
          content="Building scalable and modern web applications with React, Node.js, and modern technologies"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;