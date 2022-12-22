import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="hidden md:flex items-center space-x-6 text-gray-300 text-sm">
      <Link href="/" className={router.pathname === '/' ? 'text-primary' : 'hover:-translate-y-1 transition-transform duration-200 ease-out'}>
        <span className="text-primary">01.</span>Home
      </Link>
      <Link
        href="/about"
        className={router.pathname.includes('about') ? 'text-primary' : 'hover:-translate-y-1 transition-transform duration-200 ease-out'}
      >
        <span className="text-primary">02.</span>About Me
      </Link>
      <Link
        href="/experience"
        className={router.pathname.includes('experience') ? 'text-primary' : 'hover:-translate-y-1 transition-transform duration-200 ease-out'}
      >
        <span className="text-primary">03.</span>
        <span>Experience</span>
      </Link>
      {/* <Link href="/work" className={router.pathname.includes('work') ? 'text-primary' : 'hover:-translate-y-1 transition-transform duration-200 ease-out'}>
      <span className="text-primary">03.</span>Work
    </Link> */}
      <Link
        href="/contact"
        className={router.pathname.includes('contact') ? 'text-primary' : 'hover:-translate-y-1  transition-transform duration-200 ease-out'}
      >
        <span className="text-primary">04.</span>Contact
      </Link>
      <button className="border-2 border-primary p-2 rounded-md font-bold text-primary hover:scale-105 transition-transform duration-200 ease-out">
        Resume
      </button>
    </nav>
  );
};
