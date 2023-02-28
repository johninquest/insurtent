import React from "react";
import packageJson from "../../package.json";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ color: "#BE3455" }}>
          Your one-stop shop for insurance content!
        </div>
        <div style={{ marginTop: "13rem", fontSize: "0.8rem" }}>
          v{packageJson.version}
        </div>
      </header>
    </div>
  );
};

export default Home;
