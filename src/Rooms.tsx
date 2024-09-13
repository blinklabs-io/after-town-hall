import CommunityCards from './components/CommunityCards';
import HostRooms from './components/HostRooms';
import TownhallCards from './components/TownhallCards';
import { Element } from 'react-scroll';
const Rooms = () => {
  return (
    <Element name="home" className="element">
      <div className="min-h-screen w-full flex-col justify-start p-20 bg-white">
        <Element name="global" className="element">
          <section className="space-y-4">
            <h2 className="text-black text-4xl px-10 mt-20">
              Global Townhalls
            </h2>
            <TownhallCards />
          </section>
        </Element>

        <Element name="community" className="element">
          <section className="space-y-4">
            <h2 className="text-black text-4xl px-10 mt-40">
              Community Events
            </h2>
            <CommunityCards />
          </section>
        </Element>

        <Element name="breakout" className="element">
          <section className="space-y-4">
            <h2 className="text-black text-4xl px-10 mt-40">Breakout Rooms </h2>
            <HostRooms />
          </section>
        </Element>
      </div>
    </Element>
  );
};

export default Rooms;
