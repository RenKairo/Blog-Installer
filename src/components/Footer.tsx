import React, { useState } from 'react';
import { ExternalLink, Check } from 'lucide-react';
import { ToriiLogo } from './ToriiLogo';

interface FooterProps {
  onOpenInstaller: () => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInstaller, setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#0b0d12] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 text-slate-600 dark:text-slate-400 font-sans sm:pl-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Brand Column (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <ToriiLogo size="md" showBlogBadge={false} />
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Next-gen Cloud & AI Engineering Canvas
            </p>
          </div>

          {/* Center Subscribe Form (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Stay updated</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Get the latest articles and updates.</p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white dark:bg-[#12151e] text-slate-900 dark:text-slate-200 text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-800 focus:border-red-600 outline-none flex-1 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-red-700 hover:bg-red-600 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Right Links Column (4 Cols) */}
          <div className="md:col-span-4 flex justify-start md:justify-end gap-12 text-xs font-medium">
            <div className="space-y-2">
              <div className="text-slate-900 dark:text-slate-300 font-semibold mb-2">Links</div>
              <div>
                <button onClick={onOpenInstaller} className="hover:text-red-600 transition-colors">
                  Install
                </button>
              </div>
              <div>
                <button onClick={() => setActiveTab('hosting')} className="hover:text-red-600 transition-colors">
                  Hosting
                </button>
              </div>
              <div>
                <button onClick={() => setActiveTab('about')} className="hover:text-red-600 transition-colors">
                  About
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-6">
              <div>
                <button onClick={() => setActiveTab('startup')} className="hover:text-red-600 transition-colors">
                  Startup
                </button>
              </div>
              <div>
                <a href="https://renkairo.io/docs" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-1">
                  <span>Docs</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
              <div>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-1">
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <div>
            © 2026 RenKairo. All rights reserved.
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            Replicated Executable Installer Hub v1.0.0
          </div>
        </div>

      </div>
    </footer>
  );
};
