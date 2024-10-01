import CommunityCards from './components/CommunityCards';
import HostRooms from './components/HostRooms';
import TownhallCards from './components/TownhallCards';
import { Element } from 'react-scroll';

const Divider = () => (
  <div className="mt-40">
    <div className="border-t border-gray-600"></div>
  </div>
);

const Rooms = () => {
  return (
    <Element name="home" className="element">
      <div className="min-h-screen w-full flex-col justify-start p-20 bg-white">
        <Element name="global" className="element">
          <section className="space-y-4">
            <h2 className="text-black text-4xl mt-20 mb-10">
              Global Townhalls
            </h2>
            <TownhallCards />
          </section>
        </Element>

        <Divider />

        <Element name="community" className="element">
          <section className="space-y-4">
            <h2 className="text-black text-4xl mt-40 mb-10">
              Community Events
            </h2>
            <CommunityCards />
          </section>
        </Element>

        <Divider />

        <Element name="breakout" className="element">
          <section className="space-y-4">
            <h2 className="text-black text-4xl mt-40 mb-10">Breakout Rooms </h2>
            <HostRooms />
          </section>
        </Element>
      </div>
    </Element>
  );
};

export default Rooms;
