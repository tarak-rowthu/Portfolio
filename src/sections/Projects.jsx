import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'AI'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-xl">
            A collection of projects that demonstrate my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              {/* Content */}
              <div className="p-8 space-y-6 flex-grow flex flex-col">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] uppercase tracking-wider font-bold text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="text-gray-500 text-xs flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
