import data from '../afterTownHallData';

const BreakOutRoomForm = () => {
  return (
    <div className="relative text-center shadow-lg border border-opacity-20 rounded-lg flex flex-col aspect-square overflow-hidden transition-all duration-300 ease-in-out bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 640"
        className="absolute top-0 left-0 w-full z-0"
        preserveAspectRatio="none"
      >
        <path
          fill="#6155D8"
          fillOpacity="1"
          d="M0,320L0,320L120,373C240,427,480,533,720,550C960,567,1200,493,1320,456L1440,420L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className="relative z-10 flex flex-col justify-between items-center h-full p-6 ">
        <h2 className="text-white text-2xl phone:text-[16px] sm:text-md md:text-md lg:text-lg xl:text-lg font-semibold">
          {data.hostYourRoom.description}
        </h2>
        <p className="text-black text-lg font-bold text-opacity-80 mt-20">
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
