
import { Briefcase, Award, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: "Flare Technologies",
    role: "Web Development Intern",
    year: "2026",
    description: "Built and deployed core responsive interfaces and communication workflows."
  },
  {
    company: "Rooman Technologies",
    role: "AIML & Data Analytics Intern",
    year: "2026",
    description: "Developed AI/ML analytics pipelines, Python data preprocessing, and Power BI reporting models."
  },
  {
    company: "Amdox Technologies",
    role: "Data Science & Analytics Intern",
    year: "", 
    description: "Executed validation, cleaning, and optimization workflows over structured datasets."
  }
];

const credentials = [
  "AWS (Solution Architecture)",
  "Tata Group (GenAI Powered Data Analytics & Data Visualization)",
  "Deloitte (Technology Job Simulation)",
  "Cisco (Cybersecurity Essentials)",
  "Great Learning (UI/UX Design Essentials)"
];

export const Timeline = () => {
  return (
    <section className="py-24 px-6 relative bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Timeline & Credentials</h2>
          <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            A track record of professional experience and validated technical training in modern software engineering and data science.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="md:grid md:grid-cols-12 md:gap-6 items-start">
                  <div className="hidden md:flex flex-col items-end col-span-3 pt-6 pr-4">
                    <span className="text-accent font-medium">{exp.year}</span>
                  </div>
                  
                  <div className="relative col-span-12 md:col-span-9 glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                    {exp.year && <span className="md:hidden text-accent text-sm font-bold mb-3 block">{exp.year}</span>}
                    
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials Bento Cell */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 h-full flex flex-col bg-gradient-to-br from-white/[0.02] to-transparent hover:border-accent/20 transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-white">Validated Technical Training</h3>
              </div>
              
              <div className="space-y-6 flex-1">
                {credentials.map((cred, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-gray-300 leading-tight">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
