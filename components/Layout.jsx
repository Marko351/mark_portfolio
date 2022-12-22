import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkedinOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background font-SpaceMono relative">
      <div className="flex justify-between items-center h-14 py-10 px-8 md:px-20">
        {/* Logo */}
        <div className="text-primary text-3xl">M</div>

        {/* Nav items */}
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
      </div>

      {/* Main content */}
      <main className="flex-1 py-10 px-8 md:px-20 font-sans">{children}</main>

      {/* Footer */}
      <footer className="py-10 px-8 md:px-20 text-gray-300 text-center text-sm">Designed & Built by Marko Djuric</footer>

      {/* Social Links */}
      <div className="hidden md:flex flex-col absolute bottom-2 left-16 text-2xl line">
        <a href="https://www.linkedin.com/in/marko-djuric-20a225140/" target="_blank">
          <LinkedinOutlined className="social-icons mb-2" />
        </a>
        <a href="https://www.instagram.com/markk351/" target="_blank">
          <InstagramOutlined className="social-icons mb-2" />
        </a>
        <a href="https://github.com/Marko351" target="_blank">
          <GithubOutlined className="social-icons mb-4" />
        </a>
      </div>
      <div className="hidden md:block absolute bottom-2 right-0 text-2xl line">
        <div className="text-gray-300 text-sm rotate-90 mb-28">markodjuric351@gmail.com</div>
      </div>
    </div>
  );
};
