import { Github } from "lucide-react";

export default function ProjectCard({
  title, blurb, tags, repo, demo,
}: {
  title: string; blurb: string; tags: string[]; repo?: string; demo?: string;
}) {
  return (
    <div className="card p-5 transition-shadow hover:shadow-[var(--shadow-glow)]">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-white/70">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {repo && (
          <a className="inline-flex items-center gap-2 underline" href={repo} target="_blank">
            <Github size={16}/> Repo
          </a>
        )}
        {demo && <a className="underline" href={demo} target="_blank">Live Demo</a>}
      </div>
    </div>
  );
}
