
import { Layers, Server, Database, Wrench } from 'lucide-react';

const skills = [
  {
    category: "Frontend Architecture",
    icon: <Layers className="w-6 h-6 text-accent" />,
    items: ["React.js", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Backend & Intelligent Systems",
    icon: <Server className="w-6 h-6 text-accent" />,
    items: ["Node.js", "Express.js", "REST APIs", "Python", "LangChain", "Vercel AI SDK"]
  },
  {
    category: "Data & Vector Systems",
    icon: <Database className="w-6 h-6 text-accent" />,
    items: ["SQL", "MS SQL", "MongoDB", "PostgreSQL", "Power BI", "Excel", "Pandas", "Data Visualization"]
  },
  {
    category: "Infrastructure & Tools",
    icon: <Wrench className="w-6 h-6 text-accent" />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Replit"]
  }
];

export const TechMatrix = () => {
  return (
    <section id="architecture" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Core Tech Matrix</h2>
          <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            A comprehensive overview of my technical capabilities spanning frontend architecture, backend systems, vector databases, and intelligent AI integrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent/30 transition-colors">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 text-sm bg-primary/50 border border-white/5 rounded-md text-gray-300 hover:text-accent hover:border-accent/50 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
