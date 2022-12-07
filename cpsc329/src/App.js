import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Footer from "./components/Footer";
import "./components/Footer.css";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container inner-container">
        <h1>The Cyber Agent</h1>
        <h3>
          Play as a secret agent with a mission to protect classified
          information using secure cyber strategies! The goal of our game is to
          introduce and encourage the use of internet safety measures for young
          adolescents starting to use the internet.{" "}
        </h3>
        <br></br>
        <div className="game-container">
          <iframe
            src={
              process.env.PUBLIC_URL +
              "/renpyGame/329Project-1.0-web/index.html"
            }
            name="The Cyber Agent"
            title="CyberAgent"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
          >
            <p>There seems to have been an issue loading the game!</p>
          </iframe>
          <p>The following resources were used to build </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
