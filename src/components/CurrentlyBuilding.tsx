import { motion } from 'framer-motion';
import { Activity, CheckCircle2, CircleDashed } from 'lucide-react';

export const CurrentlyBuilding = () => {
  return (
    <section className="py-24 px-6 relative bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Currently Building</h2>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Job Tracker v2.0</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Scaling the architecture to support multi-tenant user authentication, automated ATS parsing via OpenAI embeddings, and predictive analytics for application success rates.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">Development Status</span>
                    </div>
                    <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full font-medium">Active Sprints</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#050505] rounded-2xl p-8 border border-white/5">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Live Roadmap</h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">Vector DB Integration</h5>
                      <p className="text-xs text-gray-500">Semantic search for matching resumes to job descriptions.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Activity className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">Chrome Extension Parsing</h5>
                      <p className="text-xs text-gray-500">One-click data extraction from LinkedIn and Indeed. (In Progress)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CircleDashed className="w-5 h-5 text-gray-600 shrink-0" />
                    <div>
                      <h5 className="text-gray-400 font-medium mb-1">Predictive Interview Analytics</h5>
                      <p className="text-xs text-gray-600">Machine learning models to predict callback probability. (Planned)</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
