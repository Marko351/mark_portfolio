import React from 'react';
import classNames from 'classnames';
import { Navbar } from './Navbar';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

const Layout = ({ children }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const [display, setDisplay] = React.useState({ firstScreen: true, logo: true });

  React.useEffect(() => {
    setTimeout(() => setDisplay((oldDisplay) => ({ ...oldDisplay, logo: false })), 1500);
    setTimeout(() => setDisplay((oldDisplay) => ({ ...oldDisplay, firstScreen: false })), 2000);
  }, []);

  if (display.firstScreen) {
    return <div className={`min-h-screen bg-background grid place-items-center`}>{display.logo && <Logo isLoader />}</div>;
  }

  return (
    <>
      <div className={`flex flex-col min-h-screen pt-20 bg-background font-SpaceMono relative overflow-hidden`}>
        <div
          className={`fixed opacity-90 shadow-md shadow-teal-900 top-0 z-10 flex h-14 md:h-10 bg-background justify-between items-center py-10 px-8 md:px-16 animate-fadeIn-1 w-full`}
        >
          {/* Logo */}
          <Logo />

          {/* Nav items */}
          <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        </div>

        {/* Main content */}
        <main
          className={classNames(`py-10 flex-1 flex items-stretch px-8 md:px-24 font-sans animate-fadeIn-1.5`, {
            'blur-[2px]': openNav,
          })}
        >
          {children}
        </main>

        {/* Footer */}
        <footer className="flex flex-col py-6 px-8 md:px-20 text-gray-300 text-center text-sm z-10">
          <div className="flex justify-center md:hidden space-x-6 text-2xl">
            <SocialLinks />
          </div>
          <span>Designed & Built by Marko Djuric</span>
        </footer>

        {/* Social Links */}
        <div className={`hidden md:flex flex-col fixed bottom-2 left-14 text-2xl line animate-fadeIn-1`}>
          <SocialLinks />
        </div>
        <div className={`hidden md:block fixed bottom-2 right-14 text-2xl line animate-fadeIn-1`}>
          <div className="text-gray-300 text-sm vertical-letters mb-4 hover:text-primary">markodjuric351@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
