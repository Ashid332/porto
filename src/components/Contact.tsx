import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { trackEvent } from '../lib/analytics';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Let's Connect</h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Interested in building AI-powered products or scalable software systems? Let's connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a 
              href="mailto:ashidulislam@example.com" 
              onClick={() => trackEvent('Contact Email Click')}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              <Mail className="w-5 h-5" />
              Email Me Directly
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              onClick={() => trackEvent('Contact Resume Click')}
              className="p-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/20" 
              aria-label="View Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Ashid332" 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => trackEvent('Contact GitHub Click')}
              className="p-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/20" 
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/ashidul-islam" 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => trackEvent('Contact LinkedIn Click')}
              className="p-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/20" 
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
