import React, { useEffect } from "react";
import packageJson from "../../package.json";
import ReactGA from "react-ga";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  let currentYear = new Date().getFullYear();
  let openUrl = () => {
    window.open("https://www.johnapps.de", "_blank").focus();
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*  <div style={{ color: "#BE3455" }}>
          Your one-stop shop for insurance content!
        </div> */}
        <div
          style={{
            margin: "1rem auto 1rem auto",
            color: "#6667ab",
            fontWeight: "bold",
            letterSpacing: "0.1rem",
          }}
        >
          The history of insurance
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li
              style={{
                margin: "1rem auto auto auto",
                letterSpacing: "0.1rem",
              }}
            >
              {/*  <span>&copy;</span> */}
              <span>
                <a
                  href="https://www.investopedia.com/articles/08/history-of-insurance.asp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Investopedia
                </a>
              </span>
            </li>
            <li
              style={{ margin: "1rem auto auto auto", letterSpacing: "0.1rem" }}
            >
              {/*  <span>&copy;</span> */}
              <span>
                <a
                  href="https://en.wikipedia.org/wiki/History_of_insurance"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wikipedia
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "13rem", fontSize: "0.8rem" }}>
          v{packageJson.version}
        </div>
      </header>

      <div
        style={{
          margin: "1rem",
          fontSize: "0.5rem",
          color: "#6667ab",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={openUrl}
      >
        <span>&copy;</span>&nbsp;
        <span style={{ textTransform: "uppercase", letterSpacing: "0.05rem" }}>
          john apps
        </span>
        &nbsp;
        <span>{currentYear}</span>
      </div>
    </div>
  );
};

export default Home;
