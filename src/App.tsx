import { useState } from 'react';
import RedCodingRain from './components/RedCodingRain';
import BootSequence from './components/BootSequence';
import Header from './components/Header';
import Hero from './components/Hero';
import GemsGrid from './components/GemsGrid';
import AgentsPanel from './components/AgentsPanel';
import Footer from './components/Footer';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      
      {/* Background Layer */}
      <RedCodingRain />

      {/* Main OS Interface */}
      <div className={`transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <Header />
        <main>
          <Hero />
          <GemsGrid />
          <AgentsPanel />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
