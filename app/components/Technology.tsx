"use client";
import { motion } from "framer-motion";

const specs = [
  {
    label: "Micro‑OLED Displays",
    value: "23 million pixels",
    detail: "Ultra retina clarity across dual displays calibrated for color perfection."
  },
  {
    label: "Apple R1 Chip",
    value: "12ms photon-to-photon",
    detail: "Dedicated sensor fusion chip for zero lag motion responsiveness."
  },
  {
    label: "Spatial Audio",
    value: "360° beamforming",
    detail: "Personalized sound field adapts to your room for cinematic immersion."
  },
  {
    label: "Materials",
    value: "Recycled aluminum",
    detail: "Featherlight frame with soft textile modular seal for all-day comfort."
  }
];

export function Technology() {
  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#020209] to-black py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Engineering</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Born from decades of relentless innovation.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-white/60 sm:text-base">
            Every component in Vision is built to bring your ideas to life with breathtaking realism. The
            result is a headset that disappears, letting imagination lead.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {specs.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/20 to-apple-purple/20" />
              </div>
              <div className="relative flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</span>
                <span className="text-3xl font-semibold text-white">{item.value}</span>
                <p className="text-sm text-white/70">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
