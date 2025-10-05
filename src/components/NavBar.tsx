import React, { useState } from 'react';
import catalysticon from '../assets/catalyst_vector.svg';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const NavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  if (to === 'home') {
    return (
      <a
        href="#"
        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (onClick) onClick();
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-xs">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center shrink-0 mr-4">
          <img
            src={catalysticon}
            alt="Catalyst Icon"
            className="h-8 w-8 mr-2"
          />
          <span className="font-medium text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
            After Townhall / Project Catalyst
          </span>
        </div>

        <div className="hidden md:flex justify-center items-center space-x-4 grow">
          <NavLink to="home">Home</NavLink>
          <NavLink to="global">Global</NavLink>
          <NavLink to="community">Community</NavLink>
          <NavLink to="breakout">Breakout</NavLink>
        </div>

        <div className="hidden md:flex justify-end items-center space-x-4 shrink-0">
          <a
            href="https://discord.com/invite/r8Mb7xnyTf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-gray-600 transition-colors duration-200 cursor-pointer"
          >
            Discord
          </a>
          <a
            href="https://twitter.com/Catalyst_onX/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-gray-600 transition-colors duration-200 cursor-pointer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/@IohkIo/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-gray-600 transition-colors duration-200 cursor-pointer"
          >
            Youtube
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-hidden cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md">
          <div className="py-2">
            <NavLink to="home" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="global" onClick={toggleMenu}>
              Global
            </NavLink>
            <NavLink to="community" onClick={toggleMenu}>
              Community
            </NavLink>
            <NavLink to="breakout" onClick={toggleMenu}>
              Breakout
            </NavLink>
            <a
              href="https://discord.com/invite/r8Mb7xnyTf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={toggleMenu}
            >
              Discord
            </a>
            <a
              href="https://twitter.com/Catalyst_onX/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={toggleMenu}
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/@IohkIo/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={toggleMenu}
            >
              Youtube
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
