import data from '../afterTownHallData';

const BreakOutRoomForm = () => {
  return (
    <div className="relative bg-white text-center shadow-lg border border-opacity-20 rounded-lg flex flex-col aspect-square overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 640"
        className="absolute -z-10 w-full h-1/3"
        preserveAspectRatio="none"
      >
        <path
          fill="#6155D8"
          fillOpacity="1"
          d="M0,320L0,320L120,373C240,427,480,533,720,550C960,567,1200,493,1320,456L1440,420L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className="flex flex-col justify-between items-center h-full p-6 ">
        <h2 className="text-white text-2xl font-semibold">
          {data.hostYourRoom.description}
        </h2>
        <p className="text-black text-lg font-bold text-opacity-80 mt-10">
          {data.hostYourRoom.deadline}
        </p>
        <a
          href={data.hostYourRoom.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline p-6 hover:text-blue-300 transition-colors duration-300"
        >
          Form Link Here
        </a>
      </div>
    </div>
  );
};

export default BreakOutRoomForm;
