import data from '../afterTownHallData';
import { ArrowRight, Calendar } from 'lucide-react';

interface CommunityEvent {
  name: string;
  time: string;
  zoomLink?: string;
  link?: string;
  description: string;
}

const CommunityCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.communityEvents.map((comm: CommunityEvent, index: number) => (
        <div
          key={index}
          className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-sky-300 hover:shadow-md transition-all duration-300 flex flex-col"
        >
          <div className="h-1 bg-sky-600" />
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              {comm.name}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
              <Calendar size={12} />
              <span>{comm.time}</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
              {comm.description}
            </p>
            {(comm.zoomLink || comm.link) && (
              <a
                href={comm.zoomLink || comm.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium self-start"
              >
                {comm.zoomLink ? 'Register' : 'Join'}
                <ArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityCards;
