import { ExternalLink, Activity, Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Flare Technologies Ecosystem Redesign",
    impact: "Re-engineered core web architecture, accelerating user onboarding workflows and driving a 30% increase in customer engagement. Integrated custom communications via the WhatsApp Business API, reducing average response latency by 40%.",
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    github: null,
    link: null,
  },
  {
    title: "AI Job Tracker Application",
    impact: "Developed an AI-assisted full stack platform to centralize job applications, interviews, and automated tracking workflows to optimize user productivity pipelines.",
    stack: ["Node.js", "Express.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Ashid332/ai-job-tracker",
    link: null,
  },
  {
    title: "Llama Generative AI Chatbot",
    impact: "Engineered a responsive conversational application utilizing Llama-based large language models, implementing advanced contextual workflows and strict prompt engineering matrices.",
    stack: ["Python", "Generative AI APIs", "Streamlit/React", "LangChain"],
    github: "https://github.com/Ashid332/Chat_bot_llama",
    link: null,
  },
  {
    title: "Full Stack Analytical Expense Dashboard",
    impact: "Designed a secure financial monitoring system featuring user authentication, optimized CRUD REST APIs, and responsive analytics reporting dashboards.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Power BI / Chart.js"],
    github: "https://github.com/Ashid332/expenses-tracker",
    link: null,
  }
];

export const CaseStudies = () => {
  return (
    <section id="context" className="py-24 px-6 relative bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies & Product Architecture</h2>
          <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of high impact technical projects, demonstrating both the business value delivered and the underlying architectural complexity.
          </p>
        </div>
        
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div key={index} className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all duration-300 group">
              <div className="p-8 md:p-10 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center border border-white/5">
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-accent hover:bg-white/10 transition-colors flex items-center justify-center border border-white/5">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-accent font-medium mb-2">
                      <Activity className="w-4 h-4" />
                      <h4>Business Impact</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="md:col-span-5 space-y-4">
                    <div className="flex items-center gap-2 text-gray-400 font-medium mb-2">
                      <Code2 className="w-4 h-4" />
                      <h4>Technical Architecture</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-secondary border border-white/5 rounded-md text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
