import "./styles/App.scss";
import React from "react";
import ReactGA from "react-ga";
import Home from "./pages/Home";
// import NavBar from "./components/NavBar";
const TRACKING_ID = "G-3K3BR7ZQ9K";
ReactGA.initialize(TRACKING_ID);

function App() {
  // return <Home></Home>;
  return (
    <>
      {/*  <NavBar></NavBar> */}
      <Home></Home>
    </>
  );
}

export default App;
