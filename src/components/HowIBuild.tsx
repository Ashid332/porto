import { motion } from 'framer-motion';
import { Settings2, ArrowRight, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export const HowIBuild = () => {
  return (
    <section className="py-24 px-6 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">How I Build Software</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            My engineering philosophy centers on shipping reliable, scalable systems quickly without over-engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Engineering Principles */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Settings2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">Core Principles</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Build fast, ship often</h4>
                    <p className="text-sm text-gray-400">Iterative development beats delayed perfection.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Automate repetitive work</h4>
                    <p className="text-sm text-gray-400">CI/CD, testing, and deployment should happen without human intervention.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Measure before optimizing</h4>
                    <p className="text-sm text-gray-400">Rely on profiling and analytics, not intuition, to solve bottlenecks.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* GitHub Proof */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiGithub className="w-5 h-5 text-gray-300" />
                <h3 className="text-xl font-bold text-white tracking-tight">Recent Repositories</h3>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/Ashid332/ai-job-tracker" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">ai-job-tracker</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </a>
                <a href="https://github.com/Ashid332/porto" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">portfolio-v2</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Architecture Visual */}
          <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Standard System Architecture</h3>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-white font-medium">
                Client Layer (React / Next.js)
              </div>
              <div className="flex justify-center text-gray-600">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-emerald-400 font-medium">
                API Gateway (Node.js / Express)
              </div>
              <div className="flex justify-center text-gray-600">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-blue-400 font-medium">
                  Vector DB / PostgreSQL
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-purple-400 font-medium">
                  OpenAI Services
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
