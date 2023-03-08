import React, { useEffect } from "react";
import ReactGA from "react-ga";

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div style={{ textAlign: "center", fontSize: "3rem" }}>About page</div>
  );
};
export default About;
