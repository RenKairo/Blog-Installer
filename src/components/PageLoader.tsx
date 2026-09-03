import React, { useState, useRef, useEffect } from 'react';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [fadingOut, setFadingOut] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFinish = () => {
    if (fadingOut) return;
    setFadingOut(true);
    setTimeout(onComplete, 600);
  };

  useEffect(() => {
    // Attempt auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Automatically finish loading after 3.5 seconds and open normal website
    const timer = setTimeout(() => {
      handleFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden transition-opacity duration-700 ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
        onError={handleFinish}
        className="w-full h-full object-cover"
      >
        <source
          src="/videos/From Klickpin.com- Recreate these viral ways to style your festive table youll want to recreate this weekend that balance trend comfort and everyd.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};


