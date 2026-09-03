import React from 'react';
import { Search, Sun, Moon, ExternalLink } from 'lucide-react';
import { ToriiLogo } from './ToriiLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenInstaller: () => void;
  onOpenSearch: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenInstaller,
  onOpenSearch,
  theme,
  toggleTheme
}) => {
  const isDark = theme === 'dark';

  return (
    <nav className={`sticky top-0 z-50 px-4 lg:px-8 py-5 flex items-center justify-between transition-colors select-none bg-transparent ${
      isDark ? 'text-slate-200' : 'text-slate-800'
    }`}>
      
      {/* Brand Header */}
      <div onClick={() => setActiveTab('home')} className="flex items-center">
        <ToriiLogo size="md" />
      </div>

      {/* Nav Links + Actions */}
      <div className="flex items-center gap-6 text-sm font-medium">
        
        {/* Links Navigation */}
        <div className="hidden md:flex items-center gap-8 font-mono">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors ${
              activeTab === 'home' 
                ? (isDark ? 'text-white font-bold' : 'text-slate-900 font-bold') 
                : (isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            Home
          </button>

          <button
            onClick={onOpenInstaller}
            className={`transition-colors flex items-center gap-1 ${
              activeTab === 'install' 
                ? 'text-red-600 font-bold' 
                : (isDark ? 'text-slate-300 hover:text-red-400' : 'text-slate-600 hover:text-red-600')
            }`}
          >
            Install
          </button>

          <button
            onClick={() => setActiveTab('hosting')}
            className={`transition-colors ${
              activeTab === 'hosting' 
                ? (isDark ? 'text-white font-bold' : 'text-slate-900 font-bold') 
                : (isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            Hosting
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`transition-colors ${
              activeTab === 'about' 
                ? (isDark ? 'text-white font-bold' : 'text-slate-900 font-bold') 
                : (isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveTab('startup')}
            className={`transition-colors ${
              activeTab === 'startup' 
                ? (isDark ? 'text-white font-bold' : 'text-slate-900 font-bold') 
                : (isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            Startup
          </button>

          <a
            href="https://renkairo.io/docs"
            target="_blank"
            rel="noreferrer"
            className={`transition-colors flex items-center gap-1 ${
              isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Docs</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>
        </div>

        {/* Right Search & Theme Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-slate-300 hover:text-white hover:bg-[#141720]/60' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
            }`}
            title="Search Articles"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 font-mono text-xs ${
              isDark 
                ? 'text-amber-400 hover:text-amber-300 hover:bg-[#141720]/80 border border-slate-700/50' 
                : 'text-slate-900 hover:text-slate-950 hover:bg-slate-200 border border-slate-300'
            }`}
            title={isDark ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
            <span className="hidden sm:inline text-[11px] font-semibold">
              {isDark ? 'Bright Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
};
