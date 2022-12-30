import "./App.css";
import HomePage from "./Components/HomePage";


import AppScrollToTopButton from "./ReusableComponents/AppScrollToTopButton";
import JobSearchPage from "./ScreenRoutes/JobSearchPage/JobSearchPage";
import Payment from './Components/MobileSubsciptionsComp/PaymentSection/Payment'

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Payment /> */}
    </div>
  );
}

export default App;
