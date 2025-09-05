export default function Bulleted({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 text-white/80 space-y-2">
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}
