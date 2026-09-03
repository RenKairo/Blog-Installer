import React, { useState } from 'react';
import { BookOpen, Clock, User, Search, Copy, Check, ArrowRight, ChevronLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogReaderProps {
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogReader: React.FC<BlogReaderProps> = ({ onSelectPost }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const categories = ['All', 'RENKAIRO', 'INSTALL', 'HOSTING', 'STARTUP'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const copySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="blog-section" className="py-16 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* If viewing a single post */}
        {selectedPost ? (
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Back Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-[#12151e] text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-red-600 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to All Technical Articles</span>
            </button>

            {/* Post Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-red-600/10 text-red-600 border border-red-600/30 font-semibold">
                  {selectedPost.category}
                </span>
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 dark:text-slate-400">{selectedPost.date}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {selectedPost.title}
              </h1>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {selectedPost.subtitle}
              </p>

              {/* Author Card */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600 font-bold font-mono">
                    MA
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{selectedPost.author.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{selectedPost.author.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Snippet Box */}
            {selectedPost.codeSnippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-t-xl border border-slate-200 dark:border-slate-800 border-b-0 font-mono text-xs text-slate-700 dark:text-slate-400 font-semibold">
                  <span>{selectedPost.codeSnippet.filename}</span>
                  <button
                    onClick={() => copySnippet(selectedPost.codeSnippet!.code)}
                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-red-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="bg-slate-50 dark:bg-[#0a0b0e] p-5 rounded-b-xl border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{selectedPost.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Markdown Main Article Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed font-sans border-t border-slate-200 dark:border-slate-800 pt-8">
              <div dangerouslySetInnerHTML={{ 
                __html: selectedPost.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
                  .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3 font-mono">$1</h3>')
                  .replace(/#### (.*)/g, '<h4 class="text-lg font-semibold text-red-600 dark:text-red-500 mt-6 mb-2">$1</h4>')
                  .replace(/```(bash|typescript|java|text|sh)?([\s\S]*?)```/g, '<pre class="bg-slate-100 dark:bg-[#0a0b0e] p-4 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-900 dark:text-slate-200 overflow-x-auto my-4"><code>$2</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-slate-100 dark:bg-slate-800/80 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded font-mono text-xs border border-slate-200 dark:border-slate-700/60 font-semibold">$1</code>')
                  .replace(/\n\n/g, '<p class="my-4"></p>')
              }} />
            </div>

            {/* Article Footer Tags */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <div className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase font-semibold">Article Topics & Technologies:</div>
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#12151e] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-300 font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Grid View of Articles */
          <div className="space-y-10">
            
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-600 text-xs font-mono font-bold uppercase">
                  <BookOpen className="w-4 h-4" />
                  <span>RenKairo Engineering Journal</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Deep Technical <span className="text-red-600">Articles & Specifications</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
                  In-depth architectural breakdowns covering prompt parsing, WebSocket terminal streaming, SSH node federation, and disposable GPU orchestrators.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[280px]">
                <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles or tags..."
                  className="w-full bg-white dark:bg-[#0a0b0e] text-slate-900 dark:text-slate-200 font-mono text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:border-red-600 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-red-600/10 text-red-600 border border-red-600/30 shadow-sm'
                      : 'bg-white dark:bg-[#12151e] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white dark:bg-[#12151e] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-red-600/40 cursor-pointer space-y-6 flex flex-col justify-between transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="space-y-4">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-md bg-red-600/10 text-red-600 border border-red-600/30 font-semibold">
                        {post.category}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Footer Info */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                      <User className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>{post.author.name}</span>
                    </div>
                    <span className="text-red-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                      Read Technical Spec <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
