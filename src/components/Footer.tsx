import { useState } from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['> SYSTEM_READY', '> AWAITING_INPUT']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setHistory(prev => [...prev, `> ${input}`, '> TRANSMITTING TO CORE...', '> ENCRYPTED.']);
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
          <div className="flex-1 overflow-y-auto space-y-2 mb-4 text-white/70">
            {history.map((line, i) => (
              <p key={i} className={line.includes('ENCRYPTED') ? 'text-[#ff0033]' : ''}>{line}</p>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 pt-4">
            <span className="text-[#ff0033]">&gt;</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none flex-1 text-white placeholder-white/30 uppercase"
              placeholder="ENVIAR DATOS AL NÚCLEO..."
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="hidden">Send</button>
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
