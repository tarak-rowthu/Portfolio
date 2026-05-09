import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Get In <span className="text-gradient">Touch</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 font-medium">Email Address</h4>
                <a href={`mailto:${contact.email}`} className="text-lg font-bold hover:text-primary transition-colors">{contact.email}</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                <Phone className="text-secondary" size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 font-medium">Phone Number</h4>
                <p className="text-lg font-bold">{contact.phone}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center shrink-0 border border-blue-400/20">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 font-medium">Location</h4>
                <p className="text-lg font-bold">Chennai, India</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a href={`https://${contact.github}`} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary transition-all duration-300">
              <Github size={24} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary transition-all duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <footer className="pt-20 pb-8 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
