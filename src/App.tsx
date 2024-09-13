import './App.css';
import NavBar from './components/NavBar';
import Final from './Final';
import LandingPage from './LandingPage';
import Rooms from './Rooms';

function App() {
  return (
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
      <div className="w-full h-px bg-gray-500 my-10" />

      <Final />
    </div>
  );
}

export default App;
