import { FiGithub, FiLinkedin } from 'react-icons/fi';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
          Ashidul Islam
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Ashid332" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/ashidul-islam" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};
