import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Target, Cpu } from 'lucide-react';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">About <span className="text-gradient">Me</span></h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            I am a highly motivated Computer Science student at {about.institution}, with a strong passion for building modern, scalable, and efficient software solutions. My journey in tech is driven by curiosity and a desire to solve complex real-world problems.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass-card p-4 space-y-2">
              <Award className="text-primary" size={24} />
              <h3 className="font-bold">CGPA</h3>
              <p className="text-slate-600 dark:text-gray-400">{about.cgpa} / 10</p>
            </div>
            <div className="glass-card p-4 space-y-2">
              <Target className="text-secondary" size={24} />
              <h3 className="font-bold">Focus</h3>
              <p className="text-slate-600 dark:text-gray-400">Full Stack / Backend</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-card p-8 space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{about.course}</h3>
                <p className="text-primary font-medium">{about.institution}</p>
                <p className="text-gray-400 mt-1">Expected Graduation: {about.graduationYear}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Cpu className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {about.interests.map((interest, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
