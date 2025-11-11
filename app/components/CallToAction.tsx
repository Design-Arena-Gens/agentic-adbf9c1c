"use client";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0B0B10] to-black py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,116,255,0.25),transparent_65%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-10 py-16 text-center backdrop-blur"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-white/40">Preorder Early 2025</span>
        <h2 className="text-balance text-4xl font-semibold text-white sm:text-5xl">
          Reserve your space in the future of storytelling.
        </h2>
        <p className="max-w-2xl text-base text-white/60 sm:text-lg">
          Vision is launching in limited release. Secure yours to experience immersive worlds, lifelike
          collaboration, and memories reimagined.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:bg-neutral-200"
          >
            Reserve Apple Vision
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40"
          >
            View the full keynote
          </a>
        </div>
      </motion.div>
    </section>
  );
}
