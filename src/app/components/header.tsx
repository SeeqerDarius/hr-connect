'use client';

import { label } from 'framer-motion/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Agenda', href: '/agenda'},
    { label: 'Speakers', href: '/speakers'},
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Past Events', href: '/past-events' },
    { label: 'Register', href: '/register' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="bg-[#08174B] sticky top-0 z-50 shadow">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold text-[#FF8C00]">HR Connect</div>
        <ul className="flex gap-4 text-sm sm:text-base font-medium">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-[#FF8C00] transition ${
                  pathname === href ? 'text-[#FF8C00]' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
