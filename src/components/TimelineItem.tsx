export default function TimelineItem({
  heading, sub, bullets,
}: { heading: string; sub?: string; bullets?: string[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[--color-accent]" />
      <h4 className="font-semibold">{heading}</h4>
      {sub && <p className="text-sm text-white/70">{sub}</p>}
      {bullets && (
        <ul className="mt-2 list-disc pl-5 text-white/80">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}
