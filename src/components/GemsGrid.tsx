import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GEMS = [
  { id: '01', title: 'TRAICIÓN', desc: 'El algoritmo del dolor' },
  { id: '02', title: 'FRECUENCIA', desc: 'Síntesis oscura' },
  { id: '03', title: 'HACKEO', desc: 'Sanación conceptual' },
  { id: '04', title: 'REDENCIÓN', desc: 'Elevación de código' }
];

export default function GemsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const gems = containerRef.current.querySelectorAll('.gem-node');
    
    // Scroll Entrance
    gsap.fromTo(gems, 
      { y: 100, opacity: 0, rotateX: 45 },
      { 
        y: 0, opacity: 1, rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    // Floating state
    gems.forEach((gem, i) => {
      gsap.to(gem, {
        y: () => (Math.random() - 0.5) * 30,
        rotationZ: () => (Math.random() - 0.5) * 10,
        rotationY: () => (Math.random() - 0.5) * 15,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-24 relative z-10">
      
      <div className="mb-16">
        <h2 className="font-mono text-sm text-[#ff0033] tracking-widest mb-4 uppercase">&gt; Archetype_Artifacts</h2>
        <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-[#ff0033] to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
        {GEMS.map((gem) => (
          <div 
            key={gem.id} 
            className="gem-node glass-panel aspect-square flex flex-col items-center justify-center p-8 rounded-full relative group cursor-crosshair transform-style-3d hover:border-[#ff0033] transition-colors"
          >
            {/* Core visual gem */}
            <div className="absolute inset-4 rounded-full border border-red-500/20 group-hover:border-[#ff0033]/50 transition-colors pointer-events-none rotate-45 group-hover:rotate-90 duration-700"></div>
            <div className="absolute inset-8 rounded-full border border-white/5 pointer-events-none -rotate-12 group-hover:rotate-180 duration-1000"></div>
            
            {/* Holographic center glow */}
            <div className="absolute inset-1/4 rounded-full bg-[#ff0033]/0 group-hover:bg-[#ff0033]/10 blur-xl transition-all duration-500"></div>

            <div className="relative z-10 text-center">
              <span className="font-mono text-[#ff0033] text-xs block mb-2 opacity-50 group-hover:opacity-100">{gem.id}</span>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-2 group-hover:text-glow">{gem.title}</h3>
              <p className="text-xs font-mono text-white/50">{gem.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
