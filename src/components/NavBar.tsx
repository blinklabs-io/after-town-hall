import React, { useState } from 'react';
import catalysticon from '../assets/catalyst_vector.svg';
import Discord from '../assets/discord.svg';
import XIcon from '../assets/x.svg';
import Youtube from '../assets/youtube.svg';
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
  const className =
    'px-3 py-1.5 text-[13px] text-slate-500 hover:text-blue-700 font-medium transition-all duration-200 cursor-pointer rounded-full hover:bg-blue-50';

  if (to === 'home') {
    return (
      <a
        href="#"
        className={className}
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
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const className =
    'block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-700 font-medium transition-colors duration-200 cursor-pointer rounded-lg hover:bg-blue-50/70';

  if (to === 'home') {
    return (
      <a
        href="#"
        className={className}
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
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const SocialIcon = ({
  href,
  src,
  alt,
  hoverClass,
}: {
  href: string;
  src: string;
  alt: string;
  hoverClass: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-1.5 rounded-full transition-all duration-200 opacity-40 hover:opacity-100 ${hoverClass}`}
  >
    <img src={src} alt={alt} className="w-4 h-4" />
  </a>
);

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center shrink-0">
          <img
            src={catalysticon}
            alt="Catalyst Icon"
            className="h-7 w-7 mr-2.5"
          />
          <span className="font-bold text-sm sm:text-base text-slate-900 whitespace-nowrap tracking-tight">
            After Townhall
          </span>
        </div>

        <div className="hidden md:flex items-center bg-slate-100/70 rounded-full px-1 py-0.5 gap-0.5">
          <NavLink to="home">Home</NavLink>
          <NavLink to="global">Townhalls</NavLink>
          <NavLink to="community">Community</NavLink>
          <NavLink to="breakout">Breakout Rooms</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-1 shrink-0">
          <SocialIcon
            href="https://discord.com/invite/r8Mb7xnyTf"
            src={Discord}
            alt="Discord"
            hoverClass="hover:bg-indigo-50"
          />
          <SocialIcon
            href="https://twitter.com/Catalyst_onX/"
            src={XIcon}
            alt="X (Twitter)"
            hoverClass="hover:bg-slate-100"
          />
          <SocialIcon
            href="https://www.youtube.com/@IohkIo/streams"
            src={Youtube}
            alt="YouTube"
            hoverClass="hover:bg-red-50"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-500 hover:text-slate-900 focus:outline-hidden cursor-pointer rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100">
          <div className="py-3 px-3">
            <MobileNavLink to="home" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="global" onClick={toggleMenu}>
              Townhalls
            </MobileNavLink>
            <MobileNavLink to="community" onClick={toggleMenu}>
              Community
            </MobileNavLink>
            <MobileNavLink to="breakout" onClick={toggleMenu}>
              Breakout Rooms
            </MobileNavLink>
            <div className="border-t border-slate-100 mt-3 pt-3 flex items-center gap-2 px-3">
              <SocialIcon
                href="https://discord.com/invite/r8Mb7xnyTf"
                src={Discord}
                alt="Discord"
                hoverClass="hover:bg-indigo-50"
              />
              <SocialIcon
                href="https://twitter.com/Catalyst_onX/"
                src={XIcon}
                alt="X (Twitter)"
                hoverClass="hover:bg-slate-100"
              />
              <SocialIcon
                href="https://www.youtube.com/@IohkIo/streams"
                src={Youtube}
                alt="YouTube"
                hoverClass="hover:bg-red-50"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
