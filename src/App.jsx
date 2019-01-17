import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./config/routes";

import "./App.css";
import logo from "./assets/logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="logo" />
        </header>
        <main>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
