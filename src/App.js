
import './App.css';
import AboutUs from './Components/AboutUsComp/AboutUs';
import CarouselHeader from './Components/CarouselComp/CarouselHeader';
import Navbar from './Components/NavbarComp/Navbar';
import WeAreUnique from './Components/uniqueComp/WeAreUnique';
import CurrentStatus from './Components/CurrentStatusComp/CurrentStatus';
import Footer from './Components/FooterComp/Footer';
import MobileSubscription from './Components/MobileSubsciptionsComp/MobileSubscription';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselHeader />
      <AboutUs />
      <WeAreUnique />
      <CurrentStatus />
      <MobileSubscription />
      <Footer />
    </div>
  );
}

export default App;
