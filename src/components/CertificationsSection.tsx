import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certs = [
  "Frontend Masters — As Partes Difíceis de Servidores & Node.js (Jan 2026)",
  "Frontend Masters — Introdução ao Node.js V3 (Jan 2026)",
  "Google — Introdução a Grandes Modelos de Linguagem - LLMs (Mar 2026)",
  "Google — Introdução à IA Generativa (Mar 2026)",
  "SENAI — Oracle Java Foundations (2025): POO, Estruturas de Dados e Tratamento de Exceções.",
  "Universidade Presbiteriana Mackenzie — Lógica de Programação usando Swift (2025).",
];

const education = [
  "IFSP — Ensino Médio Técnico Integrado em Informática para Internet (2024 — 2027)",
];

const CertItem = ({ text, index }: { text: string; index: number }) => (
  <motion.li
    className="text-sm text-muted-foreground border-l-2 border-border pl-4 py-2 hover:border-neon/50 hover:text-foreground transition-all duration-300 cursor-default group relative"
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
  >
    <span className="relative z-10">{text}</span>
    <motion.div
      className="absolute inset-0 bg-neon/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  </motion.li>
);

const CertificationsSection = () => {
  return (
    <section className="py-32 bg-secondary relative">
      <div className="absolute top-0 left-0 w-full h-[1px] animated-border" />

      <div className="container">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-neon text-sm tracking-widest">
            {">"} Validação_Técnica()
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award size={18} className="text-neon" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Certificações</span>
            </div>
            <ul className="space-y-1">
              {certs.map((c, i) => (
                <CertItem key={c} text={c} index={i} />
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={18} className="text-neon" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Formação</span>
            </div>
            <ul className="space-y-1">
              {education.map((e, i) => (
                <CertItem key={e} text={e} index={i} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] animated-border" />
    </section>
  );
};

export default CertificationsSection;
