import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-stone-200/15 bg-stone-950/35 px-6 py-4 backdrop-blur md:px-8">
        <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-100">
          Atelier Axis
        </Link>
        <nav>
          <ul className="flex items-center gap-4 text-[11px] uppercase tracking-[0.14em] text-stone-300 md:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-stone-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
