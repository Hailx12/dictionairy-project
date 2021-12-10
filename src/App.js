import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo-alt.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a
            href="https://romantic-brattain-b00cbf.netlify.app/"
            rel="noreferrer"
          >
            Sohaily Kerpens
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Hailx12/dictionairy-project"
            rel="noreferrer"
          >
            open-Sourced
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}

export default App;
