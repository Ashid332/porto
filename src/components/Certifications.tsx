import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const certifications = [
  "Tata Group GenAI Powered Data Analytics Simulation",
  "AWS Solution Architecture Simulation",
  "Deloitte Technology Job Simulation",
  "Cisco Cybersecurity Essentials"
];

export const Certifications = () => {
  return (
    <section className="py-24 px-6 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Certifications & Training</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col justify-center min-h-[100px] hover:border-white/10 transition-colors">
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
