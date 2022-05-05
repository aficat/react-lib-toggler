import logo from "./logo.svg";
import "./App.css";
import React from "react"; 
import {MaterialUIComponents} from "./views/MaterialUI/MaterialUIComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Material UI</button>
        <MaterialUIComponents/>
        <button>Ant Design</button>
        <button>React Bootstrap</button>
      </header>
    </div>
  );
}

export default App;
