import { useState } from 'react';
import data from '../afterTownHallData';
import { Info, X } from 'lucide-react';
import BreakOutRoomForm from './BreakOutRoomForm';
interface BR {
  name: string;
  host: string;
  description: string;
}

const HostRoomCard = ({ br }: { br: BR }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative bg-white text-center shadow-lg border border-opacity-20 rounded-lg flex flex-col aspect-square overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 640"
        className="absolute -z-10 w-full h-1/3"
        preserveAspectRatio="none"
      >
        <path
          fill="#133cd3"
          fillOpacity="1"
          d="M0,320L0,320L120,373C240,427,480,533,720,550C960,567,1200,493,1320,456L1440,420L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className="flex flex-col justify-between items-center h-full p-6">
        <h2 className="text-white text-2xl font-semibold">{br.name}</h2>
        <p className="text-black text-lg font-bold text-opacity-80">
          {br.host}
        </p>
        <button
          className="text-black hover:text-gray-600 transition-colors flex items-center space-x-4"
          onClick={() => setShowInfo(!showInfo)}
        >
          <span>Learn More</span>
          <Info size={24} className="text-blue-500 group-hover:text-gray-600" />
        </button>
      </div>

      {showInfo && (
        <div className="absolute inset-0 bg-white flex flex-col justify-center p-6 overflow-auto">
          <button
            className="absolute top-2 right-2 text-black hover:text-gray-600 transition-colors"
            onClick={() => setShowInfo(false)}
          >
            <X size={24} />
          </button>
          <p className="text-black font-bold mb-4">Host: {br.host}</p>
          <p className="text-black">{br.description}</p>
        </div>
      )}
    </div>
  );
};

const HostRooms = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-8">
        {data.breakoutRooms.map((br, index) => (
          <HostRoomCard key={index} br={br} />
        ))}

        <BreakOutRoomForm />
      </div>
    </div>
  );
};

export default HostRooms;
