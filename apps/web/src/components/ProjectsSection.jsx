import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Building2, GitPullRequest, Users } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'ResumeIQ — AI Resume Analyzer',
      description:
        'Upload a resume, get an ATS-readiness score with concrete fixes, and download an interview-ready version in under two minutes. AI feedback is categorized Critical / Warning / Suggestion, and weak bullets are rewritten using only your real facts.',
      icon: FileSearch,
      gradient: 'from-emerald-500/80 to-teal-600/80',
      techStack: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis + Celery', 'OpenAI'],
      liveUrl: null,
      githubUrl: 'https://github.com/Bhuvann-dev/ResumeIQ',
      status: 'In Development',
    },
    {
      title: 'PG Manager — Rent & Tenant Platform',
      description:
        'A private, phone-friendly control panel for paying-guest and hostel owners: rooms and bed occupancy, per-tenant rent ledgers, secure ID storage, Excel bulk-import, and one-tap WhatsApp reminders. Multi-owner data isolation enforced by Firestore security rules.',
      icon: Building2,
      gradient: 'from-amber-500/80 to-orange-600/80',
      techStack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Firebase', 'Cloud Firestore'],
      liveUrl: 'https://pg-manager-nu.vercel.app/',
      githubUrl: 'https://github.com/Bhuvann-dev/pg-manager',
      status: 'Live',
    },
    {
      title: 'GitHub Code Review Agent',
      description:
        'An AI-assisted CLI that reviews a public GitHub pull request — reads the changed TypeScript, and returns structured, evidence-based findings so reviewers can build context on a diff faster. Built around a pre-registered fixture set to measure precision honestly.',
      icon: GitPullRequest,
      gradient: 'from-violet-500/80 to-purple-600/80',
      techStack: ['TypeScript', 'Node.js', 'AI / LLM', 'CLI'],
      liveUrl: null,
      githubUrl: null,
      status: 'In Progress',
    },
    {
      title: 'BuildHub — Beginner-Friendly Teams',
      description:
        'A welcoming way for newcomers to find a project worth joining, meet kind teammates, and turn small contributions into a portfolio they are proud to share. Frontend experience focused on approachable, non-intimidating collaboration.',
      icon: Users,
      gradient: 'from-sky-500/80 to-blue-600/80',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: null,
      githubUrl: null,
      status: 'Frontend Prototype',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
