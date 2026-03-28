import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedLine = ({ delay }: { delay: number }) => (
  <motion.div
    className="h-[1px] bg-gradient-to-r from-neon/50 via-neon/20 to-transparent"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay, ease: "easeOut" }}
    style={{ originX: 0 }}
  />
);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "// ARQUITETURA.",
    "// ESCALABILIDADE.",
    "// DESEMPENHO.",
  ];

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] animated-border" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" ref={ref}>
          <div className="lg:col-span-4">
            <div className="space-y-2">
              {lines.map((line, i) => (
                <motion.h2
                  key={line}
                  className="font-mono text-neon text-sm tracking-widest"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {line}
                </motion.h2>
              ))}
            </div>
            <motion.div
              className="mt-8 w-12 h-[2px] bg-neon/40"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </div>

          <div className="lg:col-span-8 space-y-6">
            {[
              <>
                Atualmente <span className="text-foreground font-medium">Coordenador de Backend na Till</span>, onde trabalho no desenvolvimento de arquiteturas escaláveis para o ecossistema de mobilidade urbana. Participo de soluções críticas em tempo real (WebSockets) e da camada de serviços em <span className="text-foreground">Node.js (Express)</span> para suportar alta volumetria de dados.
              </>,
              <>
                Minha trajetória é construída sobre uma base sólida em <span className="text-foreground">Lógica de Programação e Orientação a Objetos</span>, o que me permite transitar com fluidez entre ecossistemas, entregando código eficiente tanto em Node.js quanto em Java (Spring Boot).
              </>,
              <>
                Sou apaixonado por ir além do básico. Dedico-me a entender a arquitetura interna das tecnologias que utilizo — desde o gerenciamento do <span className="text-foreground">Event Loop</span> e fluxos assíncronos no Node.js, até a aplicação de <span className="text-foreground">Clean Architecture</span> e <span className="text-foreground">Domain-Driven Design (DDD)</span> na estruturação de APIs robustas.
              </>,
            ].map((content, i) => (
              <div key={i}>
                <motion.p
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  {content}
                </motion.p>
                {i < 2 && <AnimatedLine delay={0.5 + i * 0.2} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] animated-border" />
    </section>
  );
};

export default AboutSection;
