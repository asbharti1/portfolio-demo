import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import ResumeFull from "./resume";
function App(props) {
  const [name, setName] = useState("Sanjay Bharti");
  return (
    <div className="App">
      <div className="header">
        <a href="#default" className="logo">
          LOGO
        </a>
        <div className="header-right">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className="container">
        <div className="clickWrapper">
        <div className="click">
          {name}
        </div>
        </div>
      </div>
     
      <div>
        <ResumeFull/>
      </div>
    </div>
  );
}

export default App;
