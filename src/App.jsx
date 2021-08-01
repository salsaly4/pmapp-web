import React from "react";
import Home from "./components/pages/Home/Home.jsx";
import "./app.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
