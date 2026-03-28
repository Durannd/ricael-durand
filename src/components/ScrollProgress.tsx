import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, hsl(120 100% 55%), hsl(120 80% 40%))",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left blur-sm"
        style={{
          scaleX,
          background: "linear-gradient(90deg, hsl(120 100% 55%), hsl(120 80% 40%))",
          opacity: 0.5,
        }}
      />
    </>
  );
};

export default ScrollProgress;
