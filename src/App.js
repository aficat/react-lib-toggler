import "./App.css";
import React from "react";
import MaterialUIComponents from "./views/MaterialUI/MaterialUIComponents";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AntDesignComponents from "./views/AntDesign/AntDesignComponents";
import BootstrapComponents from "./views/Bootstrap/BootstrapComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mui">Material UI</Link>
              </li>
              <li>
                <Link to="/ad">Ant Design</Link>
              </li>
              <li>
                <Link to="/bs">Bootstrap</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div class="section container">
                  <h1>React Libraries Toggler</h1>
                </div>
              }
            />
            <Route exact path="/mui" element={<MaterialUIComponents />} />
            <Route exact path="/ad" element={<AntDesignComponents />} />
            <Route exact path="/bs" element={<BootstrapComponents />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
