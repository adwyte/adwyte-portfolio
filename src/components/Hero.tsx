"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
      <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-[color:color-mix(in_srgb,_var(--color-accent)_80%,_transparent)]">
            Hello, I’m
          </p>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
            Adwyte — building
            <span className="text-[--color-accent]"> AI-driven, scalable systems</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Backend • AI/ML • Simulations — Digital Twins, LLM platforms, robotics.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="card px-3 py-1 text-sm">FastAPI</span>
            <span className="card px-3 py-1 text-sm">PostgreSQL</span>
            <span className="card px-3 py-1 text-sm">TensorFlow</span>
            <span className="card px-3 py-1 text-sm">Unity3D</span>
            <span className="card px-3 py-1 text-sm">Docker</span>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="btn">
              <span className="btn-primary">View Projects</span>
            </a>
            <a href="mailto:adwyte28@gmail.com" className="btn underline">
              Get in touch →
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="justify-self-center"
        >
          <div className="card aspect-square w-64 md:w-80 grid place-items-center shadow-[var(--shadow-glow)]">
            <img alt="avatar" src="/avatar.jpg" className="h-32 w-32 rounded-full object-cover opacity-90" />
            <p className="mt-4 text-sm text-white/70">AI | Backend | Automation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
