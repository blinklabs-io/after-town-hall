import data from '../afterTownHallData';
import BreakOutRoomForm from './BreakOutRoomForm';
import { Users } from 'lucide-react';

interface BR {
  name: string;
  host: string;
  description: string;
}

const HostRoomCard = ({ br }: { br: BR }) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="h-1 bg-violet-600" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-slate-900 mb-1">
          {br.name}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
          <Users size={12} />
          <span>Host: {br.host}</span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed flex-grow">
          {br.description}
        </p>
      </div>
    </div>
  );
};

const HostRooms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.breakoutRooms.map((br, index) => (
        <HostRoomCard key={index} br={br} />
      ))}
      <BreakOutRoomForm />
    </div>
  );
};

export default HostRooms;
