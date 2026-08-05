import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, subtitle, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`text-center mb-16 ${className}`}
  >
    {eyebrow && (
      <p className="eyebrow justify-center mb-4">
        <span className="text-primary/50">{'//'}</span> {eyebrow}
      </p>
    )}
    <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-foreground tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
