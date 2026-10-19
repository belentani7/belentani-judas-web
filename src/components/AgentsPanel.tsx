import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, ShieldAlert, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AGENTS = [
  { name: 'AUDIT_PRIME', role: 'Trust & Safety Core', status: 'ARCHETYPE', icon: ShieldAlert },
  { name: 'SYNTH_VOICE_01', role: 'Vocal Reconstruction', status: 'ARCHETYPE', icon: Activity },
  { name: 'DESIGNAI_SYS', role: 'Glassmorphic Generator', status: 'ARCHETYPE', icon: Cpu },
];

export default function AgentsPanel() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {

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
    }, panelRef);
    return () => motion.revert();
  }, []);

  return (
    <section id="studio" ref={panelRef} className="py-24 px-6 lg:px-24 relative z-10 bg-gradient-to-b from-transparent to-[#050002] scroll-mt-24">

      <div className="mb-12">
        <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-4">
          AI <span className="text-[#ff0033]">Generative</span> Studio
        </h2>
        <p className="font-mono text-white/50 max-w-lg text-sm">
          Entidades narrativas del universo Judas: auditoría, síntesis y diseño.
          Este archivo no está conectado a servicios de agentes.
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
                <span className="font-mono text-[10px] text-white/50">{agent.status}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 font-mono">
              <p className="text-xs text-white/40 mb-4">// {agent.role}</p>

              <div className="space-y-2 text-[10px] text-white/70">
                <div className="flex justify-between">
                  <span>MODULE:</span>
                  <span>{agent.role}</span>
                </div>
                <div className="flex justify-between">
                  <span>CONNECTION:</span>
                  <span>NOT CONNECTED</span>
                </div>
                <div className="flex justify-between">
                  <span>MODE:</span>
                  <span className="text-[#ff0033]">NARRATIVE</span>
                </div>
              </div>

              {/* Terminal lines */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] opacity-50 space-y-1">
                <p>&gt; Judas archive</p>
                <p>&gt; {agent.role}</p>
                <p className="animate-pulse">&gt; _</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
