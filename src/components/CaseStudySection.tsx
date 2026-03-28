import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Zap, ArrowRight, ChevronDown } from "lucide-react";

const phases = [
  {
    label: "O Problema",
    content:
      "O fluxo inteiro de corrida era feito com requests HTTP. Para saber se o motorista chegou, aceitou ou atualizar a posição, o frontend dependia de uma request para a API dar uma response — precisando sempre fazer requisições para respostas que nem sempre precisavam de uma. Isso deixava as telas de passageiro e motorista dessincronizadas, mudanças de estado com muito atraso e o tracking virava um padrão parecido com polling, aumentando custo, ruído e gerando cenários onde a mesma corrida aparecia diversas vezes para o mesmo motorista.",
  },
  {
    label: "A Solução",
    content:
      "Coordenei a migração para WebSocket utilizando Socket.io no Node. A escolha foi por precisar de tempo real, reconexão e roteamento simples — o que a comunicação bidirecional proporciona. Utilizei JWT no handshake e organizei a comunicação em rooms: ride para motorista e passageiro na mesma corrida, user para eventos privados e role para broadcast de ofertas. Os eventos foram padronizados no formato domain:module:resource:action, com um evento canônico ride:status:changed (sempre com previousStatus e newStatus). Erros centralizados no app:error, com code e contexto, para o client tratar tudo de forma uniforme.",
  },
  {
    label: "O Cancelamento",
    content:
      "O ponto mais delicado: envolve regra de negócio e cobrança. Criei um status intermediário cancelling para o backend processar taxa e estratégia de reembolso sem quebrar a consistência da corrida. Se o pagamento foi pelo gateway, fazemos estorno parcial retendo a taxa conforme regra de negócio. Se direto ao motorista, registramos um débito para a próxima corrida.",
  },
  {
    label: "Documentação",
    content:
      "Documentei toda a comunicação utilizando AsyncAPI, garantindo evolução segura e contratos claros para o time e futuras integrações.",
  },
];

const techTags = ["Node.js", "Socket.io", "JWT", "AsyncAPI", "WebSockets"];

const PhaseCard = ({ phase, index, isActive, onClick }: { phase: typeof phases[0]; index: number; isActive: boolean; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className={`w-full text-left border transition-all duration-500 ${
          isActive
            ? "border-neon/40 bg-neon/[0.03]"
            : "border-border hover:border-neon/20 bg-surface"
        }`}
      >
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-neon/60 tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className={`font-mono text-sm font-semibold transition-colors duration-300 ${isActive ? "text-neon" : "text-foreground"}`}>
                {phase.label}
              </h4>
            </div>
            <ChevronDown
              size={14}
              className={`text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-180 text-neon" : ""}`}
            />
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                  {phase.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom accent */}
        <motion.div
          className="h-[1px] bg-neon"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0 }}
        />
      </button>
    </motion.div>
  );
};

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-[1px] animated-border" />

      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(120_100%_50%/0.02)_0%,transparent_70%)]" />

      <div className="container">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <Zap size={16} className="text-neon" />
          <h2 className="font-mono text-neon text-sm tracking-widest">
            {">"} Case_Study()
          </h2>
          <motion.div
            className="flex-1 h-[1px] bg-gradient-to-r from-neon/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        {/* Case title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-mono text-xl md:text-2xl text-foreground font-bold mb-3">
            Migração HTTP <ArrowRight size={20} className="inline text-neon mx-2" /> WebSocket
          </h3>
          <p className="text-muted-foreground text-sm font-mono">
            Till — Ecossistema de Mobilidade Urbana
          </p>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {techTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-3 py-1 border border-neon/20 text-neon/70"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {phases.map((phase, i) => (
            <PhaseCard
              key={phase.label}
              phase={phase}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] animated-border" />
    </section>
  );
};

export default CaseStudySection;
