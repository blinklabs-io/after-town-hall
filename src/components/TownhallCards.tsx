import data from '../afterTownHallData';
import { Globe, ArrowRight } from 'lucide-react';

const TownhallCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.townhalls.map((townhall, index) => (
        <div
          key={index}
          className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300"
        >
          <div className="h-1 bg-blue-600" />
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                <Globe size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {townhall.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{townhall.time}</p>
              </div>
            </div>
            <a
              href={townhall.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Register Here
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TownhallCards;
