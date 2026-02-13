import { motion } from 'framer-motion';

interface Banner {
  date: string;
  message: string;
}

const SimpleBanner = ({ date, message }: Banner) => {
  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
    >
      <span className="text-xs sm:text-sm uppercase tracking-wide font-medium text-slate-400">
        {date}
      </span>
      <span className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
        {message}
      </span>
    </motion.div>
  );
};

export default SimpleBanner;
