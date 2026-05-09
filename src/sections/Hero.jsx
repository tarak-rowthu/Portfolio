import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 inline-block">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">{portfolioData.name}</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-400 font-medium h-12">
            <Typewriter
              words={[
                'Full Stack Developer',
                'Java Backend Developer',
                'React Developer',
                'AI Enthusiast'
              ]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          {portfolioData.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Link to="projects" smooth={true} duration={500}>
            <button className="btn-primary flex items-center gap-2 group">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a 
            href={portfolioData.contact.resumeUrl} 
            target="_blank"
            rel="noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            View Resume
            <Download size={18} />
          </a>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-outline">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
