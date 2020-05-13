import React, { Component } from "react";
import "./App.css";
import Navbar from "./Nav/Navbar";
import Routes from "./routes/Routes";
import ModalManager from "./Modals/ModalManager";
import { CSSReset } from "@chakra-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalManager />
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
