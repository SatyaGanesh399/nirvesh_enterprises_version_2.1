
import './App.css';
import AboutUs from './Components/AboutUsComp/AboutUs';
import CarouselHeader from './Components/CarouselComp/CarouselHeader';
import Cubes from './Components/CubesComp/Cubes';
import Navbar from './Components/NavbarComp/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselHeader />
      <AboutUs />
      <Cubes />
    </div>
  );
}

export default App;
