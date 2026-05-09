import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="bg-blob top-[-10%] left-[-10%] bg-primary animate-pulse" />
      <div className="bg-blob bottom-[-10%] right-[-10%] bg-secondary animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="bg-blob top-[40%] left-[60%] bg-blue-400 opacity-10" />
      
      {/* Small floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5
          }}
          animate={{
            y: [null, '-20%'],
            opacity: [null, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
