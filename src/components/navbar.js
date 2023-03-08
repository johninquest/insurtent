import * as React from "react";
// import { Link } from "react-router-dom";
// import Home from "../pages/Home";

export default function NavBar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a
          className="nav-link text-uppercase"
          href="https://johnapps.de"
          target="_blank"
          rel="noreferrer"
        >
          home
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link text-uppercase"
          href="https://johnapps.de"
          target="_blank"
          rel="noreferrer"
        >
          about
        </a>
      </li>
      <li className="nav-item text-uppercase">
        <a
          className="nav-link"
          href="https://johnapps.de"
          target="_blank"
          rel="noreferrer"
        >
          contact
        </a>
      </li>
      {/*  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li> */}
    </ul>
  );
}
