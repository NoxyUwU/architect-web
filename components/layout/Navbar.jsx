'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 md:px-0">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-stone-200/15 bg-stone-950/35 px-6 py-4 backdrop-blur md:px-8">
        <Link href="/" className="text-sm uppercase tracking-[0.18em] text-stone-100" aria-label="Atelier Axis homepage">
          Atelier Axis
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-stone-400/40 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-stone-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
        >
          Menu
        </button>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-[11px] uppercase tracking-[0.14em] text-stone-300">
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

      {isOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile" className="mx-auto mt-3 max-w-6xl rounded-2xl border border-stone-200/15 bg-stone-950/90 p-4 backdrop-blur md:hidden">
          <ul className="grid gap-1 text-xs uppercase tracking-[0.14em] text-stone-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-lg px-3 py-2 transition hover:bg-stone-800/60" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
