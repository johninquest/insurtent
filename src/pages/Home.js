import React, { useEffect } from "react";
import packageJson from "../../package.json";
import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
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
          <ul>
            <li
              style={{
                margin: "1rem auto auto auto",
                letterSpacing: "0.1rem",
              }}
            >
              {/*  <span>&copy;</span> */}
              <span>
                <a href="https://www.investopedia.com/articles/08/history-of-insurance.asp">
                  Investopedia
                </a>
              </span>
            </li>
            <li
              style={{ margin: "1rem auto auto auto", letterSpacing: "0.1rem" }}
            >
              {/*  <span>&copy;</span> */}
              <span>
                <a href="https://en.wikipedia.org/wiki/History_of_insurance">
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
    </div>
  );
};

export default Home;
