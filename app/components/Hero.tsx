"use client";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "./icons";

const headlineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0C0C0F] to-black">
      <div className="absolute inset-0 -z-10 bg-grid-overlay bg-[length:120px_120px] opacity-20" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 mx-auto h-[580px] w-[580px] rounded-full bg-gradient-to-r from-apple-blue/40 to-apple-purple/40 blur-[120px]"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur"
        >
          Apple Immersive
        </motion.span>

        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl"
        >
          Imagine a world your senses have never touched.
          <br />
          This is Apple Vision.
        </motion.h1>

        <motion.p
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="mt-8 max-w-3xl text-lg text-white/70 sm:text-xl"
        >
          Crafted with carbon-neutral materials and powered by the Apple R1 chip, Vision creates an
          ultra-realistic canvas that responds to your eyes, hands, and voice in real time.
        </motion.p>

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 ease-out hover:bg-neutral-200"
          >
            Watch the future unfold
            <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
          </a>
          <a
            href="#tech"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40"
          >
            Explore the technology
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="mt-20 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] backdrop-blur"
        >
          <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-black/80">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-apple-blue/10 to-transparent" />
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://res.cloudinary.com/demo/image/upload/v1700000000/apple-vision-poster.jpg"
            >
              <source src="https://cdn.coverr.co/videos/coverr-creating-virtual-reality-6550/1080p.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              Shot on Apple Vision Studio
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
