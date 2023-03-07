import "./App.scss";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Home from "./pages/Home";
import NavButtons from "./components/NavButtons";
const TRACKING_ID = "G-3K3BR7ZQ9K";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    document.title = "Insurtent | Your one-stop shop for insurance content";
  }, []);
  // return <Home></Home>;
  return (
    <div>
      <NavButtons></NavButtons>
      <Home></Home>
    </div>
  );
}

export default App;
