import React, { useState, useEffect } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { BLOG_POSTS } from './data/blogData';
import { BlogPost } from './types';
import { BlogReader } from './components/BlogReader';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { IntentSimulator } from './components/IntentSimulator';
import { InstallerSection } from './components/InstallerSection';
import { Footer } from './components/Footer';
import { Search, X, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('renkairo-theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('renkairo-theme', nextTheme);
  };

  const handleOpenInstaller = () => {
    setActiveTab('install');
    const el = document.getElementById('install-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredPosts = BLOG_POSTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col justify-between selection:bg-red-700 selection:text-white font-sans relative overflow-x-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0b0e] text-slate-100' : 'bg-[#fcfbf9] text-slate-900'
    }`}>
      
      {/* GLOBAL FULL-VIEWPORT BACKGROUND IMAGE LAYER */}
      <div className="absolute top-0 left-0 right-0 h-[720px] pointer-events-none select-none z-0 overflow-hidden">
        {isDark ? (
          /* Dark Mode Wallpaper: 100% Opaque Dark Pagoda Night */
          <img
            src="/images/wallpaper-dark.png"
            alt="RenKairo Dark Japanese Art"
            className="w-full h-full object-cover object-right opacity-100 transition-opacity duration-500"
          />
        ) : (
          /* Bright Mode Wallpaper: User's Exact light-wallpaper.png Image */
          <img
            src="/images/light-wallpaper.png"
            alt="RenKairo Bright Light Wallpaper"
            className="w-full h-full object-cover object-right opacity-100 filter brightness-100 contrast-105 transition-opacity duration-500"
          />
        )}

        {/* Text Readability Gradient Overlay */}
        <div className={`absolute inset-y-0 left-0 w-full sm:w-2/3 pointer-events-none ${
          isDark 
            ? 'bg-gradient-to-r from-[#0a0b0e]/90 via-[#0a0b0e]/40 to-transparent' 
            : 'bg-gradient-to-r from-[#fcfbf9]/95 via-[#fcfbf9]/60 to-transparent'
        }`} />
        
        {/* Bottom Fade into Content */}
        <div className={`absolute bottom-0 left-0 right-0 h-40 pointer-events-none ${
          isDark ? 'bg-gradient-to-b from-transparent to-[#0a0b0e]' : 'bg-gradient-to-b from-transparent to-[#fcfbf9]'
        }`} />
      </div>

      {/* Page Loading Animation */}
      {loading && (
        <PageLoader onComplete={() => setLoading(false)} />
      )}

      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInstaller={handleOpenInstaller}
        onOpenSearch={() => setSearchOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Left Sidebar Rail */}
      <Sidebar
        activeSection={activeTab}
        setActiveSection={setActiveTab}
        onOpenInstaller={handleOpenInstaller}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 relative z-10">
        
        {/* View Mode: Single Post Reader */}
        {selectedPost ? (
          <div className="sm:pl-16">
            <BlogReader />
          </div>
        ) : (
          <>
            {/* View Mode: Home View */}
            {activeTab === 'home' && (
              <div className="sm:pl-16 space-y-12">
                
                {/* Hero Banner Section */}
                <Hero
                  onStartBuilding={handleOpenInstaller}
                  onViewDocs={() => window.open('https://renkairo.io/docs', '_blank')}
                  theme={theme}
                />

                {/* "Latest Articles" Section Grid */}
                <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <h2 className={`text-xl sm:text-2xl font-bold tracking-tight font-sans ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Latest Articles
                    </h2>

                    <button
                      onClick={() => setActiveTab('articles')}
                      className="text-xs font-mono font-bold text-red-600 hover:text-red-500 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View all posts</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 4 Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BLOG_POSTS.slice(0, 4).map((post) => (
                      <ArticleCard
                        key={post.id}
                        post={post}
                        onReadMore={(p) => {
                          setSelectedPost(p);
                          if (p.id === 'post-2') handleOpenInstaller();
                        }}
                      />
                    ))}
                  </div>

                </section>

                {/* Architecture & Intent Playground */}
                <ArchitectureViewer />
                <IntentSimulator />
                
                {/* Standalone Installer Download Section */}
                <div id="install-section">
                  <InstallerSection />
                </div>
              </div>
            )}

            {/* View Mode: Articles */}
            {activeTab === 'articles' && (
              <div className="sm:pl-16">
                <BlogReader />
              </div>
            )}

            {/* View Mode: Architecture */}
            {activeTab === 'architecture' && (
              <div className="sm:pl-16 pt-8">
                <ArchitectureViewer />
              </div>
            )}

            {/* View Mode: Simulator */}
            {activeTab === 'simulator' && (
              <div className="sm:pl-16 pt-8">
                <IntentSimulator />
              </div>
            )}

            {/* View Mode: Install */}
            {activeTab === 'install' && (
              <div className="sm:pl-16 pt-8">
                <InstallerSection />
              </div>
            )}

            {/* View Mode: Hosting / About / Startup */}
            {(activeTab === 'hosting' || activeTab === 'about' || activeTab === 'startup') && (
              <div className="sm:pl-16">
                <BlogReader />
              </div>
            )}
          </>
        )}

      </main>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className={`border rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl ${
            isDark ? 'bg-[#12151e] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
              <div className="flex items-center gap-2 font-mono text-sm">
                <Search className="w-4 h-4 text-red-600" />
                <span>Search RenKairo Blog</span>
              </div>
              <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, setup guide, architecture..."
              className={`w-full font-mono text-sm px-4 py-3 rounded-xl border outline-none ${
                isDark ? 'bg-[#0a0b0e] text-slate-100 border-slate-800 focus:border-red-600' : 'bg-slate-50 text-slate-900 border-slate-300 focus:border-red-600'
              }`}
            />

            <div className="max-h-80 overflow-y-auto space-y-2">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => {
                    setSelectedPost(post);
                    setSearchOpen(false);
                  }}
                  className={`p-3 rounded-xl cursor-pointer border flex items-center justify-between group ${
                    isDark ? 'bg-[#0e1017] hover:bg-[#181c2b] border-slate-800' : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="font-semibold text-sm group-hover:text-red-600">{post.title}</div>
                    <div className="text-xs opacity-75">{post.summary}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:text-red-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer
        onOpenInstaller={handleOpenInstaller}
        setActiveTab={setActiveTab}
      />

    </div>
  );
};

export default App;
