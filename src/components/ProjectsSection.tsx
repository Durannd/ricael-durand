import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, GitBranch } from "lucide-react";

interface Project {
  name: string;
  repo: string;
  description: string;
  stack: string[];
  features: string[];
  learnings: string[];
}

const projects: Project[] = [
  {
    name: "MovieFlix - API REST",
    repo: "https://github.com/Durannd/MovieFlix",
    description: "API REST para gerenciamento de catálogo de filmes com autenticação de usuários e controle de acesso baseado em cargos.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Maven"],
    features: [
      "Registro/Login via JWT",
      "CRUD de filmes com paginação",
      "Autorização por cargos (ADMIN, USER)",
      "Validação e tratamento de erros",
    ],
    learnings: [
      "Implementação de tokens JWT",
      "Boas práticas do Spring Security",
      "Design RESTful",
      "Relacionamentos JPA",
      "Exceções personalizadas",
    ],
  },
  {
    name: "Library - API de Gestão de Biblioteca",
    repo: "https://github.com/Durannd/library",
    description: "Serviço REST completo para gerenciamento de biblioteca, com autenticação, controle de inventário e rastreamento de empréstimos.",
    stack: ["Java", "Spring Boot", "JWT", "PostgreSQL", "Swagger", "Docker", "Maven"],
    features: [
      "Autenticação JWT",
      "CRUD de inventário",
      "Cálculo automático de multas para atrasos",
      "Documentação Swagger",
      "Implantação via Docker",
    ],
    learnings: [
      "Design de API corporativa",
      "Lógica de negócios automatizada",
      "OpenAPI/Swagger",
      "Conteinerização Docker",
    ],
  },
  {
    name: "MergeMind - Developer Marketplace",
    repo: "https://github.com/Durannd/MergeMind",
    description: "Muitos devs têm dificuldade em compartilhar projetos e encontrar pessoas para contribuir. O MergeMind resolve isso: uma plataforma onde desenvolvedores se conectam a projetos reais, aplicam para vagas e colaboram — simulando o mercado de trabalho. Frontend em desenvolvimento, será integrado ao portfólio.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Swagger", "Maven"],
    features: [
      "Sistema de candidaturas com fluxo de aprovação",
      "Perfis de dev com stack e GitHub integrado",
      "Projetos com vagas e filtros dinâmicos",
      "Autenticação JWT e controle de acesso",
      "Documentação Swagger/OpenAPI completa",
    ],
    learnings: [
      "Identificar um problema real e modelar a solução",
      "Clean Architecture e DDD aplicados do zero",
      "Relacionamentos complexos com JPA",
      "Tratamento centralizado de exceções",
      "DTO Pattern com mappers dedicados",
    ],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative border border-border bg-surface overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-neon"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      />

      <div className="p-6 md:p-8">
        {/* Terminal header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
            <div className="w-2 h-2 rounded-full bg-neon/60" />
            <span className="font-mono text-xs text-muted-foreground/60 ml-2 truncate max-w-[200px]">
              ~/{project.name.toLowerCase().replace(/\s/g, "-")}
            </span>
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-neon transition-colors text-xs font-mono"
          >
            <GitBranch size={12} />
            <span className="hidden sm:inline">repo</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <h3 className="font-mono text-lg text-foreground font-semibold mb-3 group-hover:text-neon/90 transition-colors duration-300">
          {project.name}
        </h3>

        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] px-2.5 py-1 border border-border/60 text-neon/70 hover:text-neon hover:border-neon/30 transition-all duration-300">
              {s}
            </span>
          ))}
        </div>

        <ul className="space-y-2.5 mb-6">
          {project.features.map((f, i) => (
            <motion.li
              key={f}
              className="text-sm text-muted-foreground flex gap-2 items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <span className="text-neon mt-0.5 text-xs font-mono">▸</span>
              {f}
            </motion.li>
          ))}
        </ul>

        {/* Accordion */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-neon transition-colors group/btn"
        >
          <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          <span className="relative">
            O que aprendi
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neon/30 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 mt-4 pl-4 border-l border-neon/20">
                {project.learnings.map((l, i) => (
                  <motion.li
                    key={l}
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {l}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
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
            {">"} The_Code_Hub()
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] animated-border" />
    </section>
  );
};

export default ProjectsSection;
