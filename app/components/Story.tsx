"use client";
import { motion } from "framer-motion";

const scenes = [
  {
    title: "Design without limits",
    description:
      "Sketch in midair, stretch ideas to architecture scale, and invite collaborators that feel present beside you.",
    location: "Cupertino, 9:41 AM"
  },
  {
    title: "Cinema reimagined",
    description:
      "Transform any room into an expansive theater with micro-light control that keeps the world outside.",
    location: "Tokyo, 11:27 PM"
  },
  {
    title: "Memories relived",
    description:
      "Spatial photos and videos recreate moments as if they were happening again, with depth that pulls you in.",
    location: "Paris, Golden Hour"
  }
];

export function Story() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1E1F25,transparent_65%)] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,14,22,0.5),rgba(0,0,0,0.2))]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-white sm:text-5xl"
        >
          Stories captured through the new lens of reality.
        </motion.h2>

        <div className="flex flex-col gap-8">
          {scenes.map((scene, index) => (
            <motion.article
              key={scene.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15 }}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-[1px]"
            >
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-black/80 px-8 py-10 text-left md:px-12 md:py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
                <div className="relative flex flex-col gap-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">{scene.location}</span>
                  <h3 className="text-3xl font-semibold text-white md:text-4xl">{scene.title}</h3>
                  <p className="max-w-2xl text-sm text-white/60 md:text-base">{scene.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
