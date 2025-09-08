"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 120, scale: 0.8 }}
      whileInView={{ opacity: 0.2, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="my-12 w-full text-center text-[34px] uppercase leading-tight tracking-tight md:text-[100px] pointer-events-none select-none"
    >
      {text}
    </motion.span>
  );
}
