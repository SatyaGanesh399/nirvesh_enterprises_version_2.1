import "./App.css";
import HomePage from "./Components/HomePage";
import ModalContext from './Contexts/ModalContext/SubscriptionModalContext';
import {useState} from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{openModal, setOpenModal}}>
    <div className="App">
      <HomePage />
    </div>
    </ModalContext.Provider>
  );
}

export default App;
