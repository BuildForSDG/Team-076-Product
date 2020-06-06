import React, { Component } from "react";
import "./App.css";
import Routes from "./routes/Routes";
import ModalManager from "./Modals/ModalManager";
import GridNav from "./Nav/GridNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalManager />
        <GridNav/>
        <Routes />
      </div>
    );
  }
}

export default App;
