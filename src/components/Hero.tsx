import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface HeroProps {
  onStartBuilding: () => void;
  onViewDocs: () => void;
  theme?: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ onStartBuilding, onViewDocs, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-transparent select-none">
      
      {/* Main Content Container (Overlaid on Full Viewport Wallpaper) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 sm:pl-20">
        <div className="max-w-2xl space-y-6">
          
          {/* Category Tag */}
          <div className="text-red-600 font-mono text-xs font-bold tracking-widest uppercase">
            RENKAIRO BLOG
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
            isDark ? 'text-white drop-shadow-lg' : 'text-slate-950 drop-shadow-sm'
          }`}>
            Engineering the Future <br />
            with <span className="text-red-600">Cloud & AI</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg leading-relaxed max-w-xl font-medium ${
            isDark ? 'text-slate-100 drop-shadow-md' : 'text-slate-800'
          }`}>
            Insights, tutorials, and updates from the RenKairo team on building the next-gen cloud IDE and AI engineering canvas.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={onStartBuilding}
              className="flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-semibold rounded-lg text-sm transition-colors shadow-md"
            >
              <span>Start Building</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewDocs}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors backdrop-blur-sm shadow-md border ${
                isDark 
                  ? 'bg-[#0a0b0e]/85 hover:bg-[#141720] text-white border-slate-600/80' 
                  : 'bg-white/95 hover:bg-slate-100 text-slate-900 border-slate-300'
              }`}
            >
              <span>View Docs</span>
              <ExternalLink className={`w-4 h-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`} />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
