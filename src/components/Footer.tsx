import { useState } from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['> SYSTEM_READY', '> Terminal local. Escribe HELP para ver los comandos.']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const command = input.trim().toLowerCase();
    if (command === 'clear') {
      setHistory([]);
    } else {
      const targets: Record<string, string> = { home: 'experience', artifacts: 'artifacts', studio: 'studio' };
      const target = Object.hasOwn(targets, command) ? targets[command] : undefined;
      const response = command === 'help'
        ? 'HELP · HOME · ARTIFACTS · STUDIO · CLEAR. Navegación local; no se envían datos.'
        : target ? `Abriendo ${command.toUpperCase()}...` : 'Comando no reconocido. Escribe HELP.';
      setHistory(prev => [...prev, `> ${input.trim()}`, `> ${response}`].slice(-80));
      if (target) document.getElementById(target)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
    setInput('');
  };

  return (
    <footer className="py-24 px-6 lg:px-24 relative z-10 border-t border-red-900/30">
      
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="text-[#ff0033]" />
          <h2 className="font-mono text-xl tracking-widest uppercase">Communication_Link</h2>
        </div>

        <div className="glass-panel p-6 rounded-lg font-mono text-sm h-64 flex flex-col">
          <div role="log" aria-label="Respuestas del terminal" className="flex-1 overflow-y-auto space-y-2 mb-4 text-white/70 break-words">
            {history.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 pt-4">
            <span className="text-[#ff0033]">&gt;</span>
            <input 
              type="text" 
              aria-label="Comando del terminal local"
              maxLength={200}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none min-w-0 flex-1 text-base text-white placeholder-white/70 uppercase focus-visible:outline-2 focus-visible:outline-red-500"
              placeholder="HELP"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="px-3 py-3 border border-red-500/60 text-white hover:bg-red-950 focus-visible:outline-2 focus-visible:outline-white">Ejecutar</button>
          </form>
        </div>
        
        <div className="mt-12 text-center font-mono text-[10px] text-white/30">
          <p>BELENTANI.ES // JUDAS PROJECT © 2026</p>
          <p>ENGINEERED BY ANTIGRAVITY AGENTS</p>
        </div>
      </div>
    </footer>
  );
}
