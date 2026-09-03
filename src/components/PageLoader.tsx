import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, Sparkles } from 'lucide-react';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [fadingOut, setFadingOut] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadingOut(true);
            setTimeout(onComplete, 700);
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [onComplete]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(onComplete, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0a0c10] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden transition-opacity duration-700 ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Video Stream Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* HTML5 Video Loader */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-110"
          poster="/images/wallpaper-dark-pagoda.jpg"
        >
          <source src="/videos/japanese-torii-loading.mp4" type="video/mp4" />
          {/* Fallback to background image if video file isn't cached locally yet */}
        </video>

        {/* Fallback Animated Canvas Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-[#0a0c10]/80" />

        {/* Falling Red Petals Animation Overlay */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-600/80 rounded-full animate-petal"
            style={{
              left: `${(i * 6.5) % 100}%`,
              animationDuration: `${4 + (i % 4)}s`,
              animationDelay: `${(i % 3) * 0.7}s`
            }}
          />
        ))}
      </div>

      {/* Top Header Controls */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 font-mono font-bold text-sm">
            ⛩
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-white tracking-wider">RENKAIRO BLOG</div>
            <div className="font-mono text-[10px] text-red-400">Loading Cinematic Intro</div>
          </div>
        </div>

        {/* Video Player Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 rounded-lg bg-[#12151e]/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            title={isMuted ? 'Unmute Video' : 'Mute Video'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            onClick={togglePlay}
            className="p-2 rounded-lg bg-[#12151e]/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            title={isPlaying ? 'Pause Video' : 'Play Video'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={handleSkip}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 text-white font-mono text-xs font-medium transition-colors ml-2"
          >
            <span>Skip Video</span>
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Video Title & Progress Overlay */}
      <div className="relative z-10 max-w-lg mx-auto w-full text-center space-y-6 my-auto">
        
        {/* Animated Torii Centerpiece */}
        <div className="inline-flex p-4 rounded-2xl bg-black/60 border border-red-700/50 backdrop-blur-md">
          <svg className="w-16 h-16 text-red-500 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
            <path d="M 10 22 C 30 16, 70 16, 90 22 L 87 28 C 70 24, 30 24, 13 28 Z" fill="#dc2626" />
            <rect x="18" y="32" width="64" height="6" rx="1.5" fill="#b91c1c" />
            <rect x="26" y="38" width="9" height="52" rx="2" fill="#dc2626" />
            <rect x="65" y="38" width="9" height="52" rx="2" fill="#dc2626" />
            <rect x="16" y="52" width="68" height="5" rx="1" fill="#991b1b" />
            <rect x="46" y="32" width="8" height="20" rx="1" fill="#7f1d1d" />
          </svg>
        </div>

        {/* Progress % Indicator */}
        <div className="space-y-3 font-mono">
          <div className="text-4xl font-extrabold tracking-tight text-white font-mono">
            {Math.min(progress, 100)}%
          </div>

          <div className="w-full bg-[#12151e] h-2 rounded-full overflow-hidden border border-slate-800">
            <div
              className="bg-red-600 h-full transition-all duration-150 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="text-xs text-slate-300 font-medium flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Loading RenKairo Video Loading Canvas...</span>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-4">
        <div>RenKairo v1.0.0 Desktop IDE & Blog</div>
        <div>Press Skip to view immediately</div>
      </div>

    </div>
  );
};
