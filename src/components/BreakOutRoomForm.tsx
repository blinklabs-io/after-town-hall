import data from '../afterTownHallData';
import { ArrowRight, PlusCircle } from 'lucide-react';

const BreakOutRoomForm = () => {
  return (
    <div className="group bg-white rounded-xl border border-dashed border-violet-300 overflow-hidden hover:border-violet-400 hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="h-1 bg-violet-600" />
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-violet-50 rounded-lg shrink-0">
            <PlusCircle size={18} className="text-violet-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {data.hostYourRoom.description}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {data.hostYourRoom.deadline}
            </p>
          </div>
        </div>
        <div className="flex-grow" />
        <a
          href={data.hostYourRoom.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium self-start"
        >
          Request a Room
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default BreakOutRoomForm;
