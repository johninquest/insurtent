import "./App.scss";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Home from "./pages/Home";
const TRACKING_ID = "G-3K3BR7ZQ9K";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    document.title = "Insurtent | Insurance content aggregator";
  }, []);
  return <Home></Home>;
}

export default App;
