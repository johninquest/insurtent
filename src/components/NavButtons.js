import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
/* import { Link } from "react-router-dom"; */
/* import Home from "../pages/Home";
import About from "../pages/About"; */

export default function NavButtons() {
  return (
    <div style={{ textAlign: "center", margin: "3rem auto auto auto" }}>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            console.log("Tapped home button!");
          }}
        >
          Home
        </Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </ButtonGroup>
    </div>
  );
}
