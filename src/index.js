import React from "react";
import ReactDOM from "react-dom";

const fName = "David";
const lName = "Bruh";
const luckyNum = 23;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>
      Your lucky number is {luckyNum}, not {Math.floor(Math.random() * 10)}
    </p>
  </div>,
  document.getElementById("root")
);
