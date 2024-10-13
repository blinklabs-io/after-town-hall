import './App.css';
import NavBar from './components/NavBar';
import Final from './Final';
import LandingPage from './LandingPage';
import Rooms from './Rooms';
import Logo from './assets/grayscale_transparent_nobuffer.png';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://ath.blinklabs.io/" />
      </Helmet>
      <div className="min-h-screen font-custom ">
        <NavBar />
        <div className="gradient-background">
          <div className="h-screen flex flex-col ">
            <div className="flex-grow">
              <LandingPage />
            </div>
          </div>
        </div>
        <Rooms />
        <div className="flex items-center justify-center w-full mt-10">
          <div className="w-full h-px bg-gray-400 flex-grow" />
          <img className="px-4 text-gray-500 w-64" src={Logo}></img>
          <div className="w-full h-px bg-gray-400 flex-grow" />
        </div>

        <Final />
      </div>
    </div>
  );
}

export default App;
