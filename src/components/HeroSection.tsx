import { ArrowRight, Code2 } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden bg-[#050505]">
      {/* Structural Depth & Backgrounds */}
      <div className="absolute inset-0 bg-grid-white [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10 relative">
        {/* Left Column: Asymmetrical Typography */}
        <div className="flex flex-col items-start">
          
          {/* Restrained Micro-badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            <span className="text-[11px] font-medium text-gray-300 tracking-wider uppercase">Available for opportunities</span>
          </div>
          
          {/* Headline Hierarchy */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.15] text-gray-400">
            Building Scalable <br />
            Full-Stack Apps <br />
            at the Intersection <br />
            of <span className="text-white">Data & AI.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-light">
            Frontend and Full Stack Developer specializing in high performance UI/UX architecture, intelligent AI integrations, and data driven web products.
          </p>
          
          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <a href="#architecture" className="w-full sm:w-auto px-6 py-3 bg-white/5 backdrop-blur-md border border-[#00FFFF]/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-[#00FFFF]/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300 flex items-center justify-center gap-2 group">
              View System Architecture
              <ArrowRight className="w-4 h-4 text-[#00FFFF] group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#context" className="w-full sm:w-auto px-6 py-3 text-gray-400 font-medium rounded-full hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
              Read Core Context
            </a>
          </div>
        </div>

        {/* Right Column: Code Snippet / Structural Visual */}
        <div className="hidden lg:block relative w-full [perspective:2000px] group">
          {/* Floating Depth Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 to-transparent blur-3xl -z-10 rounded-3xl translate-y-4 scale-95 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative rounded-2xl bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden [transform:rotateY(-12deg)_rotateX(5deg)] transition-transform group-hover:[transform:rotateY(0deg)_rotateX(0deg)] duration-1000 ease-out">
            
            {/* Fake Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-red-500/80 transition-colors duration-500"></div>
                <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-yellow-500/80 transition-colors duration-500 delay-75"></div>
                <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-500/80 transition-colors duration-500 delay-150"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs text-gray-500 font-mono tracking-wider">
                <Code2 className="w-3 h-3" />
                system_architecture.ts
              </div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-loose overflow-x-auto selection:bg-accent/30">
              <div className="flex"><span className="text-gray-600 mr-4 select-none">1</span><span className="text-[#c678dd]">import</span> {'{'} <span className="text-[#e5c07b]">VectorDB</span>, <span className="text-[#e5c07b]">LLM</span> {'}'} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'@ai-core/systems'</span>;</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">2</span></div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">3</span><span className="text-[#c678dd]">export interface</span> <span className="text-[#e5c07b]">AshidulProfile</span> {'{'}</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">4</span>  role: <span className="text-[#98c379]">'Full Stack Engineer'</span>;</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">5</span>  focus: [<span className="text-[#98c379]">'UI/UX Architecture'</span>, <span className="text-[#98c379]">'Data Systems'</span>];</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">6</span>  scale: (<span className="text-[#e06c75]">users</span>: <span className="text-[#d19a66]">number</span>) <span className="text-[#c678dd]">=&gt;</span> <span className="text-[#e5c07b]">Promise</span>&lt;<span className="text-[#e5c07b]">void</span>&gt;;</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">7</span>{'}'}</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">8</span></div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">9</span><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">initializeSystem</span> = <span className="text-[#c678dd]">async</span> (): <span className="text-[#e5c07b]">Promise</span>&lt;<span className="text-[#e5c07b]">AshidulProfile</span>&gt; <span className="text-[#c678dd]">=&gt;</span> {'{'}</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">10</span>  <span className="text-[#c678dd]">const</span> vectorContext = <span className="text-[#c678dd]">await</span> <span className="text-[#e5c07b]">VectorDB</span>.<span className="text-[#61afef]">connect</span>();</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">11</span>  <span className="text-[#c678dd]">return</span> {'{'}</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">12</span>    role: <span className="text-[#98c379]">'Full Stack Engineer'</span>,</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">13</span>    focus: [<span className="text-[#98c379]">'UI/UX Architecture'</span>, <span className="text-[#98c379]">'Data Systems'</span>],</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">14</span>    scale: <span className="text-[#c678dd]">async</span> (<span className="text-[#e06c75]">users</span>) <span className="text-[#c678dd]">=&gt;</span> <span className="text-[#61afef]">deploy</span>(users, vectorContext)</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">15</span>  {'}'};</div>
              <div className="flex"><span className="text-gray-600 mr-4 select-none">16</span>{'}'};</div>
            </div>
            
            {/* Ambient Border Glow inside the window */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"></div>
            <div className="absolute -bottom-px inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
