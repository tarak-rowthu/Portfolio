import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-6 space-y-6"
  >
    <h3 className="text-xl font-bold text-gradient inline-block">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
        >
          {skill.name}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Technical <span className="text-gradient">Proficiency</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my technical skills and expertise across various domains of software development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard title="Frontend Development" skills={skills.frontend} />
        <SkillCard title="Backend Development" skills={skills.backend} />
        <SkillCard title="Database & Tools" skills={[...skills.database, ...skills.tools]} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-8 text-center"
      >
        <h3 className="text-xl font-bold mb-6">Core Concepts</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.coreConcepts.map((concept, i) => (
            <span 
              key={i} 
              className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/20 transition-all duration-300"
            >
              {concept}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
