import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { trackEvent } from '../lib/analytics';

const projects = [
  {
    title: "AI Job Tracker Platform",
    image: "/ai-job-tracker-screenshot.png",
    problem: "Job seekers lack an automated, centralized system to parse job descriptions, extract requirements, and track application pipelines.",
    solution: "Built a full-stack SaaS application that uses LLMs to parse job data and automates tracking through a unified dashboard.",
    architecture: "React frontend with a Node/Express backend. Integrated OpenAI APIs for NLP processing and MongoDB for document storage.",
    challenges: "Handling rate limits from the OpenAI API during batch resume-matching and ensuring unstructured text extraction was strictly typed.",
    impact: "Successfully automated job parsing, resume analysis, and application tracking through a unified AI-assisted workflow.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/Ashid332/ai-job-tracker",
    demo: null,
  },
  {
    title: "Llama Conversational Memory Agent",
    image: "/llama-chatbot-screenshot.png",
    problem: "Standard LLM chatbots lose context during long technical discussions and lack retrieval capabilities for specialized data.",
    solution: "Engineered a persistent memory chatbot leveraging Meta's Llama models, utilizing Vector DBs for Retrieval-Augmented Generation (RAG).",
    architecture: "Python orchestration using LangChain to connect Llama models with a vector database, served via a Streamlit interface.",
    challenges: "Optimizing chunking strategies for vector embeddings to maintain semantic relevance across extended sessions.",
    impact: "Achieved strict contextual retention across extended technical queries, enabling highly accurate retrieval without hallucination.",
    technologies: ["Python", "LangChain", "Llama", "Vector DB", "Streamlit"],
    github: "https://github.com/Ashid332/Chat_bot_llama",
    demo: null,
  },
  {
    title: "SaaS Financial Analytics Engine",
    image: "/saas-dashboard-screenshot.png",
    problem: "Users needed real-time, secure financial monitoring with custom reporting capabilities.",
    solution: "Designed a secure CRUD-based financial dashboard with role-based access control and dynamic data visualization.",
    architecture: "React SPA consuming Express.js REST APIs. Data stored in MongoDB with Chart.js and PowerBI handling the visualization layer.",
    challenges: "Optimizing aggregation pipelines in MongoDB to serve real-time dashboard metrics under 200ms latency.",
    impact: "Delivered a secure, real-time financial reporting system capable of processing and visualizing high-volume transactional data instantly.",
    technologies: ["React", "Express.js", "MongoDB", "Node.js", "Chart.js"],
    github: "https://github.com/Ashid332/expenses-tracker",
    demo: null,
  }
];

export const SelectedWork = () => {
  return (
    <section id="work" className="py-24 px-6 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Selected Work</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            Case studies of shipped products. Focusing on engineering constraints, system architecture, and real-world outcomes.
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Product Screenshot Container */}
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#050505] rounded-3xl border border-white/10 overflow-hidden mb-12 relative shadow-2xl shadow-black/50 flex items-center justify-center">
                {/* Fallback Empty State Indicator */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-0 text-gray-600 bg-[#0A0A0A] border border-dashed border-white/10 m-1 rounded-3xl">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-mono text-sm uppercase tracking-widest text-gray-500">Awaiting Real Upload</span>
                  </div>
                  <span className="text-xs text-gray-700 font-mono">Upload your actual screenshot to: public{project.image}</span>
                </div>

                <img 
                  src={project.image} 
                  alt={`${project.title} Interface`} 
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 z-10 relative"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none z-20" />
              </div>

              {/* Case Study Content */}
              <div className="lg:flex gap-16">
                <div className="lg:w-2/3 space-y-10">
                  <div className="flex items-start justify-between">
                    <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-4 lg:mt-0">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          onClick={() => trackEvent('Project GitHub Click', { project: project.title })}
                          className="px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium" 
                          aria-label={`View ${project.title} Source on GitHub`}
                        >
                          <FiGithub className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          onClick={() => trackEvent('Project Demo Click', { project: project.title })}
                          className="px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors flex items-center gap-2 text-sm font-medium" 
                          aria-label={`Live Demo of ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Problem</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/5 p-5 rounded-xl">
                    <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">Technical Architecture</h4>
                    <div className="flex items-center gap-3 font-mono text-xs text-gray-400 overflow-x-auto pb-2">
                      <span className="px-2 py-1 bg-black/50 rounded border border-white/5 whitespace-nowrap">Client</span>
                      <span>→</span>
                      <span className="px-2 py-1 bg-black/50 rounded border border-white/5 whitespace-nowrap">API Layer</span>
                      <span>→</span>
                      <span className="px-2 py-1 bg-black/50 rounded border border-white/5 whitespace-nowrap">Database / AI</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mt-4">{project.architecture}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Key Challenges</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Outcome</h4>
                      <p className="text-white font-medium text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Sidebar */}
                <div className="lg:w-1/3 mt-10 lg:mt-0 lg:border-l border-white/5 lg:pl-12 flex flex-col justify-start pt-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
