import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLinks = ({ toggleNav }) => {
  const router = useRouter();

  return (
    <>
      <Link
        href="/"
        onClick={toggleNav}
        className={router.pathname === '/' ? 'text-primary' : 'hover:-translate-y-1 transition-transform duration-200 ease-out'}
      >
        <span className="text-primary">01.</span>Home
      </Link>
      <Link
        href="/about"
        onClick={toggleNav}
        className={router.pathname.includes('about') ? 'text-primary' : 'hover:-translate-y-1 transition-transform duration-200 ease-out'}
      >
        <span className="text-primary">02.</span>About Me
      </Link>
      <Link
        href="/experience"
        onClick={toggleNav}
        className={router.pathname.includes('experience') ? 'text-primary' : 'hover:-translate-y-1 transition-transform duration-200 ease-out'}
      >
        <span className="text-primary">03.</span>
        <span>Experience</span>
      </Link>
      <Link
        href="/contact"
        onClick={toggleNav}
        className={router.pathname.includes('contact') ? 'text-primary' : 'hover:-translate-y-1  transition-transform duration-200 ease-out'}
      >
        <span className="text-primary">04.</span>Contact
      </Link>
      <button className="animate-bounce border-2 border-primary p-2 rounded-md font-bold text-primary hover:scale-105 transition-transform duration-200 ease-out">
        Resume
      </button>
    </>
  );
};
