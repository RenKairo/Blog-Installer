import React from 'react';
import { Home, FileText, Layers, Code, Info, Github, Disc as Discord, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenInstaller: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, onOpenInstaller }) => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 bg-transparent flex flex-col justify-between items-center py-8 z-40 hidden sm:flex pointer-events-auto select-none">
      
      {/* Top Main Navigation Rail */}
      <div className="flex flex-col items-center gap-5 pt-16">
        {/* Home */}
        <button
          onClick={() => setActiveSection('home')}
          title="Home"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
            activeSection === 'home'
              ? 'bg-red-700 text-white shadow-md font-bold'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-900/40'
          }`}
        >
          <Home className="w-5 h-5" />
        </button>

        {/* Articles / Blog */}
        <button
          onClick={() => setActiveSection('articles')}
          title="Articles & Specs"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
            activeSection === 'articles'
              ? 'bg-red-700 text-white shadow-md font-bold'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-900/40'
          }`}
        >
          <FileText className="w-5 h-5" />
        </button>

        {/* Architecture Topology */}
        <button
          onClick={() => setActiveSection('architecture')}
          title="System Architecture"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
            activeSection === 'architecture'
              ? 'bg-red-700 text-white shadow-md font-bold'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-900/40'
          }`}
        >
          <Layers className="w-5 h-5" />
        </button>

        {/* Code / Simulator */}
        <button
          onClick={() => setActiveSection('simulator')}
          title="Intent Simulator & Code"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
            activeSection === 'simulator'
              ? 'bg-red-700 text-white shadow-md font-bold'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-900/40'
          }`}
        >
          <Code className="w-5 h-5" />
        </button>

        {/* Info / About */}
        <button
          onClick={onOpenInstaller}
          title="Install RenKairo IDE (.exe)"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
            activeSection === 'install'
              ? 'bg-red-700 text-white shadow-md font-bold'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-900/40'
          }`}
        >
          <Info className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Social Links */}
      <div className="flex flex-col items-center gap-4 text-slate-600 dark:text-slate-300">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          title="GitHub Repository"
          className="hover:text-slate-950 dark:hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>

        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          title="Discord Community"
          className="hover:text-slate-950 dark:hover:text-white transition-colors"
        >
          <Discord className="w-5 h-5" />
        </a>

        <a
          href="mailto:contact@renkairo.io"
          title="Contact Team"
          className="hover:text-slate-950 dark:hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

    </aside>
  );
};
