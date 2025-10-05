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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-10">
      {data.communityEvents.map((comm: CommunityEvent, index: number) => (
        <div
          key={index}
          className="relative aspect-square  text-center bg-opacity-10 backdrop-blur-md shadow-lg border border-opacity-20 rounded-lg flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            opacity: hoveredIndex === index ? 1 : 0.8,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 640"
            className="absolute -z-40 w-full"
          >
            <path
              fill="#0047AB"
              fillOpacity="1"
              d="M0,320L0,320L120,373C240,427,480,533,720,550C960,567,1200,493,1320,456L1440,420L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
          <div className="flex flex-col justify-between p-8 h-full">
            <h2 className="text-white text-2xl phone:text-[16px] sm:text-md md:text-[16.5px] lg:text-lg xl:text-xl font-semibold mb-8">
              {comm.name}
            </h2>

            <p className="text-black text-lg font-bold text-opacity-80 mb-4">
              Global : {comm.time}
            </p>
            <a
              href={comm.zoomLink || comm.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline z-50"
            >
              {comm.zoomLink ? 'Register Here →' : 'Join Here →'}
            </a>
          </div>
          <div
            className={`absolute inset-0 bg-white  flex items-center justify-center p-4 transition-opacity duration-300 ${
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
