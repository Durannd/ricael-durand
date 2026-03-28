import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { MapPin, Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink text-neon">▌</span>
    </span>
  );
};

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-[2px] h-[2px] rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          backgroundColor: `hsl(120 100% 50% / ${0.1 + Math.random() * 0.3})`,
          animation: `float-up ${8 + Math.random() * 12}s linear infinite`,
          animationDelay: `${Math.random() * 10}s`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const gridX = useTransform(springX, [-500, 500], [-8, 8]);
  const gridY = useTransform(springY, [-500, 500], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center relative overflow-hidden scanline"
    >
      <FloatingParticles />

      {/* Parallax grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--neon)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          x: gridX,
          y: gridY,
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(120_100%_50%/0.04)_0%,transparent_70%)]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              className="mb-6 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Terminal size={14} className="text-neon" />
              <span className="font-mono text-sm text-neon tracking-widest uppercase">
                Backend Developer
              </span>
            </motion.div>

            <motion.h1
              className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-none mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              RICAEL{" "}
              <span className="text-gradient-neon">DURAND</span>
            </motion.h1>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="font-mono text-xl md:text-2xl text-muted-foreground">
                <TypeWriter text="Backend Developer" delay={1200} />
              </p>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Desenvolvendo arquiteturas escaláveis e soluções backend robustas.{" "}
              <span className="text-foreground font-medium">Node.js & Java (Spring Boot)</span>.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-muted-foreground text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <MapPin size={14} className="text-neon" />
              <span>São Paulo, Brasil</span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-16 flex items-center gap-3 text-muted-foreground/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.div
                className="w-[1px] h-8 bg-neon/30"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ originY: 0 }}
              />
              <span className="font-mono text-xs tracking-widest">SCROLL</span>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Animated corner brackets */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon/0 group-hover:border-neon/60 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon/0 group-hover:border-neon/60 transition-all duration-500 delay-75" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon/0 group-hover:border-neon/60 transition-all duration-500 delay-100" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon/0 group-hover:border-neon/60 transition-all duration-500 delay-150" />
              </div>

              <div className="absolute -inset-[1px] bg-neon opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700" />
              <div className="relative w-64 h-72 md:w-72 md:h-80 overflow-hidden border border-border group-hover:border-neon/40 transition-colors duration-500">
                <img
                  src={profileImg}
                  alt="Ricael Durand"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* Overlay scanline on photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Status indicator */}
              <div className="absolute -bottom-6 left-0 flex items-center gap-2 font-mono text-xs text-muted-foreground/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon/40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon/80" />
                </span>
                available for work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
