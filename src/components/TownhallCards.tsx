import data from '../afterTownHallData';
const TownhallCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-10">
      {' '}
      {data.townhalls.map((townhall, index) => (
        <div
          key={index}
          className="relative text-center bg-opacity-10 backdrop-blur-md shadow-lg border border-opacity-20 rounded-lg flex flex-col justify-between aspect-square overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 640"
            className="absolute -z-10 w-full"
          >
            <path
              fill="#133cd3"
              fillOpacity="1"
              d="M0,320L0,320L120,373C240,427,480,533,720,550C960,567,1200,493,1320,456L1440,420L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
          <div className="flex flex-col justify-between p-6 h-full">
            <h2 className="text-white text-2xl font-semibold mb-8">
              {townhall.name}
            </h2>

            <p className="text-black text-lg font-bold text-opacity-80 mb-4">
              Global : {townhall.time}
            </p>

            <a
              href={townhall.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 transition-colors duration-300"
            >
              Register Here →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TownhallCards;
