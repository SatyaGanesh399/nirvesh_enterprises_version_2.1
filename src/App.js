import "./App.css";
import HomePage from "./Components/HomePage";
import WeAreUnique2 from "./Components/uniqueComp/WeAreUnique2";
import AppScrollToTopButton from "./ReusableComponents/AppScrollToTopButton";

function App() {
  return (
    <div className="App">
      <HomePage />
      <AppScrollToTopButton />
    </div>
  );
}

export default App;
