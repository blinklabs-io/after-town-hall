import { motion } from 'framer-motion';
import data from './afterTownHallData';
import SimpleBanner from './components/SimpleBanner';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const LandingPage = () => {
  const crashDown1 = {
    hidden: { y: -1000, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 30,
        duration: 2,
        delay: 0.6,
      },
    },
  };

  const crashDown2 = {
    hidden: { y: -1000, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 30,
        duration: 2,
        delay: 0.4,
      },
    },
  };

  const subtleBounce = {
    hidden: { scale: 0.1 },
    visible: {
      scale: [1, 1.01, 1],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const crashDown3 = {
    hidden: { y: -1000, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 30,
        duration: 2,
        delay: 0.2,
      },
    },
  };

  const scrollAnimation = {
    y: [0, 10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-start h-full overflow-hidden gradient-background">
      <div className="font-custom">
        <motion.div
          variants={crashDown1}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-black font-semibold mb-6 pl-16 "
        >
          Catalyst Community
        </motion.div>
        <motion.div
          variants={crashDown2}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-[#133CD3] font-semibold leading-tight mb-4 pl-16 "
        >
          AFTER TOWNHALL
        </motion.div>
        <motion.div
          variants={crashDown3}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-[#133CD3] font-semibold leading-tight mb-10 pl-16 "
        >
          Ideas. Innovation. Impact.
        </motion.div>
        <SimpleBanner
          date={data.generalInfo.date}
          message={data.generalInfo.upcomingEvent}
        />
        <motion.div
          variants={subtleBounce}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-sm md:text-md lg:text-md xl:text-2xl text-[#133CD3] font-semibold leading-tight mt-5 pl-16 "
        >
          <a
            href="https://bit.ly/catalyst-townhall"
            className="text-[#133CD3] hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to register for the Townhall! →
          </a>{' '}
        </motion.div>
      </div>
      <Link
        to="global"
        smooth={true}
        duration={500}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div animate={scrollAnimation}>
          <ArrowDown size={38} color="#133CD3" />
        </motion.div>
      </Link>
    </div>
  );
};

export default LandingPage;
