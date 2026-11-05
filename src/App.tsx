import HeroShader from './components/HeroShader';
import { useCallback, useState } from 'react';
import RedCodingRain from './components/RedCodingRain';
import BootSequence from './components/BootSequence';
import Header from './components/Header';
import Hero from './components/Hero';
import GemsGrid from './components/GemsGrid';
import AgentsPanel from './components/AgentsPanel';
import Footer from './components/Footer';

function App() {
  const [booted, setBooted] = useState(false);
  const completeBoot = useCallback(() => setBooted(true), []);

  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white">
      {!booted && <BootSequence onComplete={completeBoot} />}
      
      {/* Background Layer */}
      <RedCodingRain />

      {/* Main OS Interface */}
      {booted && <div>
        <Header />
        <main>
          <Hero />
          <GemsGrid />
          <AgentsPanel />
        </main>
        <Footer />
      </div>}
    </div>
  );
}

export default App;
