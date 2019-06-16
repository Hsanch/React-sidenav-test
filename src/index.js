import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.css";
import Sidenav from "./components/Sidenav";

function App() {
  const sidenavItems = ["Components", "Random Facts", "Sports"];
  return (
    <div className="App">
      <Sidenav items={sidenavItems} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
