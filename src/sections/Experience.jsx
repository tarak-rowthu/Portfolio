import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Award, CheckCircle } from 'lucide-react';

const Experience = () => {
  const { experience, certifications } = portfolioData;

  return (
    <section id="experience" className="grid lg:grid-cols-2 gap-12">
      {/* Experience / Activities */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Experience & <span className="text-gradient">Activities</span></h2>
          <p className="text-gray-400">Extracurricular involvements and hackathons.</p>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Briefcase className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-primary font-medium mb-2">{item.role}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Certifications & <span className="text-gradient">Awards</span></h2>
          <p className="text-gray-400">Professional certifications and recognitions.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Award className="text-secondary" size={32} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{cert.name}</h4>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-400 font-medium bg-green-400/10 px-3 py-1 rounded-full">
                <CheckCircle size={14} /> Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
