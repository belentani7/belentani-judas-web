import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, ShieldAlert, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AGENTS = [
  { name: 'AUDIT_PRIME', role: 'Trust & Safety Core', status: 'LIVE', icon: ShieldAlert },
  { name: 'SYNTH_VOICE_01', role: 'Vocal Reconstruction', status: 'PROCESSING', icon: Activity },
  { name: 'DESIGNAI_SYS', role: 'Glassmorphic Generator', status: 'IDLE', icon: Cpu },
];

export default function AgentsPanel() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    
    gsap.fromTo('.agent-card', 
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top 75%"
        }
      }
    );
  }, []);

  return (
    <section ref={panelRef} className="py-24 px-6 lg:px-24 relative z-10 bg-gradient-to-b from-transparent to-[#050002]">
      
      <div className="mb-12">
        <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-4">
          AI <span className="text-[#ff0033]">Generative</span> Studio
        </h2>
        <p className="font-mono text-white/50 max-w-lg text-sm">
          Co-procesadores activos monitoreando métricas en tiempo real. 
          Auditoría, síntesis y seguridad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AGENTS.map((agent, i) => (
          <div key={i} className="agent-card glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            {/* Header */}
            <div className="p-4 border-b border-red-500/20 flex justify-between items-center bg-black/40">
              <div className="flex items-center gap-3">
                <agent.icon className="text-[#ff0033] w-5 h-5" />
                <span className="font-mono text-sm tracking-widest uppercase">{agent.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {agent.status === 'LIVE' && <div className="w-2 h-2 rounded-full bg-[#ff0033] animate-pulse"></div>}
                <span className="font-mono text-[10px] text-white/50">{agent.status}</span>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 font-mono">
              <p className="text-xs text-white/40 mb-4">// {agent.role}</p>
              
              <div className="space-y-2 text-[10px] text-white/70">
                <div className="flex justify-between">
                  <span>CPU_LOAD:</span>
                  <span>{Math.floor(Math.random() * 40 + 10)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>MEMORY_ALLOC:</span>
                  <span>{Math.floor(Math.random() * 2000 + 500)}MB</span>
                </div>
                <div className="flex justify-between">
                  <span>LAST_PULSE:</span>
                  <span className="text-[#ff0033]">0.0{Math.floor(Math.random() * 99)}ms</span>
                </div>
              </div>

              {/* Terminal lines */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] opacity-50 space-y-1">
                <p>&gt; Validating hash...</p>
                <p>&gt; Syncing neural net...</p>
                <p className="animate-pulse">&gt; _</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
