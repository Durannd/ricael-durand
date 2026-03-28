import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/durand-ricael/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Durannd" },
  { icon: Mail, label: "Email", href: "mailto:ricaelmenezes@gmail.com" },
];

const ContactSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container max-w-2xl text-center">
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 h-[1px] bg-gradient-to-l from-neon/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ originX: 1 }}
          />
          <h2 className="font-mono text-neon text-sm tracking-widest whitespace-nowrap">
            {">"} init_connection()
          </h2>
          <motion.div
            className="flex-1 h-[1px] bg-gradient-to-r from-neon/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <motion.div
          className="flex justify-center gap-10 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {links.map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center gap-3 text-muted-foreground hover:text-neon transition-all duration-300 group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <Icon size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/10 blur-xl transition-all duration-500 scale-[3]" />
              </div>
              <span className="font-mono text-xs">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="mailto:ricaelmenezes@gmail.com"
          className="relative inline-block font-mono text-sm px-10 py-4 border border-neon/40 text-neon overflow-hidden group"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Hover fill */}
          <span className="absolute inset-0 bg-neon/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <span className="relative z-10">[ ENTRAR_EM_CONTATO ]</span>
        </motion.a>

        {/* Footer */}
        <motion.p
          className="mt-20 text-muted-foreground/30 font-mono text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} Ricael Durand — Built with precision
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
