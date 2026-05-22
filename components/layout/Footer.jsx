export default function Footer() {
  return (
    <footer className="border-t border-stone-800/80 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs uppercase tracking-[0.08em] text-stone-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Atelier Axis</p>
        <p>Architecture Portfolio — Step 1 Foundation</p>
      </div>
    </footer>
  );
}
