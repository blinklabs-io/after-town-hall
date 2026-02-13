import CommunityCards from './components/CommunityCards';
import HostRooms from './components/HostRooms';
import TownhallCards from './components/TownhallCards';
import { Element } from 'react-scroll';

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
      {title}
    </h2>
    <p className="text-slate-500 text-sm sm:text-base">{subtitle}</p>
  </div>
);

const Rooms = () => {
  return (
    <Element name="home" className="element">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <Element name="global" className="element">
          <section className="pt-8 pb-16">
            <SectionHeading
              title="Global Townhalls"
              subtitle="Join the official Catalyst townhall sessions around the world"
            />
            <TownhallCards />
          </section>
        </Element>

        <div className="border-t border-slate-200" />

        <Element name="community" className="element">
          <section className="pt-16 pb-16">
            <SectionHeading
              title="Community Events"
              subtitle="Recurring events and discussions hosted by community members"
            />
            <CommunityCards />
          </section>
        </Element>

        <div className="border-t border-slate-200" />

        <Element name="breakout" className="element">
          <section className="pt-16 pb-16">
            <SectionHeading
              title="Breakout Rooms"
              subtitle="Discussion rooms open during After Townhall sessions"
            />
            <HostRooms />
          </section>
        </Element>
      </div>
    </Element>
  );
};

export default Rooms;
