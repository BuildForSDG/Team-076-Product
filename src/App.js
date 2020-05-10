import React from "react";
import "./App.css";
import Navbar from "./Nav/Navbar";
import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
