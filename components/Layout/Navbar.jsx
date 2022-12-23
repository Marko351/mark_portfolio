import React from 'react';
import classNames from 'classnames';
import { NavLinks } from './NavLinks';

export const Navbar = ({ openNav, setOpenNav }) => {
  const toggleNav = (value) => {
    setOpenNav(value);
  };

  return (
    <>
      {/* MD+ Screen */}
      <nav className="hidden md:flex items-center space-x-6 text-gray-300 text-sm">
        <NavLinks toggleNav={() => toggleNav(false)} />
      </nav>
      {/* Small Screen */}
      <div className="md:hidden z-[2] absolute top-0 right-0">
        <div id="menu-bar" className={classNames({ change: openNav })} onClick={() => toggleNav(!openNav)}>
          <div id="bar1" className={classNames('bar w-full')}></div>
          <div id="bar2" className={classNames('bar w-10/12', { 'w-full': openNav })}></div>
          <div id="bar3" className={classNames('bar w-8/12', { 'w-full': openNav })}></div>
        </div>
      </div>
      <div className={classNames('md:hidden relative menu-bg', { 'change-bg': openNav })}>
        <nav className="grid gap-8 absolute top-48 left-32 text-white">
          <NavLinks toggleNav={() => toggleNav(false)} />
        </nav>
      </div>
    </>
  );
};
