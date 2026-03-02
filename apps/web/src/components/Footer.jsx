import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Bhuvann-dev",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/bhuvan-n-dev/",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:bhuvan104@gmail.com?subject=Portfolio%20Contact",
  },
];

  return (
    <footer className="bg-muted/30 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground">
              Copyright © 2026 Bhuvan N. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;