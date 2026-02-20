import { motion } from 'framer-motion';
import data from './afterTownHallData';
import SimpleBanner from './components/SimpleBanner';
import { ArrowDown, Globe, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-scroll';
import CatalystLogo from './assets/catalyst_vector.svg';

const LandingPage = () => {
  const fadeUp = (delay: number) => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  });

  const fadeIn = (delay: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
  });

  const scrollAnimation = {
    y: [0, 8, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut' as const,
      },
    },
  };

  const quickLinks = [
    {
      to: 'global',
      icon: Globe,
      label: 'Townhalls',
      desc: 'Official global sessions',
      iconColor: 'text-blue-600',
    },
    {
      to: 'community',
      icon: Users,
      label: 'Community',
      desc: 'Member-hosted events',
      iconColor: 'text-sky-600',
    },
    {
      to: 'breakout',
      icon: MessageSquare,
      label: 'Breakout Rooms',
      desc: 'Open discussions',
      iconColor: 'text-violet-600',
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-start h-full overflow-hidden">
      <img
        src={CatalystLogo}
        alt=""
        aria-hidden="true"
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] opacity-[0.035] pointer-events-none select-none"
      />

      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-2/3 w-64 h-64 bg-violet-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="max-w-5xl">
          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base tracking-widest uppercase text-slate-500 font-medium mb-4"
          >
            Project Catalyst
          </motion.p>
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 font-bold leading-[1.1] mb-3"
          >
            After Townhall
          </motion.h1>
          <motion.p
            variants={fadeUp(0.35)}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-700 font-semibold mb-6"
          >
            Ideas. Innovation. Impact.
          </motion.p>

          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
          >
            <SimpleBanner
              date={data.generalInfo.date}
              message={data.generalInfo.upcomingEvent}
            />
          </motion.div>

          <motion.div
            variants={fadeIn(0.65)}
            initial="hidden"
            animate="visible"
            className="mt-6 mb-10"
          >
            <a
              href="https://bit.ly/catalyst-townhall"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 text-sm sm:text-base font-medium shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for the Townhall &rarr;
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp(0.85)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl"
          >
            {quickLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="group flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl cursor-pointer hover:bg-white/90 hover:shadow-sm transition-all duration-200"
              >
                <item.icon
                  size={18}
                  className={`${item.iconColor} shrink-0`}
                />
                <div>
                  <span className="text-sm font-medium text-slate-800 block">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-500">{item.desc}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <Link
        to="global"
        smooth={true}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div animate={scrollAnimation}>
          <ArrowDown size={28} className="text-blue-700/40" />
        </motion.div>
      </Link>
    </div>
  );
};

export default LandingPage;
