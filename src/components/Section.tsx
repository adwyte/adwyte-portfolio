export default function Section({
  id, title, subtitle, children,
}: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
