import React from 'react';
import Image from 'next/image';
import { LinkedinOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';
import { Navbar } from './Navbar';
import { Logo } from './Logo';

const Layout = ({ children }) => {
  const [display, setDisplay] = React.useState({ firstScreen: true, logo: true });

  React.useEffect(() => {
    setTimeout(() => setDisplay((oldDisplay) => ({ ...oldDisplay, logo: false })), 1500);
    setTimeout(() => setDisplay((oldDisplay) => ({ ...oldDisplay, firstScreen: false })), 2000);
  }, []);

  if (display.firstScreen) {
    return <div className={`min-h-screen bg-background grid place-items-center`}>{display.logo && <Logo />}</div>;
  }

  return (
    <>
      <div className={`flex flex-col min-h-screen bg-background font-SpaceMono relative`}>
        <div className={`flex justify-between items-center h-14 py-10 px-8 md:px-16 animate-fadeIn-1`}>
          {/* Logo */}
          <Logo />

          {/* Nav items */}
          <Navbar />
        </div>

        {/* Main content */}
        <main className={`flex-1 py-10 px-8 md:px-20 font-sans animate-fadeIn-1.5`}>{children}</main>

        {/* Footer */}
        <footer className="py-10 px-8 md:px-20 text-gray-300 text-center text-sm">Designed & Built by Marko Djuric</footer>

        {/* Social Links */}
        <div className={`hidden md:flex flex-col absolute bottom-2 left-20 text-2xl line animate-fadeIn-1`}>
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
        <div className={`hidden md:block absolute bottom-2 right-0 text-2xl line animate-fadeIn-1`}>
          <div className="text-gray-300 text-sm rotate-90 mb-28 cursor-pointer hover:text-primary">markodjuric351@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
