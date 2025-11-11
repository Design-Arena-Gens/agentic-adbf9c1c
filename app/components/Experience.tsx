"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SparkIcon } from "./icons";

const experienceHighlights = [
  {
    title: "Spatial Presence",
    description:
      "Feel every note, every whisper, every heartbeat with precision audio that maps seamlessly to your space.",
    media: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    accent: "from-apple-blue/30 to-apple-purple/40"
  },
  {
    title: "Intuitive Control",
    description:
      "Navigate experiences with gestures and eye tracking so natural, it vanishes into the background.",
    media: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    accent: "from-white/10 to-apple-blue/20"
  },
  {
    title: "Photoreal Fidelity",
    description:
      "Powered by the Apple R1 neural engine for 23 million pixels across dual micro-OLED displays.",
    media: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1200&q=80",
    accent: "from-apple-purple/30 to-white/5"
  }
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#04040A] to-black py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <SparkIcon className="size-4" />
              Crafted in California
            </span>
            <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
              Technology that dissolves into pure feeling.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
              Vision blends photoreal rendering with adaptive spatial audio to immerse you in stories
              that unfold around you. Every element is engineered to disappear so the moment can take
              center stage.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70 backdrop-blur">
            4K for each eye • Zero latency R1 chip • Carbon-neutral shell
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {experienceHighlights.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5"
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br ${item.accent}`}
              />
              <div className="relative flex h-full flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.media}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                    priority
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                  <div className="mt-auto pt-6 text-xs uppercase tracking-[0.2em] text-white/60">
                    Capture • Collaborate • Create
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
