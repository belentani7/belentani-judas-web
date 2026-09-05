import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Disc3, AudioWaveform, Sliders } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    // Floating Antigravity Effect
    const elements = heroRef.current.querySelectorAll('.float-element');
    elements.forEach((el, index) => {
      gsap.to(el, {
        y: () => (Math.random() - 0.5) * 40,
        x: () => (Math.random() - 0.5) * 20,
        rotationZ: () => (Math.random() - 0.5) * 5,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    // Scroll Parallax
    gsap.to('.hero-bg-layer', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen pt-32 px-6 lg:px-24 flex flex-col justify-center overflow-hidden">
      
      {/* Background abstract element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-red-600/10 rounded-full blur-[120px] hero-bg-layer z-0 pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Typography */}
        <div className="lg:col-span-7 flex flex-col gap-6 float-element">
          <p className="font-mono text-[#ff0033] tracking-widest text-sm uppercase">Creative Operating System // v1.0.0</p>
          <h1 className="text-6xl lg:text-8xl font-bold uppercase leading-none tracking-tighter">
            The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-red-500 text-glow">Judas</span> <br/>
            Experience
          </h1>
          <p className="text-lg lg:text-xl max-w-xl text-white/70 font-light border-l border-[#ff0033] pl-4 ml-2">
            Where betrayal becomes an algorithm and healing becomes a conceptual hack. 
            Immersive R&B, dark pop, and electronic synthesis.
          </p>
        </div>

        {/* Right Side: Alien Audio Module */}
        <div className="lg:col-span-5 float-element">
          <div className="glass-panel p-6 lg:p-8 rounded-2xl relative overflow-hidden group">
            {/* Inner glow line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0033] to-transparent opacity-50"></div>
            
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-mono text-sm tracking-widest uppercase text-white/50">Alien Audio Rack</h3>
              <div className="px-2 py-1 bg-red-950/50 text-[#ff0033] text-xs font-mono border border-red-900/50 rounded">ONLINE</div>
            </div>

            {/* Faux Visualizer */}
            <div className="h-32 w-full flex items-end gap-1 mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-red-900 to-[#ff0033] rounded-t-sm"
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    animation: `pulse-bar ${0.5 + Math.random()}s infinite alternate` 
                  }}
                ></div>
              ))}
            </div>

            {/* Controls */}
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center p-4 glass-panel rounded-xl hover:bg-[#ff0033]/10 transition-colors cursor-pointer group/btn">
                <Disc3 className="text-white/50 group-hover/btn:text-[#ff0033] mb-2" />
                <span className="font-mono text-[10px] text-white/50">SEQUENCE</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 glass-panel rounded-xl hover:bg-[#ff0033]/10 transition-colors cursor-pointer group/btn">
                <AudioWaveform className="text-white/50 group-hover/btn:text-[#ff0033] mb-2" />
                <span className="font-mono text-[10px] text-white/50">SYNTHESIS</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 glass-panel rounded-xl hover:bg-[#ff0033]/10 transition-colors cursor-pointer group/btn">
                <Sliders className="text-white/50 group-hover/btn:text-[#ff0033] mb-2" />
                <span className="font-mono text-[10px] text-white/50">MODULATE</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse-bar {
          0% { height: 10%; }
          100% { height: 90%; }
        }
      `}</style>
    </section>
  );
}
