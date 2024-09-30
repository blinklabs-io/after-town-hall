import catalysticon from '../assets/catalyst_vector.svg';
import { Link } from 'react-scroll';

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  if (to === 'home') {
    return (
      <a
        href="#"
        className="font-medium relative group cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <span>{children}</span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
      </a>
    );
  }
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="font-medium relative group cursor-pointer"
    >
      <span>{children}</span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

const NavBar: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 flex font-semibold bg-slate-100 bg-opacity-40">
      <nav className="w-full flex items-center py-4 px-8  justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-80">
            <img src={catalysticon} alt="Catalyst Icon" className="h-8 mr-6" />
            <a
              className="font-medium text-lg text-black focus:outline-none focus:opacity-80"
              aria-label="Brand"
            >
              After Townhall / Project Catalyst
            </a>
          </div>

          <div className="hidden sm:hidden md:hidden lg:flex xl:flex justify-center items-center space-x-7 text-lg text-black">
            <NavLink to="home">Home</NavLink>
            <NavLink to="global">Global</NavLink>
            <NavLink to="community">Community</NavLink>
            <NavLink to="breakout">Breakout</NavLink>
          </div>
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:flex items-center space-x-6 text-lg text-black">
          <a
            href="https://discord.com/invite/r8Mb7xnyTf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium relative group"
          >
            <span>Discord</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="https://twitter.com/InputOutputHK/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium relative group"
          >
            <span>Twitter</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="https://www.youtube.com/@IohkIo/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium relative group"
          >
            <span>Youtube</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
