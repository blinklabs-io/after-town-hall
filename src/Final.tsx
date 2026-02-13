import Discord from './assets/discord.svg';
import Youtube from './assets/youtube.svg';
import X from './assets/x.svg';

const Final = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <div className="max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Thank You For Your Support
            </h2>
            <p className="text-slate-500 mb-1">Project Catalyst Community</p>
            <p className="text-slate-500 mb-4">After Townhall</p>
            <p className="text-sm text-slate-400 mb-6">
              We appreciate your participation!
            </p>
            <div className="flex flex-col gap-1 text-xs text-slate-400">
              <a
                href="https://blinklabs.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                &copy; 2024 Blink Labs Software
              </a>
              <a
                href="https://www.apache.org/licenses/LICENSE-2.0.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Licensed under Apache License, 2.0
              </a>
              <a
                href="https://github.com/blinklabs-io/after-town-hall"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors mt-2"
              >
                Contribute on GitHub &rarr;
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Community
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://discord.com/invite/r8Mb7xnyTf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#5865F2] transition-colors"
              >
                <img src={Discord} alt="Discord" className="w-5 h-5" />
                <span>Discord</span>
              </a>
              <a
                href="https://www.youtube.com/@IohkIo/streams"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#FF0000] transition-colors"
              >
                <img src={Youtube} alt="YouTube" className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://twitter.com/Catalyst_onX/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#1DA1F2] transition-colors"
              >
                <img src={X} alt="X (Twitter)" className="w-5 h-5" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Final;
