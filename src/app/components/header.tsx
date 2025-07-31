'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Agenda', href: '/agenda' },
    //{ label: 'About Us', href: '/about' },
    {label: 'Committee', href: '/planning-committee' },
    //{ label: 'Venue', href: '/venue' },
    { label: 'Gallery', href: '/gallery' },
    //{ label: 'Past Events', href: '/past-events' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="bg-[#08174B] sticky top-0 z-50 shadow">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo with Text */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/hr-connect-logo.png"
            alt="HR Connect Conference Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-[#FF8C00] hidden sm:inline-block">
            HR Connect <span className="text-white">2025</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm sm:text-base font-medium">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-[#FF8C00] transition-colors ${
                  pathname === href ? 'text-[#FF8C00] font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1C63] text-white pb-4">
          <ul className="space-y-2 px-4 font-medium">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-3 px-4 rounded hover:bg-[#08174B] transition-colors ${
                    pathname === href ? 'text-[#FF8C00] font-semibold' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}