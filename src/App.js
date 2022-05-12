import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MaterialUIComponents from "./views/MaterialUI/MaterialUIComponents";
import AntDesignComponents from "./views/AntDesign/AntDesignComponents";
import BootstrapComponents from "./views/Bootstrap/BootstrapComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div class="navbar-fixed">
            <ul id="nav-mobile" class="left hide-on-med-and-down">
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
                <div class="section">
                  <h1>React Libraries Toggler</h1>
                  <div class="row">
                    <div class="col s12 m4 l4">
                      <div class="card">
                        <div class="card-image">
                          <img src="images/mui.jpg" alt="mui" />
                        </div>
                        <div class="card-action">
                          <a
                            class="waves-effect waves-light btn teal lighten-4"
                            href="/mui"
                          >
                            Material UI
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col s12 m4 l4">
                      <div class="card">
                        <div class="card-image">
                          <img src="images/atd.jpg" alt="atd" />
                          <span class="card-title">Ant Design</span>
                        </div>
                        <div class="card-action">
                          <a
                            class="waves-effect waves-light btn teal lighten-4"
                            href="/ad"
                          >
                            Ant Design
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col s12 m4 l4">
                      <div class="card">
                        <div class="card-image">
                          <img src="images/bootstrap.jpg" alt="bs" />
                          <span class="card-title">Bootstrap</span>
                        </div>
                        <div class="card-action">
                          <a
                            class="waves-effect waves-light btn teal lighten-4"
                            href="/bs"
                          >
                            Bootstrap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
