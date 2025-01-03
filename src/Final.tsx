import Discord from './assets/discord.svg';
import Youtube from './assets/youtube.svg';
import X from './assets/x.svg';

const Final = () => {
  return (
    <>
      <div className="min-h-[50vh] w-full flex phone:px-4 justify-between items-center sm:px-16 py-4 px-32 text-black bg-white">
        <div className="max-w-2xl">
          <h2 className="text-4xl phone:text-[20px] md:text-4xl font-bold mb-4 animate-fade-in-up">
            Thank You For Your Support
          </h2>
          <p className="text-xl phone:text-[15px] md:text-2xl mb-4 ">
            Project Catalyst Community
          </p>
          <p className="text-lg md:text-2xl phone:text-[15px] mb-4 ">
            After Townhall
          </p>
          <div className="flex space-x-2">
            <span className="text-lg phone:text-[15px] mb-4">
              We appreciate your participation!
            </span>
          </div>

          <div>
            <a
              href="https://blinklabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] phone:text-[15px]"
            >
              © 2024 Blink Labs Software
            </a>
            </div>

            <div>
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] phone:text-[15px]"
            >
              Licensed under Apache License, 2.0
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-4 phone:text-[20px]">
            Community
          </h3>
          <div className="space-y-4">
            <a
              href="https://discord.com/invite/r8Mb7xnyTf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#5865F2] transition-colors"
            >
              <img src={Discord} alt="Discord" className="w-6 h-6" />
              <span>Discord</span>
            </a>
            <a
              href="https://www.youtube.com/@IohkIo/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#FF0000] transition-colors"
            >
              <img src={Youtube} alt="YouTube" className="w-6 h-6" />
              <span>YouTube</span>
            </a>
            <a
              href="https://twitter.com/Catalyst_onX/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#1DA1F2] transition-colors"
            >
              <img src={X} alt="X (Twitter)" className="w-6 h-6" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
