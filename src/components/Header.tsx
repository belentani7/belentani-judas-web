import { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(new Date().toUTCString());
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full p-6 z-40 flex justify-between items-center mix-blend-difference font-mono text-sm tracking-widest uppercase">
      <div className="flex gap-4 items-center">
        <div className="w-2 h-2 bg-[#ff0033] rounded-full animate-pulse shadow-[0_0_10px_#ff0033]"></div>
        <span className="text-white">JUDAS-CORE // ACTIVE</span>
      </div>
      <div className="hidden md:block text-white/50 text-right">
        {time} <br/>
        LAT: 40.4168° N | LON: 3.7038° W
      </div>
    </header>
  );
}
