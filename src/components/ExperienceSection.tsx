import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    title: "Coordenador de Backend — Till",
    description:
      "Desenvolvimento de arquiteturas escaláveis para mobilidade urbana. Soluções em tempo real (WebSockets) e serviços Node.js (Express) para alta volumetria de dados.",
    results: null,
  },
  {
    title: "Ensino & Mentoria em Algoritmos e Estruturas de Dados",
    description:
      "Desenvolvi e ministrei um currículo focado em lógica e algoritmos para 40 alunos. Colaborei com 8 monitores para otimizar materiais e escalar o impacto do programa.",
    results: [
      "Aumento de 280% nas inscrições para a Olimpíada Brasileira de Informática (OBI) através de mentoria direcionada.",
      "Formei 15 equipes inéditas para a Maratona InterIF, a maior competição de programação estudantil do Brasil.",
    ],
  },
];

const TimelineItem = ({ item, index }: { item: typeof items[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative pb-16 last:pb-0 group"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Animated dot */}
      <div className="absolute -left-[calc(2rem+5px)] top-1">
        <motion.div
          className="w-3 h-3 border-2 border-neon bg-background relative"
          animate={isInView ? { scale: [0, 1.3, 1] } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-neon/20"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      <h3 className="font-mono text-foreground font-semibold mb-3 group-hover:text-neon/90 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>

      {item.results && (
        <ul className="space-y-3">
          {item.results.map((r, i) => (
            <motion.li
              key={r}
              className="text-sm text-muted-foreground flex gap-2 items-start"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
            >
              <span className="text-neon mt-0.5 text-xs">▸</span>
              <span>{r}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-neon text-sm tracking-widest">
            {">"} Experiência()
          </h2>
          <motion.div
            className="flex-1 h-[1px] bg-gradient-to-r from-neon/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <div className="relative pl-8">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-neon/50 via-neon/20 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0, height: "100%" }}
          />

          {items.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
