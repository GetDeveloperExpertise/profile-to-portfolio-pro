import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">{title}</h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
