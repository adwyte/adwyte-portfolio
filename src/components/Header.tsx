"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          <span className="text-[--color-accent]">Adwyte</span> • AI • Backend • Automation
        </Link>
        <nav className="flex items-center gap-4">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
          <a
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-[color:rgb(255_255_255_/_0.1)] px-3 py-1 text-sm hover:shadow-[var(--shadow-glow)]"
            href="https://github.com/adwyte"
            target="_blank"
          >
            <Github size={16} /> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
