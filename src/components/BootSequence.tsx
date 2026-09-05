import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const bootLogs = [
    'INIT_SYSTEM // BELENTANI_OS',
    'LOADING MODULE: JUDAS-CORE-07...',
    'ESTABLISHING NEURAL LINK...',
    'BYPASSING SECURITY PROTOCOLS...',
    'AUTHENTICATING BIOMETRICS: [####################] 100%',
    'ACCESS GRANTED.',
    'WELCOME TO THE JUDAS EXPERIENCE.'
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    
    const interval = setInterval(() => {
      if (currentLogIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        
        // GSAP Zoom in and fade out
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            scale: 2,
            opacity: 0,
            duration: 1.5,
            ease: "power4.inOut",
            onComplete: onComplete
          });
        }
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#050002] flex flex-col justify-center items-start p-10 lg:p-24 font-mono text-[#ff0033]"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-glow">BELENTANI_OS</h1>
        
        <div className="flex flex-col gap-2">
          {logs.map((log, index) => (
            <p key={index} className="text-sm lg:text-lg opacity-80 uppercase tracking-widest">
              &gt; {log}
            </p>
          ))}
          {logs.length < bootLogs.length && (
            <div className="w-4 h-6 bg-[#ff0033] animate-pulse mt-2"></div>
          )}
        </div>
      </div>
    </div>
  );
}
