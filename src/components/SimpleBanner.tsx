import { motion } from 'framer-motion';

interface Banner {
  date: string;
  message: string;
}

const SimpleBanner = ({ date, message }: Banner) => {
  return (
    <div className="py-1 text-black w-full ">
      <motion.div
        className="flex pl-16 text-sm items-center justify-start sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold  w-full"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 50,
          duration: 6,
        }}
      >
        <span className="mr-10">{date}</span>
        <span>{message}</span>
      </motion.div>
    </div>
  );
};

export default SimpleBanner;
