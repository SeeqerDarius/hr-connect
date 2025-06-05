'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Agenda', href: '/agenda'},
    { label: 'Speakers', href: '/speakers' },
    //{ label: 'Sessions', href: '/sessions' },
    //{ label: 'Exhibitors', href: '/exhibitors' },
    //{ label: 'Networking', href: '/networking' },
    //{ label: 'Venue', href: '/venue' },
    //{ label: 'Contact Us', href: '/contact' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Past Events', href: '/past-events' },
    { label: 'Sponsors', href: '/sponsors' },
    //{ label: 'Register', href: '/register' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="bg-[#08174B] sticky top-0 z-50 shadow">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold text-[#FF8C00]">HR Connect</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-4 text-sm sm:text-base font-medium">
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

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile nav panel */}
      {menuOpen && (
        <ul className="md:hidden bg-[#0A1C63] text-white px-6 pb-6 space-y-3 text-center font-medium text-base">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 hover:text-[#FF8C00] transition ${
                  pathname === href ? 'text-[#FF8C00]' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
