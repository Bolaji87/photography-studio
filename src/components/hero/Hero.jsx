import React from "react";
import coverImg from "../../assets/slacrane/slacrane-1.jpg";

import "./hero.css";

function Hero() {
  return (
    <div id="hero">
      <div className="hero-display-text">
        <h1>Slacrane shot it</h1>
        <button>
          <a href="#">
            Book a Session <span>&rarr;</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
