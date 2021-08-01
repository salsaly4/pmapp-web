import React from "react";
import Home from "./components/pages/Home/Home";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">FPM</div>
          <div className="navbar__menu">
            <a className="navbar__menuitem" href="#login">
              Login
            </a>
            <div className="navbar__menusep">|</div>
            <a className="navbar__menuitem" href="#register">
              Register
            </a>
          </div>
        </div>
        <Home />
        <hr className="footer_divider" />
        <div className="footer">
          <div className="copyright">&copy; 2021 Flexoprom LLC</div>
        </div>
      </div>
    </div>
  );
}

export default App;
