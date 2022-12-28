import "./App.css";
import HomePage from "./Components/HomePage";


import AppScrollToTopButton from "./ReusableComponents/AppScrollToTopButton";
import JobSearchPage from "./ScreenRoutes/JobSearchPage/JobSearchPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <JobSearchPage /> */}
    </div>
  );
}

export default App;
