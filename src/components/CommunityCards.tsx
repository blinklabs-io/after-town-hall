import { useState } from 'react';
import data from '../afterTownHallData';

interface CommunityEvent {
  name: string;
  time: string;
  zoomLink?: string;
  link?: string;
  description: string;
}

const CommunityCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {data.communityEvents.map((comm: CommunityEvent, index: number) => (
        <div
          key={index}
          className="relative aspect-square  text-center bg-opacity-10 backdrop-blur-md shadow-lg border border-opacity-20 rounded-lg flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out bg-white"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            opacity: hoveredIndex === index ? 1 : 0.8,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 640"
            className="absolute top-0 left-0 w-full z-0"
          >
            <path
              fill="#0047AB"
              fillOpacity="1"
              d="M0,320L0,320L120,373C240,427,480,533,720,550C960,567,1200,493,1320,456L1440,420L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
          <div className="relative z-10 flex flex-col p-8 h-full">
            <h2 className="text-white text-2xl phone:text-[16px] sm:text-md md:text-[16.5px] lg:text-lg xl:text-xl font-semibold mb-8">
              {comm.name}
            </h2>
            <div className="flex-grow flex items-center justify-center">
              <p className="text-black text-lg font-bold text-opacity-80">
                Global : {comm.time}
              </p>
            </div>
          </div>
          <a
            href={comm.zoomLink || comm.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 left-0 right-0 text-center text-blue-600 underline z-30"
          >
            {comm.zoomLink ? 'Register Here →' : 'Join Here →'}
          </a>
          <div
            className={`absolute inset-0 bg-white z-20 flex items-center justify-center p-4 transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ pointerEvents: hoveredIndex === index ? 'auto' : 'none' }}
          >
            <p className="text-black text-lg p-6">{comm.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityCards;
