import "./App.scss";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import packageJson from "../package.json";
const TRACKING_ID = "G-3K3BR7ZQ9K";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    document.title = "Insurtent | Insurance content aggregator";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>Your one-stop shop for insurance content!</div>
        <div style={{ marginTop: "13rem", fontSize: "0.8rem" }}>
          v{packageJson.version}
        </div>
      </header>
    </div>
  );
}

export default App;
