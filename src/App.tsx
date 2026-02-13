import './App.css';
import NavBar from './components/NavBar';
import Final from './Final';
import LandingPage from './LandingPage';
import Rooms from './Rooms';
import Logo from './assets/grayscale_transparent_nobuffer.png';

function App() {
  return (
    <>
      <title>ATH | BlinkLabs</title>
      <meta
        name="description"
        content="Join Project Catalyst's After Townhall discussions on blockchain innovation and Cardano ecosystem."
      />
      <link rel="canonical" href="https://ath.blinklabs.io/" />

      <div className="min-h-screen font-custom">
        <NavBar />
        <div className="gradient-background">
          <div className="h-screen flex flex-col">
            <div className="flex-grow">
              <LandingPage />
            </div>
          </div>
        </div>
        <Rooms />
        <div className="flex items-center justify-center w-full py-8 px-8">
          <div className="w-full h-px bg-slate-200 flex-grow" />
          <img className="px-6 w-48 opacity-40" src={Logo} alt="Logo" />
          <div className="w-full h-px bg-slate-200 flex-grow" />
        </div>
        <Final />
      </div>
    </>
  );
}

export default App;
