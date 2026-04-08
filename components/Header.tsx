'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteLinks } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900">
          Alex Morgan
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm">
          {siteLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${isActive ? 'text-accent' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
