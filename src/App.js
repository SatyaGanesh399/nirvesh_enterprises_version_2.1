
import './App.css';
import AboutUs from './Components/AboutUsComp/AboutUs';
import CarouselHeader from './Components/CarouselComp/CarouselHeader';
import Navbar from './Components/NavbarComp/Navbar';
import WeAreUnique from './Components/uniqueComp/WeAreUnique';
import CurrentStatus from './Components/CurrentStatusComp/CurrentStatus';
import Footer from './Components/FooterComp/Footer';
import MobileSubscription from './Components/MobileSubsciptionsComp/MobileSubscription';
import ContactOurExperts from './Components/ExpertContactComp/ContactOurExperts.js';
import Achieved from './Components/AchievedSoFar/Achieved';



function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselHeader />
      <AboutUs />
      <WeAreUnique />
      <CurrentStatus />
      <Achieved />
      <MobileSubscription />
      <ContactOurExperts />
      <Footer />
    </div>
  );
}

export default App;
