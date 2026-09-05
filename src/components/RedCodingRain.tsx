import { useEffect, useRef } from 'react';

export default function RedCodingRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const letters = '01JUDASBELENTANI<>{}[]/\\|10'.split('');
    const fontSize = 14;
    const columns = width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Start at different heights above
    }

    const draw = () => {
      // Black background with slight opacity for trailing effect
      ctx.fillStyle = 'rgba(5, 0, 2, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#ff0033'; // Neon Red
      ctx.font = `${fontSize}px "Space Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop occasionally
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // Approx 30fps for a slight glitchy feel

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-60"
    />
  );
}
