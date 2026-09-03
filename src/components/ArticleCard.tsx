import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleCardProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ post, onReadMore }) => {
  return (
    <div 
      onClick={() => onReadMore(post)}
      className="bg-[#12151e] rounded-2xl border border-slate-800/80 overflow-hidden card-matte-lift cursor-pointer flex flex-col justify-between group"
    >
      
      {/* Top Banner Artwork Image */}
      <div className="h-48 bg-[#0a0b0e] relative overflow-hidden flex items-center justify-center border-b border-slate-800/80">
        
        {/* Post 1: White Sumi-e Watercolor Torii Gate with Cat (The White Background Thingie!) */}
        {post.id === 'post-1' && (
          <div className="w-full h-full relative bg-[#f7f5f0]">
            <img 
              src="/images/wallpaper-light.png" 
              alt="Introducing RenKairo IDE - White Sumi-e Watercolor" 
              className="w-full h-full object-cover object-top filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-transparent to-transparent" />
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 text-red-700 text-[10px] font-mono font-bold border border-red-200 shadow-sm">
              Sumi-e Edition
            </div>
          </div>
        )}

        {/* Post 2: Terminal Installation Mockup */}
        {post.id === 'post-2' && (
          <div className="w-full h-full p-4 bg-[#0a0c10] font-mono text-[11px] text-slate-300 space-y-1 relative">
            <div className="flex items-center gap-1.5 pb-2 text-slate-500 border-b border-slate-800">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-red-500 font-bold">$ renkairo install</div>
            <div className="text-slate-400">&gt; Checking dependencies</div>
            <div className="text-slate-400">&gt; Downloading packages</div>
            <div className="text-slate-400">&gt; Installing</div>
            <div className="text-emerald-400 font-bold">&gt; Done</div>
            {/* Watermark Torii SVG */}
            <img 
              src="/images/torii-gate.svg" 
              alt="Torii" 
              className="w-16 h-16 absolute right-3 bottom-2 opacity-35"
            />
          </div>
        )}

        {/* Post 3: Pagoda Temple */}
        {post.id === 'post-3' && (
          <div className="w-full h-full relative">
            <img 
              src="/images/wallpaper-pagoda.jpg" 
              alt="Hosting RenKairo on Cloud" 
              className="w-full h-full object-cover object-center filter brightness-95 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-transparent to-transparent" />
          </div>
        )}

        {/* Post 4: Dark Pagoda Night */}
        {post.id === 'post-4' && (
          <div className="w-full h-full relative">
            <img 
              src="/images/wallpaper-dark-pagoda.jpg" 
              alt="The RenKairo Startup Story" 
              className="w-full h-full object-cover object-center filter brightness-95 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-transparent to-transparent" />
          </div>
        )}

      </div>

      {/* Card Content Details */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          
          {/* Metadata Badge Row */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-600/10 text-red-500 border border-red-600/30">
              {post.category}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{post.date}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors leading-snug">
            {post.title}
          </h3>

          {/* Summary */}
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {post.summary}
          </p>

        </div>

        {/* Read More Link */}
        <div className="pt-4 flex items-center gap-1.5 text-xs font-mono text-red-500 font-bold group-hover:translate-x-1 transition-transform">
          <span>Read more</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

      </div>

    </div>
  );
};
