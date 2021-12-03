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
        <footer className="text-center">Coded by Sohaily Kerpens</footer>
      </div>
    </div>
  );
}

export default App;
