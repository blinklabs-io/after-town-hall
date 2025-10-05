import data from '../afterTownHallData';

const BreakOutRoomForm = () => {
  return (
    <div className="relative aspect-square text-center bg-opacity-10 backdrop-blur-md shadow-lg border border-opacity-20 rounded-lg flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 640"
        className="absolute -z-40 w-full"
      >
        <path
          fill="#6155D8"
          fillOpacity="1"
          d="M0,320L0,320L120,373C240,427,480,533,720,550C960,567,1200,493,1320,456L1440,420L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className="flex flex-col justify-between p-8 h-full">
        <h2 className="text-white text-2xl phone:text-[16px] sm:text-md md:text-md lg:text-lg xl:text-lg font-semibold mb-8">
          {data.hostYourRoom.description}
        </h2>
        <p className="text-black text-lg font-bold text-opacity-80 mb-4">
          {data.hostYourRoom.deadline}
        </p>
        <a
          href={data.hostYourRoom.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300 transition-colors duration-300"
        >
          Form Link Here
        </a>
      </div>
    </div>
  );
};

export default BreakOutRoomForm;
