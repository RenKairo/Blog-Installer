import React, { useState } from 'react';
import { Download, Check, Copy, ShieldCheck, Monitor, Cpu, HardDrive, FileCode, CheckCircle2, RefreshCw } from 'lucide-react';
import { OFFICIAL_INSTALLER } from '../data/blogData';

export const InstallerSection: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'features' | 'requirements' | 'installation'>('features');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(type);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  return (
    <section id="download-hub" className="py-16 lg:py-24 border-t border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-600 text-xs font-mono font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span>Verified Official Setup Executable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Download RenKairo Desktop IDE <span className="text-red-600">v1.0.0 Setup</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Complete standalone setup package replicated directly from the core build output. Engineered for zero-dependency installation on 64-bit platforms.
          </p>
        </div>

        {/* Main Installer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Download Card (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#12151e] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
            
            {/* Release Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center">
                  <FileCode className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono">{OFFICIAL_INSTALLER.fileName}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono mt-1">
                    <span>Size: <strong className="text-slate-900 dark:text-slate-200">{OFFICIAL_INSTALLER.fileSize}</strong></span>
                    <span>•</span>
                    <span>Version: <strong className="text-red-600">{OFFICIAL_INSTALLER.version}</strong></span>
                    <span>•</span>
                    <span>Release: {OFFICIAL_INSTALLER.buildDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Download CTAs */}
            <div className="space-y-4">
              <a
                href={OFFICIAL_INSTALLER.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl text-lg transition-colors shadow-md"
              >
                <Download className="w-6 h-6 stroke-[2.5]" />
                <span>Download Setup Installer (External .exe)</span>
              </a>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono px-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Official release artifact hosted via CDN / GitHub Releases
                </span>
                <a
                  href={OFFICIAL_INSTALLER.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <RefreshCw className="w-3 h-3" />
                  Alternative Mirror Link
                </a>
              </div>
            </div>

            {/* Checksums Verification */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                Security Hashes & Verification
              </h4>

              {/* SHA256 */}
              <div className="bg-slate-50 dark:bg-[#0a0b0e] p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">SHA-256 Checksum:</div>
                  <div className="text-xs font-mono text-slate-900 dark:text-slate-200 font-medium truncate">{OFFICIAL_INSTALLER.sha256}</div>
                </div>
                <button
                  onClick={() => copyToClipboard(OFFICIAL_INSTALLER.sha256, 'sha256')}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-[#141720] hover:bg-slate-200 dark:hover:bg-[#1a1e2b] border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedHash === 'sha256' ? <Check className="w-3.5 h-3.5 text-red-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedHash === 'sha256' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Tabbed Info Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#12151e] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-sm">
            
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 pb-2 gap-2">
              {[
                { id: 'features', label: 'IDE Features' },
                { id: 'requirements', label: 'Sys Specs' },
                { id: 'installation', label: 'CLI Install' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                    activeTab === t.id
                      ? 'bg-red-600/10 text-red-600 border border-red-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Features */}
            {activeTab === 'features' && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Included in Desktop IDE v1.0.0:</h4>
                <ul className="space-y-2.5">
                  {OFFICIAL_INSTALLER.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 2: System Specs */}
            {activeTab === 'requirements' && (
              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                    <Monitor className="w-3.5 h-3.5 text-red-600" />
                    <span>Operating System:</span>
                  </div>
                  <div className="text-slate-900 dark:text-slate-200 pl-5 font-medium">{OFFICIAL_INSTALLER.minRequirements.os}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-red-600" />
                    <span>Processor & RAM:</span>
                  </div>
                  <div className="text-slate-900 dark:text-slate-200 pl-5 font-medium">{OFFICIAL_INSTALLER.minRequirements.cpu} | {OFFICIAL_INSTALLER.minRequirements.ram}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                    <HardDrive className="w-3.5 h-3.5 text-red-600" />
                    <span>Disk Footprint:</span>
                  </div>
                  <div className="text-slate-900 dark:text-slate-200 pl-5 font-medium">{OFFICIAL_INSTALLER.minRequirements.disk}</div>
                </div>
              </div>
            )}

            {/* Tab 3: Installation Commands */}
            {activeTab === 'installation' && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase font-semibold">Silent / Automated Installation (CLI):</h4>
                <div className="bg-slate-50 dark:bg-[#0a0b0e] p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-300 space-y-2">
                  <div className="text-slate-600 dark:text-slate-400 font-semibold"># Windows PowerShell / CMD</div>
                  <div className="text-red-600 font-bold">.\RenKairo-IDE-Setup-1.0.0.exe /S</div>
                  <div className="text-slate-600 dark:text-slate-400 font-semibold pt-2"># Verify SHA-256 Hash</div>
                  <div className="text-slate-800 dark:text-slate-300">Get-FileHash ".\RenKairo IDE Setup 1.0.0.exe" -Algorithm SHA256</div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
