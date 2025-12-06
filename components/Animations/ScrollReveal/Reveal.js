"use client";
import { motion } from "framer-motion";
import useInView from "./useInView";

export default function Reveal({ children }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
