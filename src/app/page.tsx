import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import TimelineItem from "@/components/TimelineItem";
import Bulleted from "@/components/Bulleted";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { publications } from "@/data/publications";
import { achievements } from "@/data/achievements";
import { certifications } from "@/data/certifications";

export default function Home() {
  const featured = projects.filter(p => p.highlight);
  const others = projects.filter(p => !p.highlight);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="projects" title="Featured Projects" subtitle="Complex, industry-ready builds.">
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map(p => <ProjectCard key={p.slug} {...p} />)}
          </div>
        </Section>

        <Section title="More Projects" subtitle="Supporting work & experiments.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(p => <ProjectCard key={p.slug} {...p} />)}
          </div>
        </Section>

        <Section id="experience" title="Experience & Impact">
          <div className="space-y-6">
            {experience.map((e, idx) => (
              <TimelineItem
                key={idx}
                heading={`${e.role} — ${e.org}`}
                sub={e.period}
                bullets={e.points}
              />
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <Bulleted items={achievements} />
        </Section>

        <Section id="certifications" title="Certifications">
          <Bulleted items={certifications} />
        </Section>

        <Section id="publications" title="Publications">
          <ul className="list-disc pl-5">
            {publications.map((p, i) => (
              <li key={i} className="text-white/80">
                <span className="font-medium">{p.title}</span> — {p.venue}
                {p.link && <a href={p.link} className="ml-2 underline">[link]</a>}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="resume" title="Resume">
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block btn-primary"
          >
            Download Resume (PDF)
          </a>
          <p className="mt-3 text-white/70 text-sm">
            Updated with internships, projects, and publications.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
