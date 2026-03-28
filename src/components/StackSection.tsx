import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  { label: "Backend", items: ["Node.js (Deep Dive)", "Java 21", "Spring Boot"] },
  { label: "Arquitetura", items: ["Microsserviços", "Clean Architecture", "Design Patterns", "WebSockets", "DDD"] },
  { label: "Database", items: ["PostgreSQL", "MySQL", "NeonDB", "Hibernate/JPA"] },
  { label: "DevOps/QA", items: ["Docker", "CI/CD (GitHub Actions)", "Swagger/OpenAPI", "Testes Automatizados"] },
  { label: "Frontend", items: ["React.js", "JavaScript", "TypeScript"] },
];

const Badge = ({ item, index }: { item: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className="relative font-mono text-sm px-4 py-2 border border-border text-muted-foreground cursor-default overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ borderColor: "hsl(120 100% 55%)" }}
    >
      {/* Fill animation on hover */}
      <motion.span
        className="absolute inset-0 bg-neon/5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
      <span className={`relative z-10 transition-colors duration-300 ${isHovered ? 'text-neon' : ''}`}>
        {item}
      </span>
    </motion.span>
  );
};

const StackSection = () => {
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
            {">"} Expertise_Badges()
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

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 bg-neon/40 rotate-45" />
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item, i) => (
                  <Badge key={item} item={item} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
