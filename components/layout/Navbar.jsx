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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-200">
          Atelier Axis
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-xs uppercase tracking-[0.12em] text-stone-300 md:gap-8">
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
