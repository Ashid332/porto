import { motion } from 'framer-motion';
import { FileText, Database, Code2, Bot, Box, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { trackEvent } from '../lib/analytics';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden bg-[#050505]">
      {/* Background Video directly linked to your GitHub upload */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover z-0 opacity-40"
      >
        <source src="/herovideo.mp4.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay ensuring text readability and Lighthouse optimization */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/80 to-[#050505] z-0 backdrop-blur-[2px]" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10 relative">
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">Available for Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] text-white">
            Building AI-Powered Software That Solves <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Real Problems.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-lg mb-8 leading-relaxed font-light">
            I build AI-powered SaaS products, automation workflows, and full-stack applications using Next.js, TypeScript, Node.js, OpenAI, and PostgreSQL.
          </p>

          {/* Credibility Proof Section */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">Internship Experience</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">Open Source Contributor</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">Certifications</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">Final Year Engineering Project</span>
          </div>
          
          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full">
            {/* Primary CTA */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              onClick={() => trackEvent('Hero Resume Click')}
              className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-4 focus:ring-white/20"
              aria-label="View Resume"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
            
            {/* Secondary CTAs */}
            <div className="flex items-center gap-3 ml-2">
              <a 
                href="https://github.com/Ashid332" 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => trackEvent('Hero GitHub Click')}
                className="p-3.5 bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 rounded-full hover:bg-white/10 hover:text-white hover:border-white/30 transition-all flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-white/20" 
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/ashidul-islam" 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => trackEvent('Hero LinkedIn Click')}
                className="p-3.5 bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 rounded-full hover:bg-white/10 hover:text-white hover:border-white/30 transition-all flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-white/20" 
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:ashidulislam@example.com" 
                onClick={() => trackEvent('Hero Email Click')}
                className="p-3.5 bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 rounded-full hover:bg-white/10 hover:text-white hover:border-white/30 transition-all flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-white/20" 
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Engineering Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative w-full h-[500px]"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Core System Node - Real Tech */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#0A0A0A]/95 border border-white/10 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl z-20"
          >
            <Code2 className="w-8 h-8 text-blue-400 mb-2" />
            <span className="text-xs font-bold tracking-widest text-gray-300">Next.js</span>
          </motion.div>

          {/* Database Node - Real Tech */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[10%] w-24 h-24 bg-[#0A0A0A]/90 border border-white/10 rounded-xl backdrop-blur-lg flex flex-col items-center justify-center shadow-xl z-10"
          >
            <Database className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-[10px] font-bold tracking-widest text-gray-300">PostgreSQL</span>
          </motion.div>

          {/* API Node - Real Tech */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[10%] w-24 h-24 bg-[#0A0A0A]/90 border border-white/10 rounded-xl backdrop-blur-lg flex flex-col items-center justify-center shadow-xl z-10"
          >
            <Box className="w-6 h-6 text-blue-400 mb-2" />
            <span className="text-[10px] font-bold tracking-widest text-gray-300">Docker</span>
          </motion.div>

          {/* AI Node - Real Tech */}
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[5%] w-24 h-24 bg-[#0A0A0A]/90 border border-white/10 rounded-xl backdrop-blur-lg flex flex-col items-center justify-center shadow-xl z-10"
          >
            <Bot className="w-6 h-6 text-emerald-400 mb-2" />
            <span className="text-[10px] font-bold tracking-widest text-gray-300">OpenAI</span>
          </motion.div>

          {/* Abstract Connection Lines */}
          <svg viewBox="0 0 600 500" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
            <motion.path 
              d="M 300 250 L 130 140" 
              stroke="url(#grad1)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M 300 250 L 490 380" 
              stroke="url(#grad2)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
            <motion.path 
              d="M 300 250 L 520 160" 
              stroke="url(#grad3)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
            />

            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
